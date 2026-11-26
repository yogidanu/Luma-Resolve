import React, { useState } from 'react';
import { ArrowLeft, Moon, Sun } from 'lucide-react';

/* Luma Resolve — Edit Response (Redesign Step 4)
   Same props as before. A plain full-screen editor: the text, a word
   count, variable insertion, save or back. The old screen's "tone
   slider" pretended to restyle text it never changed — removed rather
   than faked. Tone is chosen in Settings, where it actually applies. */

interface EditResponseScreenProps {
  onBack: () => void;
  onSave: (response: string) => void;
  initialDraft: string;
  customerName: string;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const VARIABLES = ['customer_name', 'ticket_id', 'agent_name', 'company_name'];

export function EditResponseScreen({ onBack, onSave, initialDraft, customerName, isDarkMode, onToggleDarkMode }: EditResponseScreenProps) {
  const [response, setResponse] = useState(initialDraft);
  const words = response.trim() ? response.trim().split(/\s+/).length : 0;

  const insertVariable = (v: string) => setResponse((prev) => `${prev}{{${v}}}`);

  const btn = (primary: boolean): React.CSSProperties => ({
    height: 'var(--control-height)', padding: '0 16px', fontSize: 'var(--text-ui)', fontWeight: 600,
    color: primary ? 'var(--on-action)' : 'var(--ink)',
    background: primary ? 'var(--action)' : 'var(--surface)',
    border: primary ? 'none' : '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-control)', cursor: 'pointer',
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-sunken)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>
      <header style={{ height: 56, display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--action)', cursor: 'pointer' }}>
          <ArrowLeft size={16} /> Back to ticket
        </button>
        <h1 style={{ fontSize: 'var(--text-title)', fontWeight: 600, margin: 0 }}>Edit response to {customerName}</h1>
        <div style={{ flex: 1 }} />
        <button onClick={onToggleDarkMode} aria-label="Toggle dark mode" style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)', color: 'var(--ink-muted)', cursor: 'pointer' }}>
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </header>

      <main style={{ maxWidth: 820, margin: '0 auto', padding: 24 }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-card)', padding: 16 }}>
          <textarea value={response} onChange={(e) => setResponse(e.target.value)} rows={16} autoFocus
            style={{ width: '100%', padding: 12, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', resize: 'vertical' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-muted)', marginRight: 4 }}>Insert:</span>
            {VARIABLES.map((v) => (
              <button key={v} onClick={() => insertVariable(v)}
                style={{ height: 26, padding: '0 10px', fontSize: 'var(--text-meta)', fontWeight: 600, color: 'var(--ink-muted)', background: 'var(--surface-sunken)', border: '1px solid var(--border)', borderRadius: 999, cursor: 'pointer' }}>
                {`{{${v}}}`}
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-faint)', fontVariantNumeric: 'tabular-nums' }}>{words} words</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button style={btn(true)} onClick={() => onSave(response)}>Save draft</button>
          <button style={btn(false)} onClick={onBack}>Discard changes</button>
        </div>
      </main>
    </div>
  );
}
