import imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/cdbd26f6642cc800f7472898d5c8e58df6e56ce8.png";
import imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg from "figma:asset/1fc3e7faf42b10c6656188c7582ed5c975bfd82a.png";
import imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg from "figma:asset/ca8b64e52ffb6913cef606d8d759851d3f013467.png";
import imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg from "figma:asset/0e98d91359ec311902b782518507b4a13078b21b.png";
import imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg from "figma:asset/bf6b1ab96f0245367060fe83ecd3c718cfb105e3.png";
import imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg from "figma:asset/db0f642032e2a177ddb992ac654d59cbf19a6c21.png";
import imgAXak9AHzVg115TjUny1Yw7Ll94Jpg from "figma:asset/3c4fc92d4071fe48921d42677b9966356af090d2.png";
import imgActiveIHOlyDcj050N5XfipAyaWShJaJpg from "figma:asset/e17bff5234d530dd27f71117df85dfb0484f4eaa.png";
import imgActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg from "figma:asset/638304a2b73989458164a37571e5f91cd289fe4a.png";
import imgActiveItMcmByZhywRiIpiQ3C69Q4Uds0Jpg from "figma:asset/669c35452fe29ca46f8378365d0c0c5eb2633cb2.png";
import imgActiveMgReaTfYzZhzbGFuVBuPIvXbky8Jpg from "figma:asset/78ba1ffdcbed63ec631cab70a9a6760dcd976d55.png";
import img3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg from "figma:asset/789172bc6e60d4b6bac3660d51e504660c09ff73.png";
import imgFmhL5GnqfOzUewc85GjDHnoP60Jpg from "figma:asset/2970085a861088514d795380ced45d85702a6093.png";
import imgUJ0THpy0DJez1IdltmncZ5ADcI8Jpg from "figma:asset/79a1ae39d580ff37c2106c0782a77005e8b4e1e8.png";
import imgJjMbB0HkdIEw2MZhy87YGq7JjAJpg from "figma:asset/583f4aea5011119298c95712ee6e5bb2df9b7ea4.png";
import imgPhotoYaKHjHargn0KKefshKMiii72AgJpg from "figma:asset/b6c50a5076c56cc4d08b98fba90fdd9a563df433.png";
import imgVbTbiPvjA8FnWKb3WM1CUh3XoJpg from "figma:asset/2e2e91b644507af6ff6d755e7aa800a82564efc4.png";
import img3R5TZJnhVxRAvD1UnuRfFTlfKcJpg from "figma:asset/b678e07febb2b84647a55736db554a4d4a2bc32d.png";
import imgUJjmygpXuubbfyWqUr9JvVv0LZaJpg from "figma:asset/a3976810f1e3b94e7cba1e19936a219c4f6e9a7b.png";
import { imgOverlay, imgOverlay1 } from "./svg-c2598";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.625px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Health</p>
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

function Dark() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[1149.64px]" data-name="Dark" />;
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-px items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Dark />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container4 />
      <Container5 />
    </div>
  );
}

function ViewAll() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="View All">
      <LinkViewAll />
    </div>
  );
}

function WithLine() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center justify-center overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="With Line">
      <SectionTitle />
      <Container2 />
      <ViewAll />
    </div>
  );
}

function WUSa65KrK8Qboe92Fcbj6LXpo2UJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="wUSa65krK8qboe92FCBJ6lXpo2U.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-4.73%] max-w-none top-0 w-[109.46%]" src={imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg} />
      </div>
    </div>
  );
}

function Overlay() {
  return <div className="absolute bg-[#020a1c] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }} />;
}

function OverlayMaskGroup() {
  return (
    <div className="absolute inset-0" data-name="Overlay:mask-group">
      <Overlay />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap">
        <p className="leading-[15.6px] text-[10.875px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Category">
      <Container6 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[rgba(255,255,255,0.6)] rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Section Title">
      <Category />
      <Divider />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap">
        <p className="leading-[15.6px] text-[11.25px] whitespace-pre">Sep 23, 2024</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <Container7 />
    </div>
  );
}

function SectionNameDatePosted() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle1 />
      <Date />
    </div>
  );
}

function HeadlineHeading() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Headline → Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full">
        <p className="leading-[21.6px] text-[16.594px]">The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve</p>
      </div>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="absolute bottom-[23.59px] content-stretch flex flex-col gap-[3.01px] items-start left-[2.78%] overflow-clip right-[17.22%]" data-name="Link - Container">
      <SectionNameDatePosted />
      <HeadlineHeading />
    </div>
  );
}

function Active() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Active">
      <WUSa65KrK8Qboe92Fcbj6LXpo2UJpg />
      <OverlayMaskGroup />
      <LinkContainer />
    </div>
  );
}

function LargeSectionPhoto() {
  return (
    <div className="content-stretch flex flex-col h-[628px] items-start justify-center relative shrink-0 w-[864px]" data-name="Large Section Photo">
      <Active />
    </div>
  );
}

function PhotoTopStories() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Photo - Top Stories">
      <LargeSectionPhoto />
    </div>
  );
}

function ActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → ehdHqNeavRMfm6duj3eX7NYktmA.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-10.06%] max-w-none top-0 w-[120.12%]" src={imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg} />
      </div>
    </div>
  );
}

