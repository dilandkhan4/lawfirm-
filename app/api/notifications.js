import { getTokenFromRequest, getUserFromToken } from '../../lib/auth';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const token = getTokenFromRequest(req);
  const user = token ? await getUserFromToken(token) : null;
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const notifications = await prisma.notification.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    take: 20,
  });
  res.status(200).json(notifications);
}
