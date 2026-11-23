import React from 'react';
import { Send, Edit3 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';

interface ApproveResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: () => void;
  onEdit: () => void;
  draftResponse: string;
  customerName: string;
}

export function ApproveResponseModal({
  isOpen,
  onClose,
  onSend,
  onEdit,
  draftResponse,
  customerName
}: ApproveResponseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Approve Response</DialogTitle>
          <DialogDescription>
            Review the AI-generated response before sending to{' '}
            <span className="text-foreground font-medium">{customerName}</span>.
          </DialogDescription>
        </DialogHeader>

        {/* Full Preview */}
        <div className="bg-muted p-6 rounded-lg">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {draftResponse}
          </p>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outline" onClick={onEdit} className="gap-2">
            <Edit3 size={16} />
            Edit
          </Button>
          <Button onClick={onSend} className="gap-2">
            <Send size={16} />
            Send Response
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
