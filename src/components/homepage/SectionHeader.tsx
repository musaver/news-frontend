import React from 'react';

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  redBullet?: boolean;
}

const SectionHeader = ({ title, showViewAll = true, redBullet = true }: SectionHeaderProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      {redBullet && <div className="w-1 h-4 bg-[#cc0000]"></div>}
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
    {showViewAll && (
      <div className="flex items-center gap-1 text-sm text-slate-700 font-medium">
        <span>view all</span>
        <div className="w-2.5 h-2.5"></div>
      </div>
    )}
  </div>
);

export default SectionHeader;