function FigureContainer() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container9 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 13, 2024</p>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container10 />
    </div>
  );
}

function SectionNameDatePosted1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle2 />
      <Divider1 />
      <Date1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] w-full">
        <p className="mb-0">Personalized Nutrition for Chronic</p>
        <p>Disease Management</p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container11 />
    </div>
  );
}

function ArticleHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted1 />
      <Article />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline />
    </div>
  );
}

function StoryWrapperLinkSmallPhotoTextRightDesktop() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer />
      <Content />
    </div>
  );
}

function ActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → uGpXT5aigglMD9kG6My0FX4JWC8.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-10.06%] max-w-none top-0 w-[120.12%]" src={imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg} />
      </div>
    </div>
  );
}

function FigureContainer1() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container12 />
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container13 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 3, 2024</p>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container14 />
    </div>
  );
}

function SectionNameDatePosted2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle3 />
      <Divider2 />
      <Date2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.625px] w-full">
        <p className="mb-0">Breakthrough in Diabetes Treatment:</p>
        <p>New Drug Offers Hope for Millions</p>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container15 />
    </div>
  );
}

function ArticleHeadline1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted2 />
      <Article1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline1 />
    </div>
  );
}

function StoryWrapperLinkSmallPhotoTextRightDesktop1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer1 />
      <Content1 />
    </div>
  );
}

function ActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → r9DqieJqIOGDc5DRnnVEwY8zs.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-9.88%] max-w-none top-0 w-[119.77%]" src={imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg} />
      </div>
    </div>
  );
}

function FigureContainer2() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container17 />
    </div>
  );
}

function Divider3() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 23, 2024</p>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container18 />
    </div>
  );
}

function SectionNameDatePosted3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle4 />
      <Divider3 />
      <Date3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] w-full">
        <p className="mb-0">Shaping the Future of U.S.</p>
        <p>Healthcare</p>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container19 />
    </div>
  );
}

function ArticleHeadline2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted3 />
      <Article2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline2 />
    </div>
  );
}

function StoryWrapperLinkSmallPhotoTextRightDesktop2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer2 />
      <Content2 />
    </div>
  );
}

function ActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → IZKB4Ycz7fVZhvkjzSFecg8g3qM.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-3.33%] max-w-none top-0 w-[106.67%]" src={imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg} />
      </div>
    </div>
  );
}

function FigureContainer3() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container20 />
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container21 />
    </div>
  );
}

function Divider4() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 13, 2024</p>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container22 />
    </div>
  );
}

function SectionNameDatePosted4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle5 />
      <Divider4 />
      <Date4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] w-full">
        <p className="mb-0">Research Unveils Potential Cure for</p>
        <p>Cystic Fibrosis</p>
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container23 />
    </div>
  );
}

function ArticleHeadline3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted4 />
      <Article3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline3 />
    </div>
  );
}

function StoryWrapperLinkSmallPhotoTextRightDesktop3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer3 />
      <Content3 />
    </div>
  );
}

function ActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → hj3LYQWZsZH0Qed7Xqn2SGY670.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-10.06%] max-w-none top-0 w-[120.12%]" src={imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg} />
      </div>
    </div>
  );
}

function FigureContainer4() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container25 />
    </div>
  );
}

function Divider5() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 3, 2024</p>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container26 />
    </div>
  );
}

function SectionNameDatePosted5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle6 />
      <Divider5 />
      <Date5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.875px] w-full">
        <p className="mb-0">Enhancing Doctor-Patient</p>
        <p className="mb-0">Communication for Better Health</p>
        <p>Outcomes</p>
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container27 />
    </div>
  );
}

function ArticleHeadline4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted5 />
      <Article4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline4 />
    </div>
  );
}

function StoryWrapperLinkSmallPhotoTextRightDesktop4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer4 />
      <Content4 />
    </div>
  );
}

function ArticleArticlesHealthNews() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[18px] relative rounded-[8px] shrink-0 w-[432px]" data-name="Article - Articles → Health News">
      <StoryWrapperLinkSmallPhotoTextRightDesktop />
      <StoryWrapperLinkSmallPhotoTextRightDesktop1 />
      <StoryWrapperLinkSmallPhotoTextRightDesktop2 />
      <StoryWrapperLinkSmallPhotoTextRightDesktop3 />
      <StoryWrapperLinkSmallPhotoTextRightDesktop4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <PhotoTopStories />
      <ArticleArticlesHealthNews />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center max-w-[1320px] overflow-clip relative shrink-0 w-[1320px]" data-name="Container">
      <WithLine />
      <Content5 />
    </div>
  );
}

function SectionHealthNews() {
  return (
    <div className="bg-[rgba(226,232,240,0.2)] relative shrink-0 w-full" data-name="Section - Health News">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[24px] py-[48px] relative w-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function ContentBullet1() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.375px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function SectionTitle7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet1 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll1 />
    </div>
  );
}

function ViewAll1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container34 />
    </div>
  );
}

function WithoutLine() {
  return (
    <div className="box-border content-stretch flex items-center justify-between overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="Without Line">
      <SectionTitle7 />
      <ViewAll1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.688px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function SectionTitle8() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container36 />
    </div>
  );
}

function Divider6() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 15, 2024</p>
      </div>
    </div>
  );
}

function Date6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container37 />
    </div>
  );
}

