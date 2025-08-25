import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminOrLawyerOnly, getCurrentUser } from '@/lib/middleware'

// GET - Fetch appointments for the current lawyer
export async function GET(request) {
  // Check authentication (admin or lawyer only)
  const authError = await requireAdminOrLawyerOnly(request)
  if (authError) return authError

  try {
    const user = await getCurrentUser(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Get lawyer ID from user
    let lawyerId = user.lawyerId

    // If user is admin, they can see all appointments
    let whereClause = {}
    if (user.role === 'lawyer') {
      if (!lawyerId) {
        // Find lawyer record for this user
        const lawyer = await prisma.lawyer.findUnique({
          where: { userId: user.id }
        })
        if (!lawyer) {
          return NextResponse.json(
            { error: 'Lawyer profile not found' },
            { status: 404 }
          )
        }
        lawyerId = lawyer.id
      }
      whereClause.lawyerId = lawyerId
    }

    const appointments = await prisma.appointment.findMany({
      where: whereClause,
      include: {
        client: true,
        lawyer: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        date: 'desc'
      }
    })
    
    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching lawyer appointments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    )
  }
}