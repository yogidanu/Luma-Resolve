import React, { useEffect, useState } from 'react';
import { ArrowLeft, Moon, Sun, Paperclip, AlertTriangle, ChevronDown, ChevronRight } from 'lucide-react';
import { mockTickets } from '../data/mockData';

/* Luma Resolve — Ticket (Redesign Step 2, Blueprint Sections 4.2 + 4.3)
   FIXES from the structure review:
   1. Rules-of-Hooks bug removed — the wrapper resolves the ticket and
      returns the empty state; the inner component calls ALL hooks
      unconditionally. The old file returned early before its useStates.
   2. Priority / status / assignee initialise from the ticket itself —
      the old file hardcoded 'high' / 'open' / 'Agent User'.
   Tri-panel: conversation (left) · analysis + draft (centre) · customer (right).
   Neutral tokens only; blue = actions, semantic colour = confidence/status.
   Low confidence (<60% / 'low'): draft starts collapsed — the designed
   behaviour is to ask clarifying questions, not to send a guess (4.3). */

interface TicketDetailScreenProps {
  ticketId: string;
  onBack: () => void;
  onApprove: () => void;
  onEditResponse: () => void;
  onViewReasoning: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  onSendResponseCallbackRef?: React.MutableRefObject<(() => void) | null>;
  onCustomerConfirmedResolution?: () => void;
  showDocumentationCreated?: boolean;
  onViewDocumentation?: () => void;
  onDismissDocNotification?: () => void;
}

type AnyTicket = (typeof mockTickets)[number];

const panel: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 'var(--radius-card)', padding: 16,
};
const panelTitle: React.CSSProperties = {
  fontSize: 'var(--text-meta)', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.05em', color: 'var(--ink-faint)', marginBottom: 12,
};
const body: React.CSSProperties = { fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink)' };
const muted: React.CSSProperties = { fontSize: 'var(--text-ui)', color: 'var(--ink-muted)' };

export function TicketDetailScreen(props: TicketDetailScreenProps) {
  const ticket = mockTickets.find((t) => t.id === props.ticketId);
  if (!ticket) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-title)', fontWeight: 600 }}>Ticket not found</p>
          <p style={muted}>It may have been moved or deleted.</p>
          <button onClick={props.onBack} style={{ marginTop: 16, height: 'var(--control-height)', padding: '0 14px', fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--on-action)', background: 'var(--action)', border: 'none', borderRadius: 'var(--radius-control)', cursor: 'pointer' }}>
            Back to queue
          </button>
        </div>
      </div>
    );
  }
  return <TicketDetail ticket={ticket} {...props} />;
}

