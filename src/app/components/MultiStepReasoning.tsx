import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Brain, ChevronRight, Check, AlertCircle, Database, Search, TrendingUp, FileText } from 'lucide-react';

interface ReasoningStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  dataPoints: string[];
  confidence: number;
  icon: React.ReactNode;
}

interface MultiStepReasoningProps {
  onClose: () => void;
}

export function MultiStepReasoning({ onClose }: MultiStepReasoningProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const reasoningSteps: ReasoningStep[] = [
    {
      id: 1,
      title: 'Data Collection',
      description: 'Gathered customer information, ticket history, and relevant context from multiple sources',
      status: 'completed',
      dataPoints: [
        'Retrieved customer profile: Sarah Chen (Enterprise tier)',
        'Analyzed payment history: Last transaction $299 - Status: Succeeded',
        'Loaded 2 previous tickets from this customer',
        'Checked account permissions in database'
      ],
      confidence: 100,
      icon: <Database size={18} className="text-[#00C48C]" />
    },
    {
      id: 2,
      title: 'Pattern Recognition',
      description: 'Searched for similar issues and patterns in historical data',
      status: 'completed',
      dataPoints: [
        'Found 3 similar tickets with "payment + permissions" pattern',
        'Identified common resolution: Manual permission refresh',
        'Average resolution time: 4.5 minutes',
        'Success rate: 100% (3/3 previous cases)'
      ],
      confidence: 94,
      icon: <Search size={18} className="text-[#00C48C]" />
    },
    {
      id: 3,
      title: 'Root Cause Analysis',
      description: 'Identified the specific issue causing the problem',
      status: 'completed',
      dataPoints: [
        'Detected mismatch: Payment tier = "enterprise", Account permissions = "pro"',
        'Confirmed: Billing sync delay (last sync: 6 hours ago)',
        'Expected: Real-time permission updates',
        'Diagnosis: Sync service didn\'t trigger automatic permission update'
      ],
      confidence: 96,
      icon: <AlertCircle size={18} className="text-[#00C48C]" />
    },
    {
      id: 4,
      title: 'Solution Generation',
      description: 'Formulated resolution strategy based on analysis',
      status: 'completed',
      dataPoints: [
        'Primary solution: Manual permission refresh (immediate effect)',
        'Alternative: Wait for next scheduled sync (up to 12 hours)',
        'Recommended: Primary solution for immediate resolution',
        'Follow-up: Notify engineering team about sync delay'
      ],
      confidence: 94,
      icon: <TrendingUp size={18} className="text-[#00C48C]" />
    },
    {
      id: 5,
      title: 'Response Drafting',
      description: 'Generated customer-facing response with clear explanation and action steps',
      status: 'completed',
      dataPoints: [
        'Tone: Professional and empathetic',
        'Structure: Acknowledge → Explain → Resolve → Apologize',
        'Included: Clear next steps for customer',
        'Added: Context from similar successful resolutions'
      ],
      confidence: 92,
      icon: <FileText size={18} className="text-[#00C48C]" />
    }
  ];

  const overallConfidence = Math.round(
    reasoningSteps.reduce((sum, step) => sum + step.confidence, 0) / reasoningSteps.length
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <Card className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Brain size={24} className="text-[#4C84FF]" />
                <h2 className="text-[20px]">Multi-Step AI Reasoning</h2>
              </div>
              <p className="text-[14px] text-[#5E5E5E]">
                Detailed breakdown of AI analysis process
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#5E5E5E] hover:text-[#1F1F1F] text-[24px]"
            >
              ×
            </button>
          </div>

          {/* Overall Confidence */}
          <Card className="p-4 mb-6 bg-gradient-to-r from-[#F0F4FF] to-[#E6F9F3]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] text-[#5E5E5E] mb-1">Overall Confidence Score</div>
                <div className="text-[28px]">{overallConfidence}%</div>
              </div>
              <div className="text-right">
                <div className="text-[12px] text-[#5E5E5E] mb-1">Reasoning Steps</div>
                <div className="text-[24px]">
                  {reasoningSteps.filter(s => s.status === 'completed').length}/{reasoningSteps.length}
                </div>
              </div>
            </div>
          </Card>

          {/* Reasoning Steps */}
          <div className="space-y-3">
            {reasoningSteps.map((step, index) => (
              <Card key={step.id} className={`overflow-hidden transition-all ${
                step.status === 'completed' ? 'border-l-4 border-l-[#00C48C]' :
                step.status === 'in-progress' ? 'border-l-4 border-l-[#4C84FF]' :
                'border-l-4 border-l-[#D7D7DA]'
              }`}>
                <button
                  onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                  className="w-full p-4 text-left hover:bg-[#F6F6F7] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[14px]">
                        {step.status === 'completed' ? (
                          <Check size={18} className="text-[#00C48C]" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      
                      {step.icon}
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-[15px]">{step.title}</h3>
                          <span className={`px-2 py-0.5 rounded-[4px] text-[11px] ${
                            step.status === 'completed' ? 'bg-[#E6F9F3] text-[#00C48C]' :
                            step.status === 'in-progress' ? 'bg-[#F0F4FF] text-[#4C84FF]' :
                            'bg-[#F6F6F7] text-[#5E5E5E]'
                          }`}>
                            {step.status === 'completed' ? 'Completed' :
                             step.status === 'in-progress' ? 'In Progress' :
                             'Pending'}
                          </span>
                        </div>
                        <p className="text-[13px] text-[#5E5E5E] mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-[11px] text-[#5E5E5E]">Confidence</div>
                        <div className="text-[16px]">{step.confidence}%</div>
                      </div>
                      <ChevronRight
                        size={20}
                        className={`text-[#5E5E5E] transition-transform ${
                          expandedStep === step.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedStep === step.id && (
                  <div className="px-4 pb-4 pt-2 border-t border-[#EAEAED] bg-[#FAFAFA]">
                    <div className="text-[12px] text-[#5E5E5E] mb-2">Data Points & Insights:</div>
                    <div className="space-y-2">
                      {step.dataPoints.map((point, idx) => (
                        <div key={idx} className="flex gap-2 text-[13px]">
                          <span className="text-[#4C84FF] mt-1">•</span>
                          <span className="flex-1 text-[#5E5E5E]">{point}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Confidence Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[11px] text-[#5E5E5E] mb-1">
                        <span>Confidence Level</span>
                        <span>{step.confidence}%</span>
                      </div>
                      <div className="h-2 bg-[#EAEAED] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#4C84FF] to-[#00C48C] transition-all"
                          style={{ width: `${step.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Summary */}
          <Card className="p-4 mt-6 bg-[#F0F4FF]">
            <div className="flex items-start gap-3">
              <Brain size={20} className="text-[#4C84FF] mt-0.5" />
              <div>
                <h4 className="text-[14px] mb-1">Analysis Summary</h4>
                <p className="text-[13px] text-[#5E5E5E]">
                  The AI successfully completed a 5-step analysis process, achieving {overallConfidence}% 
                  overall confidence. The reasoning chain identified a billing sync delay as the root 
                  cause and recommended manual permission refresh as the optimal solution, based on 
                  100% success rate from 3 similar previous cases.
                </p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button>
              View Full Analysis Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
