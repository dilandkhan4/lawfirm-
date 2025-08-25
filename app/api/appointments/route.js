import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminOrLawyer } from '@/lib/middleware'

// GET - Fetch all appointments (Admin and Lawyers only)
export async function GET(request) {
  // Check authentication for viewing all appointments
  const authError = await requireAdminOrLawyer(request)
  if (authError) return authError

  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        client: true,
        lawyer: {
          include: {
            user: true
          }
        },
      },
      orderBy: {
        date: 'desc'
      }
    })
    
    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    )
  }
}

// POST - Create new appointment
export async function POST(request) {
  try {
    const body = await request.json()
    const { clientName, clientEmail, clientPhone, date, reason, lawyerId } = body

    // Validate required fields
    if (!clientName || !clientEmail || !date) {
      return NextResponse.json(
        { error: 'Missing required fields: clientName, clientEmail, and date are required' },
        { status: 400 }
      )
    }

    // Check if client exists, if not create one
    let client = await prisma.client.findUnique({
      where: { email: clientEmail }
    })

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: clientName,
          email: clientEmail,
          phone: clientPhone || null,
        }
      })
    }

    // Get a default lawyer if none specified
    let assignedLawyerId = lawyerId
    if (!assignedLawyerId) {
      const defaultLawyer = await prisma.lawyer.findFirst()
      if (!defaultLawyer) {
        return NextResponse.json(
          { error: 'No lawyers available. Please contact admin.' },
          { status: 400 }
        )
      }
      assignedLawyerId = defaultLawyer.id
    }

    // Create the appointment
    const appointment = await prisma.appointment.create({
      data: {
        clientId: client.id,
        lawyerId: assignedLawyerId,
        date: new Date(date),
        reason: reason || null,
        status: 'pending'
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

    return NextResponse.json(
      { 
        message: 'Appointment created successfully',
        appointment 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    )
  }
}