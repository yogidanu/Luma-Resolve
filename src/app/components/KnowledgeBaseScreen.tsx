import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SubHeader, sub, type SubScreenProps } from './SubScreen';

/* Luma Resolve — Knowledge Base (Redesign Step 3, Blueprint 4.4)
   A working library, not a content showcase: compact article rows with
   status and usefulness, search first, AI article suggestions kept as a
   plain review list (a human approves before anything is drafted). */

const articles = [
  { id: 'KB-001', title: 'How to Reset Your Password', category: 'Account Management', views: 1243, helpful: 156, lastUpdated: '2 days ago', status: 'published', aiGenerated: false },
  { id: 'KB-002', title: 'Understanding API Rate Limits', category: 'Developer', views: 892, helpful: 98, lastUpdated: '5 days ago', status: 'published', aiGenerated: true },
  { id: 'KB-003', title: 'Payment Failed Error 503 — Troubleshooting', category: 'Billing', views: 2104, helpful: 234, lastUpdated: '1 day ago', status: 'published', aiGenerated: true },
  { id: 'KB-004', title: 'Team Collaboration Features Guide', category: 'Features', views: 456, helpful: 67, lastUpdated: '3 days ago', status: 'draft', aiGenerated: false },
];

const suggestions = [
  { title: 'Common Issues with Email Verification', reason: '23 tickets mention email verification problems', tickets: 23 },
  { title: 'Integration Setup Guide for Webhooks', reason: '15 tickets ask about webhook configuration', tickets: 15 },
  { title: 'Subscription Cancellation Process', reason: '12 tickets request cancellation help', tickets: 12 },
];

export function KnowledgeBaseScreen(props: SubScreenProps) {
  const [query, setQuery] = useState('');
  const rows = useMemo(
    () => articles.filter((a) => (a.title + a.category + a.id).toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div style={sub.page}>
      <SubHeader title="Knowledge Base" {...props} />
      <div style={{ ...sub.content, display: 'grid', gridTemplateColumns: '1fr 320px', alignItems: 'start' }}>
        <section style={sub.panel}>
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <Search size={15} style={{ position: 'absolute', left: 10, top: 9, color: 'var(--ink-faint)' }} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles…"
              style={{ width: '100%', height: 'var(--control-height)', padding: '0 10px 0 32px', fontSize: 'var(--text-ui)', color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          {rows.map((a) => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 'var(--row-height)', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 'var(--text-ui)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.title}</div>
                <div style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-muted)' }}>
                  {a.id} · {a.category} · Updated {a.lastUpdated}{a.aiGenerated ? ' · AI-drafted, human-approved' : ''}
                </div>
              </div>
              <span style={{ ...sub.muted, fontVariantNumeric: 'tabular-nums' }}>{a.views.toLocaleString()} views</span>
              <span style={{ ...sub.muted, fontVariantNumeric: 'tabular-nums' }}>{a.helpful} helpful</span>
              {a.status === 'published'
                ? <span style={sub.chip('var(--ok)', 'var(--ok-bg)')}>Published</span>
                : <span style={sub.chip('var(--warn)', 'var(--warn-bg)')}>Draft</span>}
            </div>
          ))}
          {rows.length === 0 && <p style={sub.muted}>No articles match your search.</p>}
        </section>

        <aside style={sub.panel}>
          <div style={sub.panelTitle}>Suggested from tickets</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {suggestions.map((sug) => (
              <div key={sug.title}>
                <div style={{ fontSize: 'var(--text-ui)', fontWeight: 600 }}>{sug.title}</div>
                <div style={{ fontSize: 'var(--text-meta)', color: 'var(--ink-muted)' }}>{sug.reason}</div>
                <button style={{ marginTop: 6, background: 'transparent', border: 'none', padding: 0, fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--action)', cursor: 'pointer' }}>
                  Review suggestion
                </button>
              </div>
            ))}
          </div>
          <p style={{ ...sub.muted, marginTop: 16, fontSize: 'var(--text-meta)' }}>
            Suggestions are drafted only after a human approves them here — nothing publishes itself.
          </p>
        </aside>
      </div>
    </div>
  );
}
