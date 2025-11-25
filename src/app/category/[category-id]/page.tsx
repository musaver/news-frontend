import React from 'react';
import { notFound } from 'next/navigation';
import CategoryPageClient from '@/components/CategoryPageClient';
import { db } from '@/lib/db';
import { categories } from '@/lib/schema';
import { eq, or } from 'drizzle-orm';

// Force dynamic rendering for database queries
export const dynamic = 'force-dynamic';

// Fetch all categories for navigation
async function fetchCategories() {
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

// Fetch category by slug or ID
async function fetchCategory(categoryId: string) {
  try {
    const isNumericId = !isNaN(Number(categoryId));

    const category = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .where(
        isNumericId
          ? or(eq(categories.slug, categoryId), eq(categories.id, Number(categoryId)))!
          : eq(categories.slug, categoryId)
      )
      .limit(1);

    return category[0] || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

interface CategoryPageProps {
  params: Promise<{
    'category-id': string;
  }>;
}

// Main Category Page Component with Progressive Loading
export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryId = resolvedParams['category-id'];

  // Only fetch minimal data on server - category and categories list
  const [category, allCategories] = await Promise.all([
    fetchCategory(categoryId),
    fetchCategories()
  ]);

  // If category not found, show 404
  if (!category) {
    notFound();
  }

  // Delegate to client component for progressive loading
  return (
    <CategoryPageClient
      categoryId={categoryId}
      initialCategories={allCategories}
      initialCategory={category}
    />
  );
}
