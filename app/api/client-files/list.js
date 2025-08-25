
import prisma from '../../../lib/prisma';
import { getTokenFromRequest, getUserFromToken } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  // Auth check
  const token = getTokenFromRequest(req);
  const user = token ? await getUserFromToken(token) : null;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  // Optionally filter by caseId
  const { caseId } = req.query;
  const where = {};
  if (caseId) where.caseId = parseInt(caseId);

  // Only show files for this user (or all if admin/lawyer)
  if (user.role === 'admin' || user.role === 'lawyer') {
    // Show all files for their cases (advanced: filter by assigned cases)
  } else {
    where.userId = user.id;
  }

  const files = await prisma.document.findMany({
    where,
    orderBy: { uploadedAt: 'desc' },
  });
  res.status(200).json(files);
}
