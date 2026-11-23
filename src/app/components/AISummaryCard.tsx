import React from 'react';
import { Card } from './Card';
import { Sparkles } from 'lucide-react';

interface AISummaryCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function AISummaryCard({ title = 'AI Summary', children, className = '' }: AISummaryCardProps) {
  return (
    <Card className={`relative overflow-hidden bg-card border border-border shadow-sm p-4 ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
      <div className="pl-3">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-primary" />
          <h3 className="text-[14px] font-semibold text-primary uppercase tracking-wider">{title}</h3>
        </div>
        <div className="text-[14px] text-foreground leading-[1.6]">
          {children}
        </div>
      </div>
    </Card>
  );
}
