import React from 'react';

const CategorySidebarSkeleton = () => {
  return (
    <aside className="animate-pulse">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-4 bg-slate-200"></div>
        <div className="h-5 w-28 bg-slate-200 rounded"></div>
      </div>

      {/* Sidebar Articles */}
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <article key={index} className="space-y-3">
            <div className="rounded-lg overflow-hidden h-[200px] bg-slate-200"></div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
                <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                <div className="h-3 w-20 bg-slate-200 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-4/5"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default CategorySidebarSkeleton;
