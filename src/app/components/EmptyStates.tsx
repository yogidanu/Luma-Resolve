import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Inbox, AlertTriangle, WifiOff, Database, Shield } from 'lucide-react';

interface EmptyStateProps {
  type: 'no-tickets' | 'low-confidence' | 'missing-data' | 'system-offline' | 'broken-kb';
  onAction?: () => void;
}

export function EmptyState({ type, onAction }: EmptyStateProps) {
  const states = {
    'no-tickets': {
      icon: <Inbox size={64} className="text-[#4C84FF] opacity-30" />,
      title: 'No Tickets Found',
      description: 'Great work! There are no open tickets at the moment. Check back later or adjust your filters.',
      action: 'Refresh',
      color: '#4C84FF'
    },
    'low-confidence': {
      icon: <Shield size={64} className="text-[#E25555] opacity-30" />,
      title: 'Low AI Confidence',
      description: 'The AI system has low confidence in this resolution. We recommend escalating this ticket to a senior team member for review.',
      action: 'Escalate Ticket',
      color: '#E25555'
    },
    'missing-data': {
      icon: <AlertTriangle size={64} className="text-[#F4C14E] opacity-30" />,
      title: 'Missing Customer Data',
      description: 'Some customer information is unavailable. This may affect AI analysis quality. Please verify customer details manually.',
      action: 'Enter Manually',
      color: '#F4C14E'
    },
    'system-offline': {
      icon: <WifiOff size={64} className="text-[#5E5E5E] opacity-30" />,
      title: 'System Offline',
      description: 'Unable to connect to the server. Please check your internet connection and try again.',
      action: 'Retry Connection',
      color: '#5E5E5E'
    },
    'broken-kb': {
      icon: <Database size={64} className="text-[#5E5E5E] opacity-30" />,
      title: 'Knowledge Base Unavailable',
      description: 'Unable to connect to the knowledge base. AI suggestions may be limited. You can still process tickets manually.',
      action: 'Use Manual Mode',
      color: '#5E5E5E'
    }
  };
  
  const state = states[type];
  
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <Card className="max-w-md w-full text-center p-8">
        <div className="flex justify-center mb-6">
          {state.icon}
        </div>
        
        <h2 className="text-[24px] mb-3">{state.title}</h2>
        
        <p className="text-[14px] text-[#5E5E5E] leading-[1.6] mb-6">
          {state.description}
        </p>
        
        {onAction && (
          <Button 
            variant={type === 'low-confidence' ? 'danger' : 'primary'} 
            onClick={onAction}
          >
            {state.action}
          </Button>
        )}
        
        {type === 'low-confidence' && (
          <div className="mt-6 p-4 bg-[rgba(226,85,85,0.06)] border border-[rgba(226,85,85,0.2)] rounded-[8px] text-left">
            <div className="text-[12px] mb-2 text-[#E25555]">Why is confidence low?</div>
            <ul className="text-[12px] text-[#5E5E5E] space-y-1">
              <li>• Conflicting information in customer history</li>
              <li>• No similar cases found in knowledge base</li>
              <li>• Ambiguous customer request</li>
            </ul>
          </div>
        )}
        
        {type === 'broken-kb' && (
          <div className="mt-6 p-4 bg-[#F6F6F7] rounded-[8px] text-left">
            <div className="text-[12px] mb-2">Fallback Mode Active</div>
            <div className="text-[12px] text-[#5E5E5E]">
              You can still process tickets using your own knowledge. AI suggestions will resume once the connection is restored.
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

interface ConflictingDataWarningProps {
  onResolve: () => void;
  conflicts: string[];
}

export function ConflictingDataWarning({ onResolve, conflicts }: ConflictingDataWarningProps) {
  return (
    <div className="mb-4">
      <div className="bg-[rgba(244,193,78,0.12)] border border-[rgba(244,193,78,0.32)] rounded-[8px] p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-[#F4C14E] flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="text-[14px] mb-2">
              <span className="text-[#F4C14E]">AI detected inconsistent information</span>
            </div>
            <div className="text-[12px] text-[#5E5E5E] mb-3 space-y-1">
              {conflicts.map((conflict, idx) => (
                <div key={idx}>• {conflict}</div>
              ))}
            </div>
            <Button variant="secondary" onClick={onResolve} className="text-[12px] py-1.5 px-3">
              Review & Resolve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AmbiguousIntentPromptProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function AmbiguousIntentPrompt({ options, onSelect }: AmbiguousIntentPromptProps) {
  return (
    <Card className="mb-4 bg-[rgba(76,132,255,0.06)] border border-[rgba(76,132,255,0.32)]">
      <div className="flex items-start gap-3">
        <AlertTriangle size={20} className="text-[#4C84FF] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="text-[14px] mb-3">
            Multiple issues detected. Which should I prioritize?
          </div>
          <div className="space-y-2">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(option)}
                className="w-full text-left p-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] hover:border-[#4C84FF] hover:bg-[#F6F6F7] transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
