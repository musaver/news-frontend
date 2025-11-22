import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';

// Fetch latest articles for sidebar (from all categories)
async function fetchLatestArticles(limit: number = 8) {
  try {
    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        content: articles.content,
        excerpt: articles.excerpt,
        tags: articles.tags,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
        createdAt: articles.createdAt,
        author: {
          id: user.id,
          name: user.name,
          image: user.image,
        },
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(eq(articles.status, 'published'))
      .orderBy(desc(articles.publishedAt))
      .limit(limit);

    return result.map(article => ({
      ...article,
      tags: Array.isArray(article.tags) ? article.tags : [],
    }));
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    return [];
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 8;

    // Fetch the latest articles for sidebar
    const sidebarArticles = await fetchLatestArticles(limit);

    return NextResponse.json({
      success: true,
      articles: sidebarArticles
    });
  } catch (error) {
    console.error('Error in sidebar articles API:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