function SectionNameDatePosted6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle8 />
      <Divider6 />
      <Date6 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] w-full">
        <p className="mb-0">Consumer Confidence Soars</p>
        <p className="mb-0">as Retail Sales Surge, Signaling</p>
        <p>Strong Economic Recovery</p>
      </div>
    </div>
  );
}

function Article5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container38 />
    </div>
  );
}

function ArticleHeadline5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted6 />
      <Article5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline5 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content6 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.688px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container39 />
    </div>
  );
}

function SectionTitle9() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container40 />
    </div>
  );
}

function Divider7() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 5, 2024</p>
      </div>
    </div>
  );
}

function Date7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container41 />
    </div>
  );
}

function SectionNameDatePosted7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle9 />
      <Divider7 />
      <Date7 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] w-full">
        <p className="mb-0">Virtual Reality Shopping Takes</p>
        <p>Center Stage</p>
      </div>
    </div>
  );
}

function Article6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container42 />
    </div>
  );
}

function ArticleHeadline6() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted7 />
      <Article6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline6 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content7 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.688px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container43 />
    </div>
  );
}

function SectionTitle10() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container44 />
    </div>
  );
}

function Divider8() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 15, 2024</p>
      </div>
    </div>
  );
}

function Date8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container45 />
    </div>
  );
}

function SectionNameDatePosted8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle10 />
      <Divider8 />
      <Date8 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] w-full">
        <p className="mb-0">Renewable Energy Sector</p>
        <p className="mb-0">Soars with Record Investments</p>
        <p>from Major Corporations</p>
      </div>
    </div>
  );
}

function Article7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container46 />
    </div>
  );
}

function ArticleHeadline7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted8 />
      <Article7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline7 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content8 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.688px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container47 />
    </div>
  );
}

function SectionTitle11() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container48 />
    </div>
  );
}

function Divider9() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 5, 2024</p>
      </div>
    </div>
  );
}

function Date9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container49 />
    </div>
  );
}

function SectionNameDatePosted9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle11 />
      <Divider9 />
      <Date9 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.875px] w-full">
        <p className="mb-0">Tech Giant Unveils</p>
        <p className="mb-0">Groundbreaking AI Platform,</p>
        <p>Revolutionizing Digital…</p>
      </div>
    </div>
  );
}

function Article8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container50 />
    </div>
  );
}

function ArticleHeadline8() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted9 />
      <Article8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline8 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content9 />
    </div>
  );
}

function ArticleBusinessNewsCms() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Article - Business News CMS">
      <StoryWrapperLinkTextOnlyDesktop />
      <StoryWrapperLinkTextOnlyDesktop1 />
      <StoryWrapperLinkTextOnlyDesktop2 />
      <StoryWrapperLinkTextOnlyDesktop3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start overflow-clip p-[24px] relative rounded-[6px] shrink-0 w-[301.33px]" data-name="Content">
      <ArticleBusinessNewsCms />
    </div>
  );
}

function AXak9AHzVg115TjUny1Yw7Ll94Jpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="aXak9AHzVg115TjUNY1yw7LL94.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-16.82%] max-w-none top-0 w-[133.65%]" src={imgAXak9AHzVg115TjUny1Yw7Ll94Jpg} />
      </div>
    </div>
  );
}

function Overlay1() {
  return <div className="absolute bg-[#020a1c] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay1}')` }} />;
}

function OverlayMaskGroup1() {
  return (
    <div className="absolute inset-0" data-name="Overlay:mask-group">
      <Overlay1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.688px] text-[rgba(255,255,255,0.6)] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Category1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Category">
      <Container51 />
    </div>
  );
}

function Divider10() {
  return <div className="bg-[rgba(255,255,255,0.6)] rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function SectionTitle12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Section Title">
      <Category1 />
      <Divider10 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.25px] text-[rgba(255,255,255,0.6)] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 15, 2024</p>
      </div>
    </div>
  );
}

function Date10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <Container52 />
    </div>
  );
}

function SectionNameDatePosted10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle12 />
      <Date10 />
    </div>
  );
}

function HeadlineHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Headline → Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[21.6px] not-italic relative shrink-0 text-[16.734px] text-white w-full">
        <p className="mb-0">{`Consumer Confidence Soars as Retail Sales Surge, `}</p>
        <p>Signaling Strong Economic Recovery</p>
      </div>
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="absolute bottom-[23.98px] content-stretch flex flex-col gap-[2.8px] items-start left-[4.74%] overflow-clip right-[15.26%]" data-name="Link - Container">
      <SectionNameDatePosted10 />
      <HeadlineHeading1 />
    </div>
  );
}

function Active1() {
  return (
    <div className="h-[451px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Active">
      <AXak9AHzVg115TjUny1Yw7Ll94Jpg />
      <OverlayMaskGroup1 />
      <LinkContainer1 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[506.67px]" data-name="Container">
      <Active1 />
    </div>
  );
}

function PhotoBusinessNews() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0 w-[506.67px]" data-name="Photo - Business News">
      <Container53 />
    </div>
  );
}

function ContainerBusiness() {
  return (
    <div className="content-stretch flex gap-[24px] h-[451px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container - Business">
      <Content10 />
      <PhotoBusinessNews />
    </div>
  );
}

