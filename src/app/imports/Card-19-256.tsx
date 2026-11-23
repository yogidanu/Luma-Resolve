import svgPaths from "./svg-fer7q7l6j1";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_10_1272)" id="Icon">
          <path d={svgPaths.p15ab3e60} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_10_1272">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] left-0 not-italic text-[14px] text-neutral-900 text-nowrap top-[0.5px] tracking-[-0.35px] whitespace-pre">Draft Response</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[16px] relative shrink-0 w-[123.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[123.531px]">
        <Icon />
        <CardTitle />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[20px] relative rounded-[1.67772e+07px] shrink-0 w-[41.469px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[11px] py-[3px] relative w-[41.469px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.333px] not-italic relative shrink-0 text-[10px] text-neutral-950 text-nowrap whitespace-pre">v1.0</p>
      </div>
    </div>
  );
}

function TicketDetailScreen() {
  return (
    <div className="h-[20px] relative shrink-0 w-[299.5px]" data-name="TicketDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-between relative w-[299.5px]">
        <Container />
        <Badge />
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-[rgba(76,132,255,0.05)] h-[53px] relative shrink-0 w-full" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[53px] items-start justify-center pb-px pl-[24px] pr-0 pt-0 relative w-full">
          <TicketDetailScreen />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[273px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Tinos:Italic',sans-serif] italic leading-[22.75px] left-0 text-[14px] text-[rgba(10,10,10,0.9)] top-0 w-[265px]">{`Hi Sarah, Thank you for upgrading to Enterprise! I can see your payment has been processed successfully. I've identified the issue - there was a sync delay between our billing and permissions systems. I've manually refreshed your account permissions, and you should now have full access to all Enterprise features. Please try logging out and back in. Everything should work perfectly now. Sorry for the inconvenience, and thank you for your patience! Best regards`}</p>
    </div>
  );
}

function TicketDetailScreen1() {
  return (
    <div className="bg-[rgba(245,245,245,0.3)] h-[307px] relative rounded-[10px] shrink-0 w-full" data-name="TicketDetailScreen">
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[307px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-neutral-500 text-nowrap top-[0.5px] tracking-[0.5px] uppercase whitespace-pre">Adjust Tone</p>
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative rounded-[6.8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[13px] py-px relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap whitespace-pre">Formal</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative rounded-[6.8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[13px] py-px relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap whitespace-pre">Concise</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:2_/_1] place-self-stretch relative rounded-[6.8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[13px] py-px relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap whitespace-pre">Empathetic</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:2_/_2] place-self-stretch relative rounded-[6.8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[13px] py-px relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap whitespace-pre">Technical</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[80px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function TicketDetailScreen2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[103px] items-start relative shrink-0 w-full" data-name="TicketDetailScreen">
      <Paragraph1 />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[84.2px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_10_1245)" id="Icon">
          <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_10_1245">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#4c84ff] h-[40px] relative rounded-[6.8px] shrink-0 w-full" data-name="Button">
      <Icon1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[162.2px] not-italic text-[14px] text-center text-neutral-50 text-nowrap top-[10.5px] translate-x-[-50%] whitespace-pre">{`Approve & Send`}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[47.93px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_10_1235)" id="Icon">
          <path d="M8.66667 14H14" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ba32a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_10_1235">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[6.8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <Icon2 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[84.93px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[10.5px] translate-x-[-50%] whitespace-pre">Edit</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[6.8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#e7000b] text-[14px] text-center text-nowrap whitespace-pre">Escalate</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[40px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function TicketDetailScreen3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[96px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="TicketDetailScreen">
      <Button4 />
      <Container2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[578px] relative shrink-0 w-full" data-name="CardContent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[578px] items-start pb-0 pt-[16px] px-[24px] relative w-full">
          <TicketDetailScreen1 />
          <TicketDetailScreen2 />
          <TicketDetailScreen3 />
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative size-full">
          <CardHeader />
          <CardContent />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4d85ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}