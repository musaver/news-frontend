import imgUo4KHKvmrD87Exvy5Z2RMEpvtsJpg from "@/assets/421b0848a3b25bc10de8bcbade363429c487b35a.png";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.9px] text-nowrap">
        <p className="leading-[19px] whitespace-pre">Careers</p>
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
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="CMS">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center p-[16px] relative size-full">
          <LeftText />
        </div>
      </div>
    </div>
  );
}

function PhoneV() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex h-[40px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Phone v2">
      <Cms />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[15.1px] w-full">
        <p className="mb-0">{`Join our team and unlock endless opportunities `}</p>
        <p>in the media industry.</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[20.48px] items-start leading-[0] not-italic relative shrink-0 text-[#020a1c] text-nowrap w-full" data-name="Paragraph">
      <div className="flex flex-col justify-center leading-[20.8px] relative shrink-0 text-[14.6px] whitespace-pre">
        <p className="mb-0">{`NewsFlash is one of the leading news agencies, `}</p>
        <p className="mb-0">{`delivering high-quality news and features to `}</p>
        <p className="mb-0">{`millions of readers daily. With a commitment to `}</p>
        <p className="mb-0">{`accuracy, fairness, and integrity, we provide news `}</p>
        <p>{`coverage across a wide range of topics. `}</p>
      </div>
      <div className="flex flex-col justify-center leading-[20.8px] relative shrink-0 text-[15.1px] whitespace-pre">
        <p className="mb-0">{`Join our talented team and be part of a company `}</p>
        <p className="mb-0">{`that values innovation, diversity, and creativity in `}</p>
        <p>journalism.</p>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full z-[2]" data-name="Left Content">
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Uo4KHKvmrD87Exvy5Z2RMEpvtsJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Uo4kHKvmrD87exvy5Z2rMEpvts.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-5.87%] max-w-none top-0 w-[111.73%]" src={imgUo4KHKvmrD87Exvy5Z2RMEpvtsJpg.src} />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Photo">
      <Uo4KHKvmrD87Exvy5Z2RMEpvtsJpg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[20.8px] not-italic relative shrink-0 text-[#020a1c] text-[15px] w-full">
        <p className="mb-0">{`NewsFlash upholds Equal Opportunity principles, `}</p>
        <p className="mb-0">{`dedicated to providing fair employment `}</p>
        <p className="mb-0">{`opportunities to all qualified candidates and `}</p>
        <p className="mb-0 whitespace-pre-wrap">{`employees.  We ensure unbiased consideration for `}</p>
        <p className="mb-0">{`employment, irrespective of sex, gender identity, `}</p>
        <p className="mb-0">{`race, ethnicity, color, religion, nationality, disability, `}</p>
        <p>age, or any other legally protected characteristics.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.6px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">News Editor</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Exprience: 5 Years</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.18px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$70,000 - $90,000</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.37px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container12 />
    </div>
  );
}

function Dark() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.1px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 29, 2024</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Phone() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Phone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Container13 />
          <Container14 />
          <Container16 />
          <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
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

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.8px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Multimedia Journalist</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Exprience: 3 Years</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.19px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$60,000 - $75,000</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.38px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.18px]" data-name="Container">
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container24 />
    </div>
  );
}

function Dark1() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.2px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 20, 2024</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container27 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Phone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Container25 />
          <Container26 />
          <Container28 />
          <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
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

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.8px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Proofreader</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Full Time</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.7px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Exprience: 1 Year</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.19px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13.9px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$45,000 - $55,000</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.38px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container31 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container36 />
    </div>
  );
}

function Dark2() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 14, 2024</p>
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

function Phone2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Phone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Container37 />
          <Container38 />
          <Container40 />
          <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
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

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[14.5px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Investigative Reporter</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Job Type: Remote</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-1px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[12.8px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Exprience: 5 Years</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[21.19px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">$65,000 - $85,000</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[43.37px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[62.56px] left-0 overflow-clip right-0 top-[23.19px]" data-name="Container">
      <Container43 />
      <Container45 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[85.75px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container48 />
    </div>
  );
}

function Dark3() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-full" data-name="Dark" />;
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col h-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Dark3 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Posted: August 10, 2024</p>
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

function Phone3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Phone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Container49 />
          <Container50 />
          <Container52 />
          <div className="absolute bottom-[0.12%] left-0 right-0 rounded-[8px] top-0" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link - Container">
      <Phone3 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-[rgba(101,114,133,0.6)] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Load More Jobs</p>
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

function Default() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center pb-[16px] pt-[15px] px-[20px] relative rounded-[10px] shrink-0" data-name="Default">
      <Container54 />
      <div className="absolute bottom-[0.71%] left-0 right-0 rounded-[10px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Default />
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
      <Container55 />
    </div>
  );
}

function JobListing() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center pb-0 pt-[0.6px] px-0 relative shrink-0 w-full" data-name="Job Listing">
      <Jobs />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[23.4px] items-center justify-center relative shrink-0 w-full z-[1]" data-name="Container">
      <Photo />
      <Container4 />
      <JobListing />
    </div>
  );
}

function Container57() {
  return (
    <div className="max-w-[480px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] isolate items-start max-w-inherit pb-[24px] pt-[23.295px] px-[16px] relative w-full">
          <LeftContent />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <PhoneV />
      <Container57 />
    </div>
  );
}