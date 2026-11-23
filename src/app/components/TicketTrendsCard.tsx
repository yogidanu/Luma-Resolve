import React from 'react';
import { TrendingUp } from 'lucide-react';

interface TrendDataPoint {
  day: string;
  value: number;
}

interface TicketTrendsCardProps {
  trendData?: TrendDataPoint[];
}

export function TicketTrendsCard({ 
  trendData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 80 },
    { day: 'Thu', value: 55 },
    { day: 'Fri', value: 70 },
    { day: 'Sat', value: 30 },
    { day: 'Sun', value: 25 }
  ]
}: TicketTrendsCardProps) {
  const maxValue = Math.max(...trendData.map(d => d.value));

  return (
    <div className="bg-card border border-border rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-[15px] text-foreground tracking-[-0.4px]">Ticket Trends</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">Last 7 days</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full px-2.5 py-1">
          <TrendingUp size={12} className="text-emerald-500" />
          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">+18%</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end justify-between gap-2 h-[120px] mb-3">
        {trendData.map((data, index) => {
          const height = (data.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col justify-end h-full">
                <div 
                  className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-md hover:from-primary/90 hover:to-primary/50 transition-all cursor-pointer relative group"
                  style={{ height: `${height}%` }}
                >
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background dark:bg-muted dark:text-foreground text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                    {data.value} tickets
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">{data.day}</span>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
        <div>
          <p className="text-[10px] text-muted-foreground mb-1">Avg. per day</p>
          <p className="font-bold text-[14px] text-foreground">53</p>
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground mb-1">Peak day</p>
          <p className="font-bold text-[14px] text-foreground">Wed (80)</p>
        </div>
      </div>
    </div>
  );
}