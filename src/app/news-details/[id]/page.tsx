import React from 'react';
import { notFound } from 'next/navigation';
import {
  Header,
  Footer,
} from '@/components/homepage';
import { db } from '@/lib/db';
import { articles, categories } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import VisitTracker from '@/components/VisitTracker';
import ArticleDetailClient from '@/components/ArticleDetailClient';

// Use ISR with 60-second revalidation for better performance
export const revalidate = 60;

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

// Fetch minimal article data for initial render (just title)
async function fetchMinimalArticleData(articleId: string) {
  try {
    const result = await db
      .select({
        id: articles.id,
        title: articles.title,
      })
      .from(articles)
      .where(and(eq(articles.id, articleId), eq(articles.status, 'published')))
      .limit(1);

    if (result.length === 0) return null;

    return result[0];
  } catch (error) {
    console.error('Error fetching minimal article data:', error);
    return null;
  }
}

interface NewsDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// News Details Page Component
export default async function NewsDetailsPage({ params }: NewsDetailsPageProps) {
  const resolvedParams = await params;
  const articleId = resolvedParams.id;

  // Fetch minimal article data (just title) and categories in parallel
  const [minimalArticleData, allCategories] = await Promise.all([
    fetchMinimalArticleData(articleId),
    fetchCategories(),
  ]);

  // If article not found, show 404
  if (!minimalArticleData) {
    notFound();
  }

  return (
    <>
      <Header categories={allCategories} />
      <VisitTracker articleId={minimalArticleData.id} />
      <ArticleDetailClient articleId={articleId} initialData={minimalArticleData} />
      <Footer />
    </>
  );
}
