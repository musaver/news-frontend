import DesktopAboutUs from '../imports/Frame1-149-633';
import MobileAboutUs from '../imports/Frame2';
import { PageHeader } from './PageHeader';
import { Footer } from './Footer';

export function AboutUsPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader pageName="About Us" />
      
      {/* Desktop Version */}
      <div className="hidden md:block">
        <DesktopAboutUs />
      </div>
      
      {/* Mobile Version */}
      <div className="md:hidden">
        <MobileAboutUs />
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
