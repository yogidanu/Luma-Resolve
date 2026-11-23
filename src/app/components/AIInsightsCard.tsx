import React from 'react';
import svgPaths from '../imports/svg-mnb5weowvv';

interface InsightItem {
  text: string;
  color: 'blue' | 'red';
  action?: () => void;
}

interface AIInsightsCardProps {
  insights?: InsightItem[];
  onInsightClick?: (insight: InsightItem, index: number) => void;
}

export function AIInsightsCard({ 
  insights = [
    { text: "16 repetitive payment failures detected", color: 'blue' },
    { text: "8 customers with similar errors", color: 'blue' },
    { text: "3 unresolved high-priority tickets", color: 'red' }
  ],
  onInsightClick
}: AIInsightsCardProps) {
  return (
    <div className="bg-card border border-border rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-5 relative overflow-hidden">
      {/* Decorative blur element */}
      <div className="absolute right-[-20px] top-[-37px] size-[128px] bg-muted/30 dark:bg-muted/50 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="size-[18px]">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip0_13_383)">
                <path d={svgPaths.p24f38080} stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M16.6667 1.66667V5" stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M18.3333 3.33333H15" stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p2661f400} stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
              <defs>
                <clipPath id="clip0_13_383">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-semibold text-[15px] text-foreground tracking-[-0.4px]">AI Insights & Suggestions</h3>
        </div>
        <div className="bg-primary/10 dark:bg-primary/20 rounded-full px-2.5 py-1">
          <span className="text-[10px] font-semibold text-primary">LIVE</span>
        </div>
      </div>

      {/* Insights List */}
      <div className="space-y-3 relative z-10 mb-4">
        {insights.map((insight, index) => (
          <button 
            key={index}
            onClick={() => {
              if (onInsightClick) {
                onInsightClick(insight, index);
              }
              if (insight.action) {
                insight.action();
              }
            }}
            className="w-full bg-muted/30 hover:bg-primary/8 dark:hover:bg-primary/10 rounded-[10px] h-[40px] flex items-center px-3 relative transition-all duration-200 cursor-pointer group border border-transparent hover:border-primary/20"
          >
            <div 
              className={`size-[7px] rounded-full shrink-0 transition-transform group-hover:scale-125 ${
                insight.color === 'red' ? 'bg-[#e7000b]' : 'bg-primary'
              }`}
            ></div>
            <p className="font-medium text-[13px] text-foreground leading-[18px] ml-4 text-left flex-1">
              {insight.text}
            </p>
            <svg className="size-[12px] text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 12 12">
              <path d="M3 6H9M9 6L6.5 3.5M9 6L6.5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          </button>
        ))}
      </div>

      {/* AI Summary Stats */}
      <div className="relative z-10 pt-3 border-t border-border">
        <div className="flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-[#00a63e] animate-pulse"></div>
            <span className="text-muted-foreground">AI Analyzing</span>
          </div>
          <span className="font-semibold text-foreground">27 patterns found</span>
        </div>
      </div>
    </div>
  );
}