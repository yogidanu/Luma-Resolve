import React from 'react';
import { SubHeader, sub, type SubScreenProps } from './SubScreen';

/* Luma Resolve — Analytics (Redesign Step 3, Blueprint 4.6)
   The three numbers the product is judged by lead: resolution time,
   draft-edit rate (how much humans change AI drafts = the real quality
   signal), reopen rate. Charts are plain bars in one blue + neutrals —
   no rainbow category colours, no chart library needed for this. */

const volume = [
  { day: 'Mon', resolved: 24, pending: 8 },
  { day: 'Tue', resolved: 32, pending: 12 },
  { day: 'Wed', resolved: 28, pending: 15 },
  { day: 'Thu', resolved: 35, pending: 10 },
  { day: 'Fri', resolved: 30, pending: 18 },
  { day: 'Sat', resolved: 18, pending: 8 },
  { day: 'Sun', resolved: 15, pending: 5 },
];
const MAX = 40;

const categories = [
  { name: 'Billing', value: 156 },
  { name: 'Technical', value: 98 },
  { name: 'Account', value: 67 },
  { name: 'Product', value: 45 },
  { name: 'Other', value: 34 },
];

const team = [
  { name: 'Sarah Chen', resolved: 124, rating: 4.9, responseTime: '10m' },
  { name: 'Mike Johnson', resolved: 98, rating: 4.7, responseTime: '14m' },
  { name: 'Emma Davis', resolved: 112, rating: 4.8, responseTime: '12m' },
  { name: 'Alex Kumar', resolved: 89, rating: 4.6, responseTime: '16m' },
];

const kpis: [string, string, string][] = [
  ['Median resolution time', '3.8 hrs', 'Blueprint headline metric'],
  ['Draft-edit rate', '31%', 'Share of AI drafts a human changed before sending'],
  ['Reopen rate', '4.1%', 'Resolved tickets reopened within 7 days'],
  ['AI-assisted resolutions', '72%', 'Jun — up from 45% in Jan'],
];

export function EnhancedAgentPerformanceScreen(props: SubScreenProps) {
  return (
    <div style={sub.page}>
      <SubHeader title="Analytics" {...props} />
      <div style={sub.content}>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {kpis.map(([label, value, note]) => (
            <div key={label} style={sub.panel}>
              <div style={{ fontSize: 'var(--text-meta)', fontWeight: 600, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
              <div style={{ fontSize: 24, fontWeight: 600, marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
              <div style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-muted)', marginTop: 4 }}>{note}</div>
            </div>
          ))}
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, alignItems: 'start' }}>
          <section style={sub.panel}>
            <div style={sub.panelTitle}>Tickets this week — resolved vs still open</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {volume.map((d) => (
                <div key={d.day} style={{ display: 'grid', gridTemplateColumns: '36px 1fr 64px', gap: 10, alignItems: 'center', fontSize: 'var(--text-ui)' }}>
                  <span style={{ color: 'var(--ink-muted)' }}>{d.day}</span>
                  <span style={{ display: 'flex', height: 14, borderRadius: 3, overflow: 'hidden', background: 'var(--surface-sunken)' }}>
                    <span style={{ width: `${(d.resolved / MAX) * 100}%`, background: 'var(--action)' }} />
                    <span style={{ width: `${(d.pending / MAX) * 100}%`, background: 'var(--border-strong)' }} />
                  </span>
                  <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-muted)' }}>{d.resolved} / {d.pending}</span>
                </div>
              ))}
            </div>
            <p style={{ ...sub.muted, fontSize: 'var(--text-meta)', marginTop: 12 }}>Blue = resolved · Grey = still open at day end.</p>
          </section>

          <section style={sub.panel}>
            <div style={sub.panelTitle}>Tickets by category</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {categories.map((c) => (
                <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border)', fontSize: 'var(--text-ui)' }}>
                  <span>{c.name}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-muted)' }}>{c.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section style={sub.panel}>
          <div style={sub.panelTitle}>Team performance</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {team.map((t) => (
              <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px 120px', gap: 12, padding: '7px 0', borderBottom: '1px solid var(--border)', fontSize: 'var(--text-ui)' }}>
                <span style={{ fontWeight: 600 }}>{t.name}</span>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{t.resolved} resolved</span>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{t.responseTime} response</span>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{t.rating} rating</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
