import React from 'react';
import { SubHeader, sub, type SubScreenProps } from './SubScreen';

/* Luma Resolve — Team (Redesign Step 3, Blueprint 4.5)
   Who is on, what they are carrying, how they are doing — one compact
   table. The old screen's chat/conversation theatre is removed:
   collaboration happens inside tickets (notes, mentions, handoffs),
   not in a second inbox. Presence uses semantic colour only. */

const members = [
  { id: '1', name: 'Sarah Chen', initials: 'SC', role: 'Senior Support Agent', presence: 'online', activeTickets: 8, avgResponseTime: '12 min', resolutionRate: 94 },
  { id: '2', name: 'Mike Johnson', initials: 'MJ', role: 'Support Agent', presence: 'online', activeTickets: 12, avgResponseTime: '18 min', resolutionRate: 88 },
  { id: '3', name: 'Emma Davis', initials: 'ED', role: 'Team Lead', presence: 'away', activeTickets: 5, avgResponseTime: '10 min', resolutionRate: 96 },
  { id: '4', name: 'Alex Kumar', initials: 'AK', role: 'Support Agent', presence: 'offline', activeTickets: 0, avgResponseTime: '15 min', resolutionRate: 91 },
] as const;

const PRESENCE: Record<string, { label: string; color: string }> = {
  online: { label: 'Online', color: 'var(--ok)' },
  away: { label: 'Away', color: 'var(--warn)' },
  offline: { label: 'Offline', color: 'var(--ink-faint)' },
};

const cols = '1.6fr 0.8fr 0.7fr 0.8fr 0.8fr';

export function TeamCollaborationScreen(props: SubScreenProps) {
  return (
    <div style={sub.page}>
      <SubHeader title="Team" {...props} />
      <div style={sub.content}>
        <section style={sub.panel}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 12, paddingBottom: 8, fontSize: 'var(--text-meta)', fontWeight: 600, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            <span>Member</span><span>Presence</span><span>Active tickets</span><span>Avg. response</span><span>Resolution rate</span>
          </div>
          {members.map((m) => {
            const p = PRESENCE[m.presence];
            return (
              <div key={m.id} style={{ display: 'grid', gridTemplateColumns: cols, gap: 12, alignItems: 'center', minHeight: 'var(--row-height)', padding: '6px 0', borderTop: '1px solid var(--border)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--surface-sunken)', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-meta)', fontWeight: 700, color: 'var(--ink-muted)', flexShrink: 0 }}>{m.initials}</span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: 'var(--text-ui)', fontWeight: 600 }}>{m.name}</span>
                    <span style={{ display: 'block', fontSize: 'var(--text-meta)', color: 'var(--ink-muted)' }}>{m.role}</span>
                  </span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-ui)', color: 'var(--ink-muted)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: p.color }} /> {p.label}
                </span>
                <span style={{ fontSize: 'var(--text-ui)', fontVariantNumeric: 'tabular-nums' }}>{m.activeTickets}</span>
                <span style={{ fontSize: 'var(--text-ui)', fontVariantNumeric: 'tabular-nums' }}>{m.avgResponseTime}</span>
                <span style={{ fontSize: 'var(--text-ui)', fontVariantNumeric: 'tabular-nums' }}>{m.resolutionRate}%</span>
              </div>
            );
          })}
        </section>
        <p style={{ ...sub.muted, fontSize: 'var(--text-meta)' }}>
          Workload is indicative only — reassign from the ticket itself, where the context lives.
        </p>
      </div>
    </div>
  );
}
