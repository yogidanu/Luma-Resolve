import React from 'react';

interface TimelineEvent {
  action: string;
  timestamp: string;
}

interface CustomerTimelineCardProps {
  events: TimelineEvent[];
}

export function CustomerTimelineCard({ events }: CustomerTimelineCardProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <div className="pt-6 px-6 pb-4">
        <p className="font-semibold text-[14px] text-neutral-500 leading-[14px] tracking-[0.7px] uppercase">
          Customer Timeline
        </p>
      </div>

      {/* Timeline Events */}
      <div className="px-6 pb-6 space-y-0">
        {events.map((event, index) => (
          <div key={index} className="relative h-[54px]">
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-0 flex flex-col items-center w-[10px] h-[54px] pb-1">
              <div className="bg-[rgba(76,132,255,0.4)] size-[10px] rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0"></div>
              {index < events.length - 1 && (
                <div className="bg-[rgba(229,229,229,0.6)] w-px flex-1 mt-1"></div>
              )}
            </div>

            {/* Event content */}
            <div className="absolute left-[22px] top-[-4px] flex flex-col gap-[2px]">
              <p className="font-medium text-[14px] text-neutral-950 leading-[20px]">{event.action}</p>
              <p className="font-normal text-[12px] text-neutral-500 leading-[16px]">{event.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
