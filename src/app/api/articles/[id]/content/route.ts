import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, savedArticles, comments } from '@/lib/schema';
import { eq, and, count } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);

    // Fetch article content
    const articleResult = await db
      .select({
        content: articles.content,
      })
      .from(articles)
      .where(and(eq(articles.id, id), eq(articles.status, 'published')))
      .limit(1);

    if (articleResult.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    // Fetch saved status
    let isSaved = false;
    if (session?.user?.id) {
      const savedResult = await db
        .select({ id: savedArticles.id })
        .from(savedArticles)
        .where(
          and(
            eq(savedArticles.userId, session.user.id),
            eq(savedArticles.articleId, id)
          )
        )
        .limit(1);
      isSaved = savedResult.length > 0;
    }

    // Fetch comments count
    const commentsResult = await db
      .select({ count: count() })
      .from(comments)
      .where(eq(comments.articleId, id));

    const commentsCount = commentsResult[0]?.count || 0;

    return NextResponse.json({
      content: articleResult[0].content,
      isSaved,
      commentsCount,
    });
  } catch (error) {
    console.error('Error fetching article content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
