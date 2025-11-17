import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { user } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    // Fetch all users with userType = 'author'
    const authors = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      .from(user)
      .where(eq(user.userType, "author"));

    return NextResponse.json(authors);
  } catch (error) {
    console.error("Error fetching authors:", error);
    return NextResponse.json(
      { error: "Failed to fetch authors" },
      { status: 500 }
    );
  }
}
