import React from 'react';
import { Header, Footer } from '@/components/homepage';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface AppLayoutProps {
  children: React.ReactNode;
  categories: Category[];
}

export default function AppLayout({ children, categories }: AppLayoutProps) {
  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer />
    </>
  );
}
