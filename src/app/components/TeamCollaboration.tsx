import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import { Users, MessageSquare, AtSign, Clock, CheckCircle2, AlertCircle, UserPlus, Send } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: 'online' | 'away' | 'offline';
  activeTickets: number;
}

interface Mention {
  id: string;
  ticketId: string;
  from: string;
  message: string;
  time: string;
  read: boolean;
}

interface Handoff {
  id: string;
  ticketId: string;
  from: string;
  to: string;
  reason: string;
  time: string;
  status: 'pending' | 'accepted' | 'declined';
}

interface TeamCollaborationProps {
  onBack: () => void;
}

const mockTeamMembers: TeamMember[] = [
  { id: '1', name: 'Sarah Johnson', avatar: 'SJ', role: 'Senior Agent', status: 'online', activeTickets: 8 },
  { id: '2', name: 'Mike Chen', avatar: 'MC', role: 'Agent', status: 'online', activeTickets: 12 },
  { id: '3', name: 'Emma Davis', avatar: 'ED', role: 'Team Lead', status: 'away', activeTickets: 5 },
  { id: '4', name: 'James Wilson', avatar: 'JW', role: 'Agent', status: 'online', activeTickets: 9 },
  { id: '5', name: 'Lisa Anderson', avatar: 'LA', role: 'Specialist', status: 'offline', activeTickets: 0 }
];

const mockMentions: Mention[] = [
  {
    id: '1',
    ticketId: 'TKT-1001',
    from: 'Sarah Johnson',
    message: '@You Can you help with this Enterprise escalation? Customer needs immediate attention.',
    time: '5 min ago',
    read: false
  },
  {
    id: '2',
    ticketId: 'TKT-0998',
    from: 'Mike Chen',
    message: '@You I handled a similar case yesterday. The solution in KB-002 worked perfectly.',
    time: '2 hours ago',
    read: false
  },
  {
    id: '3',
    ticketId: 'TKT-0995',
    from: 'Emma Davis',
    message: '@You Great job on resolving this so quickly! Customer was very satisfied.',
    time: '1 day ago',
    read: true
  }
];

const mockHandoffs: Handoff[] = [
  {
    id: '1',
    ticketId: 'TKT-1004',
    from: 'Mike Chen',
    to: 'You',
    reason: 'Requires billing expertise - customer asking about complex invoice adjustments',
    time: '10 min ago',
    status: 'pending'
  },
  {
    id: '2',
    ticketId: 'TKT-1005',
    from: 'You',
    to: 'Lisa Anderson',
    reason: 'API integration issue - needs specialist review',
    time: '1 hour ago',
    status: 'accepted'
  }
];

