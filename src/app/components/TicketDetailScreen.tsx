import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Mail, Building, Calendar, Send, Edit3, MoreVertical, Paperclip, MessageCircle, AlertTriangle } from 'lucide-react';
import { mockTickets } from '../data/mockData';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { DarkModeToggle } from './DarkModeToggle';
import { CustomerDetailCard } from './CustomerDetailCard';
import { CustomerTimelineCard } from './CustomerTimelineCard';
import { TagsCard } from './TagsCard';
import { ConversationSection } from './ConversationSection';
import { OriginalRequestCard } from './OriginalRequestCard';
import { AIAnalysisCard } from './AIAnalysisCard';
import { SuggestedStepsCard } from './SuggestedStepsCard';
import { DraftResponseCard } from './DraftResponseCard';
import { MultipleIssuesCard } from './MultipleIssuesCard';
import { InternalNotesCard } from './InternalNotesCard';
import { MessagingPopup } from './MessagingPopup';
import { ClarifyingQuestionsCard } from './ClarifyingQuestionsCard';
import { EscalationDialog } from './EscalationDialog';
import { EscalationSuccessMessage } from './EscalationSuccessMessage';
import { 
  LowConfidenceError, 
  ConflictingDataError, 
  AmbiguousIntentError, 
  BrokenKBError 
} from './EmptyAndErrorStates';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Separator } from './ui/separator';

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

