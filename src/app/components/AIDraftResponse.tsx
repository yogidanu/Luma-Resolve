import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './Button';

interface AIDraftResponseProps {
  draft: string;
  onEdit?: (newDraft: string) => void;
  onToneChange?: (tone: string) => void;
  className?: string;
}

export function AIDraftResponse({ draft, onEdit, onToneChange, className = '' }: AIDraftResponseProps) {
  const [activeTone, setActiveTone] = useState<string | null>(null);
  
  const handleToneClick = (tone: string) => {
    setActiveTone(tone);
    onToneChange?.(tone);
  };
  
  return (
    <div 
      className={`bg-white border border-[rgba(76,132,255,0.32)] rounded-[8px] p-4 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-[#4C84FF]" />
        <span className="text-[14px] text-[#4C84FF]">AI-Generated Draft</span>
      </div>
      
      <div className="text-[14px] text-[#1F1F1F] leading-[1.6] mb-4 p-3 bg-[#F6F6F7] rounded-[6px]">
        {draft}
      </div>
      
      <div className="border-t border-[#EAEAED] pt-3">
        <div className="text-[12px] text-[#5E5E5E] mb-2">Adjust Tone:</div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleToneClick('formal')}
            className={`px-3 py-1.5 text-[12px] rounded-[6px] border transition-all ${
              activeTone === 'formal' 
                ? 'border-[#4C84FF] bg-[rgba(76,132,255,0.12)] text-[#4C84FF]' 
                : 'border-[#D7D7DA] bg-white text-[#5E5E5E] hover:border-[#4C84FF]'
            }`}
          >
            More Formal
          </button>
          <button
            onClick={() => handleToneClick('shorter')}
            className={`px-3 py-1.5 text-[12px] rounded-[6px] border transition-all ${
              activeTone === 'shorter' 
                ? 'border-[#4C84FF] bg-[rgba(76,132,255,0.12)] text-[#4C84FF]' 
                : 'border-[#D7D7DA] bg-white text-[#5E5E5E] hover:border-[#4C84FF]'
            }`}
          >
            Make Shorter
          </button>
          <button
            onClick={() => handleToneClick('empathetic')}
            className={`px-3 py-1.5 text-[12px] rounded-[6px] border transition-all ${
              activeTone === 'empathetic' 
                ? 'border-[#4C84FF] bg-[rgba(76,132,255,0.12)] text-[#4C84FF]' 
                : 'border-[#D7D7DA] bg-white text-[#5E5E5E] hover:border-[#4C84FF]'
            }`}
          >
            Empathetic
          </button>
        </div>
      </div>
    </div>
  );
}
