import imgPhotoYaKHjHargn0KKefshKMiii72AgJpg from "figma:asset/b6c50a5076c56cc4d08b98fba90fdd9a563df433.png";
import imgVbTbiPvjA8FnWKb3WM1CUh3XoJpg from "figma:asset/2e2e91b644507af6ff6d755e7aa800a82564efc4.png";
import img3R5TZJnhVxRAvD1UnuRfFTlfKcJpg from "figma:asset/b678e07febb2b84647a55736db554a4d4a2bc32d.png";
import imgUJjmygpXuubbfyWqUr9JvVv0LZaJpg from "figma:asset/a3976810f1e3b94e7cba1e19936a219c4f6e9a7b.png";

function PhotoYaKHjHargn0KKefshKMiii72AgJpg() {
  return (
    <div className="relative rounded-[8px] self-stretch shrink-0 w-[800px]" data-name="photo → yaKHjHARGN0KKefshKMiii72ag.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-2.83%] max-w-none top-0 w-[105.66%]" src={imgPhotoYaKHjHargn0KKefshKMiii72AgJpg} />
      </div>
    </div>
  );
}

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.625px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Podcast</p>
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-nowrap">
        <p className="leading-[22px] text-[14.5px] whitespace-pre">view all</p>
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

function Container4() {
  return <div className="shrink-0 size-[10px]" data-name="Container" />;
}

function LinkViewAll() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkViewAll />
    </div>
  );
}

function ViewAll() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="View All">
      <Container5 />
    </div>
  );
}

function WithoutLine() {
  return (
    <div className="relative shrink-0 w-full" data-name="Without Line">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[2px] pr-[4px] py-0 relative w-full">
          <SectionTitle />
          <ViewAll />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <WithoutLine />
    </div>
  );
}

function Container7() {
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
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
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

function Container9() {
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
      <Container9 />
    </div>
  );
}

function Container10() {
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
      <Container10 />
    </div>
  );
}

function AudioPlayerTitleEposide() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3.99px] items-center justify-center overflow-clip pb-0 pt-[8px] px-0 relative shrink-0 w-[228px]" data-name="Audio Player → Title + Eposide">
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

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Desktop />
    </div>
  );
}

function Link() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Link">
      <Container11 />
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

function Container12() {
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
      <Container12 />
    </div>
  );
}

function Container13() {
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
      <Container13 />
    </div>
  );
}

function AudioPlayerTitleEposide1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3.99px] items-center justify-center overflow-clip pb-0 pt-[8px] px-0 relative shrink-0 w-[228px]" data-name="Audio Player → Title + Eposide">
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

function Container14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Desktop1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Link">
      <Container14 />
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

function Container15() {
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
      <Container15 />
    </div>
  );
}

function Container16() {
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
      <Container16 />
    </div>
  );
}

function AudioPlayerTitleEposide2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3.99px] items-center justify-center overflow-clip pb-0 pt-[8px] px-0 relative shrink-0 w-[228px]" data-name="Audio Player → Title + Eposide">
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

function Container17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Desktop2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Link">
      <Container17 />
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

function Content() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative w-full">
          <Container8 />
          <Podcast3 />
          <div className="absolute bottom-[0.01%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start max-w-inherit p-[24px] relative w-full">
          <PhotoYaKHjHargn0KKefshKMiii72AgJpg />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function SectionDesktop() {
  return (
    <div className="bg-[#f7fafc] relative size-full" data-name="Section - Desktop">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 xl:px-[300px] py-[80px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}