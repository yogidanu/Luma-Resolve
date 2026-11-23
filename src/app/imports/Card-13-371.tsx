import svgPaths from "./svg-mnb5weowvv";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_13_383)" id="Icon">
          <path d={svgPaths.p24f38080} id="Vector" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 3.33333H15" id="Vector_3" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2661f400} id="Vector_4" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_13_383">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[18px] relative shrink-0 w-[210.438px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[210.438px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[18px] text-neutral-900 text-nowrap top-0 tracking-[-0.45px] whitespace-pre">{`AI Insights & Suggestions`}</p>
      </div>
    </div>
  );
}

function MainDashboard() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[24px] top-[27px] w-[409px]" data-name="MainDashboard">
      <Icon />
      <CardTitle />
    </div>
  );
}

function MainDashboard1() {
  return <div className="absolute bg-[rgba(23,23,23,0.05)] blur-3xl filter left-[369px] rounded-[1.67772e+07px] size-[128px] top-[-37px]" data-name="MainDashboard" />;
}

function Container() {
  return <div className="absolute bg-[#4c84ff] left-[13px] rounded-[1.67772e+07px] size-[8px] top-[21px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[19.25px] left-[33px] top-[13px] w-[261.648px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">16 repetitive payment failures detected</p>
    </div>
  );
}

function MainDashboard2() {
  return (
    <div className="bg-[rgba(245,245,245,0.3)] h-[45.25px] relative rounded-[10px] shrink-0 w-full" data-name="MainDashboard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container />
      <Text />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#4c84ff] left-[13px] rounded-[1.67772e+07px] size-[8px] top-[21px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[19.25px] left-[33px] top-[13px] w-[207.008px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">8 customers with similar errors</p>
    </div>
  );
}

function MainDashboard3() {
  return (
    <div className="bg-[rgba(245,245,245,0.3)] h-[45.25px] relative rounded-[10px] shrink-0 w-full" data-name="MainDashboard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container1 />
      <Text1 />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#e7000b] left-[13px] rounded-[1.67772e+07px] size-[8px] top-[21px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[19.25px] left-[33px] top-[13px] w-[222.539px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">3 unresolved high-priority tickets</p>
    </div>
  );
}

function MainDashboard4() {
  return (
    <div className="bg-[rgba(245,245,245,0.3)] h-[45.25px] relative rounded-[10px] shrink-0 w-full" data-name="MainDashboard">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container2 />
      <Text2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[191.75px] items-start left-0 px-[24px] py-0 top-[79px] w-[457px]" data-name="CardContent">
      <MainDashboard2 />
      <MainDashboard3 />
      <MainDashboard4 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white border border-[rgba(229,229,229,0.6)] border-solid overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Card">
      <MainDashboard />
      <MainDashboard1 />
      <CardContent />
    </div>
  );
}