function SectionBusinessNews() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] self-stretch shrink-0 w-[880px]" data-name="Section - Business News">
      <WithoutLine />
      <ContainerBusiness />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">Fashion</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function Active2() {
  return (
    <div className="bg-slate-300 box-border content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[12px] py-[4px] relative shrink-0 w-[208px]" data-name="Active">
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16.313px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">Real Estate</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container56 />
    </div>
  );
}

function Inactive() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex flex-col h-full items-center justify-center overflow-clip px-[12px] py-[4px] relative shrink-0 w-[208px]" data-name="Inactive">
      <Container57 />
    </div>
  );
}

function SectionTabs() {
  return (
    <div className="bg-[rgba(226,232,240,0.2)] content-stretch flex h-[60px] items-center overflow-clip relative shrink-0 w-full" data-name="Section Tabs">
      <Active2 />
      <Inactive />
      <div className="absolute inset-0" data-name="HorizontalBorder">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ActiveIHOlyDcj050N5XfipAyaWShJaJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → iHOlyDcj050n5XFIPAyaWShJA.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-21.36%] max-w-none top-0 w-[142.72%]" src={imgActiveIHOlyDcj050N5XfipAyaWShJaJpg} />
      </div>
    </div>
  );
}

function FigureContainer5() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveIHOlyDcj050N5XfipAyaWShJaJpg />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Fashion</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container58 />
    </div>
  );
}

function SectionTitle13() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container59 />
    </div>
  );
}

function Divider11() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 21, 2024</p>
      </div>
    </div>
  );
}

function Date11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container60 />
    </div>
  );
}

function SectionNameDatePosted11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle13 />
      <Divider11 />
      <Date11 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">Bold and Beautiful: Fall 2024</p>
        <p>Fashion Trends to Watch</p>
      </div>
    </div>
  );
}

function Article9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container61 />
    </div>
  );
}

function ArticleHeadline9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted11 />
      <Article9 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline9 />
    </div>
  );
}

function ArticleStoryWrapperLinkSmallPhotoTextRightDesktop() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Article → Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer5 />
      <Content11 />
    </div>
  );
}

function ActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → EuJS2G8yndKpCNI4BUar7bKw4VM.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-10.06%] max-w-none top-0 w-[120.12%]" src={imgActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg} />
      </div>
    </div>
  );
}

function FigureContainer6() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Fashion</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container62 />
    </div>
  );
}

function SectionTitle14() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container63 />
    </div>
  );
}

function Divider12() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 11, 2024</p>
      </div>
    </div>
  );
}

function Date12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container64 />
    </div>
  );
}

function SectionNameDatePosted12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle14 />
      <Divider12 />
      <Date12 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.875px] w-full">
        <p className="mb-0">Breaking Boundaries and</p>
        <p className="mb-0">Embracing the Freedom of</p>
        <p>Gender-Fluid Fashion</p>
      </div>
    </div>
  );
}

function Article10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container65 />
    </div>
  );
}

function ArticleHeadline10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted12 />
      <Article10 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline10 />
    </div>
  );
}

function ArticleStoryWrapperLinkSmallPhotoTextRightDesktop1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Article → Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer6 />
      <Content12 />
    </div>
  );
}

function ActiveItMcmByZhywRiIpiQ3C69Q4Uds0Jpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → ItMcmBYZhywRIIpiQ3C69q4Uds0.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-9.02%] max-w-none top-0 w-[118.04%]" src={imgActiveItMcmByZhywRiIpiQ3C69Q4Uds0Jpg} />
      </div>
    </div>
  );
}

function FigureContainer7() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveItMcmByZhywRiIpiQ3C69Q4Uds0Jpg />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Fashion</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container66 />
    </div>
  );
}

function SectionTitle15() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container67 />
    </div>
  );
}

function Divider13() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 1, 2024</p>
      </div>
    </div>
  );
}

function Date13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container68 />
    </div>
  );
}

function SectionNameDatePosted13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle15 />
      <Divider13 />
      <Date13 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">Monochrome Magic: Mastering</p>
        <p>the Art of Single-Color Outfits</p>
      </div>
    </div>
  );
}

function Article11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container69 />
    </div>
  );
}

function ArticleHeadline11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted13 />
      <Article11 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline11 />
    </div>
  );
}

function ArticleStoryWrapperLinkSmallPhotoTextRightDesktop2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Article → Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer7 />
      <Content13 />
    </div>
  );
}

function ActiveMgReaTfYzZhzbGFuVBuPIvXbky8Jpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[125px]" data-name="Active → MGReaTFYzZhzbGFuVBuPIvXbky8.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-10.06%] max-w-none top-0 w-[120.12%]" src={imgActiveMgReaTfYzZhzbGFuVBuPIvXbky8Jpg} />
      </div>
    </div>
  );
}

function FigureContainer8() {
  return (
    <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
      <ActiveMgReaTfYzZhzbGFuVBuPIvXbky8Jpg />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Fashion</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container70 />
    </div>
  );
}

function SectionTitle16() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container71 />
    </div>
  );
}

function Divider14() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 11, 2024</p>
      </div>
    </div>
  );
}

function Date14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container72 />
    </div>
  );
}

