import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword, generateToken } from '@/lib/auth'

export async function POST(request) {
  try {
    const { email, password, userType } = await request.json()
    
    // Validate required fields
    if (!email || !password || !userType) {
      return NextResponse.json(
        { error: 'Email, password, and user type are required' },
        { status: 400 }
      )
    }

    let user = null

    if (userType === 'client') {
      // For clients, we use a different approach - they login with personal info
      // This is handled separately in the client login route
      return NextResponse.json(
        { error: 'Clients should use the client login endpoint' },
        { status: 400 }
      )
    } else {
      // For admin, lawyers, and staff
      user = await prisma.user.findUnique({
        where: { email },
        include: {
          lawyer: true
        }
      })
      
      // if (!user) {
      //   return NextResponse.json(
      //     { error: 'Invalid credentials' },
      //     { status: 401 }
      //   )
      // }

      // Verify password
      // const isValidPassword = await verifyPassword(password, user.password)
      // if (!isValidPassword) {
      //   return NextResponse.json(
      //     { error: 'Invalid credentials' },
      //     { status: 401 }
      //   )
      // }

      // Check if user type matches
      if (user.role !== userType) {
        return NextResponse.json(
          { error: 'Invalid user type' },
          { status: 401 }
        )
      }
    }

    // Generate JWT token
    const token = generateToken({
      id: user?.lawyer?.id || user.id, // instead of the user id, i am keeping that of the lawyer.
      email: user.email,
      role: user.role,
      name: user.name,
      lawyerId: user.lawyer?.id || null
    })

    // Return user data and token
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      lawyerId: user.lawyer?.id || null
    }

    return NextResponse.json({
      message: 'Login successful',
      user: userData,
      token
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}