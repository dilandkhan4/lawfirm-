import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/middleware'

// GET - Fetch appointments for the current client
export async function GET(request) {
  try {
    const user = await getCurrentUser(request)
    
    if (!user || user.role !== 'client') {
      return NextResponse.json(
        { error: 'Unauthorized - Client access required' },
        { status: 401 }
      )
    }

    // Find client by email (since clients don't have user accounts in the User table)
    const client = await prisma.client.findUnique({
      where: { email: user.email }
    })

    if (!client) {
      return NextResponse.json(
        { error: 'Client profile not found' },
        { status: 404 }
      )
    }

    const appointments = await prisma.appointment.findMany({
      where: { clientId: client.id },
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
    console.error('Error fetching client appointments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    )
  }
}