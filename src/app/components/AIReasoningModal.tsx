import React from 'react';
import { ModalShell, modal } from './ModalShell';

/* Luma Resolve — AI Reasoning (Redesign Step 4, Blueprint 4.3 "AI shows its work")
   The old modal told one hardcoded story (an API-auth case) no matter
   which ticket was open. This version explains the *method* honestly —
   what is checked, what a match means, and what would change the
   conclusion — until the backend passes per-ticket reasoning through.
   No sparkles, no confidence theatre. */

interface AIReasoningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections: { title: string; points: string[] }[] = [
  {
    title: 'What was checked',
    points: [
      'The ticket text itself — the problem as the customer described it, in their words.',
      'Customer history — past tickets from this account and how they were resolved.',
      'Account state — plan, entitlements and recent changes that could explain the report.',
      'Knowledge base — articles and known-issue patterns the report matches.',
    ],
  },
  {
    title: 'How the draft follows from it',
    points: [
      'The suggested root cause is the explanation consistent with the most checked sources.',
      'Key facts in the analysis panel are the specific data points the draft relies on.',
      'Suggested steps are ordered by impact first, then by how quickly each can be verified.',
    ],
  },
  {
    title: 'What would change this',
    points: [
      'A source that contradicts the others lowers the confidence and collapses the draft.',
      'If the customer\u2019s reply adds facts the analysis did not have, the draft is regenerated — not patched.',
      'Confidence is a guide for how carefully to review, never a reason to skip reviewing.',
    ],
  },
];

export function AIReasoningModal({ isOpen, onClose }: AIReasoningModalProps) {
  if (!isOpen) return null;
  return (
    <ModalShell title="How this analysis was produced" onClose={onClose} maxWidth={640}
      footer={<button style={modal.btnPrimary} onClick={onClose}>Back to ticket</button>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {sections.map((s) => (
          <section key={s.title}>
            <h3 style={{ fontSize: 'var(--text-body)', fontWeight: 600, margin: '0 0 8px' }}>{s.title}</h3>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {s.points.map((p) => (
                <li key={p} style={{ fontSize: 'var(--text-ui)', color: 'var(--ink-muted)', lineHeight: 'var(--leading-body)' }}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
        <p style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-faint)', margin: 0 }}>
          Per-ticket reasoning traces will appear here once the analysis service returns them; this panel currently explains the method, not a specific ticket's trace.
        </p>
      </div>
    </ModalShell>
  );
}
