import imgYkdzXkigfF0F8F82KAIxjJiooJpg from "figma:asset/3446d0654933e115c754cdbcc62003d2fd74e953.png";
import imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/d9c5821104334656535b5f632acf10a1b665ad0c.png";

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cc0000] text-[12.797px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Health</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="h-[18.19px] overflow-clip relative shrink-0 w-[39.61px]" data-name="Section Title">
      <Container />
    </div>
  );
}

function SectionTitleCategoryHighlight() {
  return (
    <div className="backdrop-blur-[2.5px] backdrop-filter bg-[rgba(204,0,0,0.05)] box-border content-stretch flex items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Section Title → Category Highlight">
      <SectionTitle />
      <div className="absolute inset-0 rounded-[4px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(204,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[48px] not-italic relative shrink-0 text-[#020a1c] text-[33.328px] w-full">
        <p className="mb-0">The Future of Healthcare Workforce Shines Bright as Non-</p>
        <p>Clinical Roles Evolve</p>
      </div>
    </div>
  );
}

function SectionHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Section + Headline">
      <SectionTitleCategoryHighlight />
      <Heading />
    </div>
  );
}

function Dark() {
  return <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[917.25px]" data-name="Dark" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-px items-start justify-center relative shrink-0" data-name="Container">
      <Dark />
    </div>
  );
}

function YkdzXkigfF0F8F82KAIxjJiooJpg() {
  return (
    <div className="absolute inset-0 rounded-[99px]" data-name="YKDZXkigfF0f8F82kAIxjJioo.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[99px]">
        <img alt="" className="absolute h-[125.03%] left-0 max-w-none top-[-12.52%] w-full" src={imgYkdzXkigfF0F8F82KAIxjJiooJpg} />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[30px]" data-name="Photo">
      <YkdzXkigfF0F8F82KAIxjJiooJpg />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[0px] text-nowrap">
        <p className="leading-[18.2px] text-[12.906px] whitespace-pre">Emily Davis</p>
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

function LinkAuthor() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Author">
      <Photo />
      <Container3 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#cc0000] rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.016px] text-nowrap">
        <p className="leading-[18.2px] whitespace-pre">Monday, September 23, 2024</p>
      </div>
    </div>
  );
}

function PublishedDate() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Published Date">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[13.125px] w-full">
        <p className="leading-[19.6px]">2 min read</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function ArticleDetails() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] items-center overflow-clip pl-[4px] pr-0 py-0 relative shrink-0 w-[476px]" data-name="Article Details">
      <LinkAuthor />
      <Divider />
      <PublishedDate />
      <Divider />
      <Container6 />
    </div>
  );
}

function SectionTitleAuthor() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Section + Title + Author">
      <SectionHeadline />
      <Container1 />
      <ArticleDetails />
    </div>
  );
}

function WUSa65KrK8Qboe92Fcbj6LXpo2UJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="wUSa65krK8qboe92FCBJ6lXpo2U.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[101.52%] left-0 max-w-none top-[-0.76%] w-full" src={imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg} />
      </div>
    </div>
  );
}

function Photo1() {
  return (
    <div className="h-[600px] overflow-clip relative rounded-[8px] shrink-0 w-[917.25px]" data-name="Photo">
      <WUSa65KrK8Qboe92Fcbj6LXpo2UJpg />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[12.906px] w-full">
        <p className="leading-[18.2px]">Medical coders and billing specialists are becoming the backbone of healthcare administration. Photo by: Jenna Harrow</p>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Caption">
      <Container7 />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[18.19px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[18.19px] items-center justify-center pb-px pt-0 px-[4px] relative w-full">
          <Caption />
        </div>
      </div>
    </div>
  );
}

function PhotoCaption() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Photo + Caption">
      <Photo1 />
      <Content />
    </div>
  );
}

function Container8() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container8 />
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

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <Facebook />
    </div>
  );
}

function ShareFacebook() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Share Facebook">
      <Link />
    </div>
  );
}

function Container9() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour1() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container9 />
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

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <Twitter />
    </div>
  );
}

function ShareTwitter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Share Twitter">
      <Link1 />
    </div>
  );
}

