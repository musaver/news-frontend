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

// Fetch featured article (first article) for a category
async function fetchFeaturedArticle(categoryId: number) {
  try {
    const conditions = [
      eq(articles.status, 'published'),
      eq(articles.categoryId, categoryId)
    ];

    const result = await db.select({
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
      .orderBy(desc(articles.publishedAt))
      .limit(1);

    if (result.length === 0) return null;

    return {
      ...result[0],
      tags: Array.isArray(result[0].tags) ? result[0].tags : [],
    };
  } catch (error) {
    console.error('Error fetching featured article:', error);
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // First, fetch the category to get its numeric ID
    const category = await fetchCategory(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // Fetch the featured article
    const featuredArticle = await fetchFeaturedArticle(category.id);

    return NextResponse.json({
      success: true,
      article: featuredArticle,
      category: category
    });
  } catch (error) {
    console.error('Error in featured article API:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
