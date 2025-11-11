import svgPaths from "./svg-fzw4p3y8n9";
import imgToq5TsScHq68ZsCqZ1J9EvnD7GsJpg from "figma:asset/9b0ae3954e9319d29745ea127c2bf2eaa99b7cba.png";
import { imgContainer } from "./svg-hf974";

function ContentBullet() {
  return <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.6px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Contact us</p>
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
        <p className="leading-[84px] whitespace-pre">Contact us</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[363.879px_84px] right-[-0.12px]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[-5px] h-[84px] right-[23.99px] w-[363.88px]" data-name="Mask Group">
      <Container3 />
    </div>
  );
}

function Cms() {
  return (
    <div className="box-border content-stretch flex h-[75px] items-center max-w-[1320px] pl-[24px] pr-[1206.11px] py-[24px] relative shrink-0" data-name="CMS">
      <LeftText />
      <MaskGroup />
    </div>
  );
}

function CategoryDesktop() {
  return (
    <div className="bg-[#f7fafc] box-border content-stretch flex items-center justify-center overflow-clip px-[60px] py-0 relative shrink-0" data-name="Category - Desktop">
      <Cms />
    </div>
  );
}

function Dark() {
  return <div className="bg-[rgba(203,213,225,0.35)] h-[1213.94px] shrink-0 w-full" data-name="Dark" />;
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[389.73px] top-[40px] w-px" data-name="Container">
      <Dark />
    </div>
  );
}

