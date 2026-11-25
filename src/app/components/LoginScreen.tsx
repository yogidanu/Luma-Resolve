import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

/* Luma Resolve — Login (Redesign Step 2, Blueprint Sections 4.7 + 6)
   Plain, neutral, professional. No gradient panel, no testimonial,
   no "enterprise security" claims, no demo-credentials button.
   Signature fixed: onLogin now actually receives (email, password),
   matching App.handleLogin — the mismatch the old code shipped silently.
   NOTE: auth is still prototype-only (any non-empty credentials sign in).
   The screen says so honestly instead of implying real security. */

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
}

const s = {
  page: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'var(--surface-sunken)', padding: '24px',
    fontFamily: 'var(--font-sans)', color: 'var(--ink)',
  } as React.CSSProperties,
  card: {
    width: '100%', maxWidth: 360, background: 'var(--surface)',
    border: '1px solid var(--border)', borderRadius: 'var(--radius-modal)', padding: 32,
  } as React.CSSProperties,
  wordmark: { fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' } as React.CSSProperties,
  sub: { fontSize: 'var(--text-body)', color: 'var(--ink-muted)', marginTop: 6 } as React.CSSProperties,
  label: { display: 'block', fontSize: 'var(--text-ui)', fontWeight: 600, marginBottom: 6 } as React.CSSProperties,
  input: {
    width: '100%', height: 'var(--control-height-lg)', padding: '0 12px',
    fontSize: 'var(--text-body)', color: 'var(--ink)', background: 'var(--surface)',
    border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)',
    outline: 'none', boxSizing: 'border-box',
  } as React.CSSProperties,
  button: {
    width: '100%', height: 'var(--control-height-lg)', marginTop: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--on-action)',
    background: 'var(--action)', border: 'none', borderRadius: 'var(--radius-control)',
    cursor: 'pointer',
  } as React.CSSProperties,
  error: {
    fontSize: 'var(--text-ui)', color: 'var(--danger)', background: 'var(--danger-bg)',
    borderRadius: 'var(--radius-control)', padding: '10px 12px', marginTop: 16,
  } as React.CSSProperties,
  note: { fontSize: 'var(--text-meta)', color: 'var(--ink-faint)', textAlign: 'center', marginTop: 20 } as React.CSSProperties,
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError('Enter your email and password to continue.');
      return;
    }
    setError('');
    setIsLoading(true);
    // Prototype sign-in delay — replaced by a real auth call when the backend exists.
    setTimeout(() => onLogin(email.trim(), password), 500);
  };

  return (
    <div style={s.page}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <form style={s.card} onSubmit={handleSubmit}>
          <div style={s.wordmark}>Luma Resolve</div>
          <p style={s.sub}>Sign in to the support workspace</p>

          {error && <div style={s.error}>{error}</div>}

          <div style={{ marginTop: 24 }}>
            <label htmlFor="email" style={s.label}>Email</label>
            <input id="email" type="email" autoComplete="email" style={s.input}
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com" required />
          </div>

          <div style={{ marginTop: 16 }}>
            <label htmlFor="password" style={s.label}>Password</label>
            <input id="password" type="password" autoComplete="current-password" style={s.input}
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" required />
          </div>

          <button type="submit" style={{ ...s.button, opacity: isLoading ? 0.7 : 1 }} disabled={isLoading}>
            {isLoading ? <><Loader2 size={16} className="animate-spin" /> Signing in…</> : 'Sign in'}
          </button>
        </form>
        <p style={s.note}>Prototype build — any email and password will sign you in. No real accounts yet.</p>
      </div>
    </div>
  );
}
