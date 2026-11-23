/**
 * ModernScreenWrapper.tsx
 * Shared layout wrapper for Analytics, Knowledge Base, and Team screens.
 * Provides the consistent top-bar with breadcrumb + back button.
 */
import React from 'react';
import { ArrowLeft, Sparkles, Moon, Sun, Bell } from 'lucide-react';

interface ModernScreenWrapperProps {
  title: string;
  subtitle?: string;
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  children: React.ReactNode;
}

export function ModernScreenWrapper({
  title,
  subtitle,
  onBack,
  isDarkMode,
  onToggleDarkMode,
  children,
}: ModernScreenWrapperProps) {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* ── Top Bar ── */}
      <header className="h-[60px] bg-card border-b border-border/40 flex items-center px-6 gap-4 flex-shrink-0">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl hover:bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border/40"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg ai-gradient flex items-center justify-center ai-glow">
            <Sparkles size={13} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-bold brand-gradient-text tracking-tight">LumaResolve</span>
        </div>

        <div className="h-5 w-px bg-border/50 mx-1" />

        <div className="flex items-center gap-1.5 text-[13px]">
          <span className="text-muted-foreground">Dashboard</span>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground">{title}</span>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              className="w-9 h-9 rounded-lg hover:bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              title={isDarkMode ? 'Light mode' : 'Dark mode'}
            >
              {isDarkMode ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
            </button>
          )}
          <button className="relative w-9 h-9 rounded-lg hover:bg-muted/50 flex items-center justify-center text-muted-foreground">
            <Bell size={16} strokeWidth={1.8} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border border-background" />
          </button>
          <div className="flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/40 cursor-pointer transition-all">
            <div className="w-7 h-7 rounded-full ai-gradient flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">AU</span>
            </div>
            <div className="text-left">
              <p className="text-[12px] font-semibold text-foreground leading-tight">Agent User</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Support Agent</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Page Content ── */}
      <div className="flex-1 overflow-y-auto">
        {/* Page header strip */}
        <div className="bg-card border-b border-border/40 px-8 py-5">
          <h1 className="text-[20px] font-bold text-foreground">{title}</h1>
          {subtitle && <p className="text-[13px] text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>

        {/* Main content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
