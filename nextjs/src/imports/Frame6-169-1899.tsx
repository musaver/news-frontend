function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13.2px] text-nowrap">
        <p className="leading-[19px] whitespace-pre">Join Our Team</p>
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
    <div className="box-border content-stretch flex h-full items-center pl-[16px] pr-[270.06px] py-[16px] relative shrink-0" data-name="CMS">
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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.8px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Multimedia Journalist</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] text-nowrap">
        <p className="leading-[20.8px] whitespace-pre">Job Type: Full Time</p>
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
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
        <p className="leading-[20.8px] whitespace-pre">Experience: 3 Years</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container4 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14px] text-nowrap">
        <p className="leading-[19px] whitespace-pre">$60,000 - $75,000</p>
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

function Container10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip right-0 top-[47.98px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[66.98px] left-0 overflow-clip right-[0.06px] top-0" data-name="Container">
      <Container2 />
      <Container7 />
      <Container10 />
    </div>
  );
}

function Dark() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[358px]" data-name="Dark" />;
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[82.98px]" data-name="Container">
      <Dark />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1.03px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-[13px] text-nowrap whitespace-pre">
        <p className="mb-0">Job Description:</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal mb-0">{`The Multimedia Journalist will be responsible for `}</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal mb-0">{`producing compelling news content across multiple `}</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal mb-0">{`platforms, including web, social media, and broadcast. `}</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal mb-0">{`This role requires strong storytelling skills, technical `}</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal">proficiency, and an understanding of digital journalism.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] w-full">
        <p className="leading-[18.2px]">Responsibilities:</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[19px] px-0 right-0 top-[109.13px]" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13.2px] w-full">
        <p className="leading-[18.2px]">Requirements:</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[19px] px-0 right-0 top-[292.82px]" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] w-full">
        <p className="leading-[18.2px]">Benefits:</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[19px] px-0 right-0 top-[494.69px]" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] w-full">
        <p className="mb-0">{`Write, shoot, and edit video content for web and `}</p>
        <p>social media platforms</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] w-full">
        <p className="leading-[18.2px]">Cover breaking news, special events, and features</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] w-full">
        <p className="mb-0">{`Collaborate with photographers, videographers, and `}</p>
        <p>graphic designers</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] w-full">
        <p className="leading-[18.2px]">Produce content that appeals to diverse audiences</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] w-full">
        <p className="mb-0">{`Work closely with editors to maintain the high `}</p>
        <p>editorial standards of NewsFlash</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-px pl-[30.281px] pr-0 pt-[19.09px] right-0 top-[147.32px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[8.5px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[35.19px] justify-center leading-[18.2px] left-0 not-italic text-[#020a1c] text-[14px] top-[53.97px] translate-y-[-50%] w-[5.47px]">
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[35.19px] justify-center leading-[18.2px] left-0 not-italic text-[#020a1c] text-[14px] top-[108.53px] translate-y-[-50%] w-[5.47px]">
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.9px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.2px] w-full">
        <p className="mb-0">{`Bachelor’s degree in Journalism, Broadcast Media, or `}</p>
        <p>related field</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.9px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13px] w-full">
        <p className="mb-0">{`At least 3 years of experience in multimedia `}</p>
        <p>journalism</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.9px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13px] w-full">
        <p className="mb-0">{`Proficiency in video editing software and digital `}</p>
        <p>storytelling tools</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.9px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] w-full">
        <p className="mb-0">{`Ability to meet tight deadlines and manage multiple `}</p>
        <p>projects</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.9px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] w-full">
        <p className="leading-[18.2px]">Strong camera presence and public speaking skills</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-[0.9px] pl-[30.281px] pr-0 pt-[19.095px] right-0 top-[331px]" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[8.5px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[44.88px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[81.25px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[117.63px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[154px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] w-full">
        <p className="leading-[18.2px]">Health, dental, and vision insurance</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] w-full">
        <p className="leading-[18.2px]">Paid time off and holidays</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] w-full">
        <p className="leading-[18.2px]">401(k) with company match</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] w-full">
        <p className="mb-0">{`Access to the latest digital journalism tools and `}</p>
        <p>software</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#020a1c] text-[13.1px] w-full">
        <p className="mb-0">{`Opportunities for travel and covering high-profile `}</p>
        <p>events</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-px pl-[30.281px] pr-0 pt-[19px] right-0 top-[532.88px]" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[71.56px] justify-center leading-[18.2px] left-0 not-italic text-[#020a1c] text-[14px] top-[35.78px] translate-y-[-50%] w-[5.47px]">
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p className="mb-0">•</p>
        <p>•</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14px] top-[99.44px] translate-y-[-50%] w-[5.47px]">
        <p className="leading-[18.2px]">•</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[660.19px] left-0 right-[0.06px] top-[99.98px]" data-name="Container">
      <Container13 />
      <Margin />
      <Margin1 />
      <Margin2 />
      <List />
      <List1 />
      <List2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.5px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Deadline: Sep 19, 2024</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[775.17px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-nowrap text-white">
        <p className="leading-[22.6px] whitespace-pre">Apply</p>
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

function Link() {
  return (
    <div className="absolute bg-[#cc0000] box-border content-stretch flex items-center justify-center left-0 overflow-clip px-[42px] py-[12px] rounded-[8px] top-[810.36px]" data-name="Link">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.3px] text-nowrap">
        <p className="leading-[19px] whitespace-pre">{`Share this job `}</p>
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

function Container24() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container24 />
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

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container26() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour1() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container26 />
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

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container28() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour2() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container28 />
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

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container30() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour3() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container30 />
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link4 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Links">
      <Container25 />
      <Container27 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip pl-[4px] pr-0 py-[15px] right-[0.06px] top-[872.95px]" data-name="Background">
      <Container23 />
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

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] text-nowrap">
        <p className="leading-[19px] whitespace-pre">Related Jobs</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
      <ContentBullet1 />
      <Container33 />
    </div>
  );
}

