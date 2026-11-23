import React from 'react';
import { X, Sparkles, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

interface AIReasoningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIReasoningModal({ isOpen, onClose }: AIReasoningModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
      <div className="bg-white rounded-[12px] shadow-[0px_4px_24px_rgba(0,0,0,0.20)] w-full max-w-[640px] max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#EAEAED] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
              <Sparkles size={20} className="text-[#4C84FF]" />
            </div>
            <h2 className="text-[20px]">Why Luma suggested this</h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <p className="text-[14px] text-[#5E5E5E] mb-8 leading-relaxed">
            AI analyzed the ticket context, customer history, and knowledge base to generate this recommendation with high confidence.
          </p>

          {/* Section 1: Data Points Used */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[rgba(76,132,255,0.12)] rounded-full flex items-center justify-center">
                <CheckCircle size={16} className="text-[#4C84FF]" />
              </div>
              <h3 className="text-[16px]">Data Points Used</h3>
            </div>
            <div className="ml-10 space-y-3">
              <div className="p-4 bg-[#FAFAFA] rounded-[6px]">
                <div className="text-[13px] mb-1">Ticket Content Analysis</div>
                <div className="text-[12px] text-[#5E5E5E]">
                  Customer mentioned "API authentication error" which matches pattern #A-401 in our knowledge base.
                </div>
              </div>
              <div className="p-4 bg-[#FAFAFA] rounded-[6px]">
                <div className="text-[13px] mb-1">Customer History</div>
                <div className="text-[12px] text-[#5E5E5E]">
                  Customer has experienced similar API issues 2 times in the past 6 months, both resolved by key refresh.
                </div>
              </div>
              <div className="p-4 bg-[#FAFAFA] rounded-[6px]">
                <div className="text-[13px] mb-1">Account Status</div>
                <div className="text-[12px] text-[#5E5E5E]">
                  Premium plan with API access enabled. No recent billing issues detected.
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pattern Matches */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[rgba(46,182,125,0.12)] rounded-full flex items-center justify-center">
                <TrendingUp size={16} className="text-[#2EB67D]" />
              </div>
              <h3 className="text-[16px]">Pattern Matches</h3>
            </div>
            <div className="ml-10 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-[#FAFAFA] rounded-[6px]">
                <div className="w-6 h-6 bg-white border border-[#EAEAED] rounded-full flex items-center justify-center flex-shrink-0 text-[11px]">
                  87%
                </div>
                <div className="flex-1">
                  <div className="text-[13px] mb-1">Similar Cases Resolved</div>
                  <div className="text-[12px] text-[#5E5E5E]">
                    156 tickets with "API authentication" errors were resolved using key refresh method (87% success rate).
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#FAFAFA] rounded-[6px]">
                <div className="w-6 h-6 bg-white border border-[#EAEAED] rounded-full flex items-center justify-center flex-shrink-0 text-[11px]">
                  92%
                </div>
                <div className="flex-1">
                  <div className="text-[13px] mb-1">Customer Sentiment Match</div>
                  <div className="text-[12px] text-[#5E5E5E]">
                    Tone indicates technical understanding; professional response with step-by-step guide recommended.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Confidence Indicators */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[rgba(244,193,78,0.12)] rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-[#F4C14E]" />
              </div>
              <h3 className="text-[16px]">Confidence Indicators</h3>
            </div>
            <div className="ml-10 space-y-3">
              <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-[6px]">
                <span className="text-[13px]">Root Cause Identification</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-[#EAEAED] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2EB67D] rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-[12px] text-[#2EB67D]">92%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-[6px]">
                <span className="text-[13px]">Solution Effectiveness</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-[#EAEAED] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2EB67D] rounded-full" style={{ width: '87%' }}></div>
                  </div>
                  <span className="text-[12px] text-[#2EB67D]">87%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-[6px]">
                <span className="text-[13px]">Response Tone Match</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-[#EAEAED] rounded-full overflow-hidden">
                    <div className="h-full bg-[#2EB67D] rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <span className="text-[12px] text-[#2EB67D]">94%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Safety Checks */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[rgba(46,182,125,0.12)] rounded-full flex items-center justify-center">
                <CheckCircle size={16} className="text-[#2EB67D]" />
              </div>
              <h3 className="text-[16px]">Safety Checks</h3>
            </div>
            <div className="ml-10 space-y-2">
              <div className="flex items-center gap-3 p-3 bg-[rgba(46,182,125,0.08)] border border-[rgba(46,182,125,0.20)] rounded-[6px]">
                <CheckCircle size={16} className="text-[#2EB67D] flex-shrink-0" />
                <span className="text-[13px] text-[#1F1F1F]">No PII data in suggested response</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[rgba(46,182,125,0.08)] border border-[rgba(46,182,125,0.20)] rounded-[6px]">
                <CheckCircle size={16} className="text-[#2EB67D] flex-shrink-0" />
                <span className="text-[13px] text-[#1F1F1F]">Tone matches company guidelines</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[rgba(46,182,125,0.08)] border border-[rgba(46,182,125,0.20)] rounded-[6px]">
                <CheckCircle size={16} className="text-[#2EB67D] flex-shrink-0" />
                <span className="text-[13px] text-[#1F1F1F]">Solution verified against KB article #A-401</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-[#EAEAED] bg-[#FAFAFA] flex-shrink-0">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle size={16} className="text-[#4C84FF] flex-shrink-0 mt-0.5" />
            <p className="text-[12px] text-[#5E5E5E] leading-relaxed">
              This recommendation is based on AI analysis. Always review and verify before sending to customers.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full px-5 py-2.5 bg-[#4C84FF] text-white rounded-[6px] text-[14px] hover:bg-[#3D73E8] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
