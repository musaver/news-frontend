import { imgContainer } from "./svg-4a9ab";

function Bullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.875px] w-full">
        <p className="leading-[22px]">Meet Our Author</p>
      </div>
    </div>
  );
}

function AuthorsName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]" data-name="Author\'s Name">
      <Container />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="content">
      <Bullet />
      <AuthorsName />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0" data-name="Container">
      <Content />
    </div>
  );
}

function LeftText() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="Left Text">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LeftText />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',_sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[74.834px] text-nowrap">
        <p className="leading-[94.8px] whitespace-pre">Our Author</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[-0.2px] content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[415.53px_94.8px] right-[-0.47px]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[-10px] h-[94.8px] right-[24px] w-[415.53px]" data-name="Mask Group">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="box-border content-stretch flex h-full items-center max-w-[1320px] p-[24px] relative shrink-0 w-[1320px]" data-name="Container">
      <Container2 />
      <MaskGroup />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex items-center justify-center relative size-full" data-name="Desktop">
      <Container5 />
      <div className="absolute inset-0" data-name="HorizontalBorder">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}