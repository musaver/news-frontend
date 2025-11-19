import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { user } from '@/lib/schema';
import { eq } from 'drizzle-orm';

// GET - Fetch user preferences
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Fetch user data from database
    const userData = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        userType: user.userType,
        bio: user.bio,
        authorDesignation: user.authorDesignation,
        emailNotifications: user.emailNotifications,
        authorNotifications: user.authorNotifications,
        weeklyNewsletter: user.weeklyNewsletter,
        commentReplies: user.commentReplies,
        darkMode: user.darkMode,
      })
      .from(user)
      .where(eq(user.email, session.user.email))
      .limit(1);

    if (!userData || userData.length === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        user: userData[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching user preferences:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user preferences' },
      { status: 500 }
    );
  }
}

// PUT - Update user preferences
export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      name,
      image,
      bio,
      authorDesignation,
      emailNotifications,
      authorNotifications,
      weeklyNewsletter,
      commentReplies,
      darkMode,
    } = body;

    // Build update object with only provided fields
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (image !== undefined) updateData.image = image;
    if (bio !== undefined) updateData.bio = bio;
    if (authorDesignation !== undefined) updateData.authorDesignation = authorDesignation;
    if (emailNotifications !== undefined) updateData.emailNotifications = emailNotifications;
    if (authorNotifications !== undefined) updateData.authorNotifications = authorNotifications;
    if (weeklyNewsletter !== undefined) updateData.weeklyNewsletter = weeklyNewsletter;
    if (commentReplies !== undefined) updateData.commentReplies = commentReplies;
    if (darkMode !== undefined) updateData.darkMode = darkMode;

    // Update user in database
    await db
      .update(user)
      .set(updateData)
      .where(eq(user.email, session.user.email));

    // Fetch updated user data
    const updatedUser = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        userType: user.userType,
        bio: user.bio,
        authorDesignation: user.authorDesignation,
        emailNotifications: user.emailNotifications,
        authorNotifications: user.authorNotifications,
        weeklyNewsletter: user.weeklyNewsletter,
        commentReplies: user.commentReplies,
        darkMode: user.darkMode,
      })
      .from(user)
      .where(eq(user.email, session.user.email))
      .limit(1);

    return NextResponse.json(
      {
        success: true,
        message: 'Preferences updated successfully',
        user: updatedUser[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating user preferences:', error);
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 }
    );
  }
}
