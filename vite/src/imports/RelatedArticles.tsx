import imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg from "figma:asset/1fc3e7faf42b10c6656188c7582ed5c975bfd82a.png";
import imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg from "figma:asset/ca8b64e52ffb6913cef606d8d759851d3f013467.png";
import imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg from "figma:asset/0e98d91359ec311902b782518507b4a13078b21b.png";
import imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg from "figma:asset/bf6b1ab96f0245367060fe83ecd3c718cfb105e3.png";
import imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg from "figma:asset/db0f642032e2a177ddb992ac654d59cbf19a6c21.png";
import imgActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg from "figma:asset/a4b019d1e6cec7ccfbef7d510b47c2015a017793.png";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Related Articles</p>
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

function SectionTitleWithoutViewAll() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip pl-0 pr-[794.94px] py-0 relative shrink-0" data-name="Section Title → Without View All">
      <SectionTitle />
    </div>
  );
}

function ActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[289.75px]" data-name="Active → ehdHqNeavRMfm6duj3eX7NYktmA.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-1.82%] max-w-none top-0 w-[103.64%]" src={imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg} />
      </div>
    </div>
  );
}

function FigureContainer() {
  return (
    <div className="content-stretch flex h-[200px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Figure - container">
      <ActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container3 />
    </div>
  );
}

function Divider() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 13, 2024</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container4 />
    </div>
  );
}

function SectionNameDatePosted() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
      <SectionTitle1 />
      <Divider />
      <Date />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[43.19px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[21.6px] left-0 not-italic text-[#020a1c] text-[16.594px] top-[20.8px] translate-y-[-50%] w-[266.37px]">
        <p className="mb-0">Personalized Nutrition for Chronic</p>
        <p>Disease Management</p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container5 />
    </div>
  );
}

function ArticleHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted />
      <Article />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkPhotoTextBelowDesktop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 overflow-clip right-[627.5px] top-0" data-name="Story Wrapper → Link - Photo + Text Below [Desktop]">
      <FigureContainer />
      <Content />
    </div>
  );
}

function ActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[289.75px]" data-name="Active → uGpXT5aigglMD9kG6My0FX4JWC8.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-1.82%] max-w-none top-0 w-[103.64%]" src={imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg} />
      </div>
    </div>
  );
}

function FigureContainer1() {
  return (
    <div className="content-stretch flex h-[200px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Figure - container">
      <ActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container7 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Sep 3, 2024</p>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container8 />
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

function Container9() {
  return (
    <div className="h-[64.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[65px] justify-center leading-[21.6px] left-0 not-italic text-[#020a1c] text-[16.594px] top-[31.59px] translate-y-[-50%] w-[269.43px]">
        <p className="mb-0">Breakthrough in Diabetes</p>
        <p className="mb-0">Treatment: New Drug Offers Hope</p>
        <p>for Millions</p>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container9 />
    </div>
  );
}

function ArticleHeadline1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted1 />
      <Article1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline1 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkPhotoTextBelowDesktop1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[313.75px] overflow-clip right-[313.75px] top-0" data-name="Story Wrapper → Link - Photo + Text Below [Desktop]">
      <FigureContainer1 />
      <Content1 />
    </div>
  );
}

function ActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[289.75px]" data-name="Active → r9DqieJqIOGDc5DRnnVEwY8zs.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-1.67%] max-w-none top-0 w-[103.34%]" src={imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg} />
      </div>
    </div>
  );
}

function FigureContainer2() {
  return (
    <div className="content-stretch flex h-[200px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Figure - container">
      <ActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container10 />
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container11 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 23, 2024</p>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container12 />
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

function Container13() {
  return (
    <div className="h-[43.19px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[21.6px] left-0 not-italic text-[#020a1c] text-[16.594px] top-[20.8px] translate-y-[-50%] w-[206.5px]">
        <p className="mb-0">Shaping the Future of U.S.</p>
        <p>Healthcare</p>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container13 />
    </div>
  );
}

function ArticleHeadline2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted2 />
      <Article2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline2 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkPhotoTextBelowDesktop2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[627.5px] overflow-clip right-0 top-0" data-name="Story Wrapper → Link - Photo + Text Below [Desktop]">
      <FigureContainer2 />
      <Content2 />
    </div>
  );
}

function ActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[289.75px]" data-name="Active → IZKB4Ycz7fVZhvkjzSFecg8g3qM.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[108.66%] left-0 max-w-none top-[-4.33%] w-full" src={imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg} />
      </div>
    </div>
  );
}

