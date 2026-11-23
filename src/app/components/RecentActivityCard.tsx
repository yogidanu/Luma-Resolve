import React from 'react';
import { Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'resolved' | 'updated' | 'new' | 'message';
  title: string;
  time: string;
  customer?: string;
}

interface RecentActivityCardProps {
  activities?: ActivityItem[];
}

export function RecentActivityCard({ 
  activities = [
    {
      id: '1',
      type: 'resolved',
      title: 'Payment issue resolved',
      time: '2 min ago',
      customer: 'Sarah Chen'
    },
    {
      id: '2',
      type: 'new',
      title: 'New ticket assigned',
      time: '5 min ago',
      customer: 'Mike Johnson'
    },
    {
      id: '3',
      type: 'message',
      title: 'Customer replied',
      time: '12 min ago',
      customer: 'Emma Davis'
    },
    {
      id: '4',
      type: 'updated',
      title: 'Ticket priority updated',
      time: '18 min ago',
      customer: 'John Smith'
    },
    {
      id: '5',
      type: 'resolved',
      title: 'Bug fix confirmed',
      time: '25 min ago',
      customer: 'Lisa Wong'
    }
  ]
}: RecentActivityCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'resolved':
        return <CheckCircle size={14} className="text-emerald-500" />;
      case 'new':
        return <AlertCircle size={14} className="text-primary" />;
      case 'message':
        return <MessageSquare size={14} className="text-amber-500" />;
      case 'updated':
        return <Clock size={14} className="text-muted-foreground" />;
      default:
        return <Clock size={14} className="text-muted-foreground" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-[10px] shadow-sm p-5">
      {/* Header */}
      <h3 className="font-semibold text-[15px] text-foreground tracking-[-0.4px] mb-4">Recent Activity</h3>

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <div className="mt-0.5">
              {getIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-foreground font-medium group-hover:text-primary transition-colors">
                {activity.title}
              </p>
              {activity.customer && (
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {activity.customer}
                </p>
              )}
            </div>
            <span className="text-[10px] text-muted-foreground flex-shrink-0">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}