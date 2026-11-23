import React, { useState } from 'react';
import { Sparkles, Search, ChevronDown, ArrowRight, TrendingUp, AlertCircle, Filter, Download, CheckSquare, Moon, Sun } from 'lucide-react';
import { mockTickets, mockDashboardStats } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Checkbox } from './ui/checkbox';
import { getPriorityBadgeClass, getStatusBadgeClass } from '../lib/badge-utils';
import { ProductivityCard } from './ProductivityCard';
import { OpenTicketsCard } from './OpenTicketsCard';
import { AIInsightsCard } from './AIInsightsCard';
import { OngoingConversationsCard } from './OngoingConversationsCard';
import { RecentActivityCard } from './RecentActivityCard';
import { QuickStatsCard } from './QuickStatsCard';
import { TicketTrendsCard } from './TicketTrendsCard';
import { DashboardSidePanel } from './DashboardSidePanel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface MainDashboardProps {
  onTicketClick: (ticketId: string) => void;
  onLogout: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function MainDashboard({ onTicketClick, onLogout, isDarkMode, onToggleDarkMode }: MainDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [activeSection, setActiveSection] = useState<'overview' | 'all-tickets' | 'ongoing-conversations'>('overview');

  const filteredTickets = mockTickets.filter(ticket => {
    const matchesSearch = searchQuery === '' ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTickets(filteredTickets.map(t => t.id));
      setShowBulkActions(true);
    } else {
      setSelectedTickets([]);
      setShowBulkActions(false);
    }
  };

  const handleSelectTicket = (ticketId: string, checked: boolean) => {
    if (checked) {
      const newSelection = [...selectedTickets, ticketId];
      setSelectedTickets(newSelection);
      setShowBulkActions(newSelection.length > 0);
    } else {
      const newSelection = selectedTickets.filter(id => id !== ticketId);
      setSelectedTickets(newSelection);
      setShowBulkActions(newSelection.length > 0);
    }
  };

  const handleBulkAction = (action: string) => {
    alert(`Performing ${action} on ${selectedTickets.length} tickets`);
    setSelectedTickets([]);
    setShowBulkActions(false);
  };

  // Interactive handlers for dashboard cards
  const handleViewAllTickets = () => {
    setStatusFilter('all');
    setPriorityFilter('all');
    alert('Showing all tickets view');
  };

  const handleAIInsightClick = (insight: { text: string; color: string }, index: number) => {
    // Map insights to filter actions
    const insightActions = [
      () => {
        alert('Showing 16 tickets with repetitive payment failures');
        setSearchQuery('payment failure');
      },
      () => {
        alert('Showing 8 customers with similar errors');
        setSearchQuery('similar error');
      },
      () => {
        alert('Showing 3 unresolved high-priority tickets');
        setStatusFilter('open');
        setPriorityFilter('high');
      }
    ];
    
    if (insightActions[index]) {
      insightActions[index]();
    }
  };

  const handleProductivityMetricClick = (metricType: 'resolved' | 'handleTime' | 'aiAssistance') => {
    const messages = {
      resolved: 'Showing detailed breakdown of your 12 resolved tickets',
      handleTime: 'Showing handle time analytics - Average: 4.2 minutes (12% improvement)',
      aiAssistance: 'Showing AI assistance details - 78% of responses enhanced by AI'
    };
    alert(messages[metricType]);
  };

  const handleViewAllConversations = () => {
    alert('Opening all active conversations view');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <div className="border-b bg-card shadow-sm">
        <div className="px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 ai-gradient rounded-md flex items-center justify-center shadow-lg ai-glow">
              <Sparkles size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-semibold ai-gradient-text">LumaResolve</span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tickets, customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            {onToggleDarkMode && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleDarkMode}
                className="rounded-lg"
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-muted-foreground" />
                ) : (
                  <Moon size={20} className="text-muted-foreground" />
                )}
              </Button>
            )}

            <Button variant="ghost" className="gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  AG
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Agent User</span>
              <ChevronDown size={16} className="text-muted-foreground" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-5">
        {/* Top Row - Metric Cards (Horizontal) */}
        <div className="grid grid-cols-3 gap-5">
          {/* Open Tickets Card */}
          <OpenTicketsCard 
            count={mockDashboardStats.openTickets}
            percentageChange={12}
            onViewAllClick={handleViewAllTickets}
          />

          {/* AI Insights Card */}
          <AIInsightsCard
            onInsightClick={handleAIInsightClick}
          />

          {/* Productivity Card */}
          <ProductivityCard
            onMetricClick={handleProductivityMetricClick}
          />
        </div>

        {/* Main Row - Conversations + Tickets Table */}
        <div className="flex gap-5">
          {/* Left Column - Ongoing Conversations (30%) */}
          <div className="w-[30%]">
            <OngoingConversationsCard 
              onConversationClick={onTicketClick} 
              onViewAllClick={handleViewAllConversations} 
            />
          </div>

          {/* Right Column - All Tickets (70%) */}
          <div className="flex-1">
            {/* Bulk Actions Bar */}
            {showBulkActions && (
              <div className="mb-4 p-4 bg-primary/10 border border-primary rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckSquare size={20} className="text-primary" />
                  <span className="font-medium">
                    {selectedTickets.length} ticket{selectedTickets.length > 1 ? 's' : ''} selected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Select onValueChange={handleBulkAction}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Bulk Actions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="assign">Assign to Agent</SelectItem>
                      <SelectItem value="priority">Change Priority</SelectItem>
                      <SelectItem value="status">Update Status</SelectItem>
                      <SelectItem value="tag">Add Tags</SelectItem>
                      <SelectItem value="export">Export Selected</SelectItem>
                      <SelectItem value="delete">Delete</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" onClick={() => {
                    setSelectedTickets([]);
                    setShowBulkActions(false);
                  }}>
                    Clear Selection
                  </Button>
                </div>
              </div>
            )}

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[15px]">All Tickets</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      <Filter size={14} className="mr-1.5" />
                      Advanced
                    </Button>

                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[130px] h-8 text-[13px]">
                        <SelectValue placeholder="All tickets" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All tickets</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                      <SelectTrigger className="w-[130px] h-8 text-[13px]">
                        <SelectValue placeholder="All priorities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All priorities</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[130px] h-8 text-[13px]">
                        <SelectValue placeholder="Newest first" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest first</SelectItem>
                        <SelectItem value="oldest">Oldest first</SelectItem>
                        <SelectItem value="priority">Priority</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button variant="outline" size="sm" className="h-8">
                      <Download size={14} className="mr-1.5" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={selectedTickets.length === filteredTickets.length && filteredTickets.length > 0}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Ticket ID</TableHead>
                      <TableHead>Customer Name</TableHead>
                      <TableHead>Issue Snippet</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Assigned To</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.map((ticket) => (
                      <TableRow
                        key={ticket.id}
                        className="cursor-pointer"
                      >
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            checked={selectedTickets.includes(ticket.id)}
                            onCheckedChange={(checked) => handleSelectTicket(ticket.id, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell 
                          onClick={() => onTicketClick(ticket.id)}
                          className="text-primary font-medium"
                        >
                          {ticket.id}
                        </TableCell>
                        <TableCell onClick={() => onTicketClick(ticket.id)}>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-7 h-7">
                              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                {ticket.customer.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{ticket.customer.name}</span>
                          </div>
                        </TableCell>
                        <TableCell onClick={() => onTicketClick(ticket.id)} className="max-w-[300px]">
                          <div className="flex items-center gap-2">
                            <span className="truncate">{ticket.subject}</span>
                            {ticket.multipleIssues && ticket.multipleIssues.length > 0 && (
                              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 shrink-0 text-xs">
                                {ticket.multipleIssues.length} Issues
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell onClick={() => onTicketClick(ticket.id)}>
                          <Badge className={getPriorityBadgeClass(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </TableCell>
                        <TableCell onClick={() => onTicketClick(ticket.id)}>
                          <Badge className={getStatusBadgeClass(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </TableCell>
                        <TableCell onClick={() => onTicketClick(ticket.id)} className="text-muted-foreground text-sm">{ticket.created}</TableCell>
                        <TableCell onClick={() => onTicketClick(ticket.id)} className="text-muted-foreground text-sm">
                          {ticket.assignedTo || 'Unassigned'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Row - Additional Stats & Activity */}
        <div className="grid grid-cols-3 gap-5">
          {/* Ticket Trends Card */}
          <TicketTrendsCard />

          {/* Recent Activity Card */}
          <RecentActivityCard />

          {/* Quick Stats Card */}
          <QuickStatsCard />
        </div>
      </div>
    </div>
  );
}