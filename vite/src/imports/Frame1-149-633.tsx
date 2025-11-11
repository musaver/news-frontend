import imgEEzG0H1DTeYz7LzsDtWzB5AnJigJpg from "figma:asset/9ba266d8c84a2d7a8a708eab431121d4515d2c2c.png";
import { imgContainer } from "./svg-tf6bx";

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
    <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1219px] py-[24px] relative shrink-0 pt-[86px] pb-[24px]" data-name="CMS">
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0" data-name="Container">
      <CategoryDesktop />
    </div>
  );
}

function Dark() {
  return <div className="bg-[rgba(203,213,225,0.35)] h-[1119.06px] shrink-0 w-full" data-name="Dark" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[389.73px] top-[40px] w-px" data-name="Container">
      <Dark />
    </div>
  );
}

function EEzG0H1DTeYz7LzsDtWzB5AnJigJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="EEzG0h1dTEYz7lzsDTWzB5AnJig.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[156.47%] left-0 max-w-none top-0 w-full" src={imgEEzG0H1DTeYz7LzsDtWzB5AnJigJpg} />
      </div>
    </div>
  );
}

function FigurePhoto() {
  return (
    <div className="h-[500px] overflow-clip relative rounded-[8px] shrink-0 w-[863.27px]" data-name="Figure - Photo">
      <EEzG0H1DTeYz7LzsDtWzB5AnJigJpg />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] w-full">
        <p className="mb-0">{`NewsFlash is the country’s leading online news agency, connecting millions of readers with timely, accurate, `}</p>
        <p className="mb-0">{`and impactful news from across the globe. Our mission is to provide reliable coverage on everything the `}</p>
        <p className="mb-0">{`world needs to know about the US and everything the US needs to know about the world. From breaking `}</p>
        <p className="mb-0">{`news to in-depth analysis on politics, business, culture, and international affairs, we are committed to `}</p>
        <p>delivering the information you need to stay informed.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] w-full">
        <p className="mb-0">{`At NewsFlash, we believe news should go beyond just reporting the facts; it should provide context, insight, `}</p>
        <p className="mb-0">{`and understanding. Our dedicated team of journalists works around the clock to ensure you get not only the `}</p>
        <p className="mb-0">{`headlines but also the deeper stories that shape our society. Whether it’s the latest political developments or `}</p>
        <p className="mb-0">{`economic trends, we bring a balanced and critical perspective, empowering our readers with the knowledge `}</p>
        <p>to make informed decisions.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] w-full">
        <p className="mb-0">{`We are proud of our commitment to journalistic integrity, delivering unbiased, fair, and transparent news. Our `}</p>
        <p className="mb-0">{`editorial team adheres to the highest standards, focusing on accuracy and depth to ensure that every story `}</p>
        <p className="mb-0">{`reflects the truth without sensationalism. In a world overwhelmed by information, NewsFlash stands out as a `}</p>
        <p>trusted source that prioritizes clarity and credibility.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] w-full">
        <p className="mb-0">{`In addition to our domestic coverage, NewsFlash has a strong international presence, with correspondents `}</p>
        <p className="mb-0">{`around the globe providing firsthand reporting on global events. We believe that understanding international `}</p>
        <p className="mb-0">{`developments is key to understanding national ones, and our global reach allows us to bring you a truly `}</p>
        <p>comprehensive perspective on world affairs.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] w-full">
        <p className="mb-0">{`As a digital-first platform, NewsFlash is committed to innovation, utilizing cutting-edge technology to deliver `}</p>
        <p className="mb-0">{`news in accessible and engaging formats. Whether you’re browsing on your phone, tablet, or desktop, we `}</p>
        <p className="mb-0">{`ensure you can stay informed wherever you are. Our goal is simple: to empower readers by delivering news `}</p>
        <p>that shapes opinions, sparks conversations, and connects you to the world.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[42px] items-center justify-center left-[432.73px] overflow-clip right-[24px] top-[40px]" data-name="Container">
      <FigurePhoto />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="leading-[22px]">Our Mission</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] text-nowrap whitespace-pre">
        <p className="mb-0">{`To deliver unbiased, timely, and `}</p>
        <p className="mb-0">{`comprehensive news that empowers readers `}</p>
        <p className="mb-0">{`to make informed decisions and fosters a `}</p>
        <p>deeper understanding of global events.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container14 />
    </div>
  );
}

function AsideMission() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Aside - Mission">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="leading-[22px]">Our Vision</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] text-nowrap whitespace-pre">
        <p className="mb-0">{`To be the most trusted and influential source `}</p>
        <p className="mb-0">{`of news, shaping global conversations and `}</p>
        <p className="mb-0">{`connecting the world through responsible `}</p>
        <p>journalism.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function AsideVision() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Aside - Vision">
      <Container16 />
      <Container18 />
    </div>
  );
}

function MissionVision() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pointer-events-auto sticky top-0" data-name="Mission + Vision">
      <AsideMission />
      <AsideVision />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[1239.06px] relative shrink-0 w-[1320px]" data-name="Container">
      <Container5 />
      <Container12 />
      <div className="absolute bottom-0 h-[calc(100%-40px)] left-[24px] pointer-events-none right-[972.27px] top-[40px]">
        <MissionVision />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <Container4 />
      <Container19 />
    </div>
  );
}