import { imgContainer } from "./svg-gjt24";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Join Our Team</p>
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
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[65.2px] text-nowrap">
        <p className="leading-[84px] whitespace-pre">Vacancy</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[285.131px_84px] right-[-0.87px]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[-5px] h-[84px] right-[23.99px] w-[285.13px]" data-name="Mask Group">
      <Container3 />
    </div>
  );
}

function Cms() {
  return (
    <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1179.2px] py-[24px] relative shrink-0" data-name="CMS">
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
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container5() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex flex-col items-start justify-center left-[389.73px] top-[40px] w-px" data-name="Container">
      <Dark />
    </div>
  );
}

function Heading() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[16.6px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Multimedia Journalist</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.3px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">Experience: 3 Years</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.59px]" data-name="Container">
      <Container8 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[15.9px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$60,000 - $75,000</p>
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

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip right-0 top-[52.19px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[74.19px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <Container6 />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Dark1() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[863.27px]" data-name="Dark" />;
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[98.19px]" data-name="Container">
      <Dark1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-[14.6px] text-nowrap whitespace-pre">
        <p className="mb-0">Job Description:</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal mb-0">{`The Multimedia Journalist will be responsible for producing compelling news content across multiple platforms, including `}</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal mb-0">{`web, social media, and broadcast. This role requires strong storytelling skills, technical proficiency, and an understanding of `}</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal">digital journalism.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Responsibilities:</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[20px] px-0 right-0 top-[88px]" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="leading-[22px]">Requirements:</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[20px] px-0 right-0 top-[240px]" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] w-full">
        <p className="leading-[22px]">Benefits:</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[20px] px-0 right-0 top-[392px]" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] w-full">
        <p className="leading-[22px]">Write, shoot, and edit video content for web and social media platforms</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Cover breaking news, special events, and features</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] w-full">
        <p className="leading-[22px]">Collaborate with photographers, videographers, and graphic designers</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Produce content that appeals to diverse audiences</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Work closely with editors to maintain the high editorial standards of NewsFlash</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pl-[30.281px] pr-0 pt-[20px] right-0 top-[130px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[108px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[16px] top-[55px] translate-y-[-50%] w-[6.24px]">
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.9px] w-full">
        <p className="leading-[22px]">Bachelor’s degree in Journalism, Broadcast Media, or related field</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">At least 3 years of experience in multimedia journalism</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Proficiency in video editing software and digital storytelling tools</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] w-full">
        <p className="leading-[22px]">Ability to meet tight deadlines and manage multiple projects</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Strong camera presence and public speaking skills</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pl-[30.281px] pr-0 pt-[20px] right-0 top-[282px]" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[108px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[16px] top-[55px] translate-y-[-50%] w-[6.24px]">
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Health, dental, and vision insurance</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Paid time off and holidays</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">401(k) with company match</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] w-full">
        <p className="leading-[22px]">Access to the latest digital journalism tools and software</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] w-full">
        <p className="leading-[22px]">Opportunities for travel and covering high-profile events</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pl-[30.281px] pr-0 pt-[20px] right-0 top-[434px]" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[108px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[16px] top-[55px] translate-y-[-50%] w-[6.24px]">
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[544px] left-0 right-0 top-[123.19px]" data-name="Container">
      <Container17 />
      <Margin />
      <Margin1 />
      <Margin2 />
      <List />
      <List1 />
      <List2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.5px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Deadline: Sep 19, 2024</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[690.19px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-nowrap text-white">
        <p className="leading-[22.6px] whitespace-pre">Apply</p>
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

function Link() {
  return (
    <div className="absolute bg-[#cc0000] box-border content-stretch flex items-center justify-center left-0 overflow-clip px-[42px] py-[12px] rounded-[8px] top-[733.38px]" data-name="Link">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[15.3px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">{`Share this job `}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container28() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container28 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Facebook">
      <LinkColour />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <Facebook />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container30() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour1() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container30 />
    </div>
  );
}

function Twitter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Twitter">
      <LinkColour1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <Twitter />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container32() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour2() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container32 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Linkedin">
      <LinkColour2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <Linkedin />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container34() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour3() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container34 />
    </div>
  );
}

function WhatsApp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="WhatsApp">
      <LinkColour3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <WhatsApp />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link4 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Links">
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip pl-[4px] pr-0 py-[15px] right-0 top-[803.97px]" data-name="Background">
      <Container27 />
      <Links />
      <div className="absolute inset-0" data-name="Border">
        <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ContentBullet1() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Related Jobs</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet1 />
      <Container37 />
    </div>
  );
}

function WithoutViewAll1() {
  return (
    <div className="absolute box-border content-stretch flex items-center left-0 overflow-clip pl-0 pr-[758.97px] py-0 top-[902.97px]" data-name="Without View All">
      <SectionTitle1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.5px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">News Editor</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Full Time</p>
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

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 5 Years</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$70,000 - $90,000</p>
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

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.59px]" data-name="Container">
      <Container40 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container42 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container45 />
    </div>
  );
}

