import React from 'react';

interface OriginalRequestCardProps {
  customerName: string;
  customerAvatar: string;
  timestamp: string;
  message: string;
}

export function OriginalRequestCard({
  customerName,
  customerAvatar,
  timestamp,
  message
}: OriginalRequestCardProps) {
  return (
    <div className="bg-card border border-border rounded-[10px] shadow-sm">
      {/* Header */}
      <div className="bg-muted/10 border-b border-border px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Avatar and Name */}
          <div className="flex items-center gap-3">
            <div className="size-[40px] rounded-full ring-1 ring-border bg-primary flex items-center justify-center">
              <p className="font-bold text-[14px] text-primary-foreground leading-[20px]">{customerAvatar}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-[16px] text-foreground leading-[24px]">{customerName}</p>
              <p className="font-normal text-[12px] text-muted-foreground leading-[16px]">{timestamp}</p>
            </div>
          </div>

          {/* Badge */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-full px-[11px] py-[3px] h-[22px] flex items-center">
            <p className="font-semibold text-[12px] text-emerald-600 dark:text-emerald-400 leading-[16px]">Original Request</p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="px-6 py-6">
        <p className="font-normal text-[16px] text-foreground/90 leading-[26px]">
          {message}
        </p>
      </div>
    </div>
  );
}
