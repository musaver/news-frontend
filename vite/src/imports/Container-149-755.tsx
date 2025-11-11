import { imgContainer } from "./svg-a7b80";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">About us</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet />
      <Container1 />
    </div>
  );
}

function WithoutViewAll() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Without View All">
      <SectionTitle />
    </div>
  );
}

function LeftText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Left Text">
      <WithoutViewAll />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[65.4px] text-nowrap">
        <p className="leading-[84px] whitespace-pre">NewsFlash</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[359.39px_84px] right-[-0.61px]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[-5px] h-[84px] right-[24px] w-[359.39px]" data-name="Mask Group">
      <Container3 />
    </div>
  );
}

function Cms() {
  return (
    <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1219.75px] py-[24px] relative shrink-0" data-name="CMS">
      <LeftText />
      <MaskGroup />
    </div>
  );
}

function CategoryDesktop() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center overflow-clip px-[300px] py-0 relative shrink-0" data-name="Category - Desktop">
      <Cms />
    </div>
  );
}

export default function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <CategoryDesktop />
    </div>
  );
}