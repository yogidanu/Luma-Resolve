import React from 'react';
import { Sparkles } from 'lucide-react';

export function AILoadingShimmer() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gradient-to-r from-[rgba(76,132,255,0.12)] via-[rgba(76,132,255,0.24)] to-[rgba(76,132,255,0.12)] rounded mb-3 bg-[length:200%_100%] animate-shimmer"></div>
      <div className="h-4 bg-gradient-to-r from-[rgba(76,132,255,0.12)] via-[rgba(76,132,255,0.24)] to-[rgba(76,132,255,0.12)] rounded mb-3 bg-[length:200%_100%] animate-shimmer w-5/6"></div>
      <div className="h-4 bg-gradient-to-r from-[rgba(76,132,255,0.12)] via-[rgba(76,132,255,0.24)] to-[rgba(76,132,255,0.12)] rounded bg-[length:200%_100%] animate-shimmer w-4/6"></div>
    </div>
  );
}

export function AIThinking() {
  return (
    <div className="flex items-center gap-2 text-[#4C84FF] py-4">
      <Sparkles size={16} className="animate-pulse" />
      <span className="text-[14px]">AI is analyzing...</span>
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-[#4C84FF] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-2 h-2 bg-[#4C84FF] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-2 h-2 bg-[#4C84FF] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_2px_4px_rgba(0,0,0,0.06)] p-4 animate-pulse">
      <div className="h-5 bg-[#EAEAED] rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-[#EAEAED] rounded mb-2"></div>
      <div className="h-4 bg-[#EAEAED] rounded w-5/6"></div>
    </div>
  );
}

export function LoadingOverlay({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#EAEAED] rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#4C84FF] rounded-full border-t-transparent animate-spin"></div>
        </div>
        <div className="text-[14px] text-[#5E5E5E]">{message}</div>
      </div>
    </div>
  );
}