function Toq5TsScHq68ZsCqZ1J9EvnD7GsJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Toq5TsScHq68ZsCqZ1j9EvnD7Gs.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-2.97%] max-w-none top-0 w-[102.97%]" src={imgToq5TsScHq68ZsCqZ1J9EvnD7GsJpg} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[15px] text-white w-full">
        <p className="mb-0">{`Discover how NewsFlash can help you connect with 60 Million readers `}</p>
        <p className="mb-0">{`monthly, offering award-winning content and precision-targeted `}</p>
        <p>campaigns to boost your reach.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[519.52px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function PhotoText() {
  return (
    <div className="box-border content-stretch flex flex-col h-[500px] items-start justify-end overflow-clip pl-[32px] pr-[311.75px] py-[32px] relative rounded-[8px] shrink-0" data-name="Photo + Text">
      <Toq5TsScHq68ZsCqZ1J9EvnD7GsJpg />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273.75px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#020a1c] text-[15px] text-nowrap whitespace-pre">
        <p className="mb-0">{`Whether you need more information, `}</p>
        <p className="mb-0">{`have specific queries or are looking for `}</p>
        <p className="mb-0">{`further assistance, our team is here to `}</p>
        <p className="mb-0">{`help. Simply complete the form and `}</p>
        <p>{`we'll get back to you.`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.6px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Full Name</p>
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
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[523.52px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.9px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">David Brown</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <Input />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[-1px]" data-name="Label">
      <Container9 />
      <Background />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.3px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Email</p>
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
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[523.52px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">david@yourmail.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <Input1 />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[92.19px]" data-name="Label">
      <Container12 />
      <Background1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.3px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Department</p>
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

function Container16() {
  return (
    <div className="h-[16.8px] overflow-clip relative shrink-0 w-[511.52px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 not-italic text-[#657285] text-[12.5px] top-[7.5px] translate-y-[-50%] w-[47.61px]">
        <p className="leading-[16.8px]">Select…</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Options">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[12px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="box-border content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip pl-[10px] pr-[12px] py-[14.5px] relative shrink-0 w-[38px]" data-name="image fill">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[37.5%_21.88%_34.38%_21.88%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-8.33%]" style={{ "--stroke-0": "rgba(153, 153, 153, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
              <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start right-0 top-0 w-[38px]" data-name="Mask">
      <ImageFill />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[38px]" data-name="Mask Group">
      <Mask />
      <div className="absolute bg-[#f7fafc] bottom-0 right-0 top-0 w-[38px]" data-name="Background" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f7fafc] h-[45px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[45px] items-start justify-center pl-0 pr-[12px] py-0 relative w-full">
          <Options />
          <MaskGroup1 />
          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.99px] items-start left-0 right-0 top-[185.38px]" data-name="Label">
      <Container15 />
      <Background2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Subject</p>
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

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[523.52px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.9px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Subject</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex flex-col h-[45px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <Input2 />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[278.56px]" data-name="Label">
      <Container18 />
      <Background3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.9px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Message</p>
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

function Container22() {
  return (
    <div className="absolute bottom-[171.2px] box-border content-stretch flex flex-col items-start left-[12px] pl-0 pr-[468.05px] py-0 top-[11px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13px] text-nowrap">
        <p className="leading-[16.8px] whitespace-pre">Message</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[200px] min-h-[200px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Textarea">
      <Container22 />
      <div className="absolute bottom-[171.2px] left-[12px] top-[12px] w-[523.52px]" data-name="Rectangle" />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f7fafc] content-stretch flex flex-col items-start min-h-[200px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <Textarea />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(203,213,225,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 right-0 top-[371.75px]" data-name="Label">
      <Container21 />
      <Background4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[16.8px] whitespace-pre">Submit</p>
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

function ButtonDefault() {
  return (
    <div className="basis-0 bg-[#cc0000] box-border content-stretch flex grow items-center justify-center min-h-px min-w-px pb-[14.11px] pt-[13.09px] px-0 relative rounded-[10px] shrink-0 w-full" data-name="Button - Default">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45px] items-start justify-center left-0 right-0 top-[620.94px]" data-name="Container">
      <ButtonDefault />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[665.94px] overflow-clip relative shrink-0 w-full" data-name="Form">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Container25 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Form">
      <Form />
    </div>
  );
}

function ContainerForm() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[547.52px]" data-name="Container → Form">
      <Form1 />
    </div>
  );
}

function Form2() {
  return (
    <div className="content-stretch flex gap-[42px] items-start overflow-clip relative shrink-0 w-full" data-name="Form">
      <Container7 />
      <ContainerForm />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[432.73px] overflow-clip right-[24px] top-[40px]" data-name="Container">
      <PhotoText />
      <Form2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[264px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[66px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[15px] top-[33px] translate-y-[-50%] w-[314.4px]">
        <p className="mb-0">{`Have a story that could make headlines? We `}</p>
        <p className="mb-0">{`want to hear from you. Reach our editorial `}</p>
        <p>{`team at `}</p>
      </div>
      <div className="absolute content-stretch flex items-start left-[56.73px] top-[44px]" data-name="Component 2">
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
          <p className="leading-[22px] whitespace-pre">content@newsflash.com</p>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[227.8px] not-italic text-[#020a1c] text-[16px] top-[55px] translate-y-[-50%] w-[8.83px]">
        <p className="leading-[22px]">{`. `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[15px] top-[110px] translate-y-[-50%] w-[326.98px]">
        <p className="mb-0">{`For inquiries regarding the rights to reproduce `}</p>
        <p>{`or feature our content, connect with us at `}</p>
      </div>
      <div className="absolute content-stretch flex items-start left-0 top-[132px]" data-name="Component 2">
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
          <p className="leading-[22px] whitespace-pre">media@newsflash.com</p>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[160.8px] not-italic text-[#020a1c] text-[16px] top-[143px] translate-y-[-50%] w-[8.83px]">
        <p className="leading-[22px]">{`. `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[22px] left-0 not-italic text-[#020a1c] text-[15px] top-[198px] translate-y-[-50%] w-[279.06px]">
        <p className="mb-0">{`Interested in advertising or promotional `}</p>
        <p>{`opportunities on NewsFlash? Contact `}</p>
      </div>
      <div className="absolute content-stretch flex items-start left-0 top-[220px]" data-name="Component 2">
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.6px] text-nowrap">
          <p className="leading-[22px] whitespace-pre">ads@newsflash.com</p>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-[142.41px] not-italic text-[#020a1c] text-[15.1px] top-[231px] translate-y-[-50%] w-[170.38px]">
        <p className="leading-[22px]">{` for more details, or you `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] left-0 not-italic text-[#020a1c] text-[14.6px] top-[253px] translate-y-[-50%] w-[227px]">
        <p className="leading-[22px]">can also contact us via the form.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Container">
      <Container27 />
    </div>
  );
}

function Dark1() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />;
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[288px]" data-name="Container">
      <Dark1 />
    </div>
  );
}

function Dark2() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />;
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[413px]" data-name="Container">
      <Dark2 />
    </div>
  );
}

function Dark3() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />;
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[516px]" data-name="Container">
      <Dark3 />
    </div>
  );
}

function Dark4() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[323.73px]" data-name="Dark" />;
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start justify-center left-0 top-[641px]" data-name="Container">
      <Dark4 />
    </div>
  );
}

function Container33() {
  return <div className="shrink-0 size-[24px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.3px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">1-234-567-8910</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function LinkPhoneNumber() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Phone Number">
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap whitespace-pre">
        <p className="mb-0">Monday - Friday</p>
        <p>6am – 6pm</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function DaysHours() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Days + Hours">
      <Container37 />
    </div>
  );
}

function AsideCall() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip right-0 top-[313px]" data-name="Aside - Call">
      <LinkPhoneNumber />
      <DaysHours />
    </div>
  );
}

function Container38() {
  return <div className="shrink-0 size-[24px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.7px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">info@newsflash.com</p>
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

function LinkPhoneNumber1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Phone Number">
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[14.9px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">Hear back in about 24 hours.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
      <Container41 />
    </div>
  );
}

function DaysHours1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Days + Hours">
      <Container42 />
    </div>
  );
}

function AsideEmail() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip right-0 top-[438px]" data-name="Aside - Email">
      <LinkPhoneNumber1 />
      <DaysHours1 />
    </div>
  );
}

function Container43() {
  return <div className="shrink-0 size-[24px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[16.5px] text-nowrap">
        <p className="leading-[22.6px] whitespace-pre">Address</p>
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

function LinkPhoneNumber2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Phone Number">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22px] not-italic relative shrink-0 text-[#657285] text-[14.8px] text-nowrap whitespace-pre">
        <p className="mb-0">1234 Kings Street</p>
        <p>San Francisco, CA 94103</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[323.73px] relative shrink-0" data-name="Container">
      <Container46 />
    </div>
  );
}

function DaysHours2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Days + Hours">
      <Container47 />
    </div>
  );
}

function AsideAddress() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip right-0 top-[541px]" data-name="Aside - Address">
      <LinkPhoneNumber2 />
      <DaysHours2 />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="h-[642px] pointer-events-auto sticky top-0" data-name="Left Content">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <AsideCall />
      <AsideEmail />
      <AsideAddress />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[1333.94px] relative shrink-0 w-[1320px]" data-name="Container">
      <Container4 />
      <Container26 />
      <div className="absolute bottom-0 h-[calc(100%-40px)] left-[24px] pointer-events-none right-[972.27px] top-[40px]">
        <LeftContent />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <CategoryDesktop />
      <Container48 />
    </div>
  );
}