import React from 'react';
import { MessageSquare, Clock, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { getStatusBadgeClass } from '../lib/badge-utils';

interface ConversationPreview {
  ticketId: string;
  customer: {
    name: string;
    avatar: string;
  };
  lastMessage: string;
  timestamp: string;
  status: string;
  unread: boolean;
  messageFrom: 'customer' | 'agent';
}

interface OngoingConversationsCardProps {
  onConversationClick: (ticketId: string) => void;
  onViewAllClick?: () => void;
  isFullView?: boolean;
}

// Mock ongoing conversations data
const mockConversations: ConversationPreview[] = [
  {
    ticketId: 'TKT-1001',
    customer: {
      name: 'Sarah Chen',
      avatar: 'SC'
    },
    lastMessage: "I've just upgraded to the Enterprise plan and paid $299, but I still can't access...",
    timestamp: '2 min ago',
    status: 'open',
    unread: true,
    messageFrom: 'customer'
  },
  {
    ticketId: 'TKT-1002',
    customer: {
      name: 'Marcus Rodriguez',
      avatar: 'MR'
    },
    lastMessage: 'Thanks for the workaround! I tried splitting the export but still getting...',
    timestamp: '15 min ago',
    status: 'open',
    unread: true,
    messageFrom: 'customer'
  },
  {
    ticketId: 'TKT-1003',
    customer: {
      name: 'Emily Watson',
      avatar: 'EW'
    },
    lastMessage: 'You: I\'ve sent you the password reset link. Please check your email...',
    timestamp: '1 hour ago',
    status: 'in-progress',
    unread: false,
    messageFrom: 'agent'
  },
  {
    ticketId: 'TKT-1004',
    customer: {
      name: 'David Kim',
      avatar: 'DK'
    },
    lastMessage: 'The mobile app is crashing when I try to upload images. This started...',
    timestamp: '2 hours ago',
    status: 'open',
    unread: true,
    messageFrom: 'customer'
  }
];

export function OngoingConversationsCard({ onConversationClick, onViewAllClick, isFullView }: OngoingConversationsCardProps) {
  const content = (
    <div className="space-y-0">
      {/* Conversation list */}
      <div className="divide-y divide-border">
        {mockConversations.map((conversation) => (
          <div
            key={conversation.ticketId}
            onClick={() => onConversationClick(conversation.ticketId)}
            className="px-5 py-4 cursor-pointer transition-all hover:bg-muted/50 hover:shadow-sm hover:scale-[1.01] relative z-10 bg-transparent"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="relative">
                <div className="size-10 rounded-full ai-gradient flex items-center justify-center text-white text-[12px] font-bold shadow-sm">
                  {conversation.customer.avatar}
                </div>
                {conversation.unread && (
                  <div className="absolute -top-0.5 -right-0.5 size-3 rounded-full bg-primary border-2 border-card" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[14px] ${conversation.unread ? 'font-bold text-foreground' : 'font-semibold text-foreground/80'}`}>
                      {conversation.customer.name}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      conversation.status === 'open' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-muted text-muted-foreground'
                    }`}>
                      {conversation.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock size={12} />
                    <span>{conversation.timestamp}</span>
                  </div>
                </div>

                {/* Ticket ID */}
                <div className="text-[11px] text-primary font-bold mb-1.5 tracking-tight">
                  {conversation.ticketId}
                </div>

                {/* Last Message */}
                <p className={`text-[13px] leading-relaxed line-clamp-1 ${
                  conversation.unread ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}>
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Footer (only for widget view) */}
      {!isFullView && onViewAllClick && (
        <div className="border-t border-border px-5 py-3.5 bg-muted/30">
          <button
            className="w-full text-[13px] text-primary font-bold hover:text-primary/80 transition-colors text-center"
            onClick={onViewAllClick}
          >
            View All Conversations →
          </button>
        </div>
      )}
    </div>
  );

  if (isFullView) {
    return <div className="animate-fade-in">{content}</div>;
  }

  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-xl ai-gradient flex items-center justify-center ai-glow">
            <MessageSquare size={14} className="text-white" />
          </div>
          <h3 className="text-[15px] font-bold text-foreground tracking-tight">Ongoing Conversations</h3>
        </div>
        <div className="bg-primary/10 text-primary font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
          {mockConversations.filter(c => c.unread).length} unread
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        {content}
      </div>
    </div>
  );
}