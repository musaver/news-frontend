import { imgLatestNews } from "../imports/svg-92wog";
import { imgContainer } from "../imports/svg-4a9ab";
import { imgContainer as imgAboutUs } from "../imports/svg-a7b80";
import { imgContainer as imgCareers } from "../imports/svg-osnpp";
import { imgContainer as imgContactUs } from "../imports/svg-q41ti";

interface PageHeaderProps {
  pageName: string;
}

export function PageHeader({ pageName }: PageHeaderProps) {
  // Determine which style to use based on page name
  const isLatestNews = pageName === "Latest News";
  const isMeetOurAuthors = pageName === "Meet Our Authors";
  const isAuthor = pageName === "Author";
  const isAboutUs = pageName === "About Us";
  const isCareers = pageName === "Careers";
  const isContactUs = pageName === "Contact us";
  
  // Contact Us Style (CategoryDesktop)
  if (isContactUs) {
    return (
      <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center overflow-clip py-0 relative shrink-0 w-full px-[20px] px-[16px] py-[0px]" data-name="Category - Desktop">
        <div className="box-border content-stretch flex h-[56px] md:h-[75px] items-center max-w-[1320px] px-4 md:pl-[24px] md:pr-[1206.11px] md:py-[24px] relative shrink-0 w-full py-[16px] p-[0px]" data-name="CMS">
          {/* Left Text with Bullet */}
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Left Text">
            <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Without View All">
              <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
                <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px] mx-[3px] my-[0px] px-[2px] py-[0px]" data-name="content → bullet" />
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
                      <p className="leading-[22px] whitespace-pre">Contact us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Watermark Text with Gradient Mask - Desktop Only */}
          <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[23.99px] w-[363.88px]" data-name="Mask Group">
            <div 
              className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[363.879px_84px] right-[-0.12px]" 
              data-name="Container" 
              style={{ maskImage: `url('${imgContactUs}')` }}
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Satoshi:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[66.3px] text-nowrap">
                  <p className="leading-[84px] whitespace-pre">Contact us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Careers Style (CategoryDesktop)
  if (isCareers) {
    return (
      <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center overflow-clip px-[300px] py-0 relative shrink-0 w-full" data-name="Category - Desktop">
        <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1227.56px] py-[24px] relative shrink-0" data-name="CMS">
          {/* Left Text with Bullet */}
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Left Text">
            <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Without View All">
              <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
                <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
                      <p className="leading-[22px] whitespace-pre">Careers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Watermark Text with Gradient Mask - Desktop Only */}
          <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[265.31px]" data-name="Mask Group">
            <div 
              className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[265.31px_84px] right-[-0.69px]" 
              data-name="Container" 
              style={{ maskImage: `url('${imgCareers}')` }}
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Satoshi:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[66.3px] text-nowrap">
                  <p className="leading-[84px] whitespace-pre">Careers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // About Us Style (CategoryDesktop)
  if (isAboutUs) {
    return (
      <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center overflow-clip px-[300px] py-0 relative shrink-0 w-full" data-name="Category - Desktop">
        <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1219.75px] py-[24px] relative shrink-0" data-name="CMS">
          {/* Left Text with Bullet */}
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Left Text">
            <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Without View All">
              <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
                <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
                      <p className="leading-[22px] whitespace-pre">About us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Watermark Text with Gradient Mask - Desktop Only */}
          <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[359.39px]" data-name="Mask Group">
            <div 
              className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[359.39px_84px] right-[-0.61px]" 
              data-name="Container" 
              style={{ maskImage: `url('${imgAboutUs}')` }}
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Satoshi:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[65.4px] text-nowrap">
                  <p className="leading-[84px] whitespace-pre">NewsFlash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Latest News Style (CategoryDesktop)
  if (isLatestNews) {
    return (
      <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
        <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
          {/* Left Text with Bullet */}
          <div className="absolute h-[22px] left-[24px] overflow-clip top-1/2 translate-y-[-50%] w-[98.06px]" data-name="Left Text">
            <div className="absolute bg-[#cc0000] h-[15px] left-[calc(50%-47.03px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[4px]" data-name="bullet" />
            <div className="absolute flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[14px] not-italic text-[#020a1c] text-[14.25px] top-[11px] translate-y-[-50%] w-[84.26px]">
              <p className="leading-[22px]">Latest News</p>
            </div>
          </div>
          
          {/* Right Watermark Text with Gradient Mask - Desktop Only */}
          <div className="hidden md:block absolute bottom-[-5px] h-[84px] right-[24px] w-[405.59px]" data-name="Mask Group">
            <div 
              className="absolute flex flex-col font-['Satoshi:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[405.59px_84px] not-italic text-[65.898px] top-[42px] translate-y-[-50%] w-[405.79px]" 
              style={{ maskImage: `url('${imgLatestNews}')` }}
            >
              <p className="leading-[84px]">Latest News</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Meet Our Authors / Author Style (Desktop)
  if (isMeetOurAuthors || isAuthor) {
    return (
      <div className="bg-[#f7fafc] content-stretch flex items-center justify-center relative w-full h-[75px]" data-name="Desktop">
        <div className="box-border content-stretch flex h-full items-center max-w-[1320px] p-[24px] relative shrink-0 w-full md:w-[1320px]" data-name="Container">
          {/* Left Text with Bullet */}
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Left Text">
            <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="content">
                <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="bullet" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]" data-name="Author's Name">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.875px] w-full">
                      <p className="leading-[22px]">{pageName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Watermark Text with Gradient Mask - Desktop Only */}
          <div className="hidden md:block absolute bottom-[-10px] h-[94.8px] right-[24px] w-[415.53px]" data-name="Mask Group">
            <div 
              className="absolute bottom-[-0.2px] content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[415.53px_94.8px] right-[-0.47px]" 
              style={{ maskImage: `url('${imgContainer}')` }}
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Satoshi:Extra_Bold',_sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[74.834px] text-nowrap">
                  <p className="leading-[94.8px] whitespace-pre">{isMeetOurAuthors ? "Our Author" : "Author"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="absolute inset-0 pointer-events-none" data-name="HorizontalBorder">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(226,232,240,0.2)] border-solid inset-0" />
        </div>
      </div>
    );
  }
  
  // Default Style (for other pages like Top Stories, Blog categories, etc.)
  return (
    <div className="bg-[#f7fafc] content-stretch flex items-center justify-center relative w-full h-[75px]">
      <div className="box-border content-stretch flex h-full items-center max-w-[1320px] p-[24px] relative shrink-0 w-full md:w-[1320px]">
        {/* Left Text with Bullet */}
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0">
              <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.875px] w-full">
                    <p className="leading-[22px]">{pageName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Watermark Text with Gradient Mask - Desktop Only */}
        <div className="hidden md:block absolute bottom-[-10px] h-[94.8px] right-[24px] w-[415.53px]">
          <div 
            className="absolute bottom-[-0.2px] content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[415.53px_94.8px] right-[-0.47px]" 
            style={{ maskImage: `url('${imgContainer}')` }}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Satoshi:Extra_Bold',_sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[74.834px] text-nowrap">
                <p className="leading-[94.8px] whitespace-pre">{pageName}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="absolute inset-0 pointer-events-none">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(226,232,240,0.2)] border-solid inset-0" />
        </div>
      </div>
    </div>
  );
}
