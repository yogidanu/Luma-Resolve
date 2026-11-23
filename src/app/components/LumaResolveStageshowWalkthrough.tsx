import React, { useState } from 'react';
import {
  Stage,
  Window,
  Bar,
  Text,
  Stream,
  Collapse,
  Count,
  type Act,
} from '../stageshow';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowLeft,
  RotateCcw,
  ShieldCheck,
  Zap,
  Play,
  Layers,
  Bot,
  ExternalLink,
} from 'lucide-react';
import { ModernScreenWrapper } from './ModernScreenWrapper';

// Stageshow Scene State
interface DemoState {
  selectedTicket: boolean;
  aiThinking: boolean;
  streamWords: number;
  approved: boolean;
  csat: number;
  resolvedCount: number;
}

const DRAFT_TEXT =
  "Hi Sarah, I've verified the duplicate charge for invoice #INV-2024-001 ($450.00). I've already initiated an immediate refund back to your original payment method (arriving in 2-3 business days) and credited $50 loyalty credit to your account for the inconvenience.";

const WORDS = DRAFT_TEXT.split(' ').length;

const initialState: DemoState = {
  selectedTicket: false,
  aiThinking: false,
  streamWords: 0,
  approved: false,
  csat: 94.2,
  resolvedCount: 248,
};

const posterState: DemoState = {
  selectedTicket: true,
  aiThinking: false,
  streamWords: WORDS,
  approved: true,
  csat: 95.8,
  resolvedCount: 249,
};

async function demoScript(a: Act<DemoState>) {
  // 1. Initial resting state
  await a.wait(800);

  // 2. Move cursor to the high-priority invoice ticket and click
  await a.move('ticket-1001', { duration: 750 });
  await a.wait(180);
  await a.click('ticket-1001');
  await a.set({ selectedTicket: true, aiThinking: true });

  // 3. AI Copilot reasoning & synthesis phase
  await a.wait(900);
  await a.set({ aiThinking: false });

  // 4. Stream the suggested AI resolution response word by word
  for (let i = 1; i <= WORDS; i++) {
    a.put({ streamWords: i });
    await a.wait(28);
  }

  // 5. Cursor moves to "Approve & Send" action button
  await a.wait(400);
  await a.move('approve-button', { duration: 650 });
  await a.wait(200);

  // 6. Click Approve & Send
  await a.click('approve-button');
  await a.set({
    approved: true,
    csat: 95.8,
    resolvedCount: 249,
  });

  // 7. Payoff hold
  await a.wait(4000);
}

interface StageshowWalkthroughProps {
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function LumaResolveStageshowWalkthrough({
  onBack,
  isDarkMode,
  onToggleDarkMode,
}: StageshowWalkthroughProps) {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <ModernScreenWrapper
      title="Stageshow Product Walkthrough"
      subtitle="Authored cursor choreography & hyper-realistic faux UI powered by Benji Taylor's Stageshow skill"
      onBack={onBack}
      isDarkMode={isDarkMode}
      onToggleDarkMode={onToggleDarkMode}
    >
      <div className="max-w-6xl mx-auto space-y-6 pb-12">
        {/* Info & Metadata Banner */}
        <div className="bg-card border border-border/40 rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Bot size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-foreground">
                  LumaResolve Core AI Workflow
                </h2>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Live Stageshow Rehearsal
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Authentic window framing, scripted cursor arcs, zero-reflow text streaming, and satellite confidence telemetry.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setReplayKey((k) => k + 1)}
              className="px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <RotateCcw size={13} />
              Replay Choreography
            </button>
            <a
              href="https://github.com/benjitaylor/skills"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <ExternalLink size={13} />
              Skill Source
            </a>
          </div>
        </div>

