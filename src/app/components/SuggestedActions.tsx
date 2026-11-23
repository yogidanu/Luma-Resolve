import React from 'react';
import { Card } from './Card';
import { Sparkles, Send, Edit3, BookOpen, UserPlus, Clock, Tag, Archive, AlertCircle } from 'lucide-react';
import { ConfidenceBadge } from './ConfidenceBadge';

interface SuggestedAction {
  id: string;
  title: string;
  description: string;
  confidence: number;
  icon: React.ReactNode;
  type: 'primary' | 'secondary' | 'info';
  estimatedTime?: string;
}

interface SuggestedActionsProps {
  ticketId: string;
  onActionClick: (actionId: string) => void;
}

export function SuggestedActions({ ticketId, onActionClick }: SuggestedActionsProps) {
  const actions: SuggestedAction[] = [
    {
      id: 'send-ai-response',
      title: 'Send AI-Generated Response',
      description: 'High-quality response ready to send. Review and approve to resolve ticket immediately.',
      confidence: 94,
      icon: <Send size={18} className="text-[#4C84FF]" />,
      type: 'primary',
      estimatedTime: '< 1 min'
    },
    {
      id: 'manual-permission-refresh',
      title: 'Refresh User Permissions',
      description: 'Execute manual permission sync to resolve the billing sync delay issue.',
      confidence: 96,
      icon: <AlertCircle size={18} className="text-[#00C48C]" />,
      type: 'primary',
      estimatedTime: '2-3 min'
    },
    {
      id: 'edit-response',
      title: 'Edit Response Before Sending',
      description: 'Customize the AI response to add personal touch or additional context.',
      confidence: 100,
      icon: <Edit3 size={18} className="text-[#5E5E5E]" />,
      type: 'secondary',
      estimatedTime: '3-5 min'
    },
    {
      id: 'link-kb-article',
      title: 'Attach KB-001 Article',
      description: 'Link "How to manually refresh user permissions" article for customer reference.',
      confidence: 88,
      icon: <BookOpen size={18} className="text-[#4C84FF]" />,
      type: 'info',
      estimatedTime: '< 1 min'
    },
    {
      id: 'escalate-to-specialist',
      title: 'Escalate to Billing Specialist',
      description: 'Transfer ticket to Lisa Anderson (Billing Specialist) for complex billing review.',
      confidence: 65,
      icon: <UserPlus size={18} className="text-[#FFA500]" />,
      type: 'secondary',
      estimatedTime: '< 1 min'
    },
    {
      id: 'schedule-follow-up',
      title: 'Schedule Follow-up',
      description: 'Set reminder to check customer satisfaction in 24 hours after resolution.',
      confidence: 82,
      icon: <Clock size={18} className="text-[#4C84FF]" />,
      type: 'info',
      estimatedTime: '< 1 min'
    },
    {
      id: 'add-vip-tag',
      title: 'Add "Billing-Priority" Tag',
      description: 'Tag ticket for billing team visibility and tracking similar future issues.',
      confidence: 75,
      icon: <Tag size={18} className="text-[#5E5E5E]" />,
      type: 'info',
      estimatedTime: '< 1 min'
    },
    {
      id: 'update-documentation',
      title: 'Update Documentation',
      description: 'KB-001 article could be enhanced with this specific billing sync scenario.',
      confidence: 70,
      icon: <BookOpen size={18} className="text-[#5E5E5E]" />,
      type: 'secondary',
      estimatedTime: '10-15 min'
    }
  ];

  const primaryActions = actions.filter(a => a.type === 'primary');
  const secondaryActions = actions.filter(a => a.type === 'secondary');
  const infoActions = actions.filter(a => a.type === 'info');

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={18} className="text-[#4C84FF]" />
        <h3 className="text-[15px]">Suggested Actions</h3>
        <span className="text-[11px] text-[#5E5E5E]">
          ({actions.length} recommendations)
        </span>
      </div>

      <div className="space-y-4">
        {/* Primary Actions */}
        {primaryActions.length > 0 && (
          <div className="space-y-2">
            <div className="text-[11px] text-[#5E5E5E] uppercase tracking-wider mb-2">
              Recommended Actions
            </div>
            {primaryActions.map(action => (
              <button
                key={action.id}
                onClick={() => onActionClick(action.id)}
                className="w-full p-3 bg-gradient-to-r from-[#F0F4FF] to-[#E6F9F3] hover:from-[#E6EDFF] hover:to-[#D4F0E8] rounded-[6px] transition-all text-left border border-[#D7D7DA] hover:border-[#4C84FF]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-[6px] flex items-center justify-center flex-shrink-0">
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px]">{action.title}</span>
                      <ConfidenceBadge confidence={action.confidence} size="sm" />
                    </div>
                    <p className="text-[12px] text-[#5E5E5E]">
                      {action.description}
                    </p>
                    {action.estimatedTime && (
                      <div className="flex items-center gap-1 mt-2 text-[11px] text-[#5E5E5E]">
                        <Clock size={10} />
                        <span>{action.estimatedTime}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Secondary Actions */}
        {secondaryActions.length > 0 && (
          <div className="space-y-2">
            <div className="text-[11px] text-[#5E5E5E] uppercase tracking-wider mb-2">
              Alternative Actions
            </div>
            {secondaryActions.map(action => (
              <button
                key={action.id}
                onClick={() => onActionClick(action.id)}
                className="w-full p-3 bg-white hover:bg-[#F6F6F7] rounded-[6px] transition-all text-left border border-[#D7D7DA] hover:border-[#4C84FF]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px]">{action.title}</span>
                      <ConfidenceBadge confidence={action.confidence} size="sm" />
                    </div>
                    <p className="text-[11px] text-[#5E5E5E]">
                      {action.description}
                    </p>
                    {action.estimatedTime && (
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-[#5E5E5E]">
                        <Clock size={9} />
                        <span>{action.estimatedTime}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Info Actions */}
        {infoActions.length > 0 && (
          <div className="space-y-2">
            <div className="text-[11px] text-[#5E5E5E] uppercase tracking-wider mb-2">
              Additional Suggestions
            </div>
            {infoActions.map(action => (
              <button
                key={action.id}
                onClick={() => onActionClick(action.id)}
                className="w-full p-2.5 bg-white hover:bg-[#F6F6F7] rounded-[6px] transition-all text-left border border-[#EAEAED] hover:border-[#D7D7DA]"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px]">{action.title}</span>
                      {action.estimatedTime && (
                        <span className="text-[10px] text-[#5E5E5E]">
                          ({action.estimatedTime})
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info Footer */}
      <div className="mt-4 p-3 bg-[#F0F4FF] rounded-[6px] text-[11px] text-[#5E5E5E]">
        <Sparkles size={12} className="inline mr-1 text-[#4C84FF]" />
        Actions are prioritized by confidence score and estimated impact on resolution time
      </div>
    </Card>
  );
}
