
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import prisma from '../../../lib/prisma';
import { getTokenFromRequest, getUserFromToken } from '../../../lib/auth';

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {

  if (req.method !== 'POST') return res.status(405).end();
  // Auth check
  const token = getTokenFromRequest(req);
  const user = token ? await getUserFromToken(token) : null;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  // Parse form data
  const busboy = require('busboy');
  const bb = busboy({ headers: req.headers });
  let fileBuffer = Buffer.alloc(0);
  let fileName = '';
  let caseId = null;
  let userId = null;

  bb.on('file', (name, file, info) => {
    fileName = info.filename;
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
    let fileSize = 0;
    let fileType = info.mimeType || '';
    if (!allowedTypes.includes(fileType)) {
      file.resume();
      return res.status(400).json({ error: 'Invalid file type.' });
    }
    file.on('data', (data) => {
      fileBuffer = Buffer.concat([fileBuffer, data]);
      fileSize += data.length;
      if (fileSize > 10 * 1024 * 1024) { // 10MB
        file.resume();
        return res.status(400).json({ error: 'File too large (max 10MB).' });
      }
    });
  });
  bb.on('field', (name, val) => {
    if (name === 'caseId') caseId = parseInt(val);
    if (name === 'userId') userId = parseInt(val);
  });
  bb.on('finish', async () => {
    const s3Key = `client-files/${Date.now()}-${fileName}`;
    await s3.send(new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: s3Key,
      Body: fileBuffer,
      ContentType: 'application/octet-stream',
    }));
    const url = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
    // Save metadata in DB
    const doc = await prisma.document.create({
      data: {
        caseId,
        title: fileName,
        url,
        userId: user.id,
      },
    });
    // Audit log
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'upload',
        fileId: doc.id,
        caseId: caseId || null,
        details: `Uploaded file: ${fileName}`,
      },
    });
    // Notification (to self, or to lawyer/admin if needed)
    await prisma.notification.create({
      data: {
        userId: user.id,
        message: `File uploaded: ${fileName}`,
      },
    });
    res.status(200).json({ url });
  });
  req.pipe(bb);
}
