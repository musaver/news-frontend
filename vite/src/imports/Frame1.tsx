import imgYkdzXkigfF0F8F82KAIxjJiooJpg from "figma:asset/3446d0654933e115c754cdbcc62003d2fd74e953.png";

function Dark() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[917.25px]" data-name="Dark" />;
}

function YkdzXkigfF0F8F82KAIxjJiooJpg() {
  return (
    <div className="absolute inset-0 rounded-[99px]" data-name="YKDZXkigfF0f8F82kAIxjJioo.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
        <img alt="" className="absolute h-[125.03%] left-0 max-w-none top-[-12.52%] w-full" src={imgYkdzXkigfF0F8F82KAIxjJiooJpg} />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[30px]" data-name="Photo">
      <YkdzXkigfF0F8F82KAIxjJiooJpg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-nowrap">
        <p className="leading-[18.2px] text-[12.906px] whitespace-pre">Emily Davis</p>
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

function LinkAuthor() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Author">
      <Photo />
      <Container1 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.016px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Monday, September 23, 2024</p>
      </div>
    </div>
  );
}

function PublishedDate() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Published Date">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.125px] w-full">
        <p className="leading-[19.6px]">2 min read</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function ArticleDetails() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] items-center overflow-clip pl-[4px] pr-0 py-0 relative shrink-0 w-[476px]" data-name="Article Details">
      <LinkAuthor />
      <Divider />
      <PublishedDate />
      <Divider />
      <Container4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Dark />
      <ArticleDetails />
    </div>
  );
}