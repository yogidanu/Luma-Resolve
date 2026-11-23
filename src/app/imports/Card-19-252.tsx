function CardTitle() {
  return (
    <div className="h-[14px] relative shrink-0 w-[144.883px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[144.883px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] left-0 not-italic text-[14px] text-neutral-500 text-nowrap top-[0.5px] tracking-[0.7px] uppercase whitespace-pre">Suggested Steps</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-neutral-100 h-[22px] relative rounded-[1.67772e+07px] shrink-0 w-[87.023px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-center px-[11px] py-[3px] relative w-[87.023px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-900 text-nowrap whitespace-pre">95% Match</p>
      </div>
    </div>
  );
}

function TicketDetailScreen() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center justify-between left-[24px] top-[24px] w-[301.5px]" data-name="TicketDetailScreen">
      <CardTitle />
      <Badge />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(76,132,255,0.1)] content-stretch flex items-center justify-center left-[8px] rounded-[1.67772e+07px] size-[24px] top-[10px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#4c84ff] text-[12px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.75px] left-[44px] top-[8px] w-[225.797px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(10,10,10,0.9)] text-nowrap top-[0.5px] whitespace-pre">{`Verify user's API key configuration`}</p>
    </div>
  );
}

function TicketDetailScreen1() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="TicketDetailScreen">
      <Container />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(76,132,255,0.1)] content-stretch flex items-center justify-center left-[8px] rounded-[1.67772e+07px] size-[24px] top-[10px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#4c84ff] text-[12px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[45.5px] left-[44px] top-[8px] w-[249.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(10,10,10,0.9)] top-[0.5px] w-[222px]">Guide through permission refresh process</p>
    </div>
  );
}

function TicketDetailScreen2() {
  return (
    <div className="h-[61.5px] relative rounded-[10px] shrink-0 w-full" data-name="TicketDetailScreen">
      <Container1 />
      <Paragraph1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(76,132,255,0.1)] content-stretch flex items-center justify-center left-[8px] rounded-[1.67772e+07px] size-[24px] top-[10px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#4c84ff] text-[12px] text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[22.75px] left-[44px] top-[8px] w-[179.68px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(10,10,10,0.9)] text-nowrap top-[0.5px] whitespace-pre">Provide documentation link</p>
    </div>
  );
}

function TicketDetailScreen3() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="TicketDetailScreen">
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6.8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4c84ff] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[150.85px] not-italic text-[#4c84ff] text-[14px] text-center text-nowrap top-[8.5px] translate-x-[-50%] whitespace-pre">Show detailed reasoning</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] h-[249.5px] items-start left-0 px-[24px] py-0 top-[54px] w-[349.5px]" data-name="CardContent">
      <TicketDetailScreen1 />
      <TicketDetailScreen2 />
      <TicketDetailScreen3 />
      <Button />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Card">
      <TicketDetailScreen />
      <CardContent />
    </div>
  );
}