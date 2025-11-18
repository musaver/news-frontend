import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { savedArticles, articles, categories, user } from '@/lib/schema';
import { v4 as uuidv4 } from 'uuid';
import { eq, and, desc } from 'drizzle-orm';

// GET: Fetch all saved articles for the logged-in user
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

    // Fetch all saved articles for this user with article details
    const userSavedArticles = await db
      .select({
        id: savedArticles.id,
        articleId: savedArticles.articleId,
        savedAt: savedArticles.createdAt,
        article: {
          id: articles.id,
          title: articles.title,
          excerpt: articles.excerpt,
          coverImage: articles.coverImage,
          publishedAt: articles.publishedAt,
          category: categories.name,
          categoryId: categories.id,
          author: {
            id: user.id,
            name: user.name,
            image: user.image,
          },
        },
      })
      .from(savedArticles)
      .innerJoin(articles, eq(savedArticles.articleId, articles.id))
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .leftJoin(user, eq(articles.authorId, user.id))
      .where(and(eq(savedArticles.userId, session.user.id), eq(articles.status, 'published')))
      .orderBy(desc(savedArticles.createdAt));

    return NextResponse.json(
      {
        success: true,
        savedArticles: userSavedArticles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching saved articles:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

// POST: Save an article
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

    const body = await req.json();
    const { articleId } = body;

    // Validate required fields
    if (!articleId) {
      return NextResponse.json(
        { error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    // Check if article exists
    const articleExists = await db
      .select()
      .from(articles)
      .where(eq(articles.id, articleId))
      .limit(1);

    if (articleExists.length === 0) {
      return NextResponse.json(
        { error: 'Article not found.' },
        { status: 404 }
      );
    }

    // Check if already saved
    const alreadySaved = await db
      .select()
      .from(savedArticles)
      .where(
        and(
          eq(savedArticles.userId, session.user.id),
          eq(savedArticles.articleId, articleId)
        )
      )
      .limit(1);

    if (alreadySaved.length > 0) {
      return NextResponse.json(
        { error: 'Article already saved.' },
        { status: 400 }
      );
    }

    // Save the article
    const savedArticleId = uuidv4();
    await db.insert(savedArticles).values({
      id: savedArticleId,
      userId: session.user.id,
      articleId,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Article saved successfully.',
        savedArticleId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving article:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

// DELETE: Unsave an article
export async function DELETE(req: Request) {
  try {
    // Get the session to check if user is authenticated
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get('articleId');

    // Validate required fields
    if (!articleId) {
      return NextResponse.json(
        { error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    // Check if article is saved
    const saved = await db
      .select()
      .from(savedArticles)
      .where(
        and(
          eq(savedArticles.userId, session.user.id),
          eq(savedArticles.articleId, articleId)
        )
      )
      .limit(1);

    if (saved.length === 0) {
      return NextResponse.json(
        { error: 'Article is not saved.' },
        { status: 404 }
      );
    }

    // Delete the saved article
    await db
      .delete(savedArticles)
      .where(
        and(
          eq(savedArticles.userId, session.user.id),
          eq(savedArticles.articleId, articleId)
        )
      );

    return NextResponse.json(
      {
        success: true,
        message: 'Article unsaved successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unsaving article:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
