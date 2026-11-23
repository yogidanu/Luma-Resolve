import svgPaths from "./svg-pxi50698pc";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[118.438px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[118.438px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-0 whitespace-pre">Conversation</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[103.852px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[103.852px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4c84ff] text-[14px] top-[0.5px] w-[104px]">Ticket #1001</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(245,245,245,0.1)] h-[61px] relative shrink-0 w-[778.813px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(229,229,229,0.6)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[61px] items-center justify-between pb-px pt-0 px-[24px] relative w-[778.813px]">
        <Heading />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.8)] h-[24px] left-[337.52px] rounded-[1.67772e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[24px] w-[103.758px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[12px] text-neutral-900 text-nowrap top-[4.5px] whitespace-pre">Today, Oct 24</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-[#4c84ff] grow min-h-px min-w-px relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[584.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[584.648px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[16px] not-italic text-[14px] text-neutral-50 top-[16.5px] w-[542px]">{`Hi Sarah, thanks for reaching out. I'm looking into this for you right now. Could you confirm if you received a confirmation email from Stripe?`}</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[62.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[62.719px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[4px] not-italic text-[11px] text-neutral-500 text-nowrap top-[0.5px] whitespace-pre">1 hour ago</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[100px] items-end left-[90.16px] top-0 w-[584.648px]" data-name="Container">
      <Container1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 bg-[#4c84ff] grow h-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">AG</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex items-start left-[690.81px] overflow-clip rounded-[1.67772e+07px] shadow-[0px_0px_0px_1px_rgba(229,229,229,0.5),0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[40px] top-0" data-name="Primitive.span">
      <Text3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[100px] left-[24px] top-[72px] w-[730.813px]" data-name="Container">
      <Container2 />
      <PrimitiveSpan />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] shrink-0 w-[584.648px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[584.648px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[17px] not-italic text-[14px] text-neutral-950 top-[17.5px] w-[495px]">Yes, I did. Here is the receipt attached above. The money definitely left our account.</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[72.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.5px] relative w-[72.07px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[4px] not-italic text-[11px] text-neutral-500 text-nowrap top-[0.5px] whitespace-pre">55 mins ago</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[102px] items-start left-[56px] top-0 w-[584.648px]" data-name="Container">
      <Container4 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 bg-white grow h-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shadow-[0px_0px_0px_1px_rgba(229,229,229,0.2)] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#4c84ff] text-[14px] text-nowrap whitespace-pre">SC</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] shadow-[0px_0px_0px_1px_rgba(229,229,229,0.5),0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[40px] top-0" data-name="Primitive.span">
      <Text5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[102px] left-[24px] top-[196px] w-[730.813px]" data-name="Container">
      <Container5 />
      <PrimitiveSpan1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.05)] grow min-h-px min-w-px relative shrink-0 w-[778.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[778.813px]">
        <Text1 />
        <Container3 />
        <Container6 />
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[100px] relative rounded-[6.8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[100px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(115,115,115,0.6)] text-nowrap whitespace-pre">Type your manual reply...</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3cb14e80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[6.8px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[95.109px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[95.109px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[48px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">Public Reply</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative rounded-[6.8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[50px] not-italic text-[12px] text-center text-neutral-500 text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">Internal Note</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.6)] grow h-[36px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-start pb-0 pt-[4px] px-[4px] relative w-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[40px] relative shrink-0 w-[262.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-center relative w-[262.203px]">
        <Button />
        <Container8 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 9.16667V14.1667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M11.6667 9.16667V14.1667" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3bbb0f80} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 5H17.5" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ba73400} id="Vector_5" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[6.8px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#4c84ff] grow h-[40px] min-h-px min-w-px relative rounded-[6.8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-neutral-50 text-nowrap whitespace-pre">Send</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[134.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[134.75px]">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(229,229,229,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[65px] items-center justify-between pb-0 pl-[16px] pr-[12px] pt-px relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[167px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[167px] items-start p-px relative w-full">
          <Textarea />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[216px] relative shrink-0 w-[778.813px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(229,229,229,0.6)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[216px] items-start pb-0 pt-[25px] px-[24px] relative w-[778.813px]">
        <Container12 />
      </div>
    </div>
  );
}

export default function Container14() {
  return (
    <div className="bg-white relative rounded-[16.4px] size-full" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
        <Container7 />
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.6)] border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}