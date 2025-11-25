import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, desc, and, or } from 'drizzle-orm';

// Fetch category by slug or ID
async function fetchCategory(categoryId: string) {
  try {
    const isNumericId = !isNaN(Number(categoryId));

    const category = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .where(
        isNumericId
          ? or(eq(categories.slug, categoryId), eq(categories.id, Number(categoryId)))!
          : eq(categories.slug, categoryId)
      )
      .limit(1);

    return category[0] || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

// Fetch articles for a specific category (excluding the first one which is featured)
async function fetchCategoryArticles(categoryId: number, limit?: number) {
  try {
    const conditions = [
      eq(articles.status, 'published'),
      eq(articles.categoryId, categoryId)
    ];

    let query = db.select({
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
      }
    })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(...conditions))
      .orderBy(desc(articles.publishedAt));

    if (limit) {
      query = query.limit(limit) as any;
    }

    const result = await query;
    return result.map(article => ({
      ...article,
      tags: Array.isArray(article.tags) ? article.tags : [],
    }));
  } catch (error) {
    console.error('Error fetching category articles:', error);
    return [];
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 100;

    // First, fetch the category to get its numeric ID
    const category = await fetchCategory(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // Fetch the articles (skip 1 to exclude featured)
    const allArticles = await fetchCategoryArticles(category.id, limit);
    const articlesWithoutFeatured = allArticles.slice(1);

    return NextResponse.json({
      success: true,
      articles: articlesWithoutFeatured,
      total: articlesWithoutFeatured.length
    });
  } catch (error) {
    console.error('Error in category articles API:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
