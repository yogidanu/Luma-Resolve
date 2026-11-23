import React from 'react';
import {
  LayoutDashboard,
  Ticket,
  MessageSquare,
  BarChart2,
  BookOpen,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export type SidebarSection = 'overview' | 'all-tickets' | 'ongoing-conversations';

interface DashboardSidePanelProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate?: (view: string) => void;
  isDarkMode?: boolean;
  activeView?: string; // 'analytics' | 'knowledge-base' | 'team' | 'settings'
}

interface NavItemDef {
  id: string;
  label: string;
  icon: React.ElementType;
  description?: string;
  badge?: number;
  section?: SidebarSection;
  view?: string;
}

const mainNavItems: NavItemDef[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: LayoutDashboard,
    description: 'Dashboard & metrics',
    section: 'overview',
  },
  {
    id: 'all-tickets',
    label: 'Ticket',
    icon: Ticket,
    description: 'Complete ticket list',
    badge: 12,
    section: 'all-tickets',
  },
  {
    id: 'ongoing-conversations',
    label: 'Conversation',
    icon: MessageSquare,
    description: 'Active discussions',
    badge: 3,
    section: 'ongoing-conversations',
  },
];

const toolsNavItems: NavItemDef[] = [
  { id: 'analytics',      label: 'Analytics',      icon: BarChart2,  description: 'Performance metrics', view: 'analytics'      },
  { id: 'knowledge-base', label: 'Knowledge Base',  icon: BookOpen,   description: 'Support articles',    view: 'knowledge-base' },
  { id: 'team',           label: 'Team',            icon: Users,      description: 'Agent management',    view: 'team'           },
  { id: 'stageshow',      label: 'Stageshow Demo', icon: Sparkles,   description: 'Live faux UI choreography', view: 'stageshow-walkthrough' },
];

export function DashboardSidePanel({
  activeSection,
  onSectionChange,
  isCollapsed,
  onToggleCollapse,
  onNavigate,
  isDarkMode,
  activeView,
}: DashboardSidePanelProps) {

  const handleNavClick = (item: NavItemDef) => {
    if (item.section) {
      onSectionChange(item.section);
    } else if (item.view && onNavigate) {
      onNavigate(item.view);
    } else if (item.id === 'settings' && onNavigate) {
      onNavigate('settings');
    }
  };

  const getIsActive = (item: NavItemDef): boolean => {
    if (item.section) return activeSection === item.section && !activeView;
    if (item.view) return activeView === item.view;
    if (item.id === 'settings') return activeView === 'settings';
    return false;
  };

  const NavItem = ({ item }: { item: NavItemDef }) => {
    const Icon = item.icon;
    const isActive = getIsActive(item);

    const buttonContent = (
      <button
        key={item.id}
        onClick={() => handleNavClick(item)}
        className={`
          w-full flex items-center gap-3 text-left relative
          transition-all duration-150 group rounded-[9px] py-2.5
          ${isCollapsed ? 'justify-center px-2' : 'px-3'}
          ${isActive
            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
            : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
          }
        `}
        title={isCollapsed ? item.label : undefined}
        aria-current={isActive ? 'page' : undefined}
      >
        {/* Active pill accent */}
        {isActive && !isCollapsed && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary" />
        )}

        <Icon
          size={16}
          strokeWidth={isActive ? 2.2 : 1.8}
          className={`flex-shrink-0 ${isActive ? 'text-sidebar-accent-foreground' : ''}`}
        />

        {!isCollapsed && (
          <>
            <span className={`flex-1 text-[13px] leading-none ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
            {item.badge !== undefined && (
              <span className={`
                inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5
                text-[10px] font-bold rounded-full
                ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
              `}>
                {item.badge}
              </span>
            )}
          </>
        )}
      </button>
    );

    if (isCollapsed) {
      return (
        <TooltipProvider delayDuration={200} key={item.id}>
          <Tooltip>
            <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
            <TooltipContent
              side="right"
              className="flex flex-col gap-0.5 bg-gray-900 text-white border-0 shadow-xl"
            >
              <span className="text-[12px] font-medium">{item.label}</span>
              {item.description && (
                <span className="text-[11px] text-gray-400">{item.description}</span>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return buttonContent;
  };

  return (
    <aside
      className={`
        h-screen flex flex-col border-r border-border/40 bg-card transition-all duration-300 ease-in-out flex-shrink-0
        ${isCollapsed ? 'w-[64px]' : 'w-[220px]'}
      `}
    >
      {/* ── Brand ── */}
      <div className={`
        h-[56px] flex items-center border-b border-border/40 flex-shrink-0
        ${isCollapsed ? 'justify-center px-2' : 'px-4 gap-2.5'}
      `}>
        <div className="w-7 h-7 rounded-lg bg-foreground text-background flex items-center justify-center flex-shrink-0 font-bold text-xs tracking-tight shadow-xs">
          LR
        </div>
        {!isCollapsed && (
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-foreground tracking-tight leading-none">
              LumaResolve
            </span>
            <span className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-none">
              Enterprise Desk
            </span>
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <nav className={`flex-1 overflow-y-auto py-4 space-y-0.5 ${isCollapsed ? 'px-2' : 'px-3'}`}>
        {/* Main section label */}
        {!isCollapsed && (
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 pb-2">
            Main
          </p>
        )}
        {mainNavItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}

        {/* Tools section */}
        {!isCollapsed ? (
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 pt-5 pb-2">
            Tools
          </p>
        ) : (
          <div className="h-4 border-t border-border/40 mx-2 my-2" />
        )}
        {toolsNavItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>

      {/* ── Footer ── */}
      <div className={`
        border-t border-border/40 py-3 flex-shrink-0 space-y-0.5
        ${isCollapsed ? 'px-2' : 'px-3'}
      `}>
        <NavItem item={{ id: 'settings', label: 'Settings', icon: Settings, description: 'App preferences' }} />

        {/* Collapse toggle */}
        <button
          onClick={onToggleCollapse}
          className={`
            w-full flex items-center gap-3 py-2.5 rounded-[9px]
            text-muted-foreground hover:bg-secondary hover:text-foreground
            transition-all duration-150
            ${isCollapsed ? 'justify-center px-2' : 'px-3'}
          `}
          style={{ border: '1px solid transparent' }}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight size={15} strokeWidth={2} />
          ) : (
            <>
              <ChevronLeft size={15} strokeWidth={2} />
              <span className="text-[13px] font-medium">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}