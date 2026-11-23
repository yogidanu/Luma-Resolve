import React, { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  CheckSquare,
  Moon,
  Sun,
  Bell,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  ArrowUpRight,
  Ticket,
  Users,
  Zap,
  Play,
  RotateCcw,
  ShieldCheck,
  Building,
  Mail,
  Send,
  Edit3,
  Bot,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { mockTickets, mockDashboardStats } from '../data/mockData';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Checkbox } from './ui/checkbox';
import { DashboardSidePanel } from './DashboardSidePanel';
import { ConfidenceBadge } from './ConfidenceBadge';
import { OngoingConversationsCard } from './OngoingConversationsCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Stage,
  Window,
  Bar,
  Text,
  Stream,
  Count,
  type Act,
} from '../stageshow';

interface Props {
  onTicketClick: (ticketId: string) => void;
  onLogout: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  isSidePanelCollapsed?: boolean;
  onToggleSidePanel?: () => void;
  onNavigate?: (view: string) => void;
}

// ── Priority & Status Badges (Minimal, Tasteful, Non-Bloated) ───────────────
const priorityBadges: Record<string, { label: string; className: string }> = {
  high: {
    label: 'Urgent SLA',
    className: 'bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400 border border-red-200/60 dark:border-red-900/60',
  },
  medium: {
    label: 'Standard',
    className: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/60',
  },
  low: {
    label: 'Low Priority',
    className: 'bg-slate-50 text-slate-600 dark:bg-slate-900/50 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60',
  },
};

const statusBadges: Record<string, { label: string; className: string }> = {
  open: {
    label: 'In Queue',
    className: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/60',
  },
  'in-progress': {
    label: 'Under Review',
    className: 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400 border border-sky-200/60 dark:border-sky-900/60',
  },
  resolved: {
    label: 'Resolved',
    className: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60',
  },
};

// ── Stageshow Script For In-Situ Interactive Showcase ──────────────────────────
interface ShowcaseState {
  activeId: string;
  streamIndex: number;
  approved: boolean;
  csat: number;
}

const SHOWCASE_DRAFT =
  "Hi Sarah, I've confirmed duplicate invoice #INV-2024-001 for $450.00 on Stripe. I have authorized an immediate full reversal and added $50 service credit to your account.";
const SHOWCASE_WORDS = SHOWCASE_DRAFT.split(' ').length;

const showcaseInitial: ShowcaseState = {
  activeId: 'TKT-1001',
  streamIndex: 0,
  approved: false,
  csat: 95.2,
};

const showcasePoster: ShowcaseState = {
  activeId: 'TKT-1001',
  streamIndex: SHOWCASE_WORDS,
  approved: true,
  csat: 96.8,
};

async function showcaseScript(a: Act<ShowcaseState>) {
  await a.wait(700);
  await a.move('ticket-item-TKT-1001', { duration: 600 });
  await a.click('ticket-item-TKT-1001');
  await a.wait(400);

  // Stream AI resolution
  for (let i = 1; i <= SHOWCASE_WORDS; i++) {
    a.put({ streamIndex: i });
    await a.wait(26);
  }

  await a.wait(450);
  await a.move('quick-approve-btn', { duration: 600 });
  await a.wait(200);
  await a.click('quick-approve-btn');
  await a.set({ approved: true, csat: 96.8 });
  await a.wait(3500);
}

