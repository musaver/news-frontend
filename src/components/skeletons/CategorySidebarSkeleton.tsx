import React from 'react';

const CategorySidebarSkeleton = () => {
  return (
    <aside className="w-[306px] animate-pulse">
      <div className="space-y-6">
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden h-[250px] bg-slate-200"></div>

        <div>
          {/* Section Header */}
          <div className="flex items-center gap-5 mb-4">
            <div className="w-1 h-4 bg-slate-200"></div>
            <div className="h-5 w-28 bg-slate-200 rounded"></div>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-4 mt-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                  <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                  <div className="h-3 w-20 bg-slate-200 rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebarSkeleton;
