import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { user, articles } from "@/lib/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    // Fetch all users who have at least one published article
    // This makes them authors regardless of their userType
    const authors = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      .from(user)
      .innerJoin(articles, eq(user.id, articles.authorId))
      .where(eq(articles.status, "published"))
      .groupBy(user.id);

    return NextResponse.json(authors);
  } catch (error) {
    console.error("Error fetching authors:", error);
    return NextResponse.json(
      { error: "Failed to fetch authors" },
      { status: 500 }
    );
  }
}