function SectionNameDatePosted14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle16 />
      <Divider14 />
      <Date14 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">Cottagecore Chic: Embracing</p>
        <p className="mb-0">the Nostalgic and Nature-</p>
        <p>Inspired Trend</p>
      </div>
    </div>
  );
}

function Article12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container73 />
    </div>
  );
}

function ArticleHeadline12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted14 />
      <Article12 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
      <ArticleHeadline12 />
    </div>
  );
}

function ArticleStoryWrapperLinkSmallPhotoTextRightDesktop3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Article → Story Wrapper → Link - Small Photo + Text Right [Desktop]">
      <FigureContainer8 />
      <Content14 />
    </div>
  );
}

function SelectedTab() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Selected Tab">
      <ArticleStoryWrapperLinkSmallPhotoTextRightDesktop />
      <ArticleStoryWrapperLinkSmallPhotoTextRightDesktop1 />
      <ArticleStoryWrapperLinkSmallPhotoTextRightDesktop2 />
      <ArticleStoryWrapperLinkSmallPhotoTextRightDesktop3 />
    </div>
  );
}

function RealEsate() {
  return (
    <div className="relative shrink-0 w-full" data-name="Real Esate">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[24px] relative w-full">
          <SelectedTab />
        </div>
      </div>
    </div>
  );
}

function SectionFashion() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Section - Fashion">
      <SectionTabs />
      <RealEsate />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]" data-name="Container">
      <SectionFashion />
    </div>
  );
}

function FashionRealEstate() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[416px]" data-name="Fashion + Real Estate">
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center max-w-[1320px] relative shrink-0 w-[1320px]" data-name="Container">
      <SectionBusinessNews />
      <FashionRealEstate />
    </div>
  );
}

function SectionMultiSectionBusinessFashionRealEstate() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section - Multi-Section (Business, Fashion, Real Estate)">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[24px] py-[48px] relative w-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function ContentBullet2() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.125px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Travel</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container76 />
    </div>
  );
}

function SectionTitle17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet2 />
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container80() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll2 />
    </div>
  );
}

function ViewAll2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container81 />
    </div>
  );
}

function WithoutLine1() {
  return (
    <div className="box-border content-stretch flex items-center justify-between overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="Without Line">
      <SectionTitle17 />
      <ViewAll2 />
    </div>
  );
}

function Component3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="3BG6dbLVYizb3S9S6iDTzSSW9rw.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-3.54%] max-w-none top-0 w-[107.08%]" src={img3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg} />
      </div>
    </div>
  );
}

function Active3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-[281.25px]" data-name="Active">
      <Component3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start justify-center relative shrink-0" data-name="Container">
      <Active3 />
    </div>
  );
}

function LinkReadArticleOnTravel() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="Link - Read article on Travel">
      <Container82 />
    </div>
  );
}

function FigurePhotoTravelNews() {
  return (
    <div className="content-stretch flex h-[200px] items-start relative shrink-0 w-full" data-name="Figure - Photo - Travel News">
      <LinkReadArticleOnTravel />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.5px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Travel</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container83 />
    </div>
  );
}

function SectionTitle18() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container84 />
    </div>
  );
}

function Divider15() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 19, 2024</p>
      </div>
    </div>
  );
}

function Date15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container85 />
    </div>
  );
}

function SectionNameDatePosted15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle18 />
      <Divider15 />
      <Date15 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">Digital Nomads Redefine the New</p>
        <p>Normal to Work and Travel</p>
      </div>
    </div>
  );
}

function Article13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container86 />
    </div>
  );
}

function ArticleHeadline13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted15 />
      <Article13 />
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline13 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content15 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.5px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Travel</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container87 />
    </div>
  );
}

function SectionTitle19() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container88 />
    </div>
  );
}

function Divider16() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 9, 2024</p>
      </div>
    </div>
  );
}

function Date16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container89 />
    </div>
  );
}

function SectionNameDatePosted16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle19 />
      <Divider16 />
      <Date16 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.313px] w-full">
        <p className="mb-0">Luxury Train Journeys: A Timeless</p>
        <p>Adventure on the Rails</p>
      </div>
    </div>
  );
}

function Article14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container90 />
    </div>
  );
}

function ArticleHeadline14() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted16 />
      <Article14 />
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline14 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content16 />
    </div>
  );
}

function ArticlesCms() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Articles CMS">
      <StoryWrapperLinkTextOnlyDesktop4 />
      <StoryWrapperLinkTextOnlyDesktop5 />
    </div>
  );
}

function Travel() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Travel">
      <WithoutLine1 />
      <FigurePhotoTravelNews />
      <ArticlesCms />
    </div>
  );
}

function Dark1() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-px" data-name="Container">
      <Dark1 />
    </div>
  );
}

function ContentBullet3() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.625px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Entertainment</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container92 />
    </div>
  );
}

function SectionTitle20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet3 />
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container94 />
    </div>
  );
}

function Container96() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll3 />
    </div>
  );
}

function ViewAll3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container97 />
    </div>
  );
}

function WithoutLine2() {
  return (
    <div className="box-border content-stretch flex items-center justify-between overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="Without Line">
      <SectionTitle20 />
      <ViewAll3 />
    </div>
  );
}

function FmhL5GnqfOzUewc85GjDHnoP60Jpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="fmhL5gnqfOzUEWC85GjDHnoP60.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-13.21%] max-w-none top-0 w-[126.42%]" src={imgFmhL5GnqfOzUewc85GjDHnoP60Jpg} />
      </div>
    </div>
  );
}