        {/* The Stageshow Stage */}
        <div className="flex justify-center items-center py-2">
          <div className="w-full max-w-[940px] rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background/50 p-2 backdrop-blur-sm">
            <Stage<DemoState>
              key={replayKey}
              width={900}
              height={560}
              initial={initialState}
              poster={posterState}
              script={demoScript}
              play="loop"
              cursor={{
                at: 'ticket-1001',
                ripple: true,
                style: 'apple',
              }}
              theme={isDarkMode ? 'dark' : 'light'}
            >
              {(s) => (
                <Window
                  title="LumaResolve CRM — AI Tri-Panel Desk"
                  subtitle="workspace/tier-1"
                  className="w-full h-full text-foreground bg-card shadow-lg select-none"
                >
                  <div className="flex h-full w-full bg-background/30 text-foreground overflow-hidden text-[13px]">
                    {/* Left Mini Sidebar */}
                    <div className="w-44 border-r border-border/40 p-3 space-y-3 bg-muted/20 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1">
                          Queue
                        </div>
                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary font-medium text-xs">
                          <span>Unassigned</span>
                          <span className="text-[10px] bg-primary/20 px-1.5 py-0.2 rounded-full">
                            4
                          </span>
                        </div>
                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-muted-foreground hover:bg-muted/40 text-xs">
                          <span>VIP Tier</span>
                          <span className="text-[10px] bg-muted px-1.5 py-0.2 rounded-full">
                            2
                          </span>
                        </div>
                        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-muted-foreground hover:bg-muted/40 text-xs">
                          <span>Resolved</span>
                          <span className="text-[10px] text-muted-foreground font-semibold">
                            {s.resolvedCount}
                          </span>
                        </div>
                      </div>

                      {/* Live CSAT Metric Satellite */}
                      <div className="p-2.5 rounded-xl bg-card border border-border/40 shadow-xs space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                          <span>Realtime CSAT</span>
                          <span className="text-emerald-500 font-semibold flex items-center gap-0.5 text-[10px]">
                            ▲ +1.6%
                          </span>
                        </div>
                        <div className="text-xl font-bold tracking-tight text-foreground flex items-baseline gap-1">
                          <Count value={s.csat} decimals={1} />
                          <span className="text-xs font-normal text-muted-foreground">
                            / 100
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 transition-all duration-700 rounded-full"
                            style={{ width: `${s.csat}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Middle Ticket List */}
                    <div className="w-64 border-r border-border/40 p-3 space-y-2 bg-card overflow-hidden">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-1 pb-1">
                        Incoming Tickets
                      </div>

                      {/* Ticket 1001 (Target) */}
                      <div
                        data-target="ticket-1001"
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          s.selectedTicket
                            ? 'bg-primary/5 border-primary shadow-xs ring-1 ring-primary/20'
                            : 'bg-card border-border/60 hover:border-border'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono font-bold text-foreground">
                            TKT-1001
                          </span>
                          <span
                            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                              s.approved
                                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'
                                : 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400'
                            }`}
                          >
                            {s.approved ? 'Resolved' : 'Urgent'}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-foreground truncate">
                          Billing discrepancy on #INV-2024-001
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                          Sarah Chen · Double charged during upgrade
                        </p>
                      </div>

                      {/* Quiet Background Tickets */}
                      <div className="p-3 rounded-xl border border-border/40 bg-muted/20 opacity-70">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono font-medium text-muted-foreground">
                            TKT-1002
                          </span>
                          <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded-full text-muted-foreground">
                            Normal
                          </span>
                        </div>
                        <Bar w="70%" h={10} r={4} tone={2} className="my-1.5" />
                        <Bar w="50%" h={8} r={3} tone={3} />
                      </div>

                      <div className="p-3 rounded-xl border border-border/40 bg-muted/20 opacity-50">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono font-medium text-muted-foreground">
                            TKT-1003
                          </span>
                          <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded-full text-muted-foreground">
                            Low
                          </span>
                        </div>
                        <Bar w="80%" h={10} r={4} tone={2} className="my-1.5" />
                        <Bar w="40%" h={8} r={3} tone={3} />
                      </div>
                    </div>

                    {/* Main Tri-Panel Canvas */}
                    <div className="flex-1 flex flex-col justify-between p-4 bg-muted/10 overflow-hidden">
                      {s.selectedTicket ? (
                        <div className="flex-1 flex flex-col justify-between space-y-3">
                          {/* Ticket Header */}
                          <div className="bg-card rounded-xl p-3.5 border border-border/40 shadow-xs flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-bold text-foreground">
                                  Duplicate subscription fee refund
                                </h3>
                                <span className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded-md text-muted-foreground">
                                  INV-2024-001
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                Customer: Sarah Chen (Enterprise Plan) · Stripe Gateway
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              {s.approved ? (
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-400 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                                  <CheckCircle2 size={14} />
                                  Refund Dispatched ($450.00)
                                </span>
                              ) : (
                                <span className="flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/60 dark:text-amber-400 px-3 py-1 rounded-lg border border-amber-200 dark:border-amber-800">
                                  <Clock size={13} />
                                  Needs Verification
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Customer Thread Bubble */}
                          <div className="bg-card rounded-xl p-3.5 border border-border/40 shadow-xs text-xs space-y-1.5">
                            <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                              <span className="font-semibold text-foreground">Sarah Chen</span>
                              <span>12 mins ago</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              "We were billed twice on our enterprise card for $450 this morning.
                              Could you please check invoice #INV-2024-001 and reverse the redundant charge?"
                            </p>
                          </div>

                          {/* AI Copilot Suggestion Box (The Hero Moment) */}
                          <div className="bg-card rounded-xl p-4 border border-primary/30 shadow-md space-y-3 relative overflow-hidden">
                            <div className="flex items-center justify-between pb-2 border-b border-border/40">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-primary text-white flex items-center justify-center shadow-xs">
                                  <Sparkles size={13} />
                                </div>
                                <span className="text-xs font-bold text-foreground">
                                  AI Suggested Resolution
                                </span>
                                <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                  98% Match
                                </span>
                              </div>
                              <span className="text-[11px] text-muted-foreground">
                                Auto-verified via Stripe API
                              </span>
                            </div>

                            {/* Streaming Content */}
                            <div className="min-h-[70px] text-xs leading-relaxed text-foreground">
                              {s.aiThinking ? (
                                <div className="flex items-center gap-2 text-muted-foreground py-2 italic text-xs">
                                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                  Synthesizing invoice records and drafting response...
                                </div>
                              ) : (
                                <Stream text={DRAFT_TEXT} count={s.streamWords} />
                              )}
                            </div>

                            {/* Action Bar with Targets */}
                            <div className="flex items-center justify-between pt-2 border-t border-border/30">
                              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                <ShieldCheck size={14} className="text-emerald-500" />
                                <span>No policy exceptions detected</span>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  data-target="approve-button"
                                  className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                                    s.approved
                                      ? 'bg-emerald-600 text-white scale-[0.98]'
                                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                                  }`}
                                >
                                  {s.approved ? (
                                    <>
                                      <CheckCircle2 size={14} />
                                      Approved & Sent!
                                    </>
                                  ) : (
                                    <>
                                      <Zap size={14} />
                                      Approve & Send ($450 Refund)
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground space-y-2">
                          <Bot size={36} className="text-muted-foreground/40" />
                          <p className="text-xs">Select a ticket to begin agent evaluation</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Window>
              )}
            </Stage>
          </div>
        </div>

        {/* Breakdown of Stageshow Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-border/40 bg-card shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs">
              <Layers size={16} />
              <span>Authored Choreography</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Coordinates actions via <code className="text-foreground font-mono">Act&lt;S&gt;</code> script: targets are dynamically measured in stage space so the cursor glides in realistic arcs without hardcoded pixel coordinates.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border/40 bg-card shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-500 font-semibold text-xs">
              <Sparkles size={16} />
              <span>Zero-Reflow Streaming</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Uses Stageshow's <code className="text-foreground font-mono">Stream</code> component: every word is laid out from frame 0, allowing the model draft to materialize smoothly without jarring window reflows.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border/40 bg-card shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-500 font-semibold text-xs">
              <ShieldCheck size={16} />
              <span>Taste & Design Restraint</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Adheres to Benji Taylor's design guidelines: authentic window chrome, purposeful cropping, realistic filler bars on background elements, and purposeful telemetry.
            </p>
          </div>
        </div>
      </div>
    </ModernScreenWrapper>
  );
}
