import { NextResponse } from 'next/server'
import { requireAdminOrLawyerOnly, getCurrentUser } from '@/lib/middleware'
import { prisma } from '@/lib/prisma'
// GET - single case.
export async function GET(request, { params }) {
  const { id } = params;

  const authError = await requireAdminOrLawyerOnly(request)
 

  try {
    const user = await getCurrentUser(request)
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }
 if (authError && user.role != "client") return authError
 
    const lawyerId = user.role === 'lawyer' ? user.id : null

    const caseData = await prisma.case.findUnique({
      where: { id: parseInt(id) },
      include: {
        client: true,
        lawyer: {
          include: {
            user: true,
          },
        },
        updates: {
          include: {
            lawyer: true
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!caseData) {
      return NextResponse.json({ message: 'Case not found' }, { status: 404 });
    }
    
    return NextResponse.json(caseData, { status: 200 });
  } catch (err) {
    console.error('Error fetching case:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
