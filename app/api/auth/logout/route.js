import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Since we're using JWT tokens stored in localStorage on the client side,
    // logout is primarily handled on the frontend by removing the token.
    // However, we can add server-side logic here if needed (like blacklisting tokens)
    
    return NextResponse.json({
      message: 'Logged out successfully'
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    )
  }
}