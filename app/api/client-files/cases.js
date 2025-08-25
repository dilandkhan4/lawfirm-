import { getTokenFromRequest, getUserFromToken } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const token = getTokenFromRequest(req);
  const user = token ? await getUserFromToken(token) : null;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  // For lawyers/admins: show all cases; for clients: only their cases
  let cases = [];
  if (user.role === 'admin' || user.role === 'lawyer') {
    cases = await prisma.case.findMany({ orderBy: { createdAt: 'desc' } });
  } else {
    cases = await prisma.case.findMany({ where: { clientId: user.id }, orderBy: { createdAt: 'desc' } });
  }
  res.status(200).json(cases);
}
