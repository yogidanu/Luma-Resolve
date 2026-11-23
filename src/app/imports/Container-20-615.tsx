import svgPaths from "./svg-zlpd8gzr1l";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_20_566)" id="Icon">
          <path d={svgPaths.p247eb500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M20 2V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M22 4H18" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p352890c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_20_566">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[193.477px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start relative w-[193.477px]">
        <p className="bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[30px] text-neutral-950 text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(169.487deg, rgb(77, 133, 255) 0%, rgb(124, 59, 237) 50%, rgb(62, 224, 207) 100%)" }}>
          LumaResolve
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[14px] text-center text-neutral-500 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">AI-powered customer support resolution</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[calc(50%-0.27px)] top-[31px] translate-x-[-50%] w-[74.469px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[37px] not-italic text-[24px] text-center text-neutral-950 text-nowrap top-[-1px] tracking-[-0.6px] translate-x-[-50%] whitespace-pre">Sign In</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[14px] left-0 top-[4px] w-[35.75px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[6.8px] top-[24px] w-[395px]" data-name="Email Input">
      <div className="box-border content-stretch flex h-[44px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-[395px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">you@company.com</p>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[68px] left-0 top-0 w-[395px]" data-name="Container">
      <Paragraph2 />
      <EmailInput />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[14px] left-0 top-[4px] w-[65.469px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-white h-[44px] left-0 rounded-[6.8px] top-[24px] w-[395px]" data-name="Password Input">
      <div className="box-border content-stretch flex h-[44px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-[395px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[68px] left-0 top-[92px] w-[395px]" data-name="Container">
      <Paragraph3 />
      <PasswordInput />
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-[-1px] size-px top-[-1px]" data-name="Checkbox" />;
}

function Container5() {
  return <div className="absolute bg-white border-2 border-neutral-300 border-solid left-0 rounded-[4px] size-[16px] top-0" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Container">
      <Checkbox />
      <Container5 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[14px] left-[24px] top-px w-[95.836px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">Remember me</p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[16px] left-0 top-[184px] w-[119.836px]" data-name="Label">
      <Container6 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[14px] text-center text-neutral-50 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Sign In</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#4c84ff] box-border content-stretch flex flex-col h-[44px] items-start left-0 pb-0 pl-[79.895px] pr-[78.902px] pt-[12px] rounded-[6.8px] top-[224px] w-[395px]" data-name="Button">
      <Paragraph5 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[268px] left-[32px] top-[80px] w-[395px]" data-name="Form">
      <Container3 />
      <Container4 />
      <Label />
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[380px] left-0 top-0 w-[459px]" data-name="Container">
      <Paragraph1 />
      <Form />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[380px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] not-italic text-[14px] text-center text-neutral-500 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">AI-powered CRM resolution system</p>
    </div>
  );
}

export default function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative size-full" data-name="Container">
      <Container2 />
      <Container8 />
      <Container9 />
    </div>
  );
}