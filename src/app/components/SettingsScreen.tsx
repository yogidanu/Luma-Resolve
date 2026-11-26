import React, { useState } from 'react';
import { SubHeader, sub, type SubScreenProps } from './SubScreen';

/* Luma Resolve — Settings (Redesign Step 3, Blueprint 4.5 + 7)
   Grouped the way the blueprint's governance model works: your profile,
   AI behaviour (the controls a lead actually owns), notifications,
   appearance, and workspace roles shown read-only with who can change
   them — instead of one long undifferentiated form. All local state:
   prototype only, nothing here persists yet. */

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} onClick={onClick}
      style={{
        width: 36, height: 20, borderRadius: 999, border: 'none', cursor: 'pointer', flexShrink: 0,
        background: on ? 'var(--action)' : 'var(--border-strong)', position: 'relative',
        transition: 'background var(--motion-fast) var(--ease-out)',
      }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 18 : 2, width: 16, height: 16, borderRadius: 999,
        background: 'var(--surface)', transition: 'left var(--motion-fast) var(--ease-out)',
      }} />
    </button>
  );
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 'var(--text-ui)', fontWeight: 600 }}>{label}</div>
        {hint && <div style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-muted)' }}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  height: 'var(--control-height)', padding: '0 8px', fontSize: 'var(--text-ui)', color: 'var(--ink)',
  background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)',
};

export function SettingsScreen(props: SubScreenProps) {
  const [autoDraft, setAutoDraft] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [mentionNotifs, setMentionNotifs] = useState(true);
  const [threshold, setThreshold] = useState('60');
  const [tone, setTone] = useState('professional');
  const [saved, setSaved] = useState(false);

  return (
    <div style={sub.page}>
      <SubHeader title="Settings" {...props} />
      <div style={{ ...sub.content, maxWidth: 760 }}>
        <section style={sub.panel}>
          <div style={sub.panelTitle}>Profile</div>
          <div style={{ fontSize: 'var(--text-body)', fontWeight: 600 }}>Agent User</div>
          <div style={sub.muted}>agent@lumasolve.com · Senior Support Agent</div>
        </section>

        <section style={sub.panel}>
          <div style={sub.panelTitle}>AI behaviour</div>
          <Row label="Draft a response automatically" hint="A draft is prepared when a ticket opens. It is never sent without a human.">
            <Toggle on={autoDraft} onClick={() => setAutoDraft(!autoDraft)} label="Draft a response automatically" />
          </Row>
          <Row label="Collapse drafts below this confidence" hint="Low-confidence drafts start collapsed, prompting clarifying questions instead.">
            <select value={threshold} onChange={(e) => setThreshold(e.target.value)} style={selectStyle}>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
            </select>
          </Row>
          <Row label="Default draft tone">
            <select value={tone} onChange={(e) => setTone(e.target.value)} style={selectStyle}>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="concise">Concise</option>
            </select>
          </Row>
        </section>

        <section style={sub.panel}>
          <div style={sub.panelTitle}>Notifications</div>
          <Row label="Email notifications">
            <Toggle on={emailNotifs} onClick={() => setEmailNotifs(!emailNotifs)} label="Email notifications" />
          </Row>
          <Row label="Mentions and handoffs">
            <Toggle on={mentionNotifs} onClick={() => setMentionNotifs(!mentionNotifs)} label="Mentions and handoffs" />
          </Row>
        </section>

        <section style={sub.panel}>
          <div style={sub.panelTitle}>Appearance</div>
          <Row label="Dark mode" hint="In dark mode, depth comes from lighter surfaces, not shadows.">
            <Toggle on={!!props.isDarkMode} onClick={() => props.onToggleDarkMode?.()} label="Dark mode" />
          </Row>
        </section>

        <section style={sub.panel}>
          <div style={sub.panelTitle}>Workspace roles — read-only</div>
          <div style={{ fontSize: 'var(--text-ui)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span>Agent — works tickets, approves own drafts</span>
            <span>Lead — all of Agent, plus AI behaviour settings and team view</span>
            <span>Admin — all of Lead, plus roles, retention and audit log</span>
          </div>
          <p style={{ ...sub.muted, fontSize: 'var(--text-meta)', marginTop: 10 }}>
            Roles are changed by an Admin in the workspace directory, not from this screen.
          </p>
        </section>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            style={{ height: 'var(--control-height)', padding: '0 16px', fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--on-action)', background: 'var(--action)', border: 'none', borderRadius: 'var(--radius-control)', cursor: 'pointer' }}>
            Save changes
          </button>
          {saved && <span style={{ fontSize: 'var(--text-ui)', color: 'var(--ok)' }}>Saved (prototype — not persisted yet)</span>}
        </div>
      </div>
    </div>
  );
}
