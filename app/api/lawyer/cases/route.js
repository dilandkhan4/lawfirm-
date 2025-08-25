import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminOrLawyerOnly, getCurrentUser } from '@/lib/middleware'

// GET - Fetch cases for the current lawyer
export async function GET(request) {
  // Check authentication (admin or lawyer only)
  const authError = await requireAdminOrLawyerOnly(request)
  if (authError) return authError
console.log("Instead here")
  try {
    const user = await getCurrentUser(request)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Get lawyer ID from user
    let lawyerId = user.id

    // If user is admin, they can see all cases
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

    const cases = await prisma.case.findMany({
      where: whereClause,
      include: {
        client: true,
        lawyer: {
          include: {
            user: true
          }
        },
        updates: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 5 // Get latest 5 updates
        },
        documents: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(cases)
  } catch (error) {
    console.error('Error fetching lawyer cases:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cases' },
      { status: 500 }
    )
  }
}

// POST - Create a new case
export async function POST(request) {
  // Check authentication (admin or lawyer only)
  console.log("under here")
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
    const lawyerId = user.role === 'lawyer' ? user.id : null

    console.log("lid! ", lawyerId);
    const data = await request.json()
    const { caseTitle, caseType, notes, clientName, clientEmail, caseStatus } = data

    // get clients info (id)

    const client = await prisma.client.findUnique({
      where: { email: clientEmail }
    })

    if (!caseTitle || !caseType || !notes || !clientName || !clientEmail || !caseStatus) {
      return NextResponse.json(
        { error: 'Title, description, and client ID are required' },
        { status: 400 }
      )
    }

    const newCase = await prisma.case.create({
      data: {
        title: caseTitle,
        description: notes,
        clientId: parseInt(client.id),
        lawyerId: parseInt(lawyerId),
        status: caseStatus
      },
      include: {
        client: true,            
        lawyer: {
          include: {
            user: true
          }
        }
      }
    })

    return NextResponse.json(newCase, { status: 201 })
  } catch (error) {
    console.error('Error creating case:', error)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Case with this title already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create case' },
      { status: 500 }
    )
  }
}