import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, user } from '@/lib/schema';
import { eq, desc, and } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    // Build query conditions
    const conditions = [eq(articles.status, 'published')];

    if (category) {
      conditions.push(eq(articles.category, category));
    }

    // Fetch published articles with author information
    let query = db
      .select({
        id: articles.id,
        title: articles.title,
        category: articles.category,
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
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(...conditions))
      .orderBy(desc(articles.publishedAt));

    // Apply limit if provided
    if (limit) {
      query = query.limit(limit) as any;
    }

    const publishedArticles = await query;

    // Ensure tags is always an array for each article
    const articlesWithParsedTags = publishedArticles.map(article => ({
      ...article,
      tags: Array.isArray(article.tags)
        ? article.tags
        : (article.tags ? JSON.parse(article.tags as string) : [])
    }));

    return NextResponse.json(
      {
        success: true,
        articles: articlesWithParsedTags,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching public articles:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
