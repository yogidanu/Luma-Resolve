import React, { useMemo, useState } from 'react';
import { Search, Moon, Sun, LogOut, Inbox, BookOpen, Users, BarChart3, Settings } from 'lucide-react';
import { mockTickets, mockDashboardStats } from '../data/mockData';

/* Luma Resolve — Queue (Redesign Step 2, Blueprint Sections 4.1, 5, 6)
   Replaces MainDashboardWithSidePanel (977 lines, incl. an embedded
   Stageshow showcase) with the queue as the product's home screen:
   Linear-style compact rows (40px), neutral surfaces, Luma Blue only for
   selection / links / focus, semantic colour only for priority & confidence.
   Same exported name + props as the old file, so App.tsx wiring is unchanged.
   Stageshow now lives outside the app (standalone demo, per blueprint). */

interface Props {
  onTicketClick: (ticketId: string) => void;
  onLogout: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  isSidePanelCollapsed?: boolean;
  onToggleSidePanel?: () => void;
  onNavigate?: (view: string) => void;
}

type Tone = 'ok' | 'warn' | 'danger' | 'info' | 'neutral';
const toneVar: Record<Tone, { fg: string; bg: string }> = {
  ok:      { fg: 'var(--ok)',      bg: 'var(--ok-bg)' },
  warn:    { fg: 'var(--warn)',    bg: 'var(--warn-bg)' },
  danger:  { fg: 'var(--danger)',  bg: 'var(--danger-bg)' },
  info:    { fg: 'var(--action)',  bg: 'var(--action-subtle)' },
  neutral: { fg: 'var(--ink-muted)', bg: 'var(--surface-sunken)' },
};

const STATUS: Record<string, { label: string; tone: Tone }> = {
  'open':        { label: 'Open',        tone: 'info' },
  'in-progress': { label: 'In progress', tone: 'info' },
  'resolved':    { label: 'Resolved',    tone: 'ok' },
};
const PRIORITY: Record<string, { label: string; tone: Tone }> = {
  high:   { label: 'High',   tone: 'danger' },
  medium: { label: 'Medium', tone: 'warn' },
  low:    { label: 'Low',    tone: 'neutral' },
};
const CONFIDENCE: Record<string, { label: string; tone: Tone }> = {
  high:   { label: 'High',   tone: 'ok' },
  medium: { label: 'Medium', tone: 'warn' },
  low:    { label: 'Low',    tone: 'danger' },
};

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'open', label: 'Open' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'high', label: 'High priority' },
  { id: 'low-confidence', label: 'Low confidence' },
] as const;

const NAV = [
  { id: 'dashboard', label: 'Queue', icon: Inbox, active: true },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: BookOpen, active: false },
  { id: 'team', label: 'Team', icon: Users, active: false },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, active: false },
  { id: 'settings', label: 'Settings', icon: Settings, active: false },
];

