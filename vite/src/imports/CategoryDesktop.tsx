import { imgLatestNews } from "./svg-92wog";

function ContentBullet() {
  return <div className="absolute bg-[#cc0000] h-[15px] left-[calc(50%-47.03px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[4px]" data-name="content → bullet" />;
}

function LeftTextWithoutViewAllSectionTitle() {
  return (
    <div className="absolute h-[22px] left-[24px] overflow-clip top-1/2 translate-y-[-50%] w-[98.06px]" data-name="Left Text → Without View All → Section Title">
      <ContentBullet />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[14px] not-italic text-[#020a1c] text-[14.25px] top-[11px] translate-y-[-50%] w-[84.26px]">
        <p className="leading-[22px]">Latest News</p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[-5px] h-[84px] right-[24px] w-[405.59px]" data-name="Mask Group">
      <div className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[84px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[405.59px_84px] not-italic text-[65.898px] top-[42px] translate-y-[-50%] w-[405.79px]" style={{ maskImage: `url('${imgLatestNews}')` }}>
        <p className="leading-[84px]">Latest News</p>
      </div>
    </div>
  );
}

function Cms() {
  return (
    <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1320px]" data-name="CMS">
      <LeftTextWithoutViewAllSectionTitle />
      <MaskGroup />
    </div>
  );
}

export default function CategoryDesktop() {
  return (
    <div className="bg-[#f7fafc] relative size-full" data-name="Category - Desktop">
      <Cms />
    </div>
  );
}