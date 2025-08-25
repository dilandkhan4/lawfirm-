import { NextResponse } from 'next/server'
import { requireAdminOrLawyerOnly, getCurrentUser } from '@/lib/middleware'
import { prisma } from '@/lib/prisma'

export async function POST(request, { params }) {
    const { id } = params;
    console.log("getting here");
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
        const { message, dueDate, priority, assignedTo } = body;

        // Basic validation (optional)
        if (!message || !dueDate || !priority || !assignedTo) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
            });
        }
        // get the user name of the assignedTo user

        console.log("Assigned To: ", assignedTo);
        const assignedLawyer = await prisma.lawyer.findUnique({
            where: { id: parseInt(assignedTo) },
            include: {
                user: true
            }
        });

        if (!assignedLawyer) {
            return new Response(JSON.stringify({ error: 'Assigned lawyer not found' }), {
                status: 404,
            });
        }

        console.log("Assigned Lawyer: ", assignedLawyer);

        const todo = await prisma.caseUpdate.create({
            data: {
                caseId: parseInt(id),
                message,
                dueDate: new Date(dueDate),
                priority: priority.toUpperCase(),
                assignedTo: parseInt(assignedTo),
                lawyerName: assignedLawyer.user.name
            },
            include: {
                lawyer: {
                    include: {
                        user: true
                    }
                }
            }
        });

        return new Response(JSON.stringify(todo), { status: 201 });
    } catch (error) {
        console.error('Error creating todo:', error);
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}

export async function GET(request) {
    let userId = request.headers.get('Lawyer-id');
    if (!userId) {
        return NextResponse.json({ error: 'Lawyer ID not provided' }, { status: 400 });
    }
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

        const userInfo = await prisma.user.findUnique({
            where: { id: parseInt(userId)},
        })

        if (!userInfo) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        console.log('User Info:', userInfo);
        return NextResponse.json(userInfo, { status: 200 });
    }catch (error) {
        console.error('Error fetching user info:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}