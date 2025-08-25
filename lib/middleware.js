import { NextResponse } from 'next/server'
import { getTokenFromRequest, getUserFromToken } from './auth'

// Middleware to protect routes and check authentication
export async function authMiddleware(request, requiredRoles = []) {
  try {
    const token = getTokenFromRequest(request)
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const user = await getUserFromToken(token)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    // Check if user has required role
    if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    // Add user to request for use in route handlers
    request.user = user
    return null // No error, continue to route handler
    
  } catch (error) {
    console.error('Auth middleware error:', error)
    return NextResponse.json(
      { error: 'Authentication error' },
      { status: 500 }
    )
  }
}

// Helper function to check if user is admin
export function requireAdmin(request) {
  return authMiddleware(request, ['admin'])
}

// Helper function to check if user is admin or lawyer (not staff)
export function requireAdminOrLawyerOnly(request) {
  return authMiddleware(request, ['admin', 'lawyer'])
}

// Helper function to check if user is admin, lawyer, or staff
export function requireAdminOrLawyer(request) {
  return authMiddleware(request, ['admin', 'lawyer', 'staff'])
}

// Helper function to check if user is authenticated (any role)
export function requireAuth(request) {
  return authMiddleware(request, [])
}

// Helper function to get current user from request
export async function getCurrentUser(request) {
  const token = getTokenFromRequest(request)
  if (!token) return null
  
  return await getUserFromToken(token)
}