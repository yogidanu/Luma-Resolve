import svgPaths from "./svg-fek2api5t3";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_11_394)" id="Icon" opacity="0.6554">
          <path d={svgPaths.p2d67c60} id="Vector" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.5 3H13.5" id="Vector_3" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p6f9ce00} id="Vector_4" stroke="var(--stroke-0, #4C84FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_11_394">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[16px] relative shrink-0 w-[81.211px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[81.211px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-1px] tracking-[-0.4px] whitespace-pre">AI Analysis</p>
      </div>
    </div>
  );
}

function TicketDetailScreen() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-[24px] top-[24px] w-[301.5px]" data-name="TicketDetailScreen">
      <Icon />
      <CardTitle />
    </div>
  );
}

function TicketDetailScreen1() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="TicketDetailScreen">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[14px] text-neutral-950 top-[0.5px] w-[293px]">Payment processed successfully but user account permissions not automatically updated due to sync delay in billing system.</p>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#4c84ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[6px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[19.5px] left-[14px] top-0 w-[208.773px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[12px] text-neutral-500 text-nowrap top-[0.5px] whitespace-pre">Payment of $299 confirmed in Stripe</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Text />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#4c84ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[6px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[39px] left-[14px] top-0 w-[263.5px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[12px] text-neutral-500 top-[0.5px] w-[224px]">{`Account tier still shows "Pro" instead of "Enterprise"`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Text1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#4c84ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[6px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[39px] left-[14px] top-0 w-[263.5px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[12px] text-neutral-500 top-[0.5px] w-[253px]">Similar cases resolved by manual permission refresh</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Text2 />
    </div>
  );
}

function TicketDetailScreen2() {
  return (
    <div className="bg-[rgba(245,245,245,0.5)] h-[137.5px] relative rounded-[10px] shrink-0 w-full" data-name="TicketDetailScreen">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[137.5px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Container1 />
          <Container3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[85.086px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#4c84ff] text-[12px] top-[0.5px] w-[86px]">3 similar cases</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20px] relative rounded-[6.8px] shrink-0 w-[143.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center px-[12px] py-0 relative w-[143.906px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-neutral-900 text-nowrap whitespace-pre">View reasoning →</p>
      </div>
    </div>
  );
}

function TicketDetailScreen3() {
  return (
    <div className="box-border content-stretch flex h-[29px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="TicketDetailScreen">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none" />
      <Text3 />
      <Button />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[290.75px] items-start left-0 px-[24px] py-0 top-[54px] w-[349.5px]" data-name="CardContent">
      <TicketDetailScreen1 />
      <TicketDetailScreen2 />
      <TicketDetailScreen3 />
    </div>
  );
}

function TicketDetailScreen4() {
  return <div className="absolute bg-[#4c84ff] h-[344.75px] left-0 top-0 w-[4px]" data-name="TicketDetailScreen" />;
}

export default function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Card">
      <TicketDetailScreen />
      <CardContent />
      <TicketDetailScreen4 />
    </div>
  );
}