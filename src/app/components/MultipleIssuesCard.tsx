import React from 'react';
import { Check, Clock, AlertCircle, Play, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Issue {
  id: number;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  progress: number;
  rootCause: string;
  resolution: string;
  estimatedTime: string;
}

interface MultipleIssuesCardProps {
  issues: Issue[];
  onStartIssue?: (issueId: number) => void;
  onMarkResolved?: (issueId: number) => void;
  onUpdateProgress?: (issueId: number, progress: number) => void;
}

export function MultipleIssuesCard({ issues, onStartIssue, onMarkResolved, onUpdateProgress }: MultipleIssuesCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="size-4 text-emerald-500" />;
      case 'in-progress':
        return <Clock className="size-4 text-amber-500" />;
      case 'pending':
        return <AlertCircle className="size-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'in-progress':
        return 'bg-amber-500';
      case 'pending':
        return 'bg-muted';
      default:
        return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Resolved';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <div className="bg-card border border-border rounded-[10px] shadow-sm">
      {/* Header */}
      <div className="bg-amber-500/10 border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[16px] leading-[24px] text-foreground">
            Multiple Issues Identified
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="font-medium text-[12px] text-muted-foreground">
              {issues.filter(i => i.status === 'completed').length} of {issues.length} resolved
            </p>
          </div>
        </div>
      </div>

      {/* Issues List */}
      <div className="px-6 py-6 space-y-6">
        {issues.map((issue, index) => (
          <div key={issue.id} className="space-y-3">
            {/* Issue Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="flex items-center justify-center size-6 rounded-full bg-primary/10 shrink-0 mt-0.5">
                  <span className="font-bold text-[12px] text-primary">
                    {issue.id}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[14px] leading-[20px] text-foreground">
                    {issue.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(issue.status)}
                <span className="font-medium text-[12px] text-muted-foreground whitespace-nowrap">
                  {getStatusText(issue.status)}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-medium text-[11px] text-muted-foreground uppercase tracking-wide">
                  Progress
                </p>
                <p className="font-semibold text-[12px] text-foreground/80">
                  {issue.progress}%
                </p>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${getStatusColor(issue.status)}`}
                  style={{ width: `${issue.progress}%` }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="bg-muted/30 rounded-lg px-4 py-3 space-y-2">
              <div>
                <p className="font-semibold text-[11px] text-muted-foreground uppercase tracking-wide mb-1">
                  Root Cause
                </p>
                <p className="font-normal text-[13px] leading-[18px] text-foreground/90">
                  {issue.rootCause}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[11px] text-muted-foreground uppercase tracking-wide mb-1">
                  Resolution
                </p>
                <p className="font-normal text-[13px] leading-[18px] text-foreground/90">
                  {issue.resolution}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="size-3 text-muted-foreground" />
                <p className="font-medium text-[12px] text-muted-foreground">
                  Est. time: {issue.estimatedTime}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {issue.status === 'pending' && (
                <button
                  onClick={() => onStartIssue?.(issue.id)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Play className="size-4 fill-current" />
                  <span className="font-medium text-[13px]">Start Working</span>
                </button>
              )}
              {issue.status === 'in-progress' && (
                <>
                  <button
                    onClick={() => onMarkResolved?.(issue.id)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-4 py-2 flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <CheckCircle className="size-4" />
                    <span className="font-medium text-[13px]">Mark Resolved</span>
                  </button>
                  <button
                    onClick={() => onUpdateProgress?.(issue.id, issue.progress + 10)}
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-md px-4 py-2 flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Clock className="size-4" />
                    <span className="font-medium text-[13px]">Update Progress</span>
                  </button>
                </>
              )}
              {issue.status === 'completed' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-md px-4 py-2 flex items-center gap-2">
                  <Check className="size-4" />
                  <span className="font-semibold text-[13px]">✓ Completed</span>
                </div>
              )}
            </div>

            {/* Divider (except for last item) */}
            {index < issues.length - 1 && (
              <div className="border-t border-border pt-0" />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-muted/20 border-t border-border px-6 py-3">
        <p className="font-medium text-[12px] text-muted-foreground text-center">
          Updates will be sent as each issue is resolved
        </p>
      </div>
    </div>
  );
}