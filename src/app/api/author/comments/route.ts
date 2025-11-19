import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articles, comments, user } from '@/lib/schema';
import { eq, desc, and, isNull } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Check if user is an author
    if (session.user.userType !== 'author') {
      return NextResponse.json(
        { error: 'Forbidden. Only authors can view these comments.' },
        { status: 403 }
      );
    }

    const authorId = session.user.id;

    // Get all comments on author's articles (only top-level comments, not replies)
    const authorComments = await db
      .select({
        id: comments.id,
        content: comments.content,
        createdAt: comments.createdAt,
        articleId: comments.articleId,
        articleTitle: articles.title,
        userName: user.name,
        userImage: user.image,
        userId: user.id,
      })
      .from(comments)
      .innerJoin(articles, eq(comments.articleId, articles.id))
      .innerJoin(user, eq(comments.userId, user.id))
      .where(
        and(
          eq(articles.authorId, authorId),
          isNull(comments.parentId) // Only get top-level comments
        )
      )
      .orderBy(desc(comments.createdAt));

    return NextResponse.json(
      {
        success: true,
        comments: authorComments,
        totalComments: authorComments.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching author comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}
