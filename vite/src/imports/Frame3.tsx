import imgUo4KHKvmrD87Exvy5Z2RMEpvtsJpg from "figma:asset/9e475dacb59807df020b382d3379a34b034b6da1.png";
import { imgContainer } from "./svg-osnpp";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Careers</p>
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
      <div className="flex flex-col font-['Inter:Black',_sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[66.3px] text-nowrap">
        <p className="leading-[84px] whitespace-pre">Careers</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[265.31px_84px] right-[-0.69px]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[-5px] h-[84px] right-[24px] w-[265.31px]" data-name="Mask Group">
      <Container3 />
    </div>
  );
}

function Cms() {
  return (
    <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1227px] py-[24px] relative shrink-0 pt-[84px] pb-[24px]" data-name="CMS">
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
  return <div className="bg-[rgba(203,213,225,0.35)] h-[1471.31px] shrink-0 w-full" data-name="Dark" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[389.73px] top-[40px] w-px" data-name="Container">
      <Dark />
    </div>
  );
}

function Uo4KHKvmrD87Exvy5Z2RMEpvtsJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Uo4kHKvmrD87exvy5Z2rMEpvts.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[129.49%] left-0 max-w-none top-0 w-full" src={imgUo4KHKvmrD87Exvy5Z2RMEpvtsJpg} />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="h-[500px] overflow-clip relative rounded-[8px] shrink-0 w-[863.27px]" data-name="Photo">
      <Uo4KHKvmrD87Exvy5Z2RMEpvtsJpg />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap whitespace-pre">
        <p className="mb-0">{`NewsFlash upholds Equal Opportunity principles, dedicated to providing fair employment opportunities to all qualified `}</p>
        <p className="mb-0">{`candidates and employees.  We ensure unbiased consideration for employment, irrespective of sex, gender identity, race, `}</p>
        <p>ethnicity, color, religion, nationality, disability, age, or any other legally protected characteristics.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[863.27px] relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.5px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">News Editor</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Full Time</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 5 Years</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$70,000 - $90,000</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.59px]" data-name="Container">
      <Container10 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container12 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container15 />
    </div>
  );
}

function Dark1() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.1px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 29, 2024</p>
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

function Active() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container16 />
      <Container17 />
      <Container19 />
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

function Heading1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Multimedia Journalist</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 3 Years</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[15.9px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$60,000 - $75,000</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.6px]" data-name="Container">
      <Container22 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container24 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container27 />
    </div>
  );
}

function Dark2() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.2px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 20, 2024</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container30 />
    </div>
  );
}

function Active1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container28 />
      <Container29 />
      <Container31 />
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

function Heading2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.6px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Proofreader</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.5px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 1 Year</p>
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[15.9px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$45,000 - $55,000</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.6px]" data-name="Container">
      <Container34 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container36 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container39 />
    </div>
  );
}

function Dark3() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 14, 2024</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container42 />
    </div>
  );
}

function Active2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container40 />
      <Container41 />
      <Container43 />
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

function Heading3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.3px] text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Investigative Reporter</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Job Type: Remote</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Exprience: 5 Years</p>
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

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">$65,000 - $85,000</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip right-0 top-[25.6px]" data-name="Container">
      <Container46 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container48 />
      <div className="bg-slate-300 rounded-[99px] shrink-0 size-[4px]" data-name="Background" />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[47.59px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container51 />
    </div>
  );
}

function Dark4() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark4 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 10, 2024</p>
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

function Active3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[16px] items-start min-w-[863.27px] overflow-clip p-[32px] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Active">
      <Container52 />
      <Container53 />
      <Container55 />
      <div className="absolute bottom-[0.48%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function LinkContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Active3 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-[rgba(101,114,133,0.6)] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Load More Jobs</p>
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

function Default() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[20px] relative rounded-[10px] shrink-0" data-name="Default">
      <Container57 />
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
      <LinkContainer3 />
      <Default />
    </div>
  );
}

function JobListing() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Job Listing">
      <Jobs />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[42px] items-center justify-center left-[432.73px] right-[24px] top-[40px]" data-name="Container">
      <Photo />
      <Container7 />
      <JobListing />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[15px] text-nowrap whitespace-pre">
        <p className="mb-0">{`Join our team and unlock endless `}</p>
        <p>opportunities in the media industry.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
      <Container59 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[22px] items-start leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.8px] text-nowrap w-full" data-name="Paragraph">
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`NewsFlash is one of the leading news `}</p>
        <p className="mb-0">{`agencies, delivering high-quality news and `}</p>
        <p className="mb-0">{`features to millions of readers daily. With a `}</p>
        <p className="mb-0">{`commitment to accuracy, fairness, and `}</p>
        <p className="mb-0">{`integrity, we provide news coverage across a `}</p>
        <p>{`wide range of topics. `}</p>
      </div>
      <div className="flex flex-col justify-center leading-[22px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`Join our talented team and be part of a `}</p>
        <p className="mb-0">{`company that values innovation, diversity, and `}</p>
        <p>creativity in journalism.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pointer-events-auto sticky top-0" data-name="Left Content">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[1551.31px] relative shrink-0 w-[1320px] p-[0px] m-[0px]" data-name="Container">
      <Container5 />
      <Container58 />
      <div className="absolute bottom-0 h-[calc(100%-40px)] left-[24px] pointer-events-none right-[972.27px] top-[40px]">
        <LeftContent />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <Container4 />
      <Container62 />
    </div>
  );
}