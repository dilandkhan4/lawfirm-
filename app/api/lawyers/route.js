import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Fetch all lawyers
export async function GET(request) {
  try {
    const lawyers = await prisma.lawyer.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        }
      },
      orderBy: {
        user: {
          name: 'asc'
        }
      }
    })
    
    return NextResponse.json(lawyers)
  } catch (error) {
    console.error('Error fetching lawyers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lawyers' },
      { status: 500 }
    )
  }
}