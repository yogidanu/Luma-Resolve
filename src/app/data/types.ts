/* Luma Resolve — Typed data model (Blueprint Section 2)
   Target location in repo: src/app/data/types.ts
   Replaces: untyped mockData literals + every per-file badge redefinition.
   Rule: status / priority / confidence display mapping lives HERE and nowhere else.
*/

/* ——— Enums ——— */
export type TicketStatus =
  | "new" | "triaged" | "in-progress" | "waiting-on-customer"
  | "escalated" | "resolved" | "closed";

export type TicketPriority = "urgent" | "high" | "normal" | "low";
export type ConfidenceLevel = "high" | "medium" | "low";
export type Channel = "email" | "chat" | "phone" | "portal";
export type Role = "agent" | "lead" | "admin";
export type ResolutionType = "fixed" | "answered" | "workaround" | "duplicate" | "no-response";
export type DraftState = "proposed" | "edited" | "approved" | "sent";

/* ——— Display mapping: the ONE place labels + semantic tones are defined.
       Tone keys map to tokens in tokens.css (ok / warn / danger / info / neutral). ——— */
type Tone = "ok" | "warn" | "danger" | "info" | "neutral";

export const STATUS_DISPLAY: Record<TicketStatus, { label: string; tone: Tone }> = {
  "new":                 { label: "New",                 tone: "info" },
  "triaged":             { label: "Triaged",             tone: "neutral" },
  "in-progress":         { label: "In progress",         tone: "info" },
  "waiting-on-customer": { label: "Waiting on customer", tone: "warn" },
  "escalated":           { label: "Escalated",           tone: "danger" },
  "resolved":            { label: "Resolved",            tone: "ok" },
  "closed":              { label: "Closed",              tone: "neutral" },
};

export const PRIORITY_DISPLAY: Record<TicketPriority, { label: string; tone: Tone }> = {
  urgent: { label: "Urgent", tone: "danger" },
  high:   { label: "High",   tone: "warn" },
  normal: { label: "Normal", tone: "neutral" },
  low:    { label: "Low",    tone: "neutral" },
};

export const CONFIDENCE_DISPLAY: Record<ConfidenceLevel, { label: string; tone: Tone }> = {
  high:   { label: "High confidence",   tone: "ok" },
  medium: { label: "Medium confidence", tone: "warn" },
  low:    { label: "Low confidence",    tone: "danger" },
};

/** SLA display is derived, never stored: ok → at-risk (<25% budget left) → breached. */
export type SlaState = "ok" | "at-risk" | "breached";
export function slaState(slaDueAt: string, now: Date, createdAt: string): SlaState {
  const due = new Date(slaDueAt).getTime();
  const total = due - new Date(createdAt).getTime();
  const left = due - now.getTime();
  if (left < 0) return "breached";
  return left / total < 0.25 ? "at-risk" : "ok";
}

/* ——— Objects (Blueprint 2.1) ——— */
export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  tier: "enterprise" | "pro" | "standard";
  customerSince: string; // ISO date
}

export interface Message {
  id: string;
  kind: "customer" | "agent-reply" | "internal-note"; // internal-note is NEVER sendable — enforced by type
  author: string;
  body: string;
  createdAt: string; // ISO datetime
  attachments?: { name: string; sizeKb: number }[];
}

export interface AiAnalysis {
  version: number; // re-running analysis increments; never silently overwrites
  summary: string;
  rootCauseHypothesis: string;
  sources: { label: string; ref: string }[]; // KB articles, similar tickets, system checks
  confidence: ConfidenceLevel;
  confidenceReason: string; // plain language, always shown with the level
  confidenceScore: number; // 0–100, for sorting/filtering only — UI shows the level + reason
  suggestedSteps: string[];
  conflictingSources?: { a: { label: string; claim: string }; b: { label: string; claim: string } };
}

export interface DraftResponse {
  id: string;
  body: string;
  state: DraftState;
  basedOnAnalysisVersion: number;
  editedFromAi: boolean; // audit / AI-quality metric (edit rate)
}

export interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: TicketPriority;
  channel: Channel;
  customer: Customer;
  assigneeId: string | null;
  slaDueAt: string; // ISO datetime
  createdAt: string;
  updatedAt: string;
  messages: Message[];
  analysis: AiAnalysis | null; // null = not yet run / failed — ticket stays workable manually
  draft: DraftResponse | null;
  resolutionType: ResolutionType | null; // required before status → resolved
  reopenedFromTicketId?: string;
}

export interface KbArticle {
  id: string;
  title: string;
  body: string;
  state: "draft" | "published" | "stale";
  sourceTicketId: string | null;
  updatedAt: string;
}

export interface AgentUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "available" | "busy" | "offline";
}

export interface AuditEvent {
  id: string;
  actor: { type: "human" | "ai"; id: string };
  action: "analysis-run" | "draft-proposed" | "draft-edited" | "reply-sent"
        | "status-changed" | "escalated" | "kb-draft-created" | "kb-published";
  ticketId: string;
  detail?: string;
  createdAt: string;
}
