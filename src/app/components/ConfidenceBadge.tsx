import React from 'react';
import { Shield } from 'lucide-react';

interface ConfidenceBadgeProps {
  level: 'high' | 'medium' | 'low';
  percentage?: number;
  className?: string;
}

export function ConfidenceBadge({ level, percentage, className = '' }: ConfidenceBadgeProps) {
  const config = {
    high: {
      color: '#2EB67D',
      bg: 'rgba(46, 182, 125, 0.12)',
      darkBg: 'rgba(46, 182, 125, 0.2)',
      text: 'High Confidence'
    },
    medium: {
      color: '#F4C14E',
      bg: 'rgba(244, 193, 78, 0.12)',
      darkBg: 'rgba(244, 193, 78, 0.2)',
      text: 'Medium Confidence'
    },
    low: {
      color: '#E25555',
      bg: 'rgba(226, 85, 85, 0.12)',
      darkBg: 'rgba(226, 85, 85, 0.2)',
      text: 'Low Confidence'
    }
  };
  
  const { color, bg, darkBg, text } = config[level];
  
  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] ${className}`}
      style={{ 
        backgroundColor: bg,
        // @ts-ignore - CSS variable for dark mode
        '--dark-bg': darkBg
      }}
    >
      <Shield size={14} style={{ color }} />
      <span className="text-[12px] font-medium" style={{ color }}>
        {text}
        {percentage && ` (${percentage}%)`}
      </span>
    </div>
  );
}