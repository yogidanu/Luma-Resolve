import React from 'react';
import { TrendingUp, TrendingDown, Users, Timer, Zap } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  change: number;
  icon: 'users' | 'timer' | 'zap';
}

interface QuickStatsCardProps {
  stats?: StatItem[];
}

export function QuickStatsCard({ 
  stats = [
    {
      label: 'Active Customers',
      value: '142',
      change: 8,
      icon: 'users'
    },
    {
      label: 'Avg. Response Time',
      value: '2.3m',
      change: -15,
      icon: 'timer'
    },
    {
      label: 'AI Automations',
      value: '89',
      change: 23,
      icon: 'zap'
    }
  ]
}: QuickStatsCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'users':
        return <Users size={16} className="text-primary" />;
      case 'timer':
        return <Timer size={16} className="text-primary" />;
      case 'zap':
        return <Zap size={16} className="text-primary" />;
      default:
        return <Users size={16} className="text-primary" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-[10px] shadow-sm p-5">
      {/* Header */}
      <h3 className="font-semibold text-[15px] text-foreground tracking-[-0.4px] mb-4">Quick Stats</h3>

      {/* Stats Grid */}
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {getIcon(stat.icon)}
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">{stat.label}</p>
                <p className="font-bold text-[16px] text-foreground">{stat.value}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {stat.change > 0 ? (
                <TrendingUp size={12} className="text-emerald-500" />
              ) : (
                <TrendingDown size={12} className="text-emerald-500" />
              )}
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                {Math.abs(stat.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground">Overall Performance</span>
          <div className="flex items-center gap-1">
            <div className="size-2 rounded-full bg-emerald-500"></div>
            <span className="font-semibold text-foreground">Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}