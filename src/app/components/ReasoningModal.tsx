import React from 'react';
import { X, Sparkles, Database, TrendingUp } from 'lucide-react';
import { Button } from './Button';

interface ReasoningModalProps {
  isOpen: boolean;
  onClose: () => void;
  reasoning: {
    steps: string[];
    dataPoints: string[];
    confidence: string;
  };
}

export function ReasoningModal({ isOpen, onClose, reasoning }: ReasoningModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.10)] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-[#EAEAED] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#4C84FF]" />
            <h2 className="text-[18px]">AI Reasoning</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} className="text-[#4C84FF]" />
              <h3 className="text-[14px]">Reasoning Steps</h3>
            </div>
            <ul className="space-y-2">
              {reasoning.steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(76,132,255,0.12)] text-[#4C84FF] flex items-center justify-center text-[12px]">
                    {index + 1}
                  </span>
                  <span className="text-[14px] text-[#1F1F1F] pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database size={16} className="text-[#4C84FF]" />
              <h3 className="text-[14px]">Data Points Analyzed</h3>
            </div>
            <div className="space-y-2">
              {reasoning.dataPoints.map((point, index) => (
                <div key={index} className="bg-[rgba(76,132,255,0.06)] p-3 rounded-[6px] text-[14px] text-[#1F1F1F]">
                  <span className="bg-[rgba(76,132,255,0.20)] px-2 py-0.5 rounded text-[12px] text-[#4C84FF] mr-2">
                    Evidence
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-[14px] mb-2">Confidence Logic</h3>
            <p className="text-[14px] text-[#5E5E5E] leading-[1.6]">{reasoning.confidence}</p>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-[#EAEAED] p-5">
          <Button onClick={onClose} variant="primary" className="w-full">
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}
