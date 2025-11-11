'use client'

import React from 'react';
import {
  Header,
  Footer,
  PageHeader,
} from '@/components/homepage';
import DesktopCareers from '@/imports/Frame3';
import MobileCareers from '@/imports/Frame4';

export default function CareersPage() {
  // Add click handler to job cards
  const handleJobCardClick = (e: React.MouseEvent) => {
    // Check if the clicked element or its parent is a job card
    const target = e.target as HTMLElement;
    const jobCard = target.closest('[data-name="Active"]') || target.closest('[data-name="Phone"]');

    if (jobCard) {
      // Navigate to career details page
      window.location.href = '/career-details';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 md:pt-[104px]">
        {/* Page Header */}
        <PageHeader pageName="Careers" />

        {/* Desktop Version */}
        <div className="hidden md:block" onClick={handleJobCardClick}>
          <DesktopCareers />
        </div>

        {/* Mobile Version */}
        <div className="md:hidden" onClick={handleJobCardClick}>
          <MobileCareers />
        </div>
      </main>

      <Footer />
    </div>
  );
}
