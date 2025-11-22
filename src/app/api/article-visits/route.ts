import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articleVisits, articles, categories, user } from '@/lib/schema';
import { v4 as uuidv4 } from 'uuid';
import { eq, and, desc } from 'drizzle-orm';

// GET: Fetch all article visits for the logged-in user
export async function GET(req: Request) {
  try {
    // Get the session to check if user is authenticated
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Fetch all article visits for this user with article details
    const results = await db
      .select({
        id: articleVisits.id,
        articleId: articleVisits.articleId,
        visitedAt: articleVisits.visitedAt,
        articleTitle: articles.title,
        articleExcerpt: articles.excerpt,
        articleCoverImage: articles.coverImage,
        articlePublishedAt: articles.publishedAt,
        categoryName: categories.name,
        categoryId: categories.id,
        authorId: user.id,
        authorName: user.name,
        authorImage: user.image,
      })
      .from(articleVisits)
      .innerJoin(articles, eq(articleVisits.articleId, articles.id))
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(eq(articleVisits.userId, session.user.id), eq(articles.status, 'published')))
      .orderBy(desc(articleVisits.visitedAt));

    // Transform the flat structure into the nested structure expected by the frontend
    const userVisitHistory = results.map(row => ({
      id: row.id,
      articleId: row.articleId,
      visitedAt: row.visitedAt,
      article: {
        id: row.articleId,
        title: row.articleTitle,
        excerpt: row.articleExcerpt,
        coverImage: row.articleCoverImage,
        publishedAt: row.articlePublishedAt,
        category: row.categoryName,
        categoryId: row.categoryId,
        author: row.authorId ? {
          id: row.authorId,
          name: row.authorName,
          image: row.authorImage,
        } : null,
      },
    }));

    return NextResponse.json(
      {
        success: true,
        visits: userVisitHistory,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching article visits:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

// POST: Record an article visit
export async function POST(req: Request) {
  try {
    // Get the session to check if user is authenticated (optional)
    const session = await getServerSession(authOptions);

    const body = await req.json();
    const { articleId } = body;

    // Validate required fields
    if (!articleId) {
      return NextResponse.json(
        { error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    // Get IP address from headers
    const forwarded = req.headers.get('x-forwarded-for');
    const ipAddress = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';

    // Get User Agent
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Record the visit
    const visitId = uuidv4();
    await db.insert(articleVisits).values({
      id: visitId,
      articleId,
      userId: session?.user?.id || null, // Record user ID if logged in, null otherwise
      visitedAt: new Date(),
      ipAddress,
      userAgent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Visit recorded successfully.',
        visitId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error recording article visit:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