function Active4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-[281.25px]" data-name="Active">
      <FmhL5GnqfOzUewc85GjDHnoP60Jpg />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start justify-center relative shrink-0" data-name="Container">
      <Active4 />
    </div>
  );
}

function LinkReadArticleOnEntertainment() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="Link - Read article on Entertainment">
      <Container98 />
    </div>
  );
}

function PhotoEntertainment() {
  return (
    <div className="content-stretch flex h-[200px] items-start relative shrink-0 w-full" data-name="Photo - Entertainment">
      <LinkReadArticleOnEntertainment />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Entertainment</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container99 />
    </div>
  );
}

function SectionTitle21() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container100 />
    </div>
  );
}

function Divider17() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 18, 2024</p>
      </div>
    </div>
  );
}

function Date17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container101 />
    </div>
  );
}

function SectionNameDatePosted17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle21 />
      <Divider17 />
      <Date17 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">Timeless TV Shows Make a</p>
        <p className="mb-0">Spectacular Comeback with</p>
        <p>Famous Stars</p>
      </div>
    </div>
  );
}

function Article15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container102 />
    </div>
  );
}

function ArticleHeadline15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted17 />
      <Article15 />
    </div>
  );
}

function Content17() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline15 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content17 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Entertainment</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container103 />
    </div>
  );
}

function SectionTitle22() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container104 />
    </div>
  );
}

function Divider18() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 8, 2024</p>
      </div>
    </div>
  );
}

function Date18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container105 />
    </div>
  );
}

function SectionNameDatePosted18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle22 />
      <Divider18 />
      <Date18 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">Celebrity Collaborations Heat Up:</p>
        <p className="mb-0">Stars Team Up for</p>
        <p>Groundbreaking Projects</p>
      </div>
    </div>
  );
}

function Article16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container106 />
    </div>
  );
}

function ArticleHeadline16() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted18 />
      <Article16 />
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline16 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content18 />
    </div>
  );
}

function Articles() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Articles">
      <StoryWrapperLinkTextOnlyDesktop6 />
      <StoryWrapperLinkTextOnlyDesktop7 />
    </div>
  );
}

function Entertainment() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Entertainment">
      <WithoutLine2 />
      <PhotoEntertainment />
      <Articles />
    </div>
  );
}

function ContentBullet4() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.375px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Sports</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container107 />
    </div>
  );
}

function SectionTitle23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet4 />
      <Container108 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container109 />
    </div>
  );
}

function Container111() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll4 />
    </div>
  );
}

function ViewAll4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container112 />
    </div>
  );
}

function WithoutLine3() {
  return (
    <div className="box-border content-stretch flex items-center justify-between overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="Without Line">
      <SectionTitle23 />
      <ViewAll4 />
    </div>
  );
}

function UJ0THpy0DJez1IdltmncZ5ADcI8Jpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="uJ0tHPY0dJEZ1idltmncZ5ADcI8.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-3.39%] max-w-none top-0 w-[106.77%]" src={imgUJ0THpy0DJez1IdltmncZ5ADcI8Jpg} />
      </div>
    </div>
  );
}

function Active5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-[281.25px]" data-name="Active">
      <UJ0THpy0DJez1IdltmncZ5ADcI8Jpg />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start justify-center relative shrink-0" data-name="Container">
      <Active5 />
    </div>
  );
}

function LinkReadArticleOnSports() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="Link - Read article on Sports">
      <Container113 />
    </div>
  );
}

function PhotoSports() {
  return (
    <div className="content-stretch flex h-[200px] items-start relative shrink-0 w-full" data-name="Photo - Sports">
      <LinkReadArticleOnSports />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.688px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sports</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container114 />
    </div>
  );
}

function SectionTitle24() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container115 />
    </div>
  );
}

function Divider19() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 17, 2024</p>
      </div>
    </div>
  );
}

function Date19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container116 />
    </div>
  );
}

function SectionNameDatePosted19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle24 />
      <Divider19 />
      <Date19 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.734px] w-full">
        <p className="mb-0">US Swimmer Smashes World</p>
        <p>Record in 2024 Olympics</p>
      </div>
    </div>
  );
}

function Article17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container117 />
    </div>
  );
}

function ArticleHeadline17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted19 />
      <Article17 />
    </div>
  );
}

function Content19() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline17 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content19 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.688px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sports</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container118 />
    </div>
  );
}

function SectionTitle25() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container119 />
    </div>
  );
}

function Divider20() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 7, 2024</p>
      </div>
    </div>
  );
}

function Date20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container120 />
    </div>
  );
}

function SectionNameDatePosted20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle25 />
      <Divider20 />
      <Date20 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">Historic Gold for US Gymnast at</p>
        <p>2024 Olympics</p>
      </div>
    </div>
  );
}

function Article18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container121 />
    </div>
  );
}

function ArticleHeadline18() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted20 />
      <Article18 />
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline18 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content20 />
    </div>
  );
}

function Articles1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Articles">
      <StoryWrapperLinkTextOnlyDesktop8 />
      <StoryWrapperLinkTextOnlyDesktop9 />
    </div>
  );
}

