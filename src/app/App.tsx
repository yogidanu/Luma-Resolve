import React, { useState, useEffect } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { MainDashboardWithSidePanel } from './components/MainDashboardWithSidePanel';
import { TicketDetailScreen } from './components/TicketDetailScreen';
import { ApproveResponseModal } from './components/ApproveResponseModal';
import { EditResponseScreen } from './components/EditResponseScreen';
import { AIReasoningModal } from './components/AIReasoningModal';
import { AutoDocumentationPanel } from './components/AutoDocumentationPanel';
import { EnhancedAgentPerformanceScreen } from './components/EnhancedAgentPerformanceScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { WelcomeTour } from './components/WelcomeTour';
import { KnowledgeBaseScreen } from './components/KnowledgeBaseScreen';
import { TeamCollaborationScreen } from './components/TeamCollaborationScreen';
import { LumaResolveStageshowWalkthrough } from './components/LumaResolveStageshowWalkthrough';
import { CommandPalette } from './components/CommandPalette';
import { KeyboardShortcuts, useKeyboardShortcuts } from './components/KeyboardShortcuts';
import { mockTickets } from './data/mockData';

type CurrentView =
  | { type: 'login' }
  | { type: 'dashboard' }
  | { type: 'ticket-detail'; ticketId: string }
  | { type: 'edit-response'; ticketId: string }
  | { type: 'analytics' }
  | { type: 'settings' }
  | { type: 'knowledge-base' }
  | { type: 'team' }
  | { type: 'stageshow-walkthrough' };

