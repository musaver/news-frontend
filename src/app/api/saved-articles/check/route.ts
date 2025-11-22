import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { savedArticles } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

// GET: Check if a specific article is saved by the logged-in user
export async function GET(req: Request) {
  try {
    // Get the session to check if user is authenticated
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { isSaved: false },
        { status: 200 }
      );
    }

    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get('articleId');

    // Validate required fields
    if (!articleId) {
      return NextResponse.json(
        { error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    // Check if article is saved (lightweight query - only checks existence)
    const result = await db
      .select({ id: savedArticles.id })
      .from(savedArticles)
      .where(
        and(
          eq(savedArticles.userId, session.user.id),
          eq(savedArticles.articleId, articleId)
        )
      )
      .limit(1);

    return NextResponse.json(
      {
        success: true,
        isSaved: result.length > 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error checking saved status:', error);
    return NextResponse.json(
      { error: 'Internal server error.', isSaved: false },
      { status: 500 }
    );
  }
}
