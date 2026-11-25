import React from 'react';
import { X } from 'lucide-react';

/* Shared modal shell for Step 4 (Approve / Reasoning).
   Overlay scrim uses the token, panel is a plain surface with an alpha
   border and the modal radius — no blur theatre, no glow. */

export const modal = {
  overlay: {
    position: 'fixed', inset: 0, background: 'var(--overlay)', zIndex: 50,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    fontFamily: 'var(--font-sans)',
  } as React.CSSProperties,
  panel: {
    width: '100%', background: 'var(--surface)', color: 'var(--ink)',
    border: '1px solid var(--border)', borderRadius: 'var(--radius-modal)',
    maxHeight: '84vh', display: 'flex', flexDirection: 'column',
  } as React.CSSProperties,
  header: {
    display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px',
    borderBottom: '1px solid var(--border)',
  } as React.CSSProperties,
  title: { fontSize: 'var(--text-title)', fontWeight: 600, margin: 0 } as React.CSSProperties,
  body: { padding: 20, overflowY: 'auto' } as React.CSSProperties,
  footer: {
    display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '14px 20px',
    borderTop: '1px solid var(--border)',
  } as React.CSSProperties,
  btnPrimary: {
    height: 'var(--control-height)', padding: '0 16px', fontSize: 'var(--text-ui)', fontWeight: 600,
    color: 'var(--on-action)', background: 'var(--action)', border: 'none',
    borderRadius: 'var(--radius-control)', cursor: 'pointer',
  } as React.CSSProperties,
  btnSecondary: {
    height: 'var(--control-height)', padding: '0 16px', fontSize: 'var(--text-ui)', fontWeight: 600,
    color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-control)', cursor: 'pointer',
  } as React.CSSProperties,
  iconBtn: {
    width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)',
    color: 'var(--ink-muted)', cursor: 'pointer',
  } as React.CSSProperties,
};

export function ModalShell({ title, onClose, maxWidth, children, footer }: {
  title: string;
  onClose: () => void;
  maxWidth: number;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div style={modal.overlay} role="dialog" aria-modal="true" aria-label={title}>
      <div style={{ ...modal.panel, maxWidth }}>
        <div style={modal.header}>
          <h2 style={modal.title}>{title}</h2>
          <div style={{ flex: 1 }} />
          <button style={modal.iconBtn} onClick={onClose} aria-label="Close"><X size={16} /></button>
        </div>
        <div style={modal.body}>{children}</div>
        {footer && <div style={modal.footer}>{footer}</div>}
      </div>
    </div>
  );
}
