import React from 'react';
import { ArrowLeft, Sparkles, TrendingUp, TrendingDown, Clock, CheckCircle, Zap, Award } from 'lucide-react';

interface AgentPerformanceScreenProps {
  onBack: () => void;
}

export function AgentPerformanceScreen({ onBack }: AgentPerformanceScreenProps) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#EAEAED]">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-[20px]">Agent Performance & Analytics</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Section 1: Overview Metrics */}
        <div className="mb-8">
          <h2 className="text-[18px] mb-6">Overview Metrics</h2>
          <div className="grid grid-cols-4 gap-6">
            {/* Avg Handling Time */}
            <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
                  <Clock size={24} className="text-[#4C84FF]" />
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#2EB67D]">
                  <TrendingDown size={14} />
                  12%
                </div>
              </div>
              <div className="text-[13px] text-[#5E5E5E] mb-1">Avg Handling Time</div>
              <div className="text-[32px]">4.2m</div>
              <div className="text-[12px] text-[#5E5E5E] mt-2">vs 4.8m last week</div>
            </div>

            {/* First Contact Resolution */}
            <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[rgba(46,182,125,0.12)] rounded-[8px] flex items-center justify-center">
                  <CheckCircle size={24} className="text-[#2EB67D]" />
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#2EB67D]">
                  <TrendingUp size={14} />
                  8%
                </div>
              </div>
              <div className="text-[13px] text-[#5E5E5E] mb-1">First Contact Resolution</div>
              <div className="text-[32px]">89%</div>
              <div className="text-[12px] text-[#5E5E5E] mt-2">vs 82% last week</div>
            </div>

            {/* AI Assist Rate */}
            <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
                  <Sparkles size={24} className="text-[#4C84FF]" />
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#2EB67D]">
                  <TrendingUp size={14} />
                  15%
                </div>
              </div>
              <div className="text-[13px] text-[#5E5E5E] mb-1">AI Assist Rate</div>
              <div className="text-[32px]">68%</div>
              <div className="text-[12px] text-[#5E5E5E] mt-2">vs 53% last week</div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[rgba(244,193,78,0.12)] rounded-[8px] flex items-center justify-center">
                  <Award size={24} className="text-[#F4C14E]" />
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#2EB67D]">
                  <TrendingUp size={14} />
                  3%
                </div>
              </div>
              <div className="text-[13px] text-[#5E5E5E] mb-1">Customer Satisfaction</div>
              <div className="text-[32px]">4.8</div>
              <div className="text-[12px] text-[#5E5E5E] mt-2">vs 4.7 last week</div>
            </div>
          </div>
        </div>

        {/* Section 2: Insights */}
        <div className="mb-8">
          <h2 className="text-[18px] mb-6">AI Insights</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(46,182,125,0.12)] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-[#2EB67D]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] mb-2">You resolve payment issues 45% faster</h3>
                  <p className="text-[13px] text-[#5E5E5E] leading-relaxed">
                    Your average handling time for payment-related tickets is significantly better than team average. Great work!
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#EAEAED]">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#5E5E5E]">Your avg time</span>
                  <span>2.3m</span>
                </div>
                <div className="flex items-center justify-between text-[12px] mt-1">
                  <span className="text-[#5E5E5E]">Team avg time</span>
                  <span>4.2m</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <Sparkles size={20} className="text-[#4C84FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] mb-2">AI helped automate 63 responses this week</h3>
                  <p className="text-[13px] text-[#5E5E5E] leading-relaxed">
                    LumaAI generated draft responses that you approved with minimal edits, saving approximately 3.2 hours.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#EAEAED]">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#5E5E5E]">Time saved</span>
                  <span>3.2 hours</span>
                </div>
                <div className="flex items-center justify-between text-[12px] mt-1">
                  <span className="text-[#5E5E5E]">Approval rate</span>
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Ticket Trends */}
        <div>
          <h2 className="text-[18px] mb-6">Ticket Trends</h2>
          <div className="bg-white border border-[#EAEAED] rounded-[8px] p-6">
            {/* Chart Placeholder */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14px]">Tickets Resolved Over Time</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-[12px] bg-[#4C84FF] text-white rounded-[6px]">
                    Week
                  </button>
                  <button className="px-3 py-1.5 text-[12px] text-[#5E5E5E] hover:bg-[#F6F6F7] rounded-[6px] transition-colors">
                    Month
                  </button>
                  <button className="px-3 py-1.5 text-[12px] text-[#5E5E5E] hover:bg-[#F6F6F7] rounded-[6px] transition-colors">
                    Quarter
                  </button>
                </div>
              </div>

              {/* Simple Bar Chart Visualization */}
              <div className="h-[200px] flex items-end gap-4 px-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const heights = [65, 72, 68, 85, 78, 45, 32];
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-[#4C84FF] rounded-t-[4px] hover:bg-[#3D73E8] transition-colors cursor-pointer"
                        style={{ height: `${heights[index]}%` }}
                      ></div>
                      <span className="text-[11px] text-[#5E5E5E]">{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Categories Breakdown */}
            <div className="pt-6 border-t border-[#EAEAED]">
              <h3 className="text-[14px] mb-4">Top Categories</h3>
              <div className="space-y-3">
                {[
                  { name: 'Payment Issues', count: 42, color: '#4C84FF' },
                  { name: 'API Authentication', count: 28, color: '#2EB67D' },
                  { name: 'Account Setup', count: 19, color: '#F4C14E' },
                  { name: 'Feature Questions', count: 15, color: '#E25555' }
                ].map((category) => (
                  <div key={category.name} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[13px]">{category.name}</span>
                        <span className="text-[13px]">{category.count}</span>
                      </div>
                      <div className="h-2 bg-[#F6F6F7] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(category.count / 42) * 100}%`,
                            backgroundColor: category.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Patterns */}
            <div className="pt-6 border-t border-[#EAEAED] mt-6">
              <h3 className="text-[14px] mb-4">Customer Sentiment</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-[rgba(46,182,125,0.08)] border border-[rgba(46,182,125,0.20)] rounded-[6px] text-center">
                  <div className="text-[24px] mb-1">76%</div>
                  <div className="text-[12px] text-[#5E5E5E]">Positive</div>
                </div>
                <div className="p-4 bg-[rgba(244,193,78,0.08)] border border-[rgba(244,193,78,0.20)] rounded-[6px] text-center">
                  <div className="text-[24px] mb-1">18%</div>
                  <div className="text-[12px] text-[#5E5E5E]">Neutral</div>
                </div>
                <div className="p-4 bg-[rgba(226,85,85,0.08)] border border-[rgba(226,85,85,0.20)] rounded-[6px] text-center">
                  <div className="text-[24px] mb-1">6%</div>
                  <div className="text-[12px] text-[#5E5E5E]">Negative</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