function Container10() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour2() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container10 />
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

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <Linkedin />
    </div>
  );
}

function ShareLinkedin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Share Linkedin">
      <Link2 />
    </div>
  );
}

function Container11() {
  return <div className="shrink-0 size-[16px]" data-name="Container" />;
}

function LinkColour3() {
  return (
    <div className="bg-slate-300 content-stretch flex items-center justify-center opacity-60 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="Link - Colour">
      <Container11 />
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

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[45px]" data-name="Link">
      <WhatsApp />
    </div>
  );
}

function ShareWhatsApp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Share WhatsApp">
      <Link3 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip shrink-0 sticky top-0 z-[2]" data-name="Links">
      <ShareFacebook />
      <ShareTwitter />
      <ShareLinkedin />
      <ShareWhatsApp />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">{`The healthcare sector is experiencing a significant shift as non-clinical roles gain importance in the `}</p>
        <p className="mb-0">{`rapidly evolving landscape. Driven by technological advancements and the growing demand for `}</p>
        <p className="mb-0">{`healthcare services, the industry is seeing a rise in roles that go beyond traditional clinical positions. `}</p>
        <p className="mb-0">{`These changes are reshaping how healthcare organizations operate and offer new opportunities for `}</p>
        <p>professionals looking to make a meaningful impact without direct patient care.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] w-full">
        <p className="mb-0">{`One of the key trends driving this transformation is the expansion of telehealth services and the `}</p>
        <p className="mb-0">{`increasing reliance on electronic health records (EHRs). This shift is creating a demand for tech-savvy `}</p>
        <p className="mb-0">{`professionals who can manage these digital tools effectively. Roles such as medical billing, coding, `}</p>
        <p className="mb-0">{`and patient service representatives are becoming more critical as they support the infrastructure that `}</p>
        <p className="mb-0">{`keeps healthcare systems running smoothly. As these roles evolve, so does the need for professionals `}</p>
        <p className="mb-0">{`who can adapt to new technologies and ensure that healthcare organizations remain efficient and `}</p>
        <p>responsive to patient needs.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.285px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.734px] w-full">
        <p className="mb-0">{`In addition to the technological shift, demographic changes are also playing a role in the evolution of `}</p>
        <p className="mb-0">{`non-clinical healthcare jobs. With an aging population, there is a growing need for healthcare `}</p>
        <p className="mb-0">{`services that can accommodate the needs of older adults. This trend is driving the demand for roles `}</p>
        <p className="mb-0">{`like practice administrators and medical receptionists, who play crucial roles in managing the `}</p>
        <p>operations of healthcare facilities and ensuring that patients receive the care they need.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.453px] w-full">
        <p className="mb-0">{`The future of healthcare is not just about clinical excellence; it’s about building a robust support `}</p>
        <p className="mb-0">{`system that allows healthcare providers to deliver the best possible care. As the industry continues to `}</p>
        <p className="mb-0">{`grow and evolve, non-clinical roles will play an increasingly important part in shaping the future of `}</p>
        <p className="mb-0">{`healthcare. These roles offer professionals a chance to contribute to the healthcare system in `}</p>
        <p className="mb-0">{`meaningful ways, whether by ensuring that billing processes are accurate, managing patient `}</p>
        <p>interactions, or overseeing the day-to-day operations of a medical practice.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.485px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.6px] not-italic relative shrink-0 text-[#020a1c] text-[16.594px] w-full">
        <p className="mb-0">{`As healthcare organizations continue to embrace these changes, they must also focus on attracting `}</p>
        <p className="mb-0">{`and retaining talent in these critical non-clinical roles. Investing in professional development, offering `}</p>
        <p className="mb-0">{`competitive benefits, and creating a positive work environment will be key to ensuring that these roles `}</p>
        <p>are filled by individuals who are committed to making a difference in the healthcare industry.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[19.39px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Container">
      <Container12 />
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[75px] isolate items-start relative shrink-0 w-full" data-name="Content">
      <Links />
      <Container17 />
    </div>
  );
}

export default function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Article">
      <SectionTitleAuthor />
      <PhotoCaption />
      <Content1 />
    </div>
  );
}