function FigureContainer3() {
  return (
    <div className="content-stretch flex h-[200px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Figure - container">
      <ActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
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

function SectionTitle4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container15 />
    </div>
  );
}

function Divider3() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.25px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 13, 2024</p>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container16 />
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

function Container17() {
  return (
    <div className="h-[43.19px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[21.6px] left-0 not-italic text-[#020a1c] text-[16.594px] top-[20.8px] translate-y-[-50%] w-[276.58px]">
        <p className="mb-0">Research Unveils Potential Cure for</p>
        <p>Cystic Fibrosis</p>
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container17 />
    </div>
  );
}

function ArticleHeadline3() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted3 />
      <Article3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline3 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkPhotoTextBelowDesktop3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 overflow-clip right-[627.5px] top-[320.37px]" data-name="Story Wrapper → Link - Photo + Text Below [Desktop]">
      <FigureContainer3 />
      <Content3 />
    </div>
  );
}

function ActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[289.75px]" data-name="Active → hj3LYQWZsZH0Qed7Xqn2SGY670.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-1.82%] max-w-none top-0 w-[103.64%]" src={imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg} />
      </div>
    </div>
  );
}

function FigureContainer4() {
  return (
    <div className="content-stretch flex h-[200px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Figure - container">
      <ActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container19 />
    </div>
  );
}

function Divider4() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.438px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Aug 3, 2024</p>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container20 />
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

function Container21() {
  return (
    <div className="h-[64.78px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[65px] justify-center leading-[21.6px] left-0 not-italic text-[#020a1c] text-[16.734px] top-[31.59px] translate-y-[-50%] w-[260.45px]">
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
      <Container21 />
    </div>
  );
}

function ArticleHeadline4() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted4 />
      <Article4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative w-full">
          <ArticleHeadline4 />
        </div>
      </div>
    </div>
  );
}

function StoryWrapperLinkPhotoTextBelowDesktop4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[313.75px] overflow-clip right-[313.75px] top-[320.37px]" data-name="Story Wrapper → Link - Photo + Text Below [Desktop]">
      <FigureContainer4 />
      <Content4 />
    </div>
  );
}

function ActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0 w-[289.75px]" data-name="Active → Omxhh2lZ0EHKJQg24Ix6GZlBQ3U.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-2.13%] max-w-none top-0 w-[104.25%]" src={imgActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg} />
      </div>
    </div>
  );
}

function FigureContainer5() {
  return (
    <div className="content-stretch flex h-[200px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Figure - container">
      <ActiveOmxhh2LZ0EhkjQg24Ix6GZlBq3UJpg />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
      <Container23 />
    </div>
  );
}

function Divider5() {
  return <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.625px] text-nowrap">
        <p className="leading-[15.6px] whitespace-pre">Jul 30, 2024</p>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
      <Container24 />
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

function Container25() {
  return (
    <div className="h-[43.19px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[21.6px] left-0 not-italic text-[#020a1c] text-[16.453px] top-[20.8px] translate-y-[-50%] w-[275.73px]">
        <p className="mb-0">New Study Reveals Potential</p>
        <p>Benefits of Fasting for Heart Health</p>
      </div>
    </div>
  );
}

function Article5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
      <Container25 />
    </div>
  );
}

function ArticleHeadline5() {
  return (
    <div className="content-stretch flex flex-col gap-[4.01px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
      <SectionNameDatePosted5 />
      <Article5 />
    </div>
  );
}

function Content5() {
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

function StoryWrapperLinkPhotoTextBelowDesktop5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[627.5px] overflow-clip right-0 top-[320.37px]" data-name="Story Wrapper → Link - Photo + Text Below [Desktop]">
      <FigureContainer5 />
      <Content5 />
    </div>
  );
}

function Cms() {
  return (
    <div className="h-[616.75px] relative shrink-0 w-full" data-name="CMS">
      <StoryWrapperLinkPhotoTextBelowDesktop />
      <StoryWrapperLinkPhotoTextBelowDesktop1 />
      <StoryWrapperLinkPhotoTextBelowDesktop2 />
      <StoryWrapperLinkPhotoTextBelowDesktop3 />
      <StoryWrapperLinkPhotoTextBelowDesktop4 />
      <StoryWrapperLinkPhotoTextBelowDesktop5 />
    </div>
  );
}

export default function RelatedArticles() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative size-full" data-name="Related Articles">
      <SectionTitleWithoutViewAll />
      <Cms />
    </div>
  );
}