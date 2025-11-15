import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { articles, categories } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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
        { error: 'Forbidden. Only authors can view articles.' },
        { status: 403 }
      );
    }

    // Fetch the article
    const article = await db
      .select()
      .from(articles)
      .where(
        and(
          eq(articles.id, id),
          eq(articles.authorId, session.user.id)
        )
      )
      .limit(1);

    if (!article || article.length === 0) {
      return NextResponse.json(
        { error: 'Article not found.' },
        { status: 404 }
      );
    }

    // Ensure tags is always an array
    const articleData = {
      ...article[0],
      tags: Array.isArray(article[0].tags)
        ? article[0].tags
        : (article[0].tags ? JSON.parse(article[0].tags as string) : [])
    };

    return NextResponse.json(
      {
        success: true,
        article: articleData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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
        { error: 'Forbidden. Only authors can update articles.' },
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

    // Look up category ID from category name
    const categoryResult = await db
      .select()
      .from(categories)
      .where(eq(categories.name, category))
      .limit(1);

    if (categoryResult.length === 0) {
      return NextResponse.json(
        { error: 'Invalid category. Category does not exist.' },
        { status: 400 }
      );
    }

    const categoryId = categoryResult[0].id;

    // Validate status
    const validStatuses = ['draft', 'under_review', 'published'];
    const articleStatus = status || 'draft';
    if (!validStatuses.includes(articleStatus)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be draft, under_review, or published.' },
        { status: 400 }
      );
    }

    // Check if article exists and belongs to the user
    const existingArticle = await db
      .select()
      .from(articles)
      .where(
        and(
          eq(articles.id, id),
          eq(articles.authorId, session.user.id)
        )
      )
      .limit(1);

    if (!existingArticle || existingArticle.length === 0) {
      return NextResponse.json(
        { error: 'Article not found.' },
        { status: 404 }
      );
    }

    // Update the article
    const now = new Date();
    const updateData: any = {
      title,
      categoryId,
      content,
      excerpt: excerpt || null,
      tags: tags || [],
      coverImage: coverImage || null,
      status: articleStatus,
      updatedAt: now,
    };

    // If status is being changed to published and it wasn't published before
    if (articleStatus === 'published' && existingArticle[0].status !== 'published') {
      updateData.publishedAt = now;
    }

    await db
      .update(articles)
      .set(updateData)
      .where(
        and(
          eq(articles.id, id),
          eq(articles.authorId, session.user.id)
        )
      );

    return NextResponse.json(
      {
        success: true,
        message: 'Article updated successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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
        { error: 'Forbidden. Only authors can delete articles.' },
        { status: 403 }
      );
    }

    // Delete the article
    const result = await db
      .delete(articles)
      .where(
        and(
          eq(articles.id, id),
          eq(articles.authorId, session.user.id)
        )
      );

    return NextResponse.json(
      {
        success: true,
        message: 'Article deleted successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
