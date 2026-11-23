import React from 'react';
import svgPaths from '../imports/svg-rewbwulpzb';

interface OpenTicketsCardProps {
  count?: number;
  percentageChange?: number;
  onViewAllClick?: () => void;
}

export function OpenTicketsCard({ 
  count = 47, 
  percentageChange = 12,
  onViewAllClick 
}: OpenTicketsCardProps) {
  const isPositive = percentageChange > 0;
  const sign = isPositive ? '+' : '';

  // Breakdown data
  const breakdown = [
    { label: 'High Priority', count: 12, className: 'bg-destructive' },
    { label: 'Medium Priority', count: 23, className: 'bg-amber-500' },
    { label: 'Low Priority', count: 12, className: 'bg-primary' }
  ];

  return (
    <div className="bg-card border border-border rounded-[10px] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="pt-4 pb-0 px-5">
        <div className="flex flex-col gap-1 mb-2">
          <p className="font-medium text-[13px] text-muted-foreground leading-[18px]">Open Tickets</p>
          <p className="font-bold text-[36px] text-foreground leading-[36px] tracking-[-1px]">{count}</p>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          {/* Badge */}
          <div className="bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full px-2.5 h-[20px] flex items-center gap-1">
            <svg className="size-[10px]" fill="none" viewBox="0 0 12 12">
              <path d="M8 3.5H11V6.5" stroke="currentColor" className="text-emerald-500" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3a7e7417} stroke="currentColor" className="text-emerald-500" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-semibold text-[11px] text-emerald-600 dark:text-emerald-400 leading-[14px]">{sign}{percentageChange}%</span>
          </div>
          
          <p className="font-normal text-[11px] text-muted-foreground leading-[14px]">vs last week</p>
        </div>

        {/* Priority Breakdown */}
        <div className="space-y-2 mb-3">
          {breakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className={`size-2 rounded-full ${item.className}`}
                />
                <span className="text-[11px] text-muted-foreground">{item.label}</span>
              </div>
              <span className="font-semibold text-[11px] text-foreground">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="px-5 pt-0 pb-4">
        <button 
          onClick={onViewAllClick}
          className="w-full h-[36px] bg-card border border-primary rounded-[6.8px] flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
        >
          <span className="font-medium text-[13px] text-primary leading-[18px]">View all tickets</span>
          <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
            <path d="M3.33333 8H12.6667" stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d405500} stroke="currentColor" className="text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </button>
      </div>
    </div>
  );
}