import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articles } from '@/lib/schema';
import { v4 as uuidv4 } from 'uuid';
import { eq, and, desc } from 'drizzle-orm';

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

    // Check if user is an author
    if (session.user.userType !== 'author') {
      return NextResponse.json(
        { error: 'Forbidden. Only authors can view their articles.' },
        { status: 403 }
      );
    }

    // Fetch all articles for this author
    const userArticles = await db
      .select()
      .from(articles)
      .where(eq(articles.authorId, session.user.id))
      .orderBy(desc(articles.createdAt));

    // Ensure tags is always an array for each article
    const articlesWithParsedTags = userArticles.map(article => ({
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
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Get the session to check if user is authenticated
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Check if user is an author
    if (session.user.userType !== 'author') {
      return NextResponse.json(
        { error: 'Forbidden. Only authors can create articles.' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { title, category, content, excerpt, tags, coverImage, status } = body;

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required.' },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: 'Category is required.' },
        { status: 400 }
      );
    }

    // Validate status
    const validStatuses = ['draft', 'under_review', 'published'];
    const articleStatus = status || 'draft';
    if (!validStatuses.includes(articleStatus)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be draft, under_review, or published.' },
        { status: 400 }
      );
    }

    // Create the article
    const articleId = uuidv4();
    const now = new Date();

    await db.insert(articles).values({
      id: articleId,
      authorId: session.user.id,
      title,
      category,
      content,
      excerpt: excerpt || null,
      tags: tags || [],
      coverImage: coverImage || null,
      status: articleStatus,
      publishedAt: articleStatus === 'published' ? now : null,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Article created successfully.',
        articleId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