export function TeamCollaboration({ onBack }: TeamCollaborationProps) {
  const [selectedTab, setSelectedTab] = useState<'team' | 'mentions' | 'handoffs'>('team');
  const [chatMessage, setChatMessage] = useState('');

  const unreadMentions = mockMentions.filter(m => !m.read).length;
  const pendingHandoffs = mockHandoffs.filter(h => h.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </button>
            <div className="flex items-center gap-2">
              <Users size={24} className="text-primary" />
              <h1 className="text-[24px] font-semibold text-foreground">Team Collaboration</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-muted/30 rounded-[10px] w-fit">
          <button
            onClick={() => setSelectedTab('team')}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-all flex items-center ${
              selectedTab === 'team'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Users size={16} className="mr-2" />
            Team Members
          </button>
          <button
            onClick={() => setSelectedTab('mentions')}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-all relative flex items-center ${
              selectedTab === 'mentions'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <AtSign size={16} className="mr-2" />
            Mentions
            {unreadMentions > 0 && (
              <span className="ml-2 w-5 h-5 bg-destructive text-destructive-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                {unreadMentions}
              </span>
            )}
          </button>
          <button
            onClick={() => setSelectedTab('handoffs')}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-all relative flex items-center ${
              selectedTab === 'handoffs'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <MessageSquare size={16} className="mr-2" />
            Handoffs
            {pendingHandoffs > 0 && (
              <span className="ml-2 w-5 h-5 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {pendingHandoffs}
              </span>
            )}
          </button>
        </div>

        {/* Team Members Tab */}
        {selectedTab === 'team' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[18px] font-semibold text-foreground">Active Team Members (4)</h3>
                <Button size="sm">
                  <UserPlus size={14} className="mr-1.5" />
                  Invite Member
                </Button>
              </div>
              
              <div className="space-y-3">
                {mockTeamMembers.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-[12px] hover:bg-muted/50 transition-all border border-transparent hover:border-border group">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[16px]">
                          {member.avatar}
                        </div>
                        <div className={`absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card ${
                          member.status === 'online' ? 'bg-emerald-500' :
                          member.status === 'away' ? 'bg-amber-500' :
                          'bg-muted-foreground/50'
                        }`} />
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-foreground">{member.name}</div>
                        <div className="text-[12px] text-muted-foreground">{member.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-[12px] text-muted-foreground mr-2 font-medium">
                        {member.activeTickets} active tickets
                      </div>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Message
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Assign
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team Chat */}
            <Card className="p-6 bg-card border-border flex flex-col h-[600px]">
              <h3 className="text-[18px] font-semibold text-foreground mb-6">Team Chat</h3>
              <div className="flex-1 space-y-4 mb-4 overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[12px] font-bold shrink-0">
                    SJ
                  </div>
                  <div className="bg-muted/40 p-3 rounded-[12px] rounded-tl-none">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px] font-semibold text-foreground">Sarah Johnson</span>
                      <span className="text-[10px] text-muted-foreground uppercase">10:23 AM</span>
                    </div>
                    <div className="text-[13px] text-foreground/80 leading-relaxed">
                      Just wrapped up TKT-1001. Customer was very happy with the resolution!
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[12px] font-bold shrink-0">
                    MC
                  </div>
                  <div className="bg-muted/40 p-3 rounded-[12px] rounded-tl-none">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px] font-semibold text-foreground">Mike Chen</span>
                      <span className="text-[10px] text-muted-foreground uppercase">10:25 AM</span>
                    </div>
                    <div className="text-[13px] text-foreground/80 leading-relaxed">
                      Nice! That was a tricky one. Good use of KB-001 👍
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-4 border-t border-border mt-auto">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type a message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        setChatMessage('');
                      }
                    }}
                    className="pr-10"
                  />
                  <Send size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                <Button className="shrink-0">
                  Send
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Mentions Tab */}
        {selectedTab === 'mentions' && (
          <div className="max-w-4xl mx-auto space-y-3">
            {mockMentions.map(mention => (
              <Card key={mention.id} className={`p-5 bg-card border-border hover:shadow-md transition-all ${!mention.read ? 'border-l-4 border-l-primary' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <AtSign size={16} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[14px] font-semibold text-foreground">{mention.from}</span>
                        <span className="text-[12px] text-muted-foreground">mentioned you in</span>
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[12px] font-bold rounded-full border border-primary/20">
                          {mention.ticketId}
                        </span>
                        <span className="text-[11px] text-muted-foreground ml-1 uppercase">{mention.time}</span>
                      </div>
                    </div>
                    <div className="text-[14px] text-foreground/90 ml-11 leading-relaxed bg-muted/30 p-3 rounded-[10px]">
                      {mention.message}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="secondary" className="whitespace-nowrap">
                      View Ticket
                    </Button>
                    {!mention.read && (
                      <Button size="sm" className="whitespace-nowrap">
                        Mark Read
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Handoffs Tab */}
        {selectedTab === 'handoffs' && (
          <div className="max-w-4xl mx-auto space-y-3">
            {mockHandoffs.map(handoff => (
              <Card key={handoff.id} className="p-5 bg-card border-border hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <MessageSquare size={16} className="text-primary" />
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[14px] font-semibold text-foreground">{handoff.from}</span>
                        <span className="text-[12px] text-muted-foreground">→</span>
                        <span className="text-[14px] font-semibold text-foreground">{handoff.to}</span>
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[12px] font-bold rounded-full border border-primary/20">
                          {handoff.ticketId}
                        </span>
                        {handoff.status === 'pending' && (
                          <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-bold rounded-full border border-amber-500/20 uppercase tracking-wider">
                            Pending
                          </span>
                        )}
                        {handoff.status === 'accepted' && (
                          <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold rounded-full border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 size={10} />
                            Accepted
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-[14px] text-foreground/90 ml-11 mb-3 leading-relaxed bg-muted/30 p-4 rounded-[10px]">
                      <strong className="text-foreground font-semibold">Reason:</strong> {handoff.reason}
                    </div>
                    <div className="text-[11px] text-muted-foreground ml-11 flex items-center gap-1.5 uppercase font-medium">
                      <Clock size={12} />
                      {handoff.time}
                    </div>
                  </div>
                  {handoff.status === 'pending' && handoff.to === 'You' && (
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="secondary" className="whitespace-nowrap">
                        Decline
                      </Button>
                      <Button size="sm" className="whitespace-nowrap">
                        Accept
                      </Button>
                    </div>
                  )}
                  {handoff.status === 'pending' && handoff.from === 'You' && (
                    <Button size="sm" variant="secondary" className="ml-4 whitespace-nowrap">
                      Cancel
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
