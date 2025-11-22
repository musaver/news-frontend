'use client'

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/homepage';

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories once when the layout mounts
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.categories) {
          setCategories(data.categories);
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer />
    </>
  );
}