// ── Minimalist Executive Metric Card ──────────────────────────────────────────
function TelemetryCard({
  label,
  value,
  delta,
  hint,
  positive = true,
}: {
  label: string;
  value: string | number;
  delta?: string;
  hint?: string;
  positive?: boolean;
}) {
  return (
    <div className="bg-card rounded-xl border border-border/40 p-4 flex flex-col justify-between hover:border-border/80 transition-all duration-150">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground tracking-tight">{label}</span>
        {delta && (
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              positive
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
            }`}
          >
            {delta}
          </span>
        )}
      </div>
      <div className="mt-2.5">
        <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
        {hint && <p className="text-[11px] text-muted-foreground/75 mt-0.5">{hint}</p>}
      </div>
    </div>
  );
}

// ── Overview Section (Modern Interactive Tri-Panel Desk) ──────────────────────
function OverviewSection({
  onViewTickets,
  onTicketClick,
}: {
  onViewTickets: () => void;
  onTicketClick: (id: string) => void;
}) {
  const [selectedTicketId, setSelectedTicketId] = useState<string>('TKT-1001');
  const [filterCategory, setFilterCategory] = useState<'all' | 'urgent' | 'billing' | 'verified'>('all');
  const [approvedMap, setApprovedMap] = useState<Record<string, boolean>>({});
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [liveToast, setLiveToast] = useState<string | null>(null);

  // Tickets filter
  const displayedTickets = mockTickets.filter((t) => {
    if (filterCategory === 'urgent') return t.priority === 'high';
    if (filterCategory === 'billing') return t.customer.tags.includes('Billing') || t.subject.toLowerCase().includes('invoice');
    if (filterCategory === 'verified') return (t.aiSummary?.percentage || 0) >= 80;
    return true;
  });

  const activeTicket = mockTickets.find((t) => t.id === selectedTicketId) || mockTickets[0];
  const isCurrentApproved = approvedMap[activeTicket.id] || false;

  const handleApproveRefund = (ticketId: string) => {
    setApprovedMap((prev) => ({ ...prev, [ticketId]: true }));
    setLiveToast(`Resolution dispatched for ${ticketId}. Auto-logged to Knowledge Base.`);
    setTimeout(() => setLiveToast(null), 4000);
  };

  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto animate-fade-in">
      {/* Toast Alert */}
      {liveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-foreground text-background px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-medium animate-slide-in">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{liveToast}</span>
        </div>
      )}

      {/* Top Banner: High-Taste Feature Framing */}
      <div className="bg-card border border-border/40 rounded-2xl p-5 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-lg font-bold tracking-tight text-foreground">
              Executive AI Tri-Panel Desk
            </h1>
            <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Realtime Verification Engine
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 max-w-2xl leading-relaxed">
            Immediate context synthesis, policy checks against active payment gateways, and one-click verified resolution dispatch.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowStoryModal(true)}
            className="px-3.5 py-2 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary text-xs font-semibold flex items-center gap-2 transition-colors border border-primary/20"
          >
            <Play size={13} fill="currentColor" />
            Watch Stageshow Story
          </button>
          <button
            onClick={onViewTickets}
            className="px-3.5 py-2 rounded-xl bg-card hover:bg-muted text-foreground border border-border/50 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>All Tickets</span>
            <ArrowUpRight size={14} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Executive Telemetry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <TelemetryCard
          label="Open Queue"
          value={mockDashboardStats.openTickets}
          delta="-4 vs 1hr ago"
          hint="Within 15-minute SLA target"
        />
        <TelemetryCard
          label="Avg First Response"
          value="3.8m"
          delta="▲ 28% faster"
          hint="Industry baseline: 45m"
        />
        <TelemetryCard
          label="AI Verified Match"
          value="84.6%"
          delta="▲ 98% policy integrity"
          hint="0 policy violations detected"
        />
        <TelemetryCard
          label="ARR Protected (30d)"
          value="$148,200"
          delta="+$12.4k"
          hint="Zero churn on billing inquiries"
        />
      </div>

      {/* The Unified Interactive Workspace (Tri-Panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Triage Stream (5 cols) */}
        <div className="lg:col-span-5 bg-card rounded-2xl border border-border/40 shadow-xs overflow-hidden flex flex-col">
          {/* Header & Filter Tabs */}
          <div className="p-4 border-b border-border/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Live Customer Stream ({displayedTickets.length})
              </span>
              <button
                onClick={onViewTickets}
                className="text-[11px] font-semibold text-primary hover:underline"
              >
                Full Table
              </button>
            </div>

            {/* Smart Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {[
                { id: 'all', label: 'All Inbound' },
                { id: 'urgent', label: 'Urgent SLA' },
                { id: 'billing', label: 'Billing' },
                { id: 'verified', label: 'AI Ready (≥80%)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id as any)}
                  className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    filterCategory === tab.id
                      ? 'bg-foreground text-background'
                      : 'bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ticket Rows */}
          <div className="divide-y divide-border/30 max-h-[580px] overflow-y-auto">
            {displayedTickets.map((t) => {
              const isSelected = t.id === selectedTicketId;
              const isApproved = approvedMap[t.id];
              const pStyle = priorityBadges[t.priority] || priorityBadges.low;
              const sStyle = isApproved ? statusBadges.resolved : (statusBadges[t.status] || statusBadges.open);

              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTicketId(t.id)}
                  className={`p-3.5 flex items-start gap-3.5 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-primary/5 dark:bg-primary/10 border-l-4 border-l-primary'
                      : 'hover:bg-muted/30 border-l-4 border-l-transparent'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs text-foreground flex-shrink-0 mt-0.5">
                    {t.customer.avatar}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 truncate">
                        <span className="font-mono text-[11px] font-bold text-foreground">
                          {t.id}
                        </span>
                        <span className="text-xs font-semibold text-foreground truncate">
                          {t.customer.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium truncate">
                          ({t.customer.company})
                        </span>
                      </div>
                      <span className={`text-[10px] font-medium px-2 py-0.2 rounded-full whitespace-nowrap ${sStyle.className}`}>
                        {sStyle.label}
                      </span>
                    </div>

                    <p className="text-xs text-foreground/85 line-clamp-1">
                      {t.subject}
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded-md ${pStyle.className}`}>
                        {pStyle.label}
                      </span>
                      {t.aiSummary && (
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {t.aiSummary.percentage}% confidence
                        </span>
                      )}
                      <span className="text-[10px] text-muted-foreground ml-auto">
                        {t.created}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Resolution Deck (7 cols) */}
        <div className="lg:col-span-7 bg-card rounded-2xl border border-border/40 shadow-xs p-5 space-y-5">
          {/* Deck Header: Customer Dossier */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/40">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-sm">
                {activeTicket.customer.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-foreground">
                    {activeTicket.customer.name}
                  </h2>
                  <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {activeTicket.customer.tier} Tier
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    · {activeTicket.customer.company}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                  <span className="flex items-center gap-1 font-mono">
                    <Mail size={12} /> {activeTicket.customer.email}
                  </span>
                  <span>·</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    $4,200/mo MRR
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onTicketClick(activeTicket.id)}
              className="px-3 py-1.5 rounded-lg border border-border/60 hover:bg-muted text-xs font-semibold text-foreground flex items-center gap-1 transition-colors self-start sm:self-auto"
            >
              <span>Inspect Thread</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Customer Inquiry Summary */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground">
                Inbound Problem Statement:
              </span>
              <span className="text-muted-foreground font-mono text-[11px]">
                Reported {activeTicket.created}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-muted/30 border border-border/30 text-xs text-foreground/90 leading-relaxed">
              "{activeTicket.message}"
            </div>
          </div>

          {/* AI Verified Telemetry & Policy Checks (Zero AI Slop) */}
          <div className="p-4 rounded-xl border border-border/40 bg-muted/15 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span className="text-xs font-bold text-foreground">
                  Automated Policy & System Audit
                </span>
              </div>
              <span className="text-[11px] font-mono font-semibold bg-card px-2 py-0.5 rounded-md border border-border/40 text-foreground">
                {activeTicket.aiSummary?.percentage || 94}% Confidence
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-muted-foreground">
              {activeTicket.aiSummary?.keyFacts?.slice(0, 3).map((fact, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{fact}</span>
                </div>
              )) || (
                <>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Billing gateway logs verified against subscription contract.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Customer SLA status: Healthy (0 prior disputes).</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Synthesized Response Desk */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-foreground flex items-center gap-1.5">
                <span>Proposed Resolution Response</span>
                <span className="text-[10px] font-normal text-muted-foreground">
                  (Ready to dispatch)
                </span>
              </span>
              <span className="text-[11px] text-muted-foreground">
                Channel: Email & Customer Portal
              </span>
            </div>

            <div className="p-3.5 rounded-xl border border-border/50 bg-card shadow-xs text-xs text-foreground leading-relaxed font-sans whitespace-pre-line">
              {activeTicket.aiDraft}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock size={13} />
                <span>Next SLA deadline in 24 mins</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onTicketClick(activeTicket.id)}
                  className="px-3 py-2 rounded-xl border border-border/60 hover:bg-muted text-xs font-semibold text-foreground flex items-center gap-1.5 transition-colors"
                >
                  <Edit3 size={13} />
                  Edit Copy
                </button>

                <button
                  onClick={() => handleApproveRefund(activeTicket.id)}
                  disabled={isCurrentApproved}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${
                    isCurrentApproved
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-foreground text-background hover:opacity-90'
                  }`}
                >
                  {isCurrentApproved ? (
                    <>
                      <CheckCircle2 size={14} />
                      Dispatched & Documented!
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Approve & Dispatch Resolution
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Stageshow Interactive Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border/40 rounded-2xl p-6 max-w-4xl w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Stageshow Choreography: 14-Second Resolution Flow
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Authored cursor mechanics, zero-reflow streaming, and rolling CSAT metrics built with the Stageshow skill.
                </p>
              </div>
              <button
                onClick={() => setShowStoryModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-border/40 bg-background/50 flex justify-center py-3">
              <Stage<ShowcaseState>
                width={860}
                height={520}
                initial={showcaseInitial}
                poster={showcasePoster}
                script={showcaseScript}
                play="loop"
                cursor={{
                  at: 'ticket-item-TKT-1001',
                  ripple: true,
                  style: 'apple',
                }}
              >
                {(s) => (
                  <Window title="LumaResolve — Rapid Triage Desk" className="w-full h-full bg-card text-foreground">
                    <div className="flex h-full w-full text-[13px] bg-background/20">
                      {/* Left list */}
                      <div className="w-64 border-r border-border/40 p-3 space-y-2 bg-card">
                        <div className="text-[10px] font-bold uppercase text-muted-foreground pb-1">
                          Queue
                        </div>
                        <div
                          data-target="ticket-item-TKT-1001"
                          className="p-3 rounded-xl border border-primary bg-primary/5 cursor-pointer shadow-xs"
                        >
                          <div className="flex justify-between items-center text-[11px] font-mono font-bold">
                            <span>TKT-1001</span>
                            <span className="text-[10px] text-red-600 bg-red-50 dark:bg-red-950 px-1.5 py-0.5 rounded-full">
                              Urgent
                            </span>
                          </div>
                          <p className="text-xs font-semibold mt-1">Invoice Discrepancy #INV-001</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">Sarah Chen · Stripe $450</p>
                        </div>
                        <div className="p-3 rounded-xl border border-border/40 bg-muted/20 opacity-50">
                          <Bar w="60%" h={10} r={4} tone={2} />
                          <Bar w="85%" h={8} r={3} tone={3} className="mt-2" />
                        </div>
                      </div>

                      {/* Right Detail */}
                      <div className="flex-1 p-4 space-y-4 bg-muted/10 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="bg-card p-3 rounded-xl border border-border/40 shadow-xs flex justify-between items-center">
                            <div>
                              <p className="text-xs font-bold">Sarah Chen (Enterprise)</p>
                              <p className="text-[11px] text-muted-foreground">Duplicate $450 charge</p>
                            </div>
                            <span className="text-xs font-semibold text-emerald-600">Verified Stripe Match</span>
                          </div>

                          <div className="bg-card p-4 rounded-xl border border-border/50 shadow-md space-y-2">
                            <div className="text-xs font-bold text-foreground">AI Resolution Draft:</div>
                            <div className="text-xs leading-relaxed min-h-[60px]">
                              <Stream text={SHOWCASE_DRAFT} count={s.streamIndex} />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border/30">
                          <div className="text-xs font-semibold text-foreground">
                            CSAT Telemetry: <Count value={s.csat} decimals={1} />%
                          </div>
                          <button
                            data-target="quick-approve-btn"
                            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                              s.approved
                                ? 'bg-emerald-600 text-white'
                                : 'bg-primary text-primary-foreground'
                            }`}
                          >
                            {s.approved ? '✓ Sent to Stripe & Customer' : 'Approve & Send Refund'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Window>
                )}
              </Stage>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-4 py-2 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── All Tickets Section ───────────────────────────────────────────────────────
function AllTicketsSection({
  onTicketClick,
}: {
  onTicketClick: (id: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = mockTickets.filter((t) => {
    const q = searchQuery.toLowerCase();
    const matchQ =
      !q ||
      t.id.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q) ||
      t.customer.name.toLowerCase().includes(q);
    const matchS = statusFilter === 'all' || t.status === statusFilter;
    const matchP = priorityFilter === 'all' || t.priority === priorityFilter;
    return matchQ && matchS && matchP;
  });

  const toggleAll = (checked: boolean) =>
    setSelected(checked ? filtered.map((t) => t.id) : []);
  const toggleOne = (id: string, checked: boolean) =>
    setSelected((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)));

  return (
    <div className="p-6 space-y-4 max-w-[1600px] mx-auto animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-foreground">Ticket Index</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {filtered.length} active customer threads
          </p>
        </div>
        <button className="px-3.5 py-1.5 rounded-xl border border-border/50 bg-card hover:bg-muted text-xs font-semibold text-foreground flex items-center gap-1.5 transition-colors shadow-xs">
          <Download size={13} />
          Export CSV
        </button>
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-3 bg-card rounded-xl border border-border/40 p-3 shadow-xs">
        <div className="relative flex-1 min-w-[240px] max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            className="w-full pl-9 pr-3 py-1.5 bg-muted/40 border border-border/50 rounded-lg text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-all"
            placeholder="Search by ticket ID, customer, keyword…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-8 w-[120px] text-xs border-border/60 bg-muted/30">
              <SelectValue placeholder="All status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="h-8 w-[120px] text-xs border-border/60 bg-muted/30">
              <SelectValue placeholder="All priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All priority</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="h-8 w-[120px] text-xs border-border/60 bg-muted/30">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="priority">By Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bulk Action Bar */}
      {selected.length > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckSquare size={14} className="text-primary" />
            <span className="font-semibold text-primary">{selected.length} tickets selected</span>
          </div>
          <div className="flex items-center gap-2">
            {['Assign to Tier 2', 'Mark Resolved', 'Export'].map((a) => (
              <button key={a} className="px-3 py-1 rounded-lg border border-border/60 bg-card hover:bg-muted text-xs font-medium text-foreground">
                {a}
              </button>
            ))}
            <button onClick={() => setSelected([])} className="text-muted-foreground hover:text-foreground text-xs font-semibold px-2">
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-card rounded-2xl border border-border/40 shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-muted/30 border-b border-border/40 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            <tr>
              <th className="w-10 px-4 py-3">
                <Checkbox
                  checked={selected.length === filtered.length && filtered.length > 0}
                  onCheckedChange={toggleAll}
                />
              </th>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">AI Verification</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {filtered.map((ticket) => {
              const pStyle = priorityBadges[ticket.priority] || priorityBadges.low;
              const sStyle = statusBadges[ticket.status] || statusBadges.open;

              return (
                <tr
                  key={ticket.id}
                  className="cursor-pointer hover:bg-muted/30 transition-colors group"
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selected.includes(ticket.id)}
                      onCheckedChange={(c) => toggleOne(ticket.id, c as boolean)}
                    />
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-foreground" onClick={() => onTicketClick(ticket.id)}>
                    {ticket.id}
                  </td>
                  <td className="px-4 py-3" onClick={() => onTicketClick(ticket.id)}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center font-bold text-[10px]">
                        {ticket.customer.avatar}
                      </div>
                      <span className="font-medium text-foreground">{ticket.customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 max-w-[320px]" onClick={() => onTicketClick(ticket.id)}>
                    <div className="flex items-center gap-1.5">
                      <span className="truncate text-foreground/90 font-normal">{ticket.subject}</span>
                      {ticket.multipleIssues && ticket.multipleIssues.length > 0 && (
                        <span className="text-[10px] bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400 px-1.5 py-0.2 rounded-full border border-amber-200">
                          +{ticket.multipleIssues.length}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3" onClick={() => onTicketClick(ticket.id)}>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${pStyle.className}`}>
                      {pStyle.label}
                    </span>
                  </td>
                  <td className="px-4 py-3" onClick={() => onTicketClick(ticket.id)}>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${sStyle.className}`}>
                      {sStyle.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono" onClick={() => onTicketClick(ticket.id)}>
                    {ticket.aiSummary ? (
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        {ticket.aiSummary.percentage}%
                      </span>
                    ) : (
                      <span className="text-muted-foreground">–</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground font-mono text-[11px]" onClick={() => onTicketClick(ticket.id)}>
                    {ticket.created}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => onTicketClick(ticket.id)}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-primary hover:bg-primary/10 transition-colors inline-flex items-center gap-1"
                    >
                      Resolve <ChevronRight size={13} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Main Shell Component ───────────────────────────────────────────────────────
export function MainDashboardWithSidePanel({
  onTicketClick,
  onLogout,
  isDarkMode,
  onToggleDarkMode,
  isSidePanelCollapsed: externalCollapsed,
  onToggleSidePanel: externalToggle,
  onNavigate,
}: Props) {
  const [activeSection, setActiveSection] = useState<'overview' | 'all-tickets' | 'ongoing-conversations'>('overview');
  const [internalCollapsed, setInternalCollapsed] = useState(false);

  const isSidePanelCollapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const handleToggleCollapse = externalToggle || (() => setInternalCollapsed((v) => !v));

  const pageTitles = {
    overview: 'Workspace Overview',
    'all-tickets': 'Customer Tickets',
    'ongoing-conversations': 'Live Conversations',
  };

  return (
    <div className="h-screen bg-background text-foreground flex overflow-hidden font-sans">
      {/* Minimalist Sidebar */}
      <DashboardSidePanel
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={isSidePanelCollapsed}
        onToggleCollapse={handleToggleCollapse}
        isDarkMode={isDarkMode}
        onNavigate={onNavigate}
      />

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar: Clean, Minimal, Non-Slop */}
        <header className="h-[56px] bg-card border-b border-border/40 flex items-center px-6 gap-4 flex-shrink-0">
          {/* Workspace Path */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-foreground">LumaResolve CRM</span>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-muted-foreground font-medium">{pageTitles[activeSection]}</span>
          </div>

          <div className="flex-1" />

          {/* Quick Info & Actions */}
          <div className="flex items-center gap-2.5">
            {onNavigate && (
              <button
                onClick={() => onNavigate('stageshow-walkthrough')}
                className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/15 text-primary text-xs font-semibold flex items-center gap-1.5 transition-colors border border-primary/20"
              >
                <Sparkles size={13} />
                <span>Showcase Mode</span>
              </button>
            )}

            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border/50"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <button className="relative w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border/50">
              <Bell size={15} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Dynamic Section Content */}
        <main className="flex-1 overflow-y-auto bg-background/50">
          {activeSection === 'overview' && (
            <OverviewSection
              onViewTickets={() => setActiveSection('all-tickets')}
              onTicketClick={onTicketClick}
            />
          )}

          {activeSection === 'all-tickets' && (
            <AllTicketsSection onTicketClick={onTicketClick} />
          )}

          {activeSection === 'ongoing-conversations' && (
            <div className="p-6 max-w-[1600px] mx-auto space-y-4">
              <div>
                <h1 className="text-lg font-bold tracking-tight text-foreground">Live Conversations</h1>
                <p className="text-xs text-muted-foreground mt-0.5">Direct messaging threads with priority clients</p>
              </div>
              <OngoingConversationsCard
                onConversationClick={onTicketClick}
                onViewAllClick={() => setActiveSection('all-tickets')}
                isFullView={true}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
