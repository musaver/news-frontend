import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, user } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

// Calculate reading time based on content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const result = await db
      .select({
        author: {
          id: user.id,
          name: user.name,
          image: user.image,
        },
        content: articles.content,
        publishedAt: articles.publishedAt,
      })
      .from(articles)
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(eq(articles.id, id), eq(articles.status, 'published')))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    const readingTime = calculateReadingTime(result[0].content || '');

    return NextResponse.json({
      author: result[0].author,
      publishedAt: result[0].publishedAt,
      readingTime,
    });
  } catch (error) {
    console.error('Error fetching article author data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
