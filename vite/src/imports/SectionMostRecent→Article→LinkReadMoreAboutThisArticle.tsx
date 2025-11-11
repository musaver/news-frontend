import imgFeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/d9c5821104334656535b5f632acf10a1b665ad0c.png";
import imgImage1 from "figma:asset/78204c672e851b9ae73c5c9b06666e3735ad7e81.png";

function SectionTitle() {
  return (
    <div className="absolute h-[18.19px] left-[12px] overflow-clip right-[12px] top-[4px]" data-name="Section Title">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#cc0000] text-[12.797px] top-[8.5px] translate-y-[-50%] w-[39.81px]">
        <p className="leading-[18.2px]">Health</p>
      </div>
    </div>
  );
}

function CategoryHighlight() {
  return (
    <div className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(204,0,0,0.05)] h-[26.19px] left-0 overflow-clip rounded-[4px] top-0 w-[63.61px]" data-name="Category Highlight">
      <SectionTitle />
      <div className="absolute inset-0 rounded-[4px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(204,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function CategoryDate() {
  return (
    <div className="absolute h-[26.19px] left-0 right-0 top-[calc(50%-129.185px)] translate-y-[-50%]" data-name="Category + Date">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-[75.61px] not-italic text-[#657285] text-[13.234px] top-[12.5px] translate-y-[-50%] w-[84.28px]">
        <p className="leading-[18.2px]">Sep 23, 2024</p>
      </div>
      <CategoryHighlight />
    </div>
  );
}

function Headline() {
  return (
    <div className="absolute h-[146.38px] left-0 overflow-clip top-[42.19px] w-[302.42px]" data-name="Headline">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[146.78px] justify-center leading-[36.6px] left-0 not-italic text-[#020a1c] text-[27.773px] top-[72.39px] translate-y-[-50%] w-[286.53px]">
        <p className="mb-0">The Future of</p>
        <p className="mb-0">Healthcare Workforce</p>
        <p className="mb-0">Shines Bright as Non-</p>
        <p>Clinical Roles Evolve</p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="absolute h-[92px] left-1/2 overflow-clip top-[calc(50%+100.28px)] translate-x-[-50%] translate-y-[-50%] w-[302.42px]" data-name="Article">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[89px] justify-center leading-[23px] left-0 not-italic text-[#020a1c] text-[14.625px] top-[45.5px] translate-y-[-50%] w-[282.34px]">
        <p className="mb-0">The healthcare sector is experiencing a</p>
        <p className="mb-0">significant shift as non-clinical roles gain</p>
        <p className="mb-0">importance in the rapidly evolving</p>
        <p>landscape. Driven by technological…</p>
      </div>
    </div>
  );
}

function ArticleHeadlineArticle() {
  return (
    <div className="absolute h-[292.56px] left-0 overflow-clip right-0 top-0" data-name="Article - Headline + Article">
      <CategoryDate />
      <Headline />
      <Article />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bottom-0 left-[calc(50%-307.415px)] overflow-clip top-0 translate-x-[-50%] w-[302.42px]" data-name="Content">
      <ArticleHeadlineArticle />
    </div>
  );
}

function FeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg() {
  return (
    <div className="absolute bottom-0 left-[312.42px] overflow-clip right-0 rounded-[8px] top-0" data-name="Featured Photo → Active → wUSa65krK8qboe92FCBJ6lXpo2U.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[100.41%] left-0 max-w-none top-[-0.21%] w-full" src={imgFeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg} />
      </div>
      <div className="absolute h-[429px] left-[-20.42px] top-0 w-[645px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

export default function SectionMostRecentArticleLinkReadMoreAboutThisArticle() {
  return (
    <div className="relative size-full" data-name="Section - Most Recent → Article → Link - Read more about this article.">
      <Content />
      <FeaturedPhotoActiveWUSa65KrK8Qboe92Fcbj6LXpo2UJpg />
    </div>
  );
}