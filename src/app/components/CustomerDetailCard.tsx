import React from 'react';
import svgPaths from '../imports/svg-jhnfppu0t1';

interface CustomerDetailCardProps {
  name: string;
  customerId: string;
  email: string;
  plan: string;
  joinedDate: string;
  tags: string[];
  avatarText: string;
}

export function CustomerDetailCard({
  name,
  customerId,
  email,
  plan,
  joinedDate,
  tags,
  avatarText
}: CustomerDetailCardProps) {
  return (
    <div className="bg-card rounded-[10px] border border-border shadow-sm p-6">
      {/* Header with Avatar and Name */}
      <div className="relative h-[56px] mb-6">
        {/* Avatar with ring */}
        <div className="absolute left-0 top-0 size-[56px] rounded-full ring-2 ring-card ring-offset-2 ring-offset-primary/20">
          <div className="bg-primary rounded-full size-full flex items-center justify-center">
            <p className="font-bold text-[18px] text-primary-foreground leading-[28px]">{avatarText}</p>
          </div>
        </div>

        {/* Name and ID */}
        <div className="absolute left-[68px] top-0 flex flex-col">
          <h3 className="font-bold text-[18px] text-foreground leading-[28px]">{name}</h3>
          <p className="font-normal text-[14px] text-muted-foreground leading-[20px]">{customerId}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex gap-2 mb-6">
        {tags.map((tag, index) => (
          <div 
            key={index}
            className="bg-muted rounded-full px-[11px] py-[3px] h-[22px] flex items-center border border-border"
          >
            <p className="font-semibold text-[12px] text-foreground leading-[16px]">{tag}</p>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="space-y-4">
        {/* Email */}
        <div className="h-[48px] rounded-[6.8px] flex items-center">
          <div className="flex items-center gap-3 pl-2">
            <div className="bg-primary/10 rounded-full size-[32px] flex items-center justify-center">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.p1ad56d80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-primary" />
                <path d={svgPaths.p5c184f0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-primary" />
              </svg>
            </div>
            <p className="font-normal text-[14px] text-muted-foreground leading-[20px]">{email}</p>
          </div>
        </div>

        {/* Plan */}
        <div className="h-[48px] rounded-[6.8px] flex items-center">
          <div className="flex items-center gap-3 pl-2">
            <div className="bg-emerald-500/10 rounded-full size-[32px] flex items-center justify-center">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.p162a1600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d={svgPaths.p6974900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M4.66667 3.5H4.6725" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M9.33333 3.5H9.33917" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M7 3.5H7.00583" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M7 5.83333H7.00583" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M7 8.16667H7.00583" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M9.33333 5.83333H9.33917" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M9.33333 8.16667H9.33917" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M4.66667 5.83333H4.6725" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
                <path d="M4.66667 8.16667H4.6725" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-emerald-600" />
              </svg>
            </div>
            <div className="relative h-[20px]">
              <p className="font-normal text-[14px] text-muted-foreground leading-[20px]">
                Plan: <span className="font-medium text-foreground">{plan}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Joined Date */}
        <div className="h-[48px] rounded-[6.8px] flex items-center">
          <div className="flex items-center gap-3 pl-2">
            <div className="bg-primary/10 rounded-full size-[32px] flex items-center justify-center">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d="M4.66667 1.16667V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-primary" />
                <path d="M9.33333 1.16667V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-primary" />
                <path d={svgPaths.p24a2b500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-primary" />
                <path d="M1.75 5.83333H12.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" className="text-primary" />
              </svg>
            </div>
            <div className="relative h-[20px]">
              <p className="font-normal text-[14px] text-muted-foreground leading-[20px]">
                Joined: <span className="font-medium text-foreground">{joinedDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