function Chip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const t = toneVar[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 8px',
      fontSize: 'var(--text-meta)', fontWeight: 600, color: t.fg, background: t.bg,
      borderRadius: 999, whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

export function MainDashboardWithSidePanel({ onTicketClick, onLogout, isDarkMode, onToggleDarkMode, onNavigate }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>('all');

  const rows = useMemo(() => {
    return mockTickets.filter((t) => {
      if (filter === 'open' && t.status !== 'open') return false;
      if (filter === 'in-progress' && t.status !== 'in-progress') return false;
      if (filter === 'high' && t.priority !== 'high') return false;
      if (filter === 'low-confidence' && t.aiSummary?.confidence !== 'low') return false;
      if (query) {
        const q = query.toLowerCase();
        return (t.subject + t.customer.name + t.customer.company + t.id).toLowerCase().includes(q);
      }
      return true;
    });
  }, [query, filter]);

  const stats: [string, string][] = [
    ['Open tickets', String(mockDashboardStats.openTickets)],
    ['Resolved today', String(mockDashboardStats.resolvedToday)],
    ['Avg. handle time', mockDashboardStats.avgHandleTime],
    ['Resolution rate', mockDashboardStats.resolutionRate],
    ['AI-assisted', mockDashboardStats.aiAssisted],
  ];

  const iconBtn: React.CSSProperties = {
    width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)',
    color: 'var(--ink-muted)', cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>
      {/* ——— Nav rail (Blueprint 5.1: five items, never more) ——— */}
      <aside style={{ width: 'var(--nav-width)', flexShrink: 0, borderRight: '1px solid var(--border)', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ fontSize: 15, fontWeight: 700, padding: '4px 10px 16px' }}>Luma Resolve</div>
        {NAV.map(({ id, label, icon: Icon, active }) => (
          <button key={id} onClick={() => onNavigate?.(id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, height: 34, padding: '0 10px',
              fontSize: 'var(--text-ui)', fontWeight: active ? 600 : 500, textAlign: 'left',
              color: active ? 'var(--action)' : 'var(--ink-muted)',
              background: active ? 'var(--action-subtle)' : 'transparent',
              border: 'none', borderRadius: 'var(--radius-control)', cursor: 'pointer',
            }}>
            <Icon size={16} strokeWidth={2} /> {label}
          </button>
        ))}
        <div style={{ marginTop: 'auto' }}>
          <button onClick={onLogout}
            style={{ display: 'flex', alignItems: 'center', gap: 10, height: 34, padding: '0 10px', fontSize: 'var(--text-ui)', color: 'var(--ink-muted)', background: 'transparent', border: 'none', borderRadius: 'var(--radius-control)', cursor: 'pointer' }}>
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </aside>

      {/* ——— Main ——— */}
      <main style={{ flex: 1, minWidth: 0 }}>
        <header style={{ height: 56, display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: 'var(--text-title)', fontWeight: 600, margin: 0 }}>Queue</h1>
          <div style={{ flex: 1 }} />
          <div style={{ position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 10, top: 9, color: 'var(--ink-faint)' }} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tickets, customers…"
              style={{ width: 260, height: 'var(--control-height)', padding: '0 10px 0 32px', fontSize: 'var(--text-ui)', color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)', outline: 'none' }} />
          </div>
          <button style={iconBtn} onClick={onToggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </header>

        {/* Stats — plain text metrics, no cards, no theatre (Blueprint 4.6) */}
        <div style={{ display: 'flex', gap: 32, padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
          {stats.map(([label, value]) => (
            <div key={label}>
              <div style={{ fontSize: 18, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
              <div style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-muted)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, padding: '12px 24px 4px' }}>
          {FILTERS.map((f) => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              style={{
                height: 28, padding: '0 12px', fontSize: 'var(--text-ui)', fontWeight: 500,
                color: filter === f.id ? 'var(--action)' : 'var(--ink-muted)',
                background: filter === f.id ? 'var(--action-subtle)' : 'transparent',
                border: '1px solid var(--border)', borderRadius: 999, cursor: 'pointer',
              }}>{f.label}</button>
          ))}
        </div>

        {/* Compact rows — 40px, Linear density (locked decision) */}
        <div role="table" style={{ padding: '8px 12px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '92px 1fr 170px 90px 96px 84px 64px', gap: 12, padding: '0 12px', height: 32, alignItems: 'center', fontSize: 'var(--text-meta)', fontWeight: 600, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            <span>Status</span><span>Ticket</span><span>Customer</span><span>Priority</span><span>AI confidence</span><span>Assignee</span><span style={{ textAlign: 'right' }}>Age</span>
          </div>
          {rows.map((t) => {
            const st = STATUS[t.status] ?? STATUS['open'];
            const pr = PRIORITY[t.priority] ?? PRIORITY['low'];
            const cf = t.aiSummary ? (CONFIDENCE[t.aiSummary.confidence] ?? CONFIDENCE['medium']) : null;
            return (
              <button key={t.id} onClick={() => onTicketClick(t.id)}
                style={{
                  display: 'grid', gridTemplateColumns: '92px 1fr 170px 90px 96px 84px 64px', gap: 12,
                  width: '100%', height: 'var(--row-height)', alignItems: 'center', padding: '0 12px',
                  background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)',
                  fontSize: 'var(--text-ui)', color: 'var(--ink)', textAlign: 'left', cursor: 'pointer',
                }}>
                <span><Chip tone={st.tone}>{st.label}</Chip></span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <span style={{ color: 'var(--ink-faint)', marginRight: 8, fontVariantNumeric: 'tabular-nums' }}>{t.id}</span>{t.subject}
                </span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--ink-muted)' }}>
                  {t.customer.name} · {t.customer.tier}
                </span>
                <span><Chip tone={pr.tone}>{pr.label}</Chip></span>
                <span>{cf ? <Chip tone={cf.tone}>{cf.label} {t.aiSummary?.percentage}%</Chip> : <span style={{ color: 'var(--ink-faint)' }}>—</span>}</span>
                <span style={{ color: 'var(--ink-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.assignedTo ?? 'Unassigned'}</span>
                <span style={{ textAlign: 'right', color: 'var(--ink-muted)', fontVariantNumeric: 'tabular-nums' }}>{t.created}</span>
              </button>
            );
          })}
          {rows.length === 0 && (
            <div style={{ padding: '40px 12px', fontSize: 'var(--text-body)', color: 'var(--ink-muted)' }}>
              No tickets match this view.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
