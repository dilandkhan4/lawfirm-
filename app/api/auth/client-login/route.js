import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateToken } from '@/lib/auth'

export async function POST(request) {
  try {
    const { name, email, phone } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if client exists, if not create one
    let client = await prisma.client.findUnique({
      where: { email }
    })

    if (!client) {
      // Create new client
      client = await prisma.client.create({
        data: {
          name,
          email,
          phone: phone || null
        }
      })
    } else {
      // Update existing client info if provided
      const updateData = {}
      if (name !== client.name) updateData.name = name
      if (phone && phone !== client.phone) updateData.phone = phone

      if (Object.keys(updateData).length > 0) {
        client = await prisma.client.update({
          where: { id: client.id },
          data: updateData
        })
      }
    }

    // Generate JWT token for client
    const token = generateToken({
      id: client.id,
      email: client.email,
      role: 'client',
      name: client.name,
      clientId: client.id
    })

    // Return client data and token
    const clientData = {
      id: client.id,
      name: client.name,
      email: client.email,
      phone: client.phone,
      role: 'client'
    }

    return NextResponse.json({
      message: 'Client login successful',
      user: clientData,
      token
    })

  } catch (error) {
    console.error('Client login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}