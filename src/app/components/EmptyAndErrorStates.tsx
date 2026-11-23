import React from 'react';
import { CheckCircle, AlertTriangle, AlertCircle, Database, Sparkles, HelpCircle } from 'lucide-react';

// Empty State 1: No Tickets
export function NoTicketsEmpty({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[rgba(46,182,125,0.12)] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-[#2EB67D]" />
        </div>
        <h2 className="text-[24px] mb-3">You're all caught up!</h2>
        <p className="text-[14px] text-[#5E5E5E] mb-6 leading-relaxed">
          No open tickets at the moment. Great job resolving all customer issues!
        </p>
        <button
          onClick={onExplore}
          className="px-6 py-3 bg-[#4C84FF] text-white rounded-[6px] text-[14px] hover:bg-[#3D73E8] transition-colors"
        >
          Explore Dashboard
        </button>
      </div>
    </div>
  );
}

// Error 1: Low AI Confidence
export function LowConfidenceError({ onAskDetails, onEscalate }: {
  onAskDetails: () => void;
  onEscalate: () => void;
}) {
  return (
    <div className="bg-card border-2 border-[#E25555] rounded-[8px] p-6 shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[rgba(226,85,85,0.12)] dark:bg-[rgba(226,85,85,0.2)] rounded-[8px] flex items-center justify-center flex-shrink-0">
          <AlertTriangle size={24} className="text-[#E25555]" />
        </div>
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-foreground mb-2">Low AI Confidence</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            AI is not confident enough to suggest a solution for this ticket. Additional context or human judgment may be required.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={onAskDetails}
          className="flex-1 px-4 py-2.5 bg-card border border-border text-foreground rounded-[6px] text-[14px] hover:bg-muted transition-colors"
        >
          Ask AI for more details
        </button>
        <button
          onClick={onEscalate}
          className="flex-1 px-4 py-2.5 bg-[#E25555] text-white rounded-[6px] text-[14px] hover:bg-[#D14444] transition-colors"
        >
          Escalate
        </button>
      </div>

      <div className="mt-4 p-3 bg-muted rounded-[6px] text-[12px] text-muted-foreground">
        <strong className="text-foreground">Confidence Score:</strong> 42% (Below 60% threshold)
      </div>
    </div>
  );
}

// Error 2: Conflicting Data
export function ConflictingDataError({ onReview }: { onReview: () => void }) {
  return (
    <div className="bg-card border-2 border-[#F4C14E] rounded-[8px] p-6 shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[rgba(244,193,78,0.20)] dark:bg-[rgba(244,193,78,0.3)] rounded-[8px] flex items-center justify-center flex-shrink-0">
          <AlertCircle size={24} className="text-[#F4C14E]" />
        </div>
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-foreground mb-2">Inconsistent Information Detected</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            AI detected conflicting data in the customer's history. Please review before proceeding.
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-3 bg-muted border border-border rounded-[6px] text-[13px]">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#F4C14E] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">Customer reported billing issue on Nov 15, but payment records show successful transaction.</span>
              </div>
            </div>
            <div className="p-3 bg-muted border border-border rounded-[6px] text-[13px]">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 bg-[#F4C14E] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground">API usage logs don't match customer's reported error timestamps.</span>
              </div>
            </div>
          </div>

          <button
            onClick={onReview}
            className="w-full px-4 py-2.5 bg-[#F4C14E] text-white rounded-[6px] text-[14px] hover:bg-[#E5B03D] transition-colors font-medium"
          >
            Review Customer History
          </button>
        </div>
      </div>
    </div>
  );
}

// Error 3: Ambiguous Intent
export function AmbiguousIntentError({ onSelectIssue }: { onSelectIssue: (issue: string) => void }) {
  return (
    <div className="bg-card border-2 border-primary rounded-[8px] p-6 shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/12 dark:bg-primary/20 rounded-[8px] flex items-center justify-center flex-shrink-0">
          <HelpCircle size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-foreground mb-2">Multiple Issues Detected</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            AI identified multiple potential issues in this ticket. Which should I prioritize?
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => onSelectIssue('payment')}
          className="w-full p-4 bg-card border border-border hover:border-primary hover:bg-primary/8 rounded-[8px] text-left transition-all"
        >
          <div className="text-[14px] font-medium text-foreground mb-1">Payment Issue</div>
          <div className="text-[12px] text-muted-foreground">Customer mentioned failed payment transaction</div>
        </button>

        <button
          onClick={() => onSelectIssue('login')}
          className="w-full p-4 bg-card border border-border hover:border-primary hover:bg-primary/8 rounded-[8px] text-left transition-all"
        >
          <div className="text-[14px] font-medium text-foreground mb-1">Login Problem</div>
          <div className="text-[12px] text-muted-foreground">Unable to access account after password reset</div>
        </button>

        <button
          onClick={() => onSelectIssue('refund')}
          className="w-full p-4 bg-card border border-border hover:border-primary hover:bg-primary/8 rounded-[8px] text-left transition-all"
        >
          <div className="text-[14px] font-medium text-foreground mb-1">Refund Request</div>
          <div className="text-[12px] text-muted-foreground">Requesting refund for last month's charge</div>
        </button>
      </div>

      <div className="mt-4 p-3 bg-primary/8 rounded-[6px] text-[12px] text-foreground">
        <Sparkles size={14} className="inline mr-2 text-primary" />
        AI will generate targeted solutions based on your selection
      </div>
    </div>
  );
}

// Error 4: Broken Knowledge Base Link
export function BrokenKBError({ onRetry, onContinueWithoutKB }: {
  onRetry: () => void;
  onContinueWithoutKB: () => void;
}) {
  return (
    <div className="bg-card border border-border rounded-[8px] p-6 shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-muted rounded-[8px] flex items-center justify-center flex-shrink-0">
          <Database size={24} className="text-muted-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-foreground mb-2">Knowledge Base Unavailable</h3>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            Unable to connect to the knowledge base. AI suggestions may be limited without access to help articles and documentation.
          </p>

          <div className="p-4 bg-muted border border-border rounded-[6px] mb-4">
            <div className="text-[12px] text-muted-foreground mb-2">Error Details:</div>
            <div className="text-[13px] text-[#E25555]">Connection timeout after 30s</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRetry}
              className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-[6px] text-[14px] hover:bg-primary/90 transition-colors font-medium"
            >
              Retry Connection
            </button>
            <button
              onClick={onContinueWithoutKB}
              className="flex-1 px-4 py-2.5 bg-card border border-border text-foreground rounded-[6px] text-[14px] hover:bg-muted transition-colors"
            >
              Continue Anyway
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Search No Results
export function SearchNoResults({ query, onClearSearch }: { query: string; onClearSearch: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-[300px] p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#F6F6F7] rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle size={32} className="text-[#5E5E5E]" />
        </div>
        <h3 className="text-[18px] mb-2">No results found</h3>
        <p className="text-[14px] text-[#5E5E5E] mb-6">
          No tickets match "<span className="text-[#1F1F1F]">{query}</span>". Try adjusting your search.
        </p>
        <button
          onClick={onClearSearch}
          className="px-5 py-2.5 bg-[#4C84FF] text-white rounded-[6px] text-[14px] hover:bg-[#3D73E8] transition-colors"
        >
          Clear Search
        </button>
      </div>
    </div>
  );
}

// Loading State with AI Animation
export function AILoadingState({ message = 'AI is analyzing...' }: { message?: string }) {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-[rgba(76,132,255,0.12)] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Sparkles size={32} className="text-[#4C84FF]" />
        </div>
        <p className="text-[14px] text-[#5E5E5E]">{message}</p>
      </div>
    </div>
  );
}