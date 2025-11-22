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

// Fetch podcast articles (first 3 articles from category)
async function fetchPodcastArticles(categoryId: number) {
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
      .limit(3);

    return result.map(article => ({
      ...article,
      tags: Array.isArray(article.tags) ? article.tags : [],
    }));
  } catch (error) {
    console.error('Error fetching podcast articles:', error);
    return [];
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

    // Fetch the podcast articles
    const podcastArticles = await fetchPodcastArticles(category.id);

    return NextResponse.json({
      success: true,
      articles: podcastArticles
    });
  } catch (error) {
    console.error('Error in podcast articles API:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
