function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Sarah Chen</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-neutral-500 text-nowrap top-[0.5px] whitespace-pre">2 hours ago</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[52px] top-0 w-[89.688px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 bg-[#4c84ff] grow h-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SC</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] shadow-[0px_0px_0px_1px_rgba(229,229,229,0.5)] size-[40px] top-0" data-name="Primitive.span">
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[141.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[141.688px]">
        <Container />
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-white h-[22px] relative rounded-[1.67772e+07px] shrink-0 w-[118.016px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#05df72] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-center px-[11px] py-[3px] relative w-[118.016px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#05df72] text-[12px] text-nowrap whitespace-pre">Original Request</p>
      </div>
    </div>
  );
}

function TicketDetailScreen() {
  return (
    <div className="h-[40px] relative shrink-0 w-[730.813px]" data-name="TicketDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-between relative w-[730.813px]">
        <Container1 />
        <Badge />
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.1)] box-border content-stretch flex flex-col h-[77px] items-start left-0 pb-px pl-[24px] pr-0 pt-[24px] top-0 w-[778.813px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(229,229,229,0.4)] border-solid inset-0 pointer-events-none" />
      <TicketDetailScreen />
    </div>
  );
}

function TicketDetailScreen1() {
  return (
    <div className="absolute h-[78px] left-[24px] top-[101px] w-[730.813px]" data-name="TicketDetailScreen">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(10,10,10,0.9)] top-[-1px] w-[718px]">{`I've just upgraded to the Enterprise plan and paid $299, but I still can't access any of the premium features. I've tried logging out and back in, but nothing has changed. This is urgent as we have a presentation tomorrow and need these features.`}</p>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white border border-[rgba(229,229,229,0.6)] border-solid relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Card">
      <CardHeader />
      <TicketDetailScreen1 />
    </div>
  );
}