import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, user, categories } from '@/lib/schema';
import { eq, like, or, desc, and } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10;

    // If no query, return empty results
    if (!query || query.trim() === '') {
      return NextResponse.json({
        success: true,
        categories: [],
        articles: [],
      });
    }

    // Search categories by name
    const searchedCategories = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .where(like(categories.name, `%${query}%`))
      .orderBy(categories.name);

    // Search articles by title, excerpt, content, and tags
    const searchedArticles = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        excerpt: articles.excerpt,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
        author: {
          id: user.id,
          name: user.name,
          image: user.image,
        },
      })
      .from(articles)
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(
        and(
          eq(articles.status, 'published'),
          or(
            like(articles.title, `%${query}%`),
            like(articles.content, `%${query}%`),
            like(articles.excerpt, `%${query}%`)
          )
        )
      )
      .orderBy(desc(articles.publishedAt))
      .limit(limit);

    return NextResponse.json({
      success: true,
      categories: searchedCategories,
      articles: searchedArticles,
    });
  } catch (error) {
    console.error('Error searching:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
