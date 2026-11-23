import React from 'react';
import svgPaths from '../imports/svg-fek2api5t3';

interface AIAnalysisCardProps {
  rootCause: string;
  keyFacts: string[];
  similarCases: number;
  onViewReasoning: () => void;
}

export function AIAnalysisCard({
  rootCause,
  keyFacts,
  similarCases,
  onViewReasoning
}: AIAnalysisCardProps) {
  return (
    <div className="bg-card relative rounded-[10px] border border-border shadow-sm overflow-clip">
      {/* Left Blue Border */}
      <div className="absolute bg-primary h-full left-0 top-0 w-[4px]" />

      {/* Header */}
      <div className="flex gap-[8px] items-center px-[24px] pt-[24px] pb-[12px]">
        {/* AI Icon */}
        <div className="relative shrink-0 size-[18px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g clipPath="url(#clip0_11_394)" opacity="0.8">
              <path 
                d={svgPaths.p2d67c60} 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                className="text-primary"
              />
              <path 
                d="M15 1.5V4.5" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                className="text-primary"
              />
              <path 
                d="M16.5 3H13.5" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                className="text-primary"
              />
              <path 
                d={svgPaths.p6f9ce00} 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                className="text-primary"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_394">
                <rect fill="white" height="18" width="18" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[16px] leading-[16px] tracking-[-0.4px] text-foreground">
          AI Analysis
        </h3>
      </div>

      {/* Content */}
      <div className="px-[24px] pb-[24px] flex flex-col gap-[16px]">
        {/* Root Cause */}
        <p className="font-medium text-[14px] leading-[22.75px] text-foreground">
          {rootCause}
        </p>

        {/* Key Facts */}
        <div className="bg-muted rounded-[10px] px-[12px] py-[12px]">
          <div className="flex flex-col gap-[8px]">
            {keyFacts.map((fact, index) => (
              <div key={index} className="relative flex items-start gap-[8px]">
                <div className="bg-primary rounded-full size-[6px] mt-[6px] shrink-0" />
                <p className="font-normal text-[12px] leading-[19.5px] text-muted-foreground">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-[8px] flex items-center justify-between">
          <p className="font-medium text-[12px] leading-[16px] text-primary">
            {similarCases} similar cases
          </p>
          <button
            onClick={onViewReasoning}
            className="font-medium text-[14px] leading-[20px] text-foreground hover:text-primary transition-colors"
          >
            View reasoning →
          </button>
        </div>
      </div>
    </div>
  );
}
