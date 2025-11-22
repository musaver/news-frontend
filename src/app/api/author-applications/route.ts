import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { pendingAuthors } from '@/lib/schema';
import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';

// POST /api/author-applications - Create a new author application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, designation, bio, address } = body;

    // Validate required fields
    if (!fullName || !email || !designation || !bio || !address) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (fullName.trim().length === 0 || fullName.length > 255) {
      return NextResponse.json(
        { success: false, error: 'Full name must be between 1 and 255 characters.' },
        { status: 400 }
      );
    }

    if (email.length > 255) {
      return NextResponse.json(
        { success: false, error: 'Email must not exceed 255 characters.' },
        { status: 400 }
      );
    }

    if (designation.trim().length === 0 || designation.length > 255) {
      return NextResponse.json(
        { success: false, error: 'Designation must be between 1 and 255 characters.' },
        { status: 400 }
      );
    }

    if (bio.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Bio cannot be empty.' },
        { status: 400 }
      );
    }

    if (address.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Address cannot be empty.' },
        { status: 400 }
      );
    }

    // Check if email already has a pending application
    const existingApplication = await db
      .select()
      .from(pendingAuthors)
      .where(eq(pendingAuthors.email, email))
      .limit(1);

    if (existingApplication.length > 0) {
      const application = existingApplication[0];
      if (application.status === 'pending') {
        return NextResponse.json(
          {
            success: false,
            error: 'An application with this email is already pending review.'
          },
          { status: 409 }
        );
      } else if (application.status === 'approved') {
        return NextResponse.json(
          {
            success: false,
            error: 'This email has already been approved as an author.'
          },
          { status: 409 }
        );
      }
      // If rejected, allow resubmission
    }

    // Create author application
    const applicationId = randomUUID();
    await db.insert(pendingAuthors).values({
      id: applicationId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      designation: designation.trim(),
      bio: bio.trim(),
      address: address.trim(),
      status: 'pending',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been submitted successfully! We will review it and get back to you soon.',
        applicationId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating author application:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

// GET /api/author-applications - Get all author applications (admin only)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let query = db.select().from(pendingAuthors);

    // Filter by status if provided
    if (status && ['pending', 'approved', 'rejected'].includes(status)) {
      query = query.where(eq(pendingAuthors.status, status)) as typeof query;
    }

    const applications = await query;

    return NextResponse.json({
      success: true,
      applications,
      count: applications.length,
    });
  } catch (error) {
    console.error('Error fetching author applications:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications.' },
      { status: 500 }
    );
  }
}
