import { useState, useEffect } from 'react';

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/categories');
        const data = await response.json();
        if (data.success) {
          setCategories(data.categories);
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}