export function TicketDetailScreen({ 
  ticketId, 
  onBack, 
  onApprove, 
  onEditResponse,
  onViewReasoning,
  isDarkMode,
  onToggleDarkMode,
  onSendResponseCallbackRef,
  onCustomerConfirmedResolution,
  showDocumentationCreated,
  onViewDocumentation,
  onDismissDocNotification
}: TicketDetailScreenProps) {
  // Find ticket first before any state initialization
  const ticket = mockTickets.find(t => t.id === ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  const [priority, setPriority] = useState('high');
  const [status, setStatus] = useState('open');
  const [assignedTo, setAssignedTo] = useState('Agent User');
  const [agentNotes, setAgentNotes] = useState('');
  
  // State for managing multiple issues
  const [issuesState, setIssuesState] = useState<any[]>([]);

  // State for managing single-issue resolution steps
  const [stepsCompleted, setStepsCompleted] = useState<boolean[]>([]);
  const [allStepsComplete, setAllStepsComplete] = useState(false);

  // State for messaging popup
  const [showMessagingPopup, setShowMessagingPopup] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(true); // Simulating new messages
  const [awaitingCustomerFeedback, setAwaitingCustomerFeedback] = useState(false);
  const [messagesToPass, setMessagesToPass] = useState<any[]>([]);

  // Edge case states
  const [showLowConfidenceError, setShowLowConfidenceError] = useState(false);
  const [showConflictingDataError, setShowConflictingDataError] = useState(false);
  const [showAmbiguousIntentError, setShowAmbiguousIntentError] = useState(false);
  const [showBrokenKBError, setShowBrokenKBError] = useState(false);

  // Low confidence flow states
  const [showClarifyingQuestions, setShowClarifyingQuestions] = useState(false);
  const [clarifyingQuestions, setClarifyingQuestions] = useState<string[]>([]);
  const [showEscalationDialog, setShowEscalationDialog] = useState(false);
  const [showEscalationSuccess, setShowEscalationSuccess] = useState(false);
  const [escalatedTeam, setEscalatedTeam] = useState('');
  const [isEscalated, setIsEscalated] = useState(false);
  const [internalNotes, setInternalNotes] = useState<Array<{
    author: string;
    timestamp: string;
    content: string;
    type: 'user' | 'system';
  }>>([]);
  const [timelineEvents, setTimelineEvents] = useState<Array<{
    action: string;
    timestamp: string;
  }>>(ticket.timeline || []);

  // Edge case detection logic
  useEffect(() => {
    if (ticket.aiSummary) {
      // Case 1: Low Confidence Detection (< 60%)
      if (ticket.aiSummary.percentage < 60) {
        setShowLowConfidenceError(true);
      }

      // Case 2: Conflicting Data Detection (check for conflicting history flag)
      if (ticket.conflictingData) {
        setShowConflictingDataError(true);
      }

      // Case 3: Ambiguous Intent Detection (multiple issues)
      if (ticket.multipleIssues && ticket.multipleIssues.length > 0 && ticket.ambiguousIntent) {
        setShowAmbiguousIntentError(true);
      }

      // Case 4: KB Connection Error Simulation (randomly for demo)
      // In production, this would be based on actual KB API status
      if (ticket.kbError) {
        setShowBrokenKBError(true);
      }
    }
  }, [ticket]);

  // Edge case handlers
  const handleAskMoreDetails = () => {
    console.log('🔄 Generating clarifying questions...');
    
    // Simulate AI generating questions based on the ticket
    const generatedQuestions = [
      'Can you provide the exact error message or error code you\'re seeing?',
      'When exactly does this error occur? (e.g., during login, data export, page load)',
      'What browser and version are you using?',
      'Can you share a screenshot or screen recording of the issue?',
      'Does this happen every time, or only occasionally?'
    ];
    
    setClarifyingQuestions(generatedQuestions);
    setShowLowConfidenceError(false);
    setShowClarifyingQuestions(true);
    
    // Add internal note
    const newNote = {
      author: 'SYSTEM',
      timestamp: 'Just now',
      content: `AI confidence too low (${ticket.aiSummary?.percentage}%). Clarifying questions generated for customer.`,
      type: 'system' as const
    };
    setInternalNotes(prev => [...prev, newNote]);
    
    // Add timeline event
    const newEvent = {
      action: 'AI generated clarifying questions due to low confidence',
      timestamp: 'Just now'
    };
    setTimelineEvents(prev => [newEvent, ...prev]);
    
    console.log('✅ Clarifying questions generated and ready to send');
  };

  const handleSendClarifyingQuestions = (message: string) => {
    console.log('📧 Sending clarifying questions to customer...');
    console.log('Message:', message);
    
    // Update ticket status
    setStatus('awaiting-customer' as any);
    setShowClarifyingQuestions(false);
    
    // Add internal note
    const newNote = {
      author: 'Agent User',
      timestamp: 'Just now',
      content: 'Clarifying questions sent to customer. Awaiting response to re-analyze ticket.',
      type: 'user' as const
    };
    setInternalNotes(prev => [...prev, newNote]);
    
    // Add timeline event
    const newEvent = {
      action: 'Clarifying questions sent to customer',
      timestamp: 'Just now'
    };
    setTimelineEvents(prev => [newEvent, ...prev]);
    
    // Show customer message in messaging
    setMessagesToPass([{
      id: Date.now().toString(),
      text: message,
      sender: 'agent' as const,
      timestamp: 'Just now',
      avatar: 'AU',
      agentName: 'Agent User'
    }]);
    
    console.log('✅ Clarifying questions sent successfully');
    console.log('⏳ Status changed to "Awaiting Customer"');
    console.log('📝 Internal note and timeline updated');
  };

  const handleEscalate = () => {
    console.log('🚨 Opening escalation dialog...');
    setShowLowConfidenceError(false);
    setShowEscalationDialog(true);
  };

  const handleConfirmEscalation = (data: {
    reason: string;
    team: string;
    note: string;
  }) => {
    console.log('🚨 Escalating ticket...', data);
    
    // Update ticket assignment and priority
    setAssignedTo(data.team);
    setPriority('high');
    setStatus('escalated' as any);
    setEscalatedTeam(data.team);
    setIsEscalated(true);
    
    // Close dialog and show success
    setShowEscalationDialog(false);
    setShowEscalationSuccess(true);
    
    // Add internal note
    const noteContent = `Ticket escalated to ${data.team}\nReason: ${data.reason}${data.note ? `\n\nAdditional notes: ${data.note}` : ''}`;
    const newNote = {
      author: 'SYSTEM',
      timestamp: 'Just now',
      content: noteContent,
      type: 'system' as const
    };
    setInternalNotes(prev => [...prev, newNote]);
    
    // Add timeline event
    const newEvent = {
      action: `Escalated to ${data.team} - ${data.reason}`,
      timestamp: 'Just now'
    };
    setTimelineEvents(prev => [newEvent, ...prev]);
    
    console.log('✅ Ticket escalated successfully');
    console.log(`📧 Notification sent to ${data.team}`);
    console.log('📧 Customer notified about escalation');
    console.log('⏱️ SLA timer started: 30 minutes');
  };

  const handleReviewHistory = () => {
    console.log('Opening customer history review panel...');
    setShowConflictingDataError(false);
    // In production: open detailed history panel with conflict highlights
  };

  const handleSelectIssue = (issue: string) => {
    console.log(`Agent selected primary issue: ${issue}`);
    setShowAmbiguousIntentError(false);
    // In production: update AI focus, regenerate analysis for selected issue
  };

  const handleRetryKB = () => {
    console.log('Retrying KB connection...');
    setShowBrokenKBError(false);
    // In production: attempt to reconnect to KB, show loading state
  };

  const handleContinueWithoutKB = () => {
    console.log('Continuing in manual mode without KB...');
    setShowBrokenKBError(false);
    // In production: disable AI suggestions, enable manual mode
  };

  // Initialize issues state
  useEffect(() => {
    if (ticket.multipleIssues && issuesState.length === 0) {
      setIssuesState(ticket.multipleIssues);
    }
  }, [ticket.multipleIssues, issuesState.length]);

  const handleStartIssue = (issueId: number) => {
    setIssuesState(prev => 
      prev.map(issue => 
        issue.id === issueId 
          ? { ...issue, status: 'in-progress', progress: 10 }
          : issue
      )
    );
    // In a real app, this would call an API to log the action
    console.log(`Agent started working on issue #${issueId}`);
  };

  const handleMarkResolved = (issueId: number) => {
    setIssuesState(prev => 
      prev.map(issue => 
        issue.id === issueId 
          ? { ...issue, status: 'completed', progress: 100 }
          : issue
      )
    );
    // In a real app, this would:
    // 1. Call API to update issue status
    // 2. Send notification to customer
    // 3. Add entry to conversation timeline
    console.log(`Issue #${issueId} marked as resolved by agent`);
  };

  const handleUpdateProgress = (issueId: number, newProgress: number) => {
    setIssuesState(prev => 
      prev.map(issue => 
        issue.id === issueId 
          ? { ...issue, progress: Math.min(newProgress, 90) } // Cap at 90% until fully resolved
          : issue
      )
    );
    console.log(`Issue #${issueId} progress updated to ${newProgress}%`);
  };

  // Handle single-issue ticket steps completion
  const handleStepsCompleted = (completedSteps: boolean[]) => {
    setStepsCompleted(completedSteps);
    const allComplete = completedSteps.every(step => step === true);
    setAllStepsComplete(allComplete);
    
    // In a real app, this would log each step completion to the backend
    console.log('Steps completed:', completedSteps);
    console.log('All steps complete:', allComplete);
  };

  // Handle send response (marks ticket as resolved)
  const handleSendResponse = () => {
    // In a real app, this would:
    // 1. Send the response to the customer via EMAIL
    // 2. Post the response in the chat/messaging interface
    // 3. Mark ticket as "Awaiting Customer Feedback" 
    // 4. Add timeline entry
    // 5. Send email notification to customer
    // 6. Show feedback prompt in messaging
    
    console.log('Sending response to customer...');
    console.log('Steps completed:', stepsCompleted);
    console.log('All steps complete:', allStepsComplete);
    
    // Add the agent's response to the messages
    const agentResponseMessage = {
      id: Date.now().toString(),
      text: ticket.aiDraft,
      sender: 'agent' as const,
      timestamp: 'Just now',
      avatar: 'AU',
      agentName: 'Agent User'
    };
    
    setMessagesToPass([agentResponseMessage]);
    
    // Change status to awaiting feedback
    setStatus('in-progress');
    setAwaitingCustomerFeedback(true);
    
    // Open the messaging popup to show the sent response
    setShowMessagingPopup(true);
    
    console.log('✅ Response sent to customer via:');
    console.log('  • Chat/Messaging interface (visible in popup)');
    console.log('  • Email notification (would be sent in production)');
    console.log('⏳ Ticket now awaiting customer confirmation...');
  };

  // Handle customer feedback
  const handleCustomerFeedback = (resolved: boolean) => {
    if (resolved) {
      console.log('Customer confirmed issue is resolved!');
      setStatus('resolved');
      setAwaitingCustomerFeedback(false);
      
      // In a real app:
      // 1. Update ticket status to "Resolved" in database
      // 2. Add timeline entry "Customer confirmed resolution"
      // 3. Update dashboard stats
      // 4. Send confirmation email to customer
      // 5. Trigger auto-documentation workflow
      
      // Trigger auto-documentation (skip approval modal)
      if (onCustomerConfirmedResolution) {
        onCustomerConfirmedResolution();
      }
    } else {
      console.log('Customer still needs help - reopening ticket');
      setStatus('open');
      setAwaitingCustomerFeedback(false);
      
      // In a real app:
      // 1. Reopen the ticket
      // 2. Add timeline entry "Customer needs more help"
      // 3. Alert the assigned agent
      // 4. Increase priority if needed
    }
  };

  // Set the send response callback ref
  useEffect(() => {
    if (onSendResponseCallbackRef) {
      onSendResponseCallbackRef.current = handleSendResponse;
    }
  }, [onSendResponseCallbackRef]);

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* ── Top Bar ── */}
      <header className="h-[60px] bg-card border-b border-border/40 flex-shrink-0 flex items-center px-6 gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="w-9 h-9 rounded-xl hover:bg-muted text-muted-foreground"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </Button>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg ai-gradient flex items-center justify-center ai-glow">
            <Sparkles size={13} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-bold brand-gradient-text tracking-tight">LumaResolve</span>
        </div>

        <div className="h-5 w-px bg-border mx-1" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[13px]">
          <span className="text-muted-foreground">Tickets</span>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground">{ticket.id}</span>
        </div>

        <div className="flex-1" />

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {onToggleDarkMode && (
            <DarkModeToggle isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
          )}
          <button
            onClick={() => { setShowMessagingPopup(true); setHasNewMessages(false); }}
            className="relative w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors border border-transparent hover:border-gray-200"
          >
            <MessageCircle size={17} strokeWidth={1.8} />
            {hasNewMessages && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-violet-500 rounded-full border-2 border-white" />
            )}
          </button>
          <span className="text-[12px] text-gray-400 bg-violet-50 border border-violet-100 rounded-lg px-3 py-1.5 font-semibold text-violet-600">
            {ticket.id}
          </span>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          TRI-PANEL LAYOUT
          Left (22%): Customer info · Center (54%): Workspace · Right (24%): AI
          ══════════════════════════════════════════════════════════════ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ─── LEFT PANEL — Customer Context ─────────────────────────── */}
        <aside className="w-[22%] min-w-[200px] h-full bg-card border-r border-border overflow-y-auto flex-shrink-0">
          {/* Panel header */}
          <div className="px-4 py-3 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Customer</span>
          </div>
          <div className="p-4 space-y-4">
            <CustomerDetailCard
              name={ticket.customer.name}
              customerId={ticket.customer.id}
              email={ticket.customer.email}
              plan={ticket.customer.tier}
              joinedDate="Dec 2023"
              tags={ticket.customer.tags}
              avatarText={ticket.customer.avatar}
            />
            <CustomerTimelineCard events={ticket.timeline} />
            <TagsCard
              tags={[
                { text: 'Payment', variant: 'blue' },
                { text: 'Billing', variant: 'blue' },
                { text: 'Error 503', variant: 'red' },
                { text: 'High-risk user', variant: 'blue' },
              ]}
            />
          </div>
        </aside>

        {/* ─── CENTER PANEL — Ticket Workspace ───────────────────────── */}
        <main className="flex-1 h-full bg-background overflow-y-auto">
          <div className="max-w-3xl mx-auto p-6 space-y-5">

            {/* ── Ticket header card ── */}
            <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-[17px] font-bold text-foreground leading-snug">{ticket.subject}</h1>
                <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0 transition-colors">
                  <MoreVertical size={16} strokeWidth={1.8} />
                </button>
              </div>

              {/* Status controls row */}
              <div className="flex items-center gap-2 flex-wrap">
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger className="h-8 w-[140px] text-[12px] border-border bg-muted rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">🔴 High priority</SelectItem>
                    <SelectItem value="medium">🟡 Medium priority</SelectItem>
                    <SelectItem value="low">🔵 Low priority</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="h-8 w-[130px] text-[12px] border-border bg-muted rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={assignedTo} onValueChange={setAssignedTo}>
                  <SelectTrigger className="h-8 w-[140px] text-[12px] border-border bg-muted rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Agent User">Agent User</SelectItem>
                    <SelectItem value="Sarah Chen">Sarah Chen</SelectItem>
                    <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>

                <div className="ml-auto flex items-center gap-2">
                  <button
                    onClick={() => { setShowMessagingPopup(true); setHasNewMessages(false); }}
                    className="relative h-8 px-3 rounded-lg border border-border bg-muted text-[12px] font-medium text-muted-foreground hover:bg-muted/80 hover:border-border/80 flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={13} strokeWidth={1.8} />
                    Messages
                    {hasNewMessages && (
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* ── Awaiting Feedback Banner ── */}
            {awaitingCustomerFeedback && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={15} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-blue-900">Awaiting Customer Feedback</p>
                  <p className="text-[12px] text-blue-700 mt-0.5">
                    Your response has been sent via chat and email. Waiting for customer confirmation.
                  </p>
                  <button
                    onClick={() => setShowMessagingPopup(true)}
                    className="mt-2 text-[12px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    View Response →
                  </button>
                </div>
              </div>
            )}

            {/* ── Documentation Success Banner ── */}
            {showDocumentationCreated && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={15} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-emerald-900">Documentation Auto-Generated</p>
                  <p className="text-[12px] text-emerald-700 mt-0.5">
                    AI created comprehensive documentation including root cause, resolution steps, and outcome.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={onViewDocumentation} className="text-[12px] font-semibold text-emerald-700 hover:text-emerald-900">
                      View Documentation →
                    </button>
                    <span className="text-emerald-300">·</span>
                    <button onClick={onDismissDocNotification} className="text-[12px] text-emerald-600 hover:text-emerald-800">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── Escalation Banner ── */}
            {isEscalated && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-red-900">🚨 Ticket Escalated</p>
                  <p className="text-[12px] text-red-700 mt-0.5">
                    Escalated to <strong>{escalatedTeam}</strong> · Expected response within 30 minutes
                  </p>
                </div>
              </div>
            )}

            {/* ── Original Request ── */}
            <OriginalRequestCard
              customerName={ticket.customer.name}
              customerAvatar={ticket.customer.avatar}
              timestamp={ticket.created}
              message={ticket.message}
            />

            {/* ── Multiple Issues ── */}
            {ticket.multipleIssues && ticket.multipleIssues.length > 0 && (
              <MultipleIssuesCard
                issues={issuesState}
                onStartIssue={handleStartIssue}
                onMarkResolved={handleMarkResolved}
                onUpdateProgress={handleUpdateProgress}
              />
            )}

            {/* ── Clarifying Questions ── */}
            {showClarifyingQuestions && (
              <ClarifyingQuestionsCard
                questions={clarifyingQuestions}
                onSendToCustomer={handleSendClarifyingQuestions}
                onDismiss={() => setShowClarifyingQuestions(false)}
              />
            )}

            {/* ── Internal Notes ── */}
            <InternalNotesCard ticketId={ticketId} />

          </div>
        </main>

        {/* ─── RIGHT PANEL — AI Assistant ────────────────────────────── */}
        <aside className="w-[24%] min-w-[220px] h-full bg-card border-l border-border overflow-y-auto flex-shrink-0">
          {/* Panel header */}
          <div className="px-4 py-3 border-b border-border flex items-center gap-2 sticky top-0 bg-card z-10">
            <div className="w-5 h-5 rounded-md ai-gradient flex items-center justify-center ai-glow">
              <Sparkles size={10} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">AI Assistant</span>
          </div>

          <div className="p-4 space-y-4">
            {/* AI Analysis */}
            <AIAnalysisCard
              rootCause={ticket.aiSummary.rootCause}
              keyFacts={ticket.aiSummary.keyFacts}
              similarCases={ticket.aiSummary.similarCases}
              onViewReasoning={onViewReasoning}
            />

            {/* Suggested Steps */}
            <SuggestedStepsCard
              steps={ticket.aiSummary.suggestedSteps}
              onViewReasoning={onViewReasoning}
              onStepsCompleted={handleStepsCompleted}
            />

            {/* Draft Response */}
            <DraftResponseCard
              draftText={ticket.aiDraft}
              onApprove={onApprove}
              onEdit={onEditResponse}
              onEscalate={() => {}}
              stepsCompleted={allStepsComplete}
              hasSteps={ticket.aiSummary.suggestedSteps && ticket.aiSummary.suggestedSteps.length > 0}
            />
          </div>
        </aside>

      </div>

      {/* Messaging Popup */}
      {showMessagingPopup && (
        <MessagingPopup
          ticketId={ticketId}
          customerName={ticket.customer.name}
          customerAvatar={ticket.customer.avatar}
          onClose={() => setShowMessagingPopup(false)}
          onCustomerFeedback={handleCustomerFeedback}
          awaitingFeedback={awaitingCustomerFeedback}
          messages={messagesToPass}
        />
      )}

      {/* Edge Case Error States */}
      {showLowConfidenceError && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="max-w-2xl w-full">
            <LowConfidenceError
              onAskDetails={handleAskMoreDetails}
              onEscalate={handleEscalate}
            />
          </div>
        </div>
      )}
      {showConflictingDataError && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="max-w-2xl w-full">
            <ConflictingDataError
              onReview={handleReviewHistory}
            />
          </div>
        </div>
      )}
      {showAmbiguousIntentError && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="max-w-2xl w-full">
            <AmbiguousIntentError
              onSelectIssue={handleSelectIssue}
            />
          </div>
        </div>
      )}
      {showBrokenKBError && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="max-w-2xl w-full">
            <BrokenKBError
              onRetry={handleRetryKB}
              onContinueWithoutKB={handleContinueWithoutKB}
            />
          </div>
        </div>
      )}

      {/* Escalation Dialog */}
      {showEscalationDialog && (
        <EscalationDialog
          ticketId={ticket.id}
          currentConfidence={ticket.aiSummary?.percentage || 0}
          onConfirm={handleConfirmEscalation}
          onCancel={() => setShowEscalationDialog(false)}
        />
      )}

      {/* Escalation Success Message */}
      {showEscalationSuccess && (
        <EscalationSuccessMessage
          ticketId={ticket.id}
          team={escalatedTeam}
          onClose={() => setShowEscalationSuccess(false)}
        />
      )}
    </div>
  );
}