function WithoutViewAll1() {
  return (
    <div className="absolute box-border content-stretch flex items-center left-0 overflow-clip pl-0 pr-[264.98px] py-0 top-[963.95px]" data-name="Without View All">
      <SectionTitle1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.6px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">News Editor</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Experience: 5 Years</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.19px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$70,000 - $90,000</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.38px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container36 />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container41 />
    </div>
  );
}

function Dark1() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.1px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 29, 2024</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container44 />
    </div>
  );
}

function Phone() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[358px] overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Phone">
      <Container42 />
      <Container43 />
      <Container45 />
      <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Phone />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.8px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Proofreader</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.7px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Experience: 1 Year</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.19px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13.9px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$45,000 - $55,000</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.37px]" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container48 />
      <Container50 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container53 />
    </div>
  );
}

function Dark2() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark2 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 14, 2024</p>
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

function Phone1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[358px] overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Phone">
      <Container54 />
      <Container55 />
      <Container57 />
      <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Phone1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.5px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Investigative Reporter</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Remote</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Experience: 5 Years</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.18px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$65,000 - $85,000</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.37px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container60 />
      <Container62 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container65 />
    </div>
  );
}

function Dark3() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark3 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 10, 2024</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container68 />
    </div>
  );
}

function Phone2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[358px] overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Phone">
      <Container66 />
      <Container67 />
      <Container69 />
      <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Phone2 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-[rgba(101,114,133,0.6)] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Load More Jobs</p>
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

function Default() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[20px] relative rounded-[10px] shrink-0" data-name="Default">
      <Container71 />
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
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 right-[0.06px] top-[998.95px]" data-name="Job Listing">
      <Jobs />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[1651.95px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container17 />
      <Container19 />
      <Link />
      <Background />
      <WithoutViewAll1 />
      <JobListing />
    </div>
  );
}

function Container73() {
  return (
    <div className="max-w-[480px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[40px] pt-[24px] px-[16px] relative w-full">
          <Container72 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <PhoneV />
      <Container73 />
    </div>
  );
}