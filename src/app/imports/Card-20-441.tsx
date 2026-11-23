function CardTitle() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[calc(50%+0.5px)] not-italic text-[24px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.6px] translate-x-[-50%] whitespace-pre">Sign In</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[35.75px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[6.8px] top-[24px] w-[369px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-[369px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">you@company.com</p>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[65.469px]" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Password</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[6.8px] top-[24px] w-[369px]" data-name="Input">
      <div className="box-border content-stretch flex h-[40px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-[369px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#767676] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[95.836px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[95.836px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Remember me</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Checkbox />
      <PrimitiveLabel2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4c84ff] h-[44px] relative rounded-[6.8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[calc(50%+0.5px)] not-italic text-[14px] text-center text-neutral-50 text-nowrap top-[12.5px] translate-x-[-50%] whitespace-pre">Sign In</p>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[260px] items-start relative shrink-0 w-full" data-name="LoginScreen">
      <Container />
      <Container1 />
      <Container2 />
      <Button />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <CardTitle />
          <LoginScreen />
        </div>
      </div>
    </div>
  );
}