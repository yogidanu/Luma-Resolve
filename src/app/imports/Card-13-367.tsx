import svgPaths from "./svg-rewbwulpzb";

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-neutral-500 text-nowrap top-[0.5px] whitespace-pre">Open Tickets</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[48px] text-neutral-900 text-nowrap top-0 tracking-[-1.2px] whitespace-pre">47</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[76px] relative shrink-0 w-[88.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[76px] items-start relative w-[88.516px]">
        <Paragraph />
        <Heading />
      </div>
    </div>
  );
}

function MainDashboard() {
  return (
    <div className="h-[76px] relative shrink-0 w-[409px]" data-name="MainDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[76px] items-start justify-between relative w-[409px]">
        <Container />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11px] size-[12px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(5,223,114,0.1)] h-[24px] relative rounded-[1.67772e+07px] shrink-0 w-[69.43px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.43px]">
        <Icon />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[27px] not-italic text-[#05df72] text-[12px] text-nowrap top-[4.5px] whitespace-pre">+12%</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[69.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[69.992px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-neutral-500 text-nowrap top-[0.5px] whitespace-pre">vs last week</p>
      </div>
    </div>
  );
}

function MainDashboard1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[409px]" data-name="MainDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[409px]">
        <Badge />
        <Text />
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-start left-0 pb-0 pl-[24px] pr-0 pt-[24px] top-0 w-[457px]" data-name="CardHeader">
      <MainDashboard />
      <MainDashboard1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[252px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white border border-[#4c84ff] border-solid h-[40px] left-[24px] rounded-[6.8px] top-[150px] w-[409px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[195.84px] not-italic text-[#4c84ff] text-[14px] text-center text-nowrap top-[9.5px] translate-x-[-50%] whitespace-pre">View all tickets</p>
      <Icon1 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white border border-[rgba(229,229,229,0.6)] border-solid overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Card">
      <CardHeader />
      <Button />
    </div>
  );
}