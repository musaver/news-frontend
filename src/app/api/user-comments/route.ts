import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { comments, articles } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';

// GET /api/user-comments - Get all comments by the current user
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Fetch all comments by the user with article information
    const userComments = await db
      .select({
        id: comments.id,
        articleId: comments.articleId,
        articleTitle: articles.title,
        content: comments.content,
        createdAt: comments.createdAt,
      })
      .from(comments)
      .leftJoin(articles, eq(comments.articleId, articles.id))
      .where(eq(comments.userId, userId))
      .orderBy(desc(comments.createdAt));

    return NextResponse.json({
      success: true,
      totalComments: userComments.length,
      comments: userComments,
    });
  } catch (error) {
    console.error('Error fetching user comments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments.' },
      { status: 500 }
    );
  }
}
