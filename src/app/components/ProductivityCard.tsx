import React from 'react';
import svgPaths from '../imports/svg-b1sk34oblq';

interface ProductivityCardProps {
  onMetricClick?: (metricType: 'resolved' | 'handleTime' | 'aiAssistance') => void;
}

export function ProductivityCard({ onMetricClick }: ProductivityCardProps) {
  return (
    <div className="bg-card border border-border rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="relative shrink-0 size-[18px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip0_13_303)">
              <path d={svgPaths.p363df2c0} stroke="currentColor" className="text-foreground" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
            <defs>
              <clipPath id="clip0_13_303">
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="font-semibold text-[15px] text-foreground tracking-[-0.4px]">My Productivity</h3>
      </div>

      {/* Metrics Grid */}
      <div className="space-y-3">
        {/* Top Row - Resolved and Handle Time */}
        <div className="flex gap-3">
          {/* Resolved */}
          <button 
            onClick={() => onMetricClick?.('resolved')}
            className="bg-muted/20 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-[16.4px] p-3 flex-1 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-medium text-muted-foreground group-hover:text-primary">Resolved</p>
              <div className="size-[12px] group-hover:scale-110 transition-transform">
                <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_13_299)">
                    <path d={svgPaths.p1832a80} stroke="currentColor" className="text-foreground group-hover:text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.pd7eb500} stroke="currentColor" className="text-foreground group-hover:text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_299">
                      <rect fill="white" height="14" width="14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-bold text-[20px] text-foreground leading-[26px]">12</p>
              <div className="mt-1.5 bg-primary/10 rounded-full h-[3px] overflow-hidden">
                <div className="bg-primary h-full w-[75%] transition-all duration-300 group-hover:w-[85%]"></div>
              </div>
            </div>
          </button>

          {/* Handle Time */}
          <button 
            onClick={() => onMetricClick?.('handleTime')}
            className="bg-muted/20 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-[16.4px] p-3 flex-1 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-medium text-muted-foreground group-hover:text-primary">Handle Time</p>
              <div className="size-[12px] group-hover:scale-110 transition-transform">
                <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_13_295)">
                    <path d="M7 3.5V7L9.33333 8.16667" stroke="currentColor" className="text-foreground group-hover:text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.pc012c00} stroke="currentColor" className="text-foreground group-hover:text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_295">
                      <rect fill="white" height="14" width="14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-bold text-[20px] text-foreground leading-[26px]">4.2m</p>
              <div className="mt-1.5 flex items-center gap-1">
                <div className="size-[10px] rotate-45">
                  <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                    <path d="M2.35701 5.65686H8.95668" stroke="currentColor" className="text-emerald-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.94281" />
                    <path d={svgPaths.p2ab79d80} stroke="currentColor" className="text-emerald-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.94281" />
                  </svg>
                </div>
                <p className="text-[9px] text-emerald-600 dark:text-emerald-400 leading-[12px]">12% faster</p>
              </div>
            </div>
          </button>
        </div>

        {/* Bottom Row - AI Assistance */}
        <button 
          onClick={() => onMetricClick?.('aiAssistance')}
          className="w-full bg-muted/20 hover:bg-primary/8 border border-border hover:border-primary/30 rounded-[16.4px] p-3 flex items-center justify-between h-[60px] transition-all duration-200 cursor-pointer group"
        >
          <div className="text-left">
            <p className="text-[11px] font-medium text-muted-foreground mb-0.5 group-hover:text-primary">AI Assistance</p>
            <p className="font-bold text-[16px] text-foreground leading-[22px]">78%</p>
          </div>
          <div className="size-[48px] border-4 border-primary/20 group-hover:border-primary/35 rounded-full flex items-center justify-center rotate-[-45deg] transition-all duration-200 group-hover:scale-105">
            <div className="size-[12px] rotate-45">
              <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                <g clipPath="url(#clip0_13_285)">
                  <path d={svgPaths.p2756bb00} stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M11.6667 1.16667V3.5" stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M12.8333 2.33333H10.5" stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p291dcf00} stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
                <defs>
                  <clipPath id="clip0_13_285">
                    <rect fill="white" height="14" width="14" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}