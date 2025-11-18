import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { comments, user } from '@/lib/schema';
import { randomUUID } from 'crypto';
import { eq, and, isNull, desc } from 'drizzle-orm';

// POST /api/comments - Create a new comment
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Please log in to comment.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { articleId, content, parentId } = body;

    // Validate required fields
    if (!articleId || !content) {
      return NextResponse.json(
        { success: false, error: 'Article ID and content are required.' },
        { status: 400 }
      );
    }

    // Validate content length
    if (content.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Comment content cannot be empty.' },
        { status: 400 }
      );
    }

    if (content.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Comment content is too long (max 5000 characters).' },
        { status: 400 }
      );
    }

    // Get user ID from session
    const userId = session.user.id;

    // Create comment
    const commentId = randomUUID();
    await db.insert(comments).values({
      id: commentId,
      articleId,
      userId,
      parentId: parentId || null,
      content: content.trim(),
    });

    // Fetch the created comment with user info
    const [newComment] = await db
      .select({
        id: comments.id,
        articleId: comments.articleId,
        userId: comments.userId,
        parentId: comments.parentId,
        content: comments.content,
        createdAt: comments.createdAt,
        updatedAt: comments.updatedAt,
      })
      .from(comments)
      .where(eq(comments.id, commentId));

    return NextResponse.json(
      {
        success: true,
        message: parentId ? 'Reply added successfully!' : 'Comment added successfully!',
        comment: newComment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create comment. Please try again.' },
      { status: 500 }
    );
  }
}

// GET /api/comments?articleId=xxx - Get all comments for an article
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('articleId');

    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'Article ID is required.' },
        { status: 400 }
      );
    }

    // Fetch all comments for the article with user information
    const allComments = await db
      .select({
        id: comments.id,
        articleId: comments.articleId,
        userId: comments.userId,
        userName: user.name,
        userImage: user.image,
        parentId: comments.parentId,
        content: comments.content,
        createdAt: comments.createdAt,
        updatedAt: comments.updatedAt,
      })
      .from(comments)
      .leftJoin(user, eq(comments.userId, user.id))
      .where(eq(comments.articleId, articleId))
      .orderBy(desc(comments.createdAt));

    // Separate top-level comments and replies
    const topLevelComments = allComments.filter((c) => !c.parentId);
    const repliesMap = new Map<string, typeof allComments>();

    // Group replies by parent ID
    allComments.forEach((comment) => {
      if (comment.parentId) {
        if (!repliesMap.has(comment.parentId)) {
          repliesMap.set(comment.parentId, []);
        }
        repliesMap.get(comment.parentId)?.push(comment);
      }
    });

    // Attach replies to their parent comments
    const commentsWithReplies = topLevelComments.map((comment) => ({
      ...comment,
      replies: repliesMap.get(comment.id) || [],
    }));

    return NextResponse.json({
      success: true,
      comments: commentsWithReplies,
      totalComments: allComments.length,
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments.' },
      { status: 500 }
    );
  }
}
