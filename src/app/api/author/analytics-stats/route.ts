import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articles, articleVisits, categories, user } from '@/lib/schema';
import { eq, and, desc, sql, count, isNotNull } from 'drizzle-orm';

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
        { error: 'Forbidden. Only authors can view analytics stats.' },
        { status: 403 }
      );
    }

    const authorId = session.user.id;

    // Get total articles count
    const totalArticlesResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(articles)
      .where(eq(articles.authorId, authorId));

    const totalArticles = Number(totalArticlesResult[0]?.count || 0);

    // Get total page views on author's articles
    const totalViewsResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(articleVisits)
      .innerJoin(articles, eq(articleVisits.articleId, articles.id))
      .where(eq(articles.authorId, authorId));

    const totalViews = Number(totalViewsResult[0]?.count || 0);

    // Calculate average views per article
    const avgViewsPerArticle = totalArticles > 0 ? Math.round(totalViews / totalArticles) : 0;

    // Get count of articles that have at least one visit
    const articlesWithVisitsResult = await db
      .select({ count: sql<number>`count(distinct ${articles.id})` })
      .from(articles)
      .innerJoin(articleVisits, eq(articleVisits.articleId, articles.id))
      .where(eq(articles.authorId, authorId));

    const articlesWithVisits = Number(articlesWithVisitsResult[0]?.count || 0);

    // Calculate engagement rate (articles with visits / total articles * 100)
    const engagementRate = totalArticles > 0
      ? ((articlesWithVisits / totalArticles) * 100).toFixed(1)
      : '0.0';

    // Get top performing articles with view counts
    const topArticlesData = await db
      .select({
        id: articles.id,
        title: articles.title,
        excerpt: articles.excerpt,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
        createdAt: articles.createdAt,
        categoryName: categories.name,
        viewCount: sql<number>`count(${articleVisits.id})`,
      })
      .from(articles)
      .innerJoin(articleVisits, eq(articleVisits.articleId, articles.id))
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(eq(articles.authorId, authorId))
      .groupBy(articles.id, articles.title, articles.excerpt, articles.coverImage,
               articles.publishedAt, articles.createdAt, categories.name)
      .orderBy(desc(sql<number>`count(${articleVisits.id})`))
      .limit(10);

    // Convert viewCount to number type
    const topArticles = topArticlesData.map(article => ({
      ...article,
      viewCount: Number(article.viewCount)
    }));

    return NextResponse.json(
      {
        success: true,
        stats: {
          totalArticles,
          avgViewsPerArticle,
          engagementRate: parseFloat(engagementRate),
          totalViews,
        },
        topArticles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching analytics stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics stats' },
      { status: 500 }
    );
  }
}
