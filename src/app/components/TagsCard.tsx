import React from 'react';

interface Tag {
  text: string;
  variant: 'blue' | 'red';
}

interface TagsCardProps {
  tags?: Tag[];
}

export function TagsCard({ 
  tags = [
    { text: 'Payment', variant: 'blue' },
    { text: 'Billing', variant: 'blue' },
    { text: 'Error 503', variant: 'red' },
    { text: 'High-risk user', variant: 'blue' }
  ]
}: TagsCardProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-6">
      {/* Header */}
      <div className="mb-3">
        <p className="font-semibold text-[14px] text-neutral-500 leading-[14px] tracking-[0.7px] uppercase">
          Tags
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => {
          const isRed = tag.variant === 'red';
          const borderColor = isRed ? 'rgba(231,0,11,0.2)' : 'rgba(76,132,255,0.2)';
          const textColor = isRed ? '#e7000b' : '#4c84ff';
          
          return (
            <div 
              key={index}
              className="rounded-full px-[11px] py-[3px] h-[22px] flex items-center"
              style={{ border: `1px solid ${borderColor}` }}
            >
              <p 
                className="font-semibold text-[12px] leading-[16px]"
                style={{ color: textColor }}
              >
                {tag.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
