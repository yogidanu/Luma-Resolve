import React, { useState } from 'react';
import svgPaths from '../imports/svg-fer7q7l6j1';

interface DraftResponseCardProps {
  draftText: string;
  version?: string;
  onApprove: () => void;
  onEdit: () => void;
  onEscalate?: () => void;
  stepsCompleted?: boolean;
  hasSteps?: boolean;
}

export function DraftResponseCard({
  draftText,
  version = 'v1.0',
  onApprove,
  onEdit,
  onEscalate,
  stepsCompleted = false,
  hasSteps = false
}: DraftResponseCardProps) {
  const [selectedTone, setSelectedTone] = useState<string | null>(null);

  const tones = ['Formal', 'Concise', 'Empathetic', 'Technical'];

  return (
    <div className="bg-card relative rounded-[10px] border border-primary/30 shadow-sm w-full">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Title with Icon */}
          <div className="flex items-center gap-2">
            {/* AI Icon */}
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_draft_icon)">
                  <path 
                    d={svgPaths.p15ab3e60} 
                    stroke="#171717" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                  <path 
                    d="M13.3333 1.33333V4" 
                    stroke="#171717" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                  <path 
                    d="M14.6667 2.66667H12" 
                    stroke="#171717" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                  <path 
                    d={svgPaths.p22966600} 
                    stroke="#171717" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                </g>
                <defs>
                  <clipPath id="clip0_draft_icon">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="font-semibold text-[14px] leading-[14px] tracking-[-0.35px] text-foreground">
              Draft Response
            </h3>
          </div>

          {/* Version Badge */}
          <div className="border border-border rounded-full px-[11px] py-[3px] h-[20px] flex items-center">
            <p className="font-semibold text-[10px] leading-[13.333px] text-foreground/80">
              {version}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
        {/* Draft Text */}
        <div className="bg-muted/30 border border-border rounded-[10px] px-[17px] py-[17px]">
          <p className="font-['Tinos'] italic text-[14px] leading-[22.75px] text-foreground/90 whitespace-pre-line">
            {draftText}
          </p>
        </div>

        {/* Adjust Tone Section */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[10px] leading-[15px] tracking-[0.5px] uppercase text-muted-foreground">
            Adjust Tone
          </p>
          <div className="grid grid-cols-2 gap-2">
            {tones.map((tone) => (
              <button
                key={tone}
                onClick={() => setSelectedTone(tone)}
                className={`border border-border rounded-[6.8px] px-[13px] py-2 font-medium text-[12px] leading-[16px] text-center text-foreground hover:bg-muted/50 transition-colors ${
                  selectedTone === tone ? 'bg-primary/10 border-primary/50' : 'bg-card'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          {/* Approve & Send Button */}
          <button
            onClick={onApprove}
            className="bg-primary rounded-[6.8px] h-[40px] w-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
          >
            {/* Send Icon */}
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_send_icon)">
                <path 
                  d={svgPaths.p22f0380} 
                  stroke="#FAFAFA" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
                <path 
                  d="M14.5693 1.43133L7.276 8.724" 
                  stroke="#FAFAFA" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </g>
              <defs>
                <clipPath id="clip0_send_icon">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
            <p className="font-medium text-[14px] leading-[20px] text-primary-foreground">
              Approve & Send
            </p>
          </button>

          {/* Edit and Escalate Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onEdit}
              className="bg-card border border-border rounded-[6.8px] h-[40px] flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              {/* Edit Icon */}
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_edit_icon)">
                  <path 
                    d="M8.66667 14H14" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                  <path 
                    d={svgPaths.p1ba32a00} 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                </g>
                <defs>
                  <clipPath id="clip0_edit_icon">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium text-[14px] leading-[20px] text-foreground">
                Edit
              </p>
            </button>

            <button
              onClick={onEscalate}
              className="bg-card border border-border rounded-[6.8px] h-[40px] flex items-center justify-center hover:bg-muted transition-colors"
            >
              <p className="font-medium text-[14px] leading-[20px] text-danger">
                Escalate
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}