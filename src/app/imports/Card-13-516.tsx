function CardTitle() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] left-0 not-italic text-[14px] text-neutral-500 text-nowrap top-[0.5px] tracking-[0.7px] uppercase whitespace-pre">Tags</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute box-border content-stretch flex h-[22px] items-center left-0 px-[11px] py-[3px] rounded-[1.67772e+07px] top-0 w-[72.945px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(76,132,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#4c84ff] text-[12px] text-nowrap whitespace-pre">Payment</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute box-border content-stretch flex h-[22px] items-center left-[80.95px] px-[11px] py-[3px] rounded-[1.67772e+07px] top-0 w-[57.219px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(76,132,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#4c84ff] text-[12px] text-nowrap whitespace-pre">Billing</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute box-border content-stretch flex h-[22px] items-center left-[146.16px] px-[11px] py-[3px] rounded-[1.67772e+07px] top-0 w-[76.992px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(231,0,11,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e7000b] text-[12px] text-nowrap whitespace-pre">Error 503</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute box-border content-stretch flex h-[22px] items-center left-0 px-[11px] py-[3px] rounded-[1.67772e+07px] top-[30px] w-[104.547px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(76,132,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#4c84ff] text-[12px] text-nowrap whitespace-pre">High-risk user</p>
    </div>
  );
}

function TicketDetailScreen() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="TicketDetailScreen">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <CardTitle />
          <TicketDetailScreen />
        </div>
      </div>
    </div>
  );
}