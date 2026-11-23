import React, { useMemo, useState } from 'react';
import { ArrowLeft, Moon, Sun, Search } from 'lucide-react';

/* Shared shell for the Step 3 screens (KB / Team / Analytics / Settings).
   Same header pattern as the Step 2 Queue and Ticket screens:
   neutral tokens, Luma Blue for actions only, no colour theatre. */

export interface SubScreenProps {
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const sub = {
  page: {
    minHeight: '100vh', background: 'var(--surface-sunken)', color: 'var(--ink)',
    fontFamily: 'var(--font-sans)',
  } as React.CSSProperties,
  header: {
    height: 56, display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px',
    background: 'var(--surface)', borderBottom: '1px solid var(--border)',
  } as React.CSSProperties,
  title: { fontSize: 'var(--text-title)', fontWeight: 600, margin: 0 } as React.CSSProperties,
  backBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent',
    border: 'none', fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--action)', cursor: 'pointer',
  } as React.CSSProperties,
  iconBtn: {
    width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)',
    color: 'var(--ink-muted)', cursor: 'pointer',
  } as React.CSSProperties,
  content: { padding: 24, display: 'flex', flexDirection: 'column', gap: 16 } as React.CSSProperties,
  panel: {
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius-card)', padding: 16,
  } as React.CSSProperties,
  panelTitle: {
    fontSize: 'var(--text-meta)', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.05em', color: 'var(--ink-faint)', marginBottom: 12,
  } as React.CSSProperties,
  muted: { fontSize: 'var(--text-ui)', color: 'var(--ink-muted)' } as React.CSSProperties,
  chip: (fg: string, bg: string): React.CSSProperties => ({
    display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 8px',
    fontSize: 'var(--text-meta)', fontWeight: 600, color: fg, background: bg,
    borderRadius: 999, whiteSpace: 'nowrap',
  }),
};

export function SubHeader({ title, onBack, isDarkMode, onToggleDarkMode }: SubScreenProps & { title: string }) {
  return (
    <header style={sub.header}>
      <button onClick={onBack} style={sub.backBtn}><ArrowLeft size={16} /> Queue</button>
      <h1 style={sub.title}>{title}</h1>
      <div style={{ flex: 1 }} />
      <button style={sub.iconBtn} onClick={onToggleDarkMode} aria-label="Toggle dark mode">
        {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
