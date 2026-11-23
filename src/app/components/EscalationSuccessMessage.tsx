import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Button } from './ui/button';

interface EscalationSuccessMessageProps {
  ticketId: string;
  team: string;
  onClose: () => void;
}

export function EscalationSuccessMessage({ 
  ticketId, 
  team, 
  onClose 
}: EscalationSuccessMessageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-[70] animate-in slide-in-from-right">
      <div className="bg-card border-2 border-[#2EB67D] rounded-lg shadow-xl p-6 max-w-md">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(46,182,125,0.12)] dark:bg-[rgba(46,182,125,0.2)] rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-[#2EB67D]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Ticket Escalated Successfully
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {ticketId} has been assigned to {team}.
            </p>
            <div className="text-sm text-foreground">
              <strong>Expected response:</strong> Within 30 minutes
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
