import { NextResponse } from 'next/server'
import { requireAdminOrLawyerOnly, getCurrentUser } from '@/lib/middleware'
import { prisma } from '@/lib/prisma'

export async function POST(request, { params }) {
    const { id } = params;
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
        const body = await request.json();
        const { message, dueDate, concerned } = body;

        // Basic validation (optional)
        if (!message || !dueDate || !concerned) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
            });
        }

        const reminder = await prisma.reminder.create({
            data: {
                caseId: parseInt(id),
                message,
                dueDate: new Date(dueDate),
                concerned,
            },
            include: {
                case: true
            }
        });

        return new Response(JSON.stringify(reminder), { status: 201 });
    } catch (error) {
        console.error('Error creating reminder:', error);
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}

export async function GET(request, { params }) {
    console.log("Fetching reminders for case ID");
    const { id } = params;
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

        const reminders = await prisma.reminder.findMany({
            where: {
                caseId: parseInt(id)
            },
            include: {
                case: true
            }
        });

        return NextResponse.json(reminders, { status: 200 });
    }catch (error) {
        console.error('Error fetching reminders:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}