function TicketDetail({ ticket, onBack, onApprove, onEditResponse, onViewReasoning, isDarkMode, onToggleDarkMode, onSendResponseCallbackRef, showDocumentationCreated, onViewDocumentation, onDismissDocNotification }: TicketDetailScreenProps & { ticket: AnyTicket }) {
  // All hooks unconditional, initialised from the ticket (fix #2).
  const [priority, setPriority] = useState<string>(ticket.priority);
  const [status, setStatus] = useState<string>(ticket.status);
  const [assignedTo] = useState<string>(ticket.assignedTo ?? 'Unassigned');
  const [draft, setDraft] = useState<string>(ticket.aiDraft ?? '');
  const [isEditing, setIsEditing] = useState(false);
  const [sent, setSent] = useState(false);
  const isLowConfidence = ticket.aiSummary?.confidence === 'low';
  const [draftOpen, setDraftOpen] = useState<boolean>(!isLowConfidence);

  // App sends via its Approve modal; it calls this ref to tell us it happened.
  useEffect(() => {
    if (onSendResponseCallbackRef) {
      onSendResponseCallbackRef.current = () => setSent(true);
    }
  }, [onSendResponseCallbackRef]);

  const conf = ticket.aiSummary;
  const timeline = (ticket.timeline ?? []) as unknown as { action?: string; event?: string; timestamp?: string; time?: string }[];

  const btn = (primary: boolean): React.CSSProperties => ({
    height: 'var(--control-height)', padding: '0 14px', fontSize: 'var(--text-ui)', fontWeight: 600,
    color: primary ? 'var(--on-action)' : 'var(--ink)',
    background: primary ? 'var(--action)' : 'var(--surface)',
    border: primary ? 'none' : '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-control)', cursor: 'pointer',
  });
  const select: React.CSSProperties = {
    height: 'var(--control-height)', padding: '0 8px', fontSize: 'var(--text-ui)', color: 'var(--ink)',
    background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-sunken)', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>
      <header style={{ height: 56, display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--action)', cursor: 'pointer' }}>
          <ArrowLeft size={16} /> Queue
        </button>
        <span style={{ color: 'var(--ink-faint)', fontVariantNumeric: 'tabular-nums' }}>{ticket.id}</span>
        <h1 style={{ fontSize: 'var(--text-title)', fontWeight: 600, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ticket.subject}</h1>
        <div style={{ flex: 1 }} />
        <button onClick={onToggleDarkMode} aria-label="Toggle dark mode" style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)', color: 'var(--ink-muted)', cursor: 'pointer' }}>
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </header>

      {showDocumentationCreated && (
        <div style={{ margin: '16px 24px 0', padding: '10px 14px', display: 'flex', gap: 12, alignItems: 'center', fontSize: 'var(--text-ui)', background: 'var(--ok-bg)', color: 'var(--ok)', borderRadius: 'var(--radius-card)' }}>
          <span style={{ flex: 1 }}>Resolution documented to the knowledge base.</span>
          <button onClick={onViewDocumentation} style={{ background: 'transparent', border: 'none', fontWeight: 600, color: 'var(--ok)', cursor: 'pointer' }}>View</button>
          <button onClick={onDismissDocNotification} style={{ background: 'transparent', border: 'none', fontWeight: 600, color: 'var(--ok)', cursor: 'pointer' }}>Dismiss</button>
        </div>
      )}
      {sent && (
        <div style={{ margin: '16px 24px 0', padding: '10px 14px', fontSize: 'var(--text-ui)', background: 'var(--ok-bg)', color: 'var(--ok)', borderRadius: 'var(--radius-card)' }}>
          Response sent to {ticket.customer.name}.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) minmax(360px, 1.4fr) 300px', gap: 16, padding: 24, alignItems: 'start' }}>
        {/* ——— Left: conversation ——— */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={panel}>
            <div style={panelTitle}>Customer request · {ticket.created}</div>
            <p style={{ ...body, whiteSpace: 'pre-wrap', margin: 0 }}>{ticket.message}</p>
            {(ticket.attachments ?? []).length > 0 && (
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {(ticket.attachments as unknown as string[]).map((a) => (
                  <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-ui)', color: 'var(--ink-muted)' }}>
                    <Paperclip size={14} /> {a}
                  </span>
                ))}
              </div>
            )}
          </div>
          {timeline.length > 0 && (
            <div style={panel}>
              <div style={panelTitle}>Timeline</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {timeline.map((e, i) => (
                  <div key={i} style={{ fontSize: 'var(--text-ui)' }}>
                    <div>{e.action ?? e.event}</div>
                    <div style={{ color: 'var(--ink-faint)', fontSize: 'var(--text-meta)' }}>{e.timestamp ?? e.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ——— Centre: analysis + draft ——— */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(ticket as { conflictingData?: boolean }).conflictingData && (
            <div style={{ ...panel, background: 'var(--warn-bg)', border: 'none' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontWeight: 600, fontSize: 'var(--text-body)', color: 'var(--warn)' }}>
                <AlertTriangle size={16} /> Conflicting data — verify before responding
              </div>
              <p style={{ ...muted, marginTop: 6, color: 'var(--ink)' }}>
                The customer's report and system records disagree. No draft should be sent until the source is verified (Blueprint 4.3).
              </p>
            </div>
          )}

          {conf && (
            <div style={panel}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={panelTitle}>Analysis</span>
                <div style={{ flex: 1 }} />
                <span style={{
                  fontSize: 'var(--text-meta)', fontWeight: 600, padding: '3px 8px', borderRadius: 999,
                  color: conf.confidence === 'high' ? 'var(--ok)' : conf.confidence === 'medium' ? 'var(--warn)' : 'var(--danger)',
                  background: conf.confidence === 'high' ? 'var(--ok-bg)' : conf.confidence === 'medium' ? 'var(--warn-bg)' : 'var(--danger-bg)',
                }}>
                  {conf.confidence[0].toUpperCase() + conf.confidence.slice(1)} confidence · {conf.percentage}%
                </span>
              </div>
              <p style={{ ...body, margin: '0 0 12px' }}>{conf.rootCause}</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {conf.keyFacts.map((f) => <li key={f} style={muted}>{f}</li>)}
              </ul>
              <div style={{ ...panelTitle, marginTop: 16 }}>Suggested steps</div>
              <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {conf.suggestedSteps.map((st) => <li key={st} style={muted}>{st}</li>)}
              </ol>
              <button onClick={onViewReasoning} style={{ marginTop: 14, background: 'transparent', border: 'none', padding: 0, fontSize: 'var(--text-ui)', fontWeight: 600, color: 'var(--action)', cursor: 'pointer' }}>
                How was this analysed?
              </button>
            </div>
          )}

          {'multipleIssues' in ticket && Array.isArray((ticket as { multipleIssues?: unknown }).multipleIssues) && (
            <div style={panel}>
              <div style={panelTitle}>Issues in this ticket</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {((ticket as unknown as { multipleIssues: { id: number; title: string; status: string; progress: number }[] }).multipleIssues).map((iss) => (
                  <div key={iss.id} style={{ fontSize: 'var(--text-ui)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600 }}>{iss.title}</span>
                      <span style={{ color: 'var(--ink-muted)', fontVariantNumeric: 'tabular-nums' }}>{iss.progress}%</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--surface-sunken)', borderRadius: 999, marginTop: 6 }}>
                      <div style={{ height: 4, width: `${iss.progress}%`, background: 'var(--action)', borderRadius: 999 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={panel}>
            <button onClick={() => setDraftOpen(!draftOpen)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--ink)' }}>
              {draftOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
              <span style={{ ...panelTitle, marginBottom: 0 }}>Draft response</span>
            </button>
            {isLowConfidence && !draftOpen && (
              <p style={{ ...muted, marginTop: 10 }}>
                Low confidence — the recommended next step is to ask the customer clarifying questions rather than send this draft.
              </p>
            )}
            {draftOpen && (
              <>
                {isEditing ? (
                  <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={12}
                    style={{ width: '100%', marginTop: 12, padding: 12, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-control)', boxSizing: 'border-box', fontFamily: 'var(--font-sans)' }} />
                ) : (
                  <p style={{ ...body, whiteSpace: 'pre-wrap', marginTop: 12 }}>{draft}</p>
                )}
                <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                  {/* The one primary action in this panel (Blueprint 6.2 rationing) */}
                  <button style={btn(true)} onClick={() => { if (isEditing) setIsEditing(false); onApprove(); }}>
                    Approve &amp; send
                  </button>
                  {isEditing
                    ? <button style={btn(false)} onClick={() => setIsEditing(false)}>Done editing</button>
                    : <button style={btn(false)} onClick={() => setIsEditing(true)}>Edit draft</button>}
                  <button style={{ ...btn(false), border: 'none', color: 'var(--action)' }} onClick={onEditResponse}>Full editor</button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ——— Right: customer + controls ——— */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={panel}>
            <div style={panelTitle}>Customer</div>
            <div style={{ fontSize: 'var(--text-body)', fontWeight: 600 }}>{ticket.customer.name}</div>
            <div style={muted}>{ticket.customer.company}</div>
            <div style={muted}>{ticket.customer.email}</div>
            <div style={{ ...muted, marginTop: 8 }}>Tier: {ticket.customer.tier}</div>
            {(ticket.customer.tags ?? []).length > 0 && (
              <div style={{ ...muted, marginTop: 4 }}>Tags: {(ticket.customer.tags as string[]).join(', ')}</div>
            )}
          </div>
          <div style={panel}>
            <div style={panelTitle}>Ticket controls</div>
            <label style={{ ...muted, display: 'block', marginBottom: 4 }}>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ ...select, width: '100%' }}>
              <option value="open">Open</option>
              <option value="in-progress">In progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <label style={{ ...muted, display: 'block', margin: '12px 0 4px' }}>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ ...select, width: '100%' }}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <div style={{ ...muted, marginTop: 12 }}>Assignee: {assignedTo}</div>
          </div>
          {(ticket.pastTickets ?? []).length > 0 && (
            <div style={panel}>
              <div style={panelTitle}>Past tickets</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {ticket.pastTickets.map((p) => (
                  <div key={p.id} style={{ fontSize: 'var(--text-ui)' }}>
                    <div>{p.subject}</div>
                    <div style={{ color: 'var(--ink-faint)', fontSize: 'var(--text-meta)' }}>{p.id} · {p.status} · {p.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