function Dark2() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.1px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 29, 2024</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container48 />
    </div>
  );
}

function Active() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container46 />
      <Container47 />
      <Container49 />
      <div className="absolute bottom-[0.48%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Active />
    </div>
  );
}

function Heading2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Proofreader</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 1 Year</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[15.9px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$45,000 - $55,000</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.59px]" data-name="Container">
      <Container52 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container54 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container57 />
    </div>
  );
}

function Dark3() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark3 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 14, 2024</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container60 />
    </div>
  );
}

function Active1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container58 />
      <Container59 />
      <Container61 />
      <div className="absolute bottom-[0.48%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Active1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.3px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Investigative Reporter</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Remote</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 5 Years</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$65,000 - $85,000</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.6px]" data-name="Container">
      <Container64 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container66 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container69 />
    </div>
  );
}

function Dark4() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark4 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 10, 2024</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container72 />
    </div>
  );
}

function Active2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container70 />
      <Container71 />
      <Container73 />
      <div className="absolute bottom-[0.48%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Active2 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-[rgba(101,114,133,0.6)] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Load More Jobs</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container74 />
    </div>
  );
}

function Default() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[20px] relative rounded-[10px] shrink-0" data-name="Default">
      <Container75 />
      <div className="absolute bottom-[0.71%] left-0 right-0 rounded-[10px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Jobs() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="Jobs">
      <LinkContainer />
      <LinkContainer1 />
      <LinkContainer2 />
      <Default />
    </div>
  );
}

function JobListing() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 right-0 top-[948.97px]" data-name="Job Listing">
      <Jobs />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[1583.5px] left-[432.73px] right-[24px] top-[40px]" data-name="Container">
      <Container15 />
      <Container16 />
      <Container21 />
      <Container23 />
      <Link />
      <Background />
      <WithoutViewAll1 />
      <JobListing />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">{`Join our team and unlock endless `}</p>
        <p>opportunities in the media industry.</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="mb-0">{`NewsFlash is one of the leading news `}</p>
        <p className="mb-0">{`agencies, delivering high-quality news and `}</p>
        <p className="mb-0">{`features to millions of readers daily. With a `}</p>
        <p className="mb-0">{`commitment to accuracy, fairness, and `}</p>
        <p className="mb-0">{`integrity, we provide news coverage across a `}</p>
        <p className="mb-0">{`wide range of topics. Join our talented team `}</p>
        <p className="mb-0">{`and be part of a company that values `}</p>
        <p className="mb-0">{`innovation, diversity, and creativity in `}</p>
        <p>journalism.</p>
      </div>
    </div>
  );
}

function SectionLeftContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pointer-events-auto sticky top-0" data-name="Section - Left Content">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[1663.5px] relative shrink-0 w-[1320px]" data-name="Container">
      <Container5 />
      <Container76 />
      <div className="absolute bottom-0 h-[calc(100%-40px)] left-[24px] pointer-events-none right-[972.27px] top-[40px]">
        <SectionLeftContent />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <Container4 />
      <Container79 />
    </div>
  );
}