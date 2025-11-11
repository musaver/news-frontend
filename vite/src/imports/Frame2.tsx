import imgEEzG0H1DTeYz7LzsDtWzB5AnJigJpg from "figma:asset/0ac14293fb0b5eb38d90b1504a310861219a68cb.png";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] text-nowrap">
        <p className="leading-[19px] whitespace-pre">About us</p>
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

function Cms() {
  return (
    <div className="box-border content-stretch flex h-full items-center pl-[16px] pr-[305.53px] py-[16px] relative shrink-0" data-name="CMS">
      <LeftText />
    </div>
  );
}

function PhoneV() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex h-[40px] items-center justify-center overflow-clip relative shrink-0" data-name="Phone v2">
      <Cms />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0" data-name="Container">
      <PhoneV />
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="leading-[22px]">Our Mission</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap whitespace-pre">
        <p className="mb-0">{`To deliver unbiased, timely, and comprehensive news that `}</p>
        <p className="mb-0">{`empowers readers to make informed decisions and fosters `}</p>
        <p>a deeper understanding of global events.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function AsideMission() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[0.81px] pt-0 px-0 relative shrink-0 w-full" data-name="Aside - Mission">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="leading-[22px]">Our Vision</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] text-nowrap whitespace-pre">
        <p className="mb-0">{`To be the most trusted and influential source of news, `}</p>
        <p className="mb-0">{`shaping global conversations and connecting the world `}</p>
        <p>through responsible journalism.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.81px] min-w-[358px] relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function AsideVision() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[0.81px] pt-0 px-0 relative shrink-0 w-full" data-name="Aside - Vision">
      <Container6 />
      <Container8 />
    </div>
  );
}

function MissionVision() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full z-[2]" data-name="Mission + Vision">
      <AsideMission />
      <AsideVision />
    </div>
  );
}

function EEzG0H1DTeYz7LzsDtWzB5AnJigJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="EEzG0h1dTEYz7lzsDTWzB5AnJig.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[108.15%] left-0 max-w-none top-0 w-full" src={imgEEzG0H1DTeYz7LzsDtWzB5AnJigJpg} />
      </div>
    </div>
  );
}

function FigurePhoto() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" data-name="Figure - Photo">
      <EEzG0H1DTeYz7LzsDtWzB5AnJigJpg />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">{`NewsFlash is the country’s leading online news `}</p>
        <p className="mb-0">{`agency, connecting millions of readers with timely, `}</p>
        <p className="mb-0">{`accurate, and impactful news from across the `}</p>
        <p className="mb-0">{`globe. Our mission is to provide reliable coverage `}</p>
        <p className="mb-0">{`on everything the world needs to know about the `}</p>
        <p className="mb-0">{`US and everything the US needs to know about the `}</p>
        <p className="mb-0">{`world. From breaking news to in-depth analysis on `}</p>
        <p className="mb-0">{`politics, business, culture, and international affairs, `}</p>
        <p className="mb-0">{`we are committed to delivering the information you `}</p>
        <p>need to stay informed.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="mb-0">{`At NewsFlash, we believe news should go beyond `}</p>
        <p className="mb-0">{`just reporting the facts; it should provide context, `}</p>
        <p className="mb-0">{`insight, and understanding. Our dedicated team of `}</p>
        <p className="mb-0">{`journalists works around the clock to ensure you `}</p>
        <p className="mb-0">{`get not only the headlines but also the deeper `}</p>
        <p className="mb-0">{`stories that shape our society. Whether it’s the `}</p>
        <p className="mb-0">{`latest political developments or economic trends, `}</p>
        <p className="mb-0">{`we bring a balanced and critical perspective, `}</p>
        <p className="mb-0">{`empowering our readers with the knowledge to `}</p>
        <p>make informed decisions.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="mb-0">{`We are proud of our commitment to journalistic `}</p>
        <p className="mb-0">{`integrity, delivering unbiased, fair, and transparent `}</p>
        <p className="mb-0">{`news. Our editorial team adheres to the highest `}</p>
        <p className="mb-0">{`standards, focusing on accuracy and depth to `}</p>
        <p className="mb-0">{`ensure that every story reflects the truth without `}</p>
        <p className="mb-0">{`sensationalism. In a world overwhelmed by `}</p>
        <p className="mb-0">{`information, NewsFlash stands out as a trusted `}</p>
        <p>source that prioritizes clarity and credibility.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.29px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">{`In addition to our domestic coverage, NewsFlash `}</p>
        <p className="mb-0">{`has a strong international presence, with `}</p>
        <p className="mb-0">{`correspondents around the globe providing `}</p>
        <p className="mb-0">{`firsthand reporting on global events. We believe `}</p>
        <p className="mb-0">{`that understanding international developments is `}</p>
        <p className="mb-0">{`key to understanding national ones, and our global `}</p>
        <p className="mb-0">{`reach allows us to bring you a truly comprehensive `}</p>
        <p>perspective on world affairs.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.29px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">{`As a digital-first platform, NewsFlash is committed `}</p>
        <p className="mb-0">{`to innovation, utilizing cutting-edge technology to `}</p>
        <p className="mb-0">{`deliver news in accessible and engaging formats. `}</p>
        <p className="mb-0">{`Whether you’re browsing on your phone, tablet, or `}</p>
        <p className="mb-0">{`desktop, we ensure you can stay informed `}</p>
        <p className="mb-0">{`wherever you are. Our goal is simple: to empower `}</p>
        <p className="mb-0">{`readers by delivering news that shapes opinions, `}</p>
        <p className="mb-0">{`sparks conversations, and connects you to the `}</p>
        <p>world.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.19px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full z-[1]" data-name="Container">
      <FigurePhoto />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="max-w-[480px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] isolate items-start max-w-inherit pb-[60px] pt-[24px] px-[16px] relative w-full">
          <MissionVision />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Container2 />
      <Container16 />
    </div>
  );
}