function Sports() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Sports">
      <WithoutLine3 />
      <PhotoSports />
      <Articles1 />
    </div>
  );
}

function ContentBullet5() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Tech</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container122 />
    </div>
  );
}

function SectionTitle26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet5 />
      <Container123 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container124 />
    </div>
  );
}

function Container126() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll5 />
    </div>
  );
}

function ViewAll5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container127 />
    </div>
  );
}

function WithoutLine4() {
  return (
    <div className="box-border content-stretch flex items-center justify-between overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="Without Line">
      <SectionTitle26 />
      <ViewAll5 />
    </div>
  );
}

function JjMbB0HkdIEw2MZhy87YGq7JjAJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="jjMbB0hkdIEw2mZhy87yGq7jjA.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-3.39%] max-w-none top-0 w-[106.77%]" src={imgJjMbB0HkdIEw2MZhy87YGq7JjAJpg} />
      </div>
    </div>
  );
}

function Active6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-[281.25px]" data-name="Active">
      <JjMbB0HkdIEw2MZhy87YGq7JjAJpg />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start justify-center relative shrink-0" data-name="Container">
      <Active6 />
    </div>
  );
}

function LinkReadArticleOnTech() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0" data-name="Link - Read article on Tech">
      <Container128 />
    </div>
  );
}

function PhotoTechNews() {
  return (
    <div className="content-stretch flex h-[200px] items-start relative shrink-0 w-full" data-name="Photo - Tech News">
      <LinkReadArticleOnTech />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Tech</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container129 />
    </div>
  );
}

function SectionTitle27() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container130 />
    </div>
  );
}

function Divider21() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 16, 2024</p>
      </div>
    </div>
  );
}

function Date21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container131 />
    </div>
  );
}

function SectionNameDatePosted21() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle27 />
      <Divider21 />
      <Date21 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">AI Revolution Drives Tech</p>
        <p>Innovation in 2024</p>
      </div>
    </div>
  );
}

function Article19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container132 />
    </div>
  );
}

function ArticleHeadline19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted21 />
      <Article19 />
    </div>
  );
}

function Content21() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline19 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content21 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Tech</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container133 />
    </div>
  );
}

function SectionTitle28() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container134 />
    </div>
  );
}

function Divider22() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 6, 2024</p>
      </div>
    </div>
  );
}

function Date22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container135 />
    </div>
  );
}

function SectionNameDatePosted22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle28 />
      <Divider22 />
      <Date22 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[23px] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] w-full">
        <p className="mb-0">Modern tech are revolutionizing</p>
        <p>how we interact with our devices</p>
      </div>
    </div>
  );
}

function Article20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container136 />
    </div>
  );
}

function ArticleHeadline20() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted22 />
      <Article20 />
    </div>
  );
}

function Content22() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline20 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkTextOnlyDesktop11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Story Wrapper → Link - Text Only [Desktop]">
      <Content22 />
    </div>
  );
}

function ArticlesCms1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Articles CMS">
      <StoryWrapperLinkTextOnlyDesktop10 />
      <StoryWrapperLinkTextOnlyDesktop11 />
    </div>
  );
}

function Tech() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Tech">
      <WithoutLine4 />
      <PhotoTechNews />
      <ArticlesCms1 />
    </div>
  );
}

function Section4Sections() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-start max-w-[1320px] overflow-clip px-[24px] py-[48px] relative shrink-0 w-[1320px]" data-name="Section - 4 Sections">
      <Travel />
      <Container91 />
      <Entertainment />
      <Container91 />
      <Sports />
      <Container91 />
      <Tech />
    </div>
  );
}

function PhotoYaKHjHargn0KKefshKMiii72AgJpg() {
  return (
    <div className="relative rounded-[8px] self-stretch shrink-0 w-[800px]" data-name="photo → yaKHjHARGN0KKefshKMiii72ag.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-2.83%] max-w-none top-0 w-[105.66%]" src={imgPhotoYaKHjHargn0KKefshKMiii72AgJpg} />
      </div>
    </div>
  );
}

function ContentBullet6() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.625px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Podcast</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container137 />
    </div>
  );
}

function SectionTitle29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet6 />
      <Container138 />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-nowrap">
        <p className="leading-[22px] text-[14.5px] whitespace-pre">view all</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container139 />
    </div>
  );
}

function Container141() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container140 />
      <Container141 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll6 />
    </div>
  );
}

function ViewAll6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container142 />
    </div>
  );
}

function WithoutLine5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Without Line">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[2px] pr-[4px] py-0 relative w-full">
          <SectionTitle29 />
          <ViewAll6 />
        </div>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <WithoutLine5 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.734px] w-full">
        <p className="mb-0">{`Dive into our Top 5 selection of the best podcasts, `}</p>
        <p className="mb-0">{`featuring everything from latest tech to trending `}</p>
        <p>tunes. Press the play button now!</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="description">
      <Container144 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container143 />
      <Description />
    </div>
  );
}

