import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { user, articles, categories } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: authorId } = await params;

    // Fetch the author
    const [author] = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      .from(user)
      .where(eq(user.id, authorId));

    if (!author) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    // Fetch all published articles by this author
    const authorArticles = await db
      .select({
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
        },
      })
      .from(articles)
      .innerJoin(user, eq(articles.authorId, user.id))
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(eq(articles.authorId, authorId))
      .orderBy(articles.publishedAt);

    return NextResponse.json({
      author,
      articles: authorArticles,
    });
  } catch (error) {
    console.error("Error fetching author:", error);
    return NextResponse.json(
      { error: "Failed to fetch author" },
      { status: 500 }
    );
  }
}
