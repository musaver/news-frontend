import DesktopCareers from '../imports/Frame3';
import MobileCareers from '../imports/Frame4';
import { PageHeader } from './PageHeader';
import { Footer } from './Footer';

interface CareersPageProps {
  onCareerClick?: () => void;
}

export function CareersPage({ onCareerClick }: CareersPageProps) {
  // Add click handler to job cards
  const handleJobCardClick = (e: React.MouseEvent) => {
    // Check if the clicked element or its parent is a job card
    const target = e.target as HTMLElement;
    const jobCard = target.closest('[data-name="Active"]') || target.closest('[data-name="Phone"]');
    
    if (jobCard && onCareerClick) {
      onCareerClick();
    }
  };

  return (
    <>
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
      
      {/* Footer */}
      <Footer />
    </>
  );
}