function VbTbiPvjA8FnWKb3WM1CUh3XoJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="vbTbiPvjA8FnWKb3wM1cUh3Xo.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-9.51%] max-w-none top-0 w-[119.02%]" src={imgVbTbiPvjA8FnWKb3WM1CUh3XoJpg} />
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="h-[110px] overflow-clip relative rounded-[8px] shrink-0 w-[140px]" data-name="Thumbnail">
      <VbTbiPvjA8FnWKb3WM1CUh3XoJpg />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[15px] w-full">
        <p className="leading-[20.8px]">Tech Tomorrow</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <Container146 />
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[64px] justify-center leading-[16px] left-0 not-italic text-[#020a1c] text-[12.797px] top-[31.5px] translate-y-[-50%] w-[221.4px]">
        <p className="mb-0">Stay ahead of the curve with the</p>
        <p className="mb-0">latest advancements in technology.</p>
        <p className="mb-0">From AI breakthroughs to the futur…</p>
        <p>of space exploration, each episode</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container147 />
    </div>
  );
}

function AudioPlayerTitleEposide() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip pb-0 pt-[8px] px-0 relative shrink-0 w-[228px]" data-name="Audio Player → Title + Eposide">
      <Title />
      <Description1 />
    </div>
  );
}

function Podcast() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Podcast 1">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[16px] items-start pl-0 pr-[16px] py-0 relative w-full">
          <Thumbnail />
          <AudioPlayerTitleEposide />
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Desktop">
      <Podcast />
    </div>
  );
}

function Container148() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Desktop />
    </div>
  );
}

function Link() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Link">
      <Container148 />
    </div>
  );
}

function Component3R5TZJnhVxRAvD1UnuRfFTlfKcJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="3r5tZJnhVxRAvD1UnuRfFTlfKc.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-19.84%] max-w-none top-0 w-[139.68%]" src={img3R5TZJnhVxRAvD1UnuRfFTlfKcJpg} />
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="h-[110px] overflow-clip relative rounded-[8px] shrink-0 w-[140px]" data-name="Thumbnail">
      <Component3R5TZJnhVxRAvD1UnuRfFTlfKcJpg />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[15.25px] w-full">
        <p className="leading-[20.8px]">Culture Connect</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <Container149 />
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[64px] justify-center leading-[16px] left-0 not-italic text-[#020a1c] text-[12.797px] top-[31.5px] translate-y-[-50%] w-[225.78px]">
        <p className="mb-0">Explore the rich tapestry of global</p>
        <p className="mb-0">cultures in this podcast that takes</p>
        <p className="mb-0">you on a journey across continents.…</p>
        <p>Each episode features in-depth</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container150 />
    </div>
  );
}

function AudioPlayerTitleEposide1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip pb-0 pt-[8px] px-0 relative shrink-0 w-[228px]" data-name="Audio Player → Title + Eposide">
      <Title1 />
      <Description2 />
    </div>
  );
}

function Podcast1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Podcast 1">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[16px] items-start pl-0 pr-[16px] py-0 relative w-full">
          <Thumbnail1 />
          <AudioPlayerTitleEposide1 />
        </div>
      </div>
    </div>
  );
}

function Desktop1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Desktop">
      <Podcast1 />
    </div>
  );
}

function Container151() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Desktop1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Link">
      <Container151 />
    </div>
  );
}

function UJjmygpXuubbfyWqUr9JvVv0LZaJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="uJjmygpXuubbfyWqUR9JVVv0lZA.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-8.99%] max-w-none top-0 w-[117.97%]" src={imgUJjmygpXuubbfyWqUr9JvVv0LZaJpg} />
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="h-[110px] overflow-clip relative rounded-[8px] shrink-0 w-[140px]" data-name="Thumbnail">
      <UJjmygpXuubbfyWqUr9JvVv0LZaJpg />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[15px] w-full">
        <p className="leading-[20.8px]">The Green Voices</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <Container152 />
    </div>
  );
}

function Container153() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[64px] justify-center leading-[16px] left-0 not-italic text-[#020a1c] text-[12.797px] top-[31.5px] translate-y-[-50%] w-[221.01px]">
        <p className="mb-0">Tune into the most pressing</p>
        <p className="mb-0">environmental issues of our time.</p>
        <p className="mb-0">From climate change to conservati…</p>
        <p>efforts, this podcast features</p>
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container153 />
    </div>
  );
}

function AudioPlayerTitleEposide2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip pb-0 pt-[8px] px-0 relative shrink-0 w-[228px]" data-name="Audio Player → Title + Eposide">
      <Title2 />
      <Description3 />
    </div>
  );
}

function Podcast2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Podcast 1">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[16px] items-start pl-0 pr-[16px] py-0 relative w-full">
          <Thumbnail2 />
          <AudioPlayerTitleEposide2 />
        </div>
      </div>
    </div>
  );
}

function Desktop2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Desktop">
      <Podcast2 />
    </div>
  );
}

function Container154() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Desktop2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Link">
      <Container154 />
    </div>
  );
}

function Podcast3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Podcast 1">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Content23() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative w-full">
          <Container145 />
          <Podcast3 />
          <div className="absolute bottom-[0.01%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start max-w-inherit p-[24px] relative w-full">
          <PhotoYaKHjHargn0KKefshKMiii72AgJpg />
          <Content23 />
        </div>
      </div>
    </div>
  );
}

function SectionDesktop() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[300px] py-[80px] relative shrink-0" data-name="Section - Desktop">
      <Container155 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <SectionHealthNews />
      <SectionMultiSectionBusinessFashionRealEstate />
      <Section4Sections />
      <SectionDesktop />
    </div>
  );
}