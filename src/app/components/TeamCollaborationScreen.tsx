import React, { useState } from 'react';
import { Users, Search, CheckCircle2, Clock, MessageSquare, Plus, AlertCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ModernScreenWrapper } from './ModernScreenWrapper';

interface TeamCollaborationScreenProps {
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const teamMembers = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'SC',
    role: 'Senior Support Agent',
    status: 'online',
    activeTickets: 8,
    avgResponseTime: '12 min',
    resolutionRate: 94,
  },
  {
    id: '2',
    name: 'Mike Johnson',
    avatar: 'MJ',
    role: 'Support Agent',
    status: 'online',
    activeTickets: 12,
    avgResponseTime: '18 min',
    resolutionRate: 88,
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'ED',
    role: 'Team Lead',
    status: 'away',
    activeTickets: 5,
    avgResponseTime: '10 min',
    resolutionRate: 96,
  },
  {
    id: '4',
    name: 'Alex Kumar',
    avatar: 'AK',
    role: 'Support Agent',
    status: 'offline',
    activeTickets: 0,
    avgResponseTime: '15 min',
    resolutionRate: 91,
  },
];

const conversations = [
  {
    id: '1',
    ticket: 'TKT-1247',
    subject: 'Payment error 503',
    participants: ['SC', 'MJ'],
    lastMessage: 'I found the root cause - API timeout',
    timestamp: '2 min ago',
    unread: 2,
  },
  {
    id: '2',
    ticket: 'TKT-1243',
    subject: 'Email verification issue',
    participants: ['ED', 'SC'],
    lastMessage: 'Escalating to dev team',
    timestamp: '15 min ago',
    unread: 0,
  },
  {
    id: '3',
    ticket: 'TKT-1238',
    subject: 'Feature request clarification',
    participants: ['MJ', 'ED', 'AK'],
    lastMessage: 'Customer confirmed the requirement',
    timestamp: '1 hour ago',
    unread: 1,
  },
];

const handoffs = [
  {
    id: '1',
    ticket: 'TKT-1245',
    from: 'Mike Johnson',
    to: 'Sarah Chen',
    reason: 'Requires senior agent expertise',
    timestamp: '30 min ago',
    status: 'pending',
  },
  {
    id: '2',
    ticket: 'TKT-1240',
    from: 'Alex Kumar',
    to: 'Emma Davis',
    reason: 'Escalation to team lead',
    timestamp: '2 hours ago',
    status: 'accepted',
  },
];

export function TeamCollaborationScreen({ onBack, isDarkMode, onToggleDarkMode }: TeamCollaborationScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ModernScreenWrapper
      title="Team"
      subtitle="Collaboration, handoffs, and agent performance"
      onBack={onBack}
      isDarkMode={isDarkMode}
      onToggleDarkMode={onToggleDarkMode}
    >
      <div className="flex h-full -mx-6 -my-6">
          {/* Left Sidebar - Team Members */}
          <div className="w-[300px] bg-muted/30 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search team..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-9"
                />
              </div>

              {/* Team Stats */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Online</span>
                    <span className="font-medium">
                      {teamMembers.filter(m => m.status === 'online').length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Active Tickets</span>
                    <span className="font-medium">
                      {teamMembers.reduce((sum, m) => sum + m.activeTickets, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avg Response</span>
                    <span className="font-medium">14 min</span>
                  </div>
                </CardContent>
              </Card>

              {/* Team Members List */}
              <div>
                <h3 className="text-sm font-medium mb-3">Team Members</h3>
                <div className="space-y-2">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background cursor-pointer transition-colors"
                    >
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                            member.status === 'online'
                              ? 'bg-green-500'
                              : member.status === 'away'
                              ? 'bg-yellow-500'
                              : 'bg-muted'
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                      </div>
                      {member.activeTickets > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {member.activeTickets}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <Tabs defaultValue="conversations" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="conversations">
                    <MessageSquare size={14} className="mr-2" />
                    Conversations
                  </TabsTrigger>
                  <TabsTrigger value="handoffs">
                    <AlertCircle size={14} className="mr-2" />
                    Handoffs
                  </TabsTrigger>
                  <TabsTrigger value="performance">
                    <CheckCircle2 size={14} className="mr-2" />
                    Performance
                  </TabsTrigger>
                </TabsList>

                {/* Conversations Tab */}
                <TabsContent value="conversations" className="space-y-4">
                  {conversations.map((conv) => (
                    <Card key={conv.id} className="cursor-pointer hover:border-primary transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex -space-x-2">
                            {conv.participants.map((avatar, idx) => (
                              <Avatar key={idx} className="w-8 h-8 border-2 border-background">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                  {avatar}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {conv.ticket}
                              </Badge>
                              <h3 className="font-medium truncate">{conv.subject}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground truncate mb-2">
                              {conv.lastMessage}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock size={12} />
                              {conv.timestamp}
                            </div>
                          </div>
                          {conv.unread > 0 && (
                            <Badge className="rounded-full w-6 h-6 flex items-center justify-center p-0">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Handoffs Tab */}
                <TabsContent value="handoffs" className="space-y-4">
                  {handoffs.map((handoff) => (
                    <Card key={handoff.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{handoff.ticket}</Badge>
                              <Badge
                                variant={handoff.status === 'accepted' ? 'default' : 'secondary'}
                              >
                                {handoff.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm mb-3">
                              <span className="font-medium">{handoff.from}</span>
                              <span className="text-muted-foreground">→</span>
                              <span className="font-medium">{handoff.to}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {handoff.reason}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock size={12} />
                              {handoff.timestamp}
                            </div>
                          </div>
                          {handoff.status === 'pending' && (
                            <div className="flex gap-2 ml-4">
                              <Button size="sm">Accept</Button>
                              <Button variant="outline" size="sm">
                                Decline
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Performance Tab */}
                <TabsContent value="performance" className="space-y-6">
                  <div className="grid grid-cols-4 gap-6">
                    <Card>
                      <CardHeader>
                        <CardDescription>Team Efficiency</CardDescription>
                        <CardTitle className="text-3xl">91%</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-600">+3% from last week</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardDescription>Avg Response Time</CardDescription>
                        <CardTitle className="text-3xl">14m</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-600">-2m from last week</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardDescription>Active Discussions</CardDescription>
                        <CardTitle className="text-3xl">{conversations.length}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Across team</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardDescription>Pending Handoffs</CardDescription>
                        <CardTitle className="text-3xl">
                          {handoffs.filter(h => h.status === 'pending').length}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Needs attention</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Team Leaderboard */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Team Performance</CardTitle>
                      <CardDescription>Individual metrics for this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {teamMembers
                          .sort((a, b) => b.resolutionRate - a.resolutionRate)
                          .map((member, index) => (
                            <div key={member.id} className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                                {index + 1}
                              </div>
                              <Avatar className="w-10 h-10">
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  {member.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <p className="font-medium">{member.name}</p>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{member.resolutionRate}%</p>
                                <p className="text-xs text-muted-foreground">Resolution Rate</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{member.avgResponseTime}</p>
                                <p className="text-xs text-muted-foreground">Avg Response</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{member.activeTickets}</p>
                                <p className="text-xs text-muted-foreground">Active</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
      </div>
    </ModernScreenWrapper>
  );
}