export default function App() {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showAutoDocPanel, setShowAutoDocPanel] = useState(false);
  const [showReasoningModal, setShowReasoningModal] = useState(false);
  const [showDocumentationCreated, setShowDocumentationCreated] = useState(false);
  const [createdDocumentation, setCreatedDocumentation] = useState<any>(null);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [currentView, setCurrentView] = useState<CurrentView>({ type: 'dashboard' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeTour, setShowWelcomeTour] = useState(false);
  const [currentTicketId, setCurrentTicketId] = useState('TKT-1001');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidePanelCollapsed, setIsSidePanelCollapsed] = useState(false);
  
  // Ref to store the send response callback from TicketDetailScreen
  const sendResponseCallbackRef = React.useRef<(() => void) | null>(null);

  // Apply dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Keyboard shortcuts handler
  useKeyboardShortcuts({
    'cmd+k': () => setShowCommandPalette(true),
    'cmd+/': () => setShowKeyboardShortcuts(true),
    'cmd+shift+d': () => setIsDarkMode(!isDarkMode),
    'cmd+,': () => setCurrentView({ type: 'settings' }),
    'cmd+enter': () => {
      if (currentView.type === 'ticket-detail' && !showApproveModal) {
        setShowApproveModal(true);
      }
    },
    'cmd+e': () => {
      if (currentView.type === 'ticket-detail') {
        setCurrentView({ type: 'edit-response', ticketId: currentTicketId });
      }
    },
    'cmd+i': () => {
      if (currentView.type === 'ticket-detail') {
        setShowReasoningModal(true);
      }
    },
    'escape': () => {
      if (showCommandPalette) setShowCommandPalette(false);
      if (showKeyboardShortcuts) setShowKeyboardShortcuts(false);
      if (showApproveModal) setShowApproveModal(false);
      if (showReasoningModal) setShowReasoningModal(false);
    },
    'g+d': () => setCurrentView({ type: 'dashboard' }),
    'g+t': () => setCurrentView({ type: 'dashboard' }),
    'g+k': () => setCurrentView({ type: 'knowledge-base' }),
    'g+a': () => setCurrentView({ type: 'analytics' }),
  });

  const handleLogin = (email: string, password: string) => {
    setIsAuthenticated(true);
    setShowWelcomeTour(true);
    setCurrentView({ type: 'dashboard' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView({ type: 'login' });
  };

  const handleStartTour = () => {
    setShowWelcomeTour(false);
  };

  const handleCloseTour = () => {
    setShowWelcomeTour(false);
  };

  const handleTicketClick = (ticketId: string) => {
    setCurrentTicketId(ticketId);
    setCurrentView({ type: 'ticket-detail', ticketId });
  };

  const handleBackToDashboard = () => {
    setCurrentView({ type: 'dashboard' });
  };

  const handleApproveResponse = () => {
    setShowApproveModal(true);
  };

  const handleSendResponse = () => {
    setShowApproveModal(false);
    // Don't show auto-doc panel here - only show when customer confirms resolution
    if (sendResponseCallbackRef.current) {
      sendResponseCallbackRef.current();
    }
  };

  const handleEditResponse = () => {
    setShowApproveModal(false);
    setCurrentView({ type: 'edit-response', ticketId: currentTicketId });
  };

  const handleViewReasoning = () => {
    setShowReasoningModal(true);
  };

  const handleSaveEditedResponse = (response: string) => {
    console.log('Saved response:', response);
    setCurrentView({ type: 'ticket-detail', ticketId: currentTicketId });
  };

  const handleApproveDocumentation = () => {
    setShowAutoDocPanel(false);
    setShowDocumentationCreated(true);
    
    // Store the created documentation
    setCreatedDocumentation({
      ticketId: currentTicketId,
      title: 'Payment Processing Error - Resolved',
      createdAt: new Date().toISOString(),
      content: 'Customer reported 503 error during payment processing. Issue resolved by clearing cache and reconnecting payment gateway.'
    });
  };

  const handleCustomerConfirmedResolution = () => {
    // Customer confirmed resolution - automatically generate documentation (no popup)
    console.log('Customer confirmed resolution - auto-generating documentation...');
    
    // Store the created documentation
    setCreatedDocumentation({
      ticketId: currentTicketId,
      title: 'Payment Processing Error - Resolved',
      createdAt: new Date().toISOString(),
      content: 'Customer reported 503 error during payment processing. Issue resolved by clearing cache and reconnecting payment gateway.'
    });
    
    // Show success notification directly (skip the approval panel)
    setShowDocumentationCreated(true);
    
    console.log('✅ Documentation automatically generated and saved to knowledge base');
  };

  const handleViewDocumentation = () => {
    // Open the auto documentation panel to view the generated documentation
    console.log('Opening documentation panel to view:', createdDocumentation);
    setShowDocumentationCreated(false); // Hide the success banner
    setShowAutoDocPanel(true); // Show the auto-doc panel
  };

  const handleNavigate = (view: string) => {
    switch (view) {
      case 'dashboard':
      case 'tickets':
        setCurrentView({ type: 'dashboard' });
        break;
      case 'knowledge-base':
        setCurrentView({ type: 'knowledge-base' });
        break;
      case 'analytics':
        setCurrentView({ type: 'analytics' });
        break;
      case 'team':
        setCurrentView({ type: 'team' });
        break;
      case 'settings':
        setCurrentView({ type: 'settings' });
        break;
      case 'stageshow-walkthrough':
      case 'stageshow':
        setCurrentView({ type: 'stageshow-walkthrough' });
        break;
    }
  };

  // Get current ticket data
  const currentTicket = mockTickets.find(t => t.id === currentTicketId);

  // Render login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Render based on current view
  let mainContent;
  switch (currentView.type) {
    case 'dashboard':
      mainContent = (
        <MainDashboardWithSidePanel
          onTicketClick={handleTicketClick}
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          isSidePanelCollapsed={isSidePanelCollapsed}
          onToggleSidePanel={() => setIsSidePanelCollapsed(!isSidePanelCollapsed)}
          onNavigate={handleNavigate}
        />
      );
      break;

    case 'ticket-detail':
      mainContent = (
        <TicketDetailScreen
          ticketId={currentView.ticketId}
          onBack={handleBackToDashboard}
          onApprove={handleApproveResponse}
          onEditResponse={() => setCurrentView({ type: 'edit-response', ticketId: currentView.ticketId })}
          onViewReasoning={handleViewReasoning}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onSendResponseCallbackRef={sendResponseCallbackRef}
          onCustomerConfirmedResolution={handleCustomerConfirmedResolution}
          showDocumentationCreated={showDocumentationCreated}
          onViewDocumentation={handleViewDocumentation}
          onDismissDocNotification={() => setShowDocumentationCreated(false)}
        />
      );
      break;

    case 'edit-response':
      mainContent = (
        <EditResponseScreen
          onBack={() => setCurrentView({ type: 'ticket-detail', ticketId: currentView.ticketId })}
          onSave={handleSaveEditedResponse}
          initialDraft={currentTicket?.aiDraft || ''}
          customerName={currentTicket?.customer.name || 'Customer'}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      );
      break;

    case 'analytics':
      mainContent = (
        <EnhancedAgentPerformanceScreen 
          onBack={handleBackToDashboard}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      );
      break;

    case 'knowledge-base':
      mainContent = (
        <KnowledgeBaseScreen 
          onBack={handleBackToDashboard}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      );
      break;

    case 'team':
      mainContent = (
        <TeamCollaborationScreen 
          onBack={handleBackToDashboard}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      );
      break;

    case 'settings':
      mainContent = (
        <SettingsScreen 
          onBack={handleBackToDashboard}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      );
      break;

    case 'stageshow-walkthrough':
      mainContent = (
        <LumaResolveStageshowWalkthrough
          onBack={handleBackToDashboard}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      );
      break;

    default:
      mainContent = (
        <MainDashboardWithSidePanel
          onTicketClick={handleTicketClick}
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          isSidePanelCollapsed={isSidePanelCollapsed}
          onToggleSidePanel={() => setIsSidePanelCollapsed(!isSidePanelCollapsed)}
          onNavigate={handleNavigate}
        />
      );
  }

  return (
    <>
      {mainContent}

      {/* Command Palette */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        onNavigate={handleNavigate}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenKeyboardShortcuts={() => setShowKeyboardShortcuts(true)}
        isDarkMode={isDarkMode}
      />

      {/* Keyboard Shortcuts */}
      <KeyboardShortcuts
        isOpen={showKeyboardShortcuts}
        onClose={() => setShowKeyboardShortcuts(false)}
      />

      {/* Welcome Tour Modal */}
      {showWelcomeTour && (
        <WelcomeTour
          onClose={handleCloseTour}
          onStartTour={handleStartTour}
        />
      )}

      {/* Approve Response Modal */}
      {showApproveModal && currentTicket && (
        <ApproveResponseModal
          isOpen={showApproveModal}
          onClose={() => setShowApproveModal(false)}
          onSend={handleSendResponse}
          onEdit={handleEditResponse}
          draftResponse={currentTicket.aiDraft}
          customerName={currentTicket.customer.name}
        />
      )}

      {/* AI Reasoning Modal */}
      {showReasoningModal && (
        <AIReasoningModal
          isOpen={showReasoningModal}
          onClose={() => setShowReasoningModal(false)}
        />
      )}

      {/* Auto Documentation Panel */}
      {showAutoDocPanel && (
        <AutoDocumentationPanel
          isOpen={showAutoDocPanel}
          onClose={() => setShowAutoDocPanel(false)}
          onApprove={handleApproveDocumentation}
          ticketId={currentTicketId}
        />
      )}
    </>
  );
}