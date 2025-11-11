import React from 'react';

interface ArticleDateProps {
  children: React.ReactNode;
}

const ArticleDate = ({ children }: ArticleDateProps) => (
  <span className="text-xs text-slate-500 font-medium">{children}</span>
);

export default ArticleDate;