import React from 'react';
import { ModalShell, modal } from './ModalShell';

/* Luma Resolve — Approve Response (Redesign Step 4)
   Same props as before; rebuilt on tokens without the shadcn Dialog.
   One job: show the exact text that will be sent, to whom, and let the
   human send it, edit it, or back out. Nothing else competes with that. */

interface ApproveResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: () => void;
  onEdit: () => void;
  draftResponse: string;
  customerName: string;
}

export function ApproveResponseModal({ isOpen, onClose, onSend, onEdit, draftResponse, customerName }: ApproveResponseModalProps) {
  if (!isOpen) return null;
  return (
    <ModalShell title="Approve response" onClose={onClose} maxWidth={560}
      footer={
        <>
          <button style={modal.btnSecondary} onClick={onClose}>Cancel</button>
          <button style={modal.btnSecondary} onClick={onEdit}>Edit first</button>
          <button style={modal.btnPrimary} onClick={onSend}>Send to {customerName}</button>
        </>
      }>
      <p style={{ fontSize: 'var(--text-ui)', color: 'var(--ink-muted)', margin: '0 0 12px' }}>
        This is the exact message {customerName} will receive. Sending closes the loop on this draft — edits happen before, not after.
      </p>
      <div style={{
        background: 'var(--surface-sunken)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-card)', padding: 16,
        fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', whiteSpace: 'pre-wrap',
      }}>
        {draftResponse}
      </div>
    </ModalShell>
  );
}
