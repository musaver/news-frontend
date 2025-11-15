// Shared type definitions for articles
export interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  excerpt: string | null;
  tags: string[];
  coverImage: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  author: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;
}

export function formatDate(date: Date | null | undefined): string {
  if (!date) return '';

  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
