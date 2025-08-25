import prisma from '../../../lib/prisma';
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getTokenFromRequest, getUserFromToken } from '../../../lib/auth';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).end();
  const token = getTokenFromRequest(req);
  const user = token ? await getUserFromToken(token) : null;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing file id' });

  // Find the document
  const doc = await prisma.document.findUnique({ where: { id: parseInt(id) } });
  if (!doc) return res.status(404).json({ error: 'File not found' });

  // Only allow owner or admin/lawyer
  if (user.role !== 'admin' && user.role !== 'lawyer' && doc.userId !== user.id) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Delete from S3
  const s3Key = doc.url.split('.amazonaws.com/')[1];
  await s3.send(new DeleteObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: s3Key,
  }));

  // Delete from DB
  await prisma.document.delete({ where: { id: doc.id } });
  // Audit log
  await prisma.auditLog.create({
    data: {
      userId: user.id,
      action: 'delete',
      fileId: doc.id,
      caseId: doc.caseId || null,
      details: `Deleted file: ${doc.title}`,
    },
  });
  // Notification
  await prisma.notification.create({
    data: {
      userId: user.id,
      message: `File deleted: ${doc.title}`,
    },
  });
  res.status(200).json({ success: true });
}
