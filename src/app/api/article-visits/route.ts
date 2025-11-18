import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articleVisits, articles } from '@/lib/schema';
import { v4 as uuidv4 } from 'uuid';
import { eq } from 'drizzle-orm';

// POST: Record an article visit
export async function POST(req: Request) {
  try {
    // Get the session to check if user is authenticated (optional)
    const session = await getServerSession(authOptions);

    const body = await req.json();
    const { articleId } = body;

    // Validate required fields
    if (!articleId) {
      return NextResponse.json(
        { error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    // Check if article exists
    const articleExists = await db
      .select()
      .from(articles)
      .where(eq(articles.id, articleId))
      .limit(1);

    if (articleExists.length === 0) {
      return NextResponse.json(
        { error: 'Article not found.' },
        { status: 404 }
      );
    }

    // Get IP address from headers
    const forwarded = req.headers.get('x-forwarded-for');
    const ipAddress = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';

    // Get User Agent
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Record the visit
    const visitId = uuidv4();
    await db.insert(articleVisits).values({
      id: visitId,
      articleId,
      userId: session?.user?.id || null, // Record user ID if logged in, null otherwise
      visitedAt: new Date(),
      ipAddress,
      userAgent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Visit recorded successfully.',
        visitId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error recording article visit:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
