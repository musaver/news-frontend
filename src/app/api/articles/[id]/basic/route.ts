import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { articles, categories } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
      })
      .from(articles)
      .where(and(eq(articles.id, id), eq(articles.status, 'published')))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error fetching basic article data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
