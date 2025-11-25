import React from 'react';

interface CategoryBadgeProps {
  children: React.ReactNode;
}

const CategoryBadge = ({ children }: CategoryBadgeProps) => (
  <span className="inline-block px-3 py-1 text-xs font-medium text-[#cc0000] bg-[rgba(204,0,0,0.05)] border border-[rgba(204,0,0,0.1)] rounded backdrop-blur-sm">
    {children}
  </span>
);

export default CategoryBadge;