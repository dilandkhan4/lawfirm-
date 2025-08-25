import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/middleware'

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

    console.log("clientid: ", client.id)
     const cases = await prisma.case.findMany({
      where: {clientId: client.id},
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
    console.log("cases: ", cases)
    return NextResponse.json(cases)
  } catch (error) {
    console.error('Error fetching client cases:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cases' },
      { status: 500 }
    )
  }
}