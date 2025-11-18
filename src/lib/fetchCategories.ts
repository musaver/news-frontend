import { db } from '@/lib/db';
import { categories } from '@/lib/schema';

export interface Category {
  id: number;
  name: string;
  slug: string;
}

/**
 * Fetches all categories from the database
 * @returns Promise<Category[]> Array of categories ordered by name
 */
export async function fetchCategories(): Promise<Category[]> {
  try {
    const result = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .orderBy(categories.name);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
