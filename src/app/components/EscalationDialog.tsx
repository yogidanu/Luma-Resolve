import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface EscalationDialogProps {
  ticketId: string;
  currentConfidence: number;
  onConfirm: (data: {
    reason: string;
    team: string;
    note: string;
  }) => void;
  onCancel: () => void;
}

export function EscalationDialog({ 
  ticketId, 
  currentConfidence, 
  onConfirm, 
  onCancel 
}: EscalationDialogProps) {
  const [reason, setReason] = useState(`Low AI Confidence (${currentConfidence}%)`);
  const [team, setTeam] = useState('Senior Technical Support');
  const [note, setNote] = useState('');

  const handleConfirm = () => {
    onConfirm({ reason, team, note });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-8">
      <div className="bg-card border border-border rounded-lg shadow-2xl max-w-2xl w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[rgba(226,85,85,0.12)] dark:bg-[rgba(226,85,85,0.2)] rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-[#E25555]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Escalate Ticket?</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Ticket {ticketId} will be assigned to senior support
                </p>
              </div>
            </div>
            <button
              onClick={onCancel}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Escalation Reason
              </label>
              <Select value={reason} onValueChange={setReason}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={`Low AI Confidence (${currentConfidence}%)`}>
                    Low AI Confidence (&lt;60%)
                  </SelectItem>
                  <SelectItem value="Complex Technical Issue">
                    Complex Technical Issue
                  </SelectItem>
                  <SelectItem value="Requires Specialized Knowledge">
                    Requires Specialized Knowledge
                  </SelectItem>
                  <SelectItem value="Customer VIP/Enterprise">
                    Customer VIP/Enterprise
                  </SelectItem>
                  <SelectItem value="Production System Down">
                    Production System Down
                  </SelectItem>
                  <SelectItem value="Business Critical">
                    Business Critical
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Escalate To
              </label>
              <Select value={team} onValueChange={setTeam}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Senior Technical Support">
                    Senior Technical Support
                  </SelectItem>
                  <SelectItem value="Engineering Team">
                    Engineering Team
                  </SelectItem>
                  <SelectItem value="Billing Specialists">
                    Billing Specialists
                  </SelectItem>
                  <SelectItem value="Account Management">
                    Account Management
                  </SelectItem>
                  <SelectItem value="Security Team">
                    Security Team
                  </SelectItem>
                  <SelectItem value="API Integration Team">
                    API Integration Team
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Add Note <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Provide additional context for the escalation team..."
                className="min-h-[100px]"
              />
            </div>

            {/* Info Box */}
            <div className="p-4 bg-muted border border-border rounded-lg">
              <div className="text-sm text-foreground space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current AI Confidence:</span>
                  <span className="font-medium text-[#E25555]">{currentConfidence}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Expected Response:</span>
                  <span className="font-medium">Within 30 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Priority Level:</span>
                  <span className="font-medium text-[#E25555]">High</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 mt-6">
            <Button
              onClick={onCancel}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1 bg-[#E25555] hover:bg-[#D14444] text-white"
            >
              Confirm Escalation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}