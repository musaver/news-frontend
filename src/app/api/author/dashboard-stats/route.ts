import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articles, articleVisits, comments, categories, user } from '@/lib/schema';
import { eq, and, desc, sql, isNotNull } from 'drizzle-orm';

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
        { error: 'Forbidden. Only authors can view dashboard stats.' },
        { status: 403 }
      );
    }

    const authorId = session.user.id;

    // Get total articles count
    const totalArticlesResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(articles)
      .where(eq(articles.authorId, authorId));

    const totalArticles = totalArticlesResult[0]?.count || 0;

    // Get total page views on author's articles
    const totalViewsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(articleVisits)
      .innerJoin(articles, eq(articleVisits.articleId, articles.id))
      .where(eq(articles.authorId, authorId));

    const totalViews = totalViewsResult[0]?.count || 0;

    // Get total comments on author's articles
    const totalCommentsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(comments)
      .innerJoin(articles, eq(comments.articleId, articles.id))
      .where(eq(articles.authorId, authorId));

    const totalComments = totalCommentsResult[0]?.count || 0;

    // Get 5 recent articles with their details
    const recentArticles = await db
      .select({
        id: articles.id,
        title: articles.title,
        excerpt: articles.excerpt,
        coverImage: articles.coverImage,
        status: articles.status,
        publishedAt: articles.publishedAt,
        createdAt: articles.createdAt,
        categoryName: categories.name,
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(eq(articles.authorId, authorId))
      .orderBy(desc(articles.createdAt))
      .limit(5);

    return NextResponse.json(
      {
        success: true,
        stats: {
          totalArticles,
          totalViews,
          totalComments,
        },
        recentArticles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching author dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}
