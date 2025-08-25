import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminOrLawyer, requireAdmin } from '@/lib/middleware'

// PATCH - Update appointment status
export async function PATCH(request, { params }) {
  // Check authentication and authorization (admin only)
  const authError = await requireAdmin(request)
  if (authError) return authError

  try {
    const { id } = params
    const { status } = await request.json()

    // Validate status
    const validStatuses = ['pending', 'approved', 'cancelled']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be pending, approved, or cancelled' },
        { status: 400 }
      )
    }

    // Update appointment
    const appointment = await prisma.appointment.update({
      where: { id: parseInt(id) },
      data: { status },
      include: {
        client: true,
        lawyer: {
          include: {
            user: true
          }
        }
      }
    })

    return NextResponse.json({
      message: 'Appointment status updated successfully',
      appointment
    })

  } catch (error) {
    console.error('Error updating appointment:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to update appointment' },
      { status: 500 }
    )
  }
}

// GET - Get specific appointment
export async function GET(request, { params }) {
  // Check authentication (admin or lawyer only)
  const authError = await requireAdminOrLawyerOnly(request)
  if (authError) return authError

  try {
    const { id } = params

    const appointment = await prisma.appointment.findUnique({
      where: { id: parseInt(id) },
      include: {
        client: true,
        lawyer: {
          include: {
            user: true
          }
        }
      }
    })

    if (!appointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(appointment)

  } catch (error) {
    console.error('Error fetching appointment:', error)
    return NextResponse.json(
      { error: 'Failed to fetch appointment' },
      { status: 500 }
    )
  }
}

// DELETE - Delete appointment
export async function DELETE(request, { params }) {
  // Check authentication (admin only for deletion)
  const authError = await requireAdmin(request)
  if (authError) return authError

  try {
    const { id } = params

    await prisma.appointment.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json({
      message: 'Appointment deleted successfully'
    })

  } catch (error) {
    console.error('Error deleting appointment:', error)
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to delete appointment' },
      { status: 500 }
    )
  }
}