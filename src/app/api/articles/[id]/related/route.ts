import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, categories } from '@/lib/schema';
import { eq, desc, and, ne } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // First get the article's category
    const articleResult = await db
      .select({
        categoryId: articles.categoryId,
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

    const categoryId = articleResult[0].categoryId;

    // Fetch related articles from the same category
    const relatedArticles = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(
        and(
          eq(articles.status, 'published'),
          eq(articles.categoryId, categoryId),
          ne(articles.id, id)
        )
      )
      .orderBy(desc(articles.publishedAt))
      .limit(6);

    // Fetch most recent articles
    const mostRecentArticles = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(and(eq(articles.status, 'published'), ne(articles.id, id)))
      .orderBy(desc(articles.publishedAt))
      .limit(5);

    return NextResponse.json({
      relatedArticles,
      mostRecentArticles,
      categoryId,
    });
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
