import React from 'react';
import { TrendingUp, TrendingDown, Users, Clock, CheckCircle2, Zap, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ModernScreenWrapper } from './ModernScreenWrapper';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface EnhancedAgentPerformanceScreenProps {
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const ticketVolumeData = [
  { day: 'Mon', resolved: 24, pending: 8, escalated: 3 },
  { day: 'Tue', resolved: 32, pending: 12, escalated: 2 },
  { day: 'Wed', resolved: 28, pending: 15, escalated: 5 },
  { day: 'Thu', resolved: 35, pending: 10, escalated: 4 },
  { day: 'Fri', resolved: 30, pending: 18, escalated: 3 },
  { day: 'Sat', resolved: 18, pending: 8, escalated: 1 },
  { day: 'Sun', resolved: 15, pending: 5, escalated: 2 },
];

const responseTimeData = [
  { hour: '9AM', avgTime: 8 },
  { hour: '10AM', avgTime: 12 },
  { hour: '11AM', avgTime: 15 },
  { hour: '12PM', avgTime: 18 },
  { hour: '1PM', avgTime: 22 },
  { hour: '2PM', avgTime: 16 },
  { hour: '3PM', avgTime: 14 },
  { hour: '4PM', avgTime: 19 },
  { hour: '5PM', avgTime: 25 },
];

const categoryDistribution = [
  { name: 'Billing', value: 156, color: '#4C84FF' },
  { name: 'Technical', value: 98, color: '#10B981' },
  { name: 'Account', value: 67, color: '#F59E0B' },
  { name: 'Product', value: 45, color: '#8B5CF6' },
  { name: 'Other', value: 34, color: '#6B7280' },
];

const aiAssistanceData = [
  { month: 'Jan', aiAssisted: 45, manual: 55 },
  { month: 'Feb', aiAssisted: 52, manual: 48 },
  { month: 'Mar', aiAssisted: 58, manual: 42 },
  { month: 'Apr', aiAssisted: 65, manual: 35 },
  { month: 'May', aiAssisted: 68, manual: 32 },
  { month: 'Jun', aiAssisted: 72, manual: 28 },
];

const teamPerformance = [
  { name: 'Sarah Chen', resolved: 124, rating: 4.9, responseTime: '10m' },
  { name: 'Mike Johnson', resolved: 98, rating: 4.7, responseTime: '14m' },
  { name: 'Emma Davis', resolved: 112, rating: 4.8, responseTime: '12m' },
  { name: 'Alex Kumar', resolved: 89, rating: 4.6, responseTime: '16m' },
];

export function EnhancedAgentPerformanceScreen({ onBack, isDarkMode, onToggleDarkMode }: EnhancedAgentPerformanceScreenProps) {
  return (
    <ModernScreenWrapper
      title="Analytics"
      subtitle="Team performance and AI metrics"
      onBack={onBack}
      isDarkMode={isDarkMode}
      onToggleDarkMode={onToggleDarkMode}
    >
      <div className="max-w-7xl mx-auto space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-5 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-600" />
                    Resolved Tickets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">248</div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp size={14} />
                    <span>+12% vs last week</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <Clock size={16} />
                    Avg Response Time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">14m</div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingDown size={14} />
                    <span>-3m vs last week</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <Zap size={16} className="text-primary" />
                    AI Assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">72%</div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp size={14} />
                    <span>+8% vs last week</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <Target size={16} />
                    CSAT Score
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">4.8</div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp size={14} />
                    <span>+0.2 vs last week</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <Users size={16} />
                    Active Agents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">12</div>
                  <div className="text-sm text-muted-foreground">of 15 total</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="team">Team Performance</TabsTrigger>
                <TabsTrigger value="ai">AI Insights</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Ticket Volume */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ticket Volume (7 Days)</CardTitle>
                      <CardDescription>Resolution status breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ticketVolumeData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px',
                            }}
                          />
                          <Legend />
                          <Bar dataKey="resolved" fill="#10B981" name="Resolved" />
                          <Bar dataKey="pending" fill="#F59E0B" name="Pending" />
                          <Bar dataKey="escalated" fill="#EF4444" name="Escalated" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Response Time Trend */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Response Time Trend</CardTitle>
                      <CardDescription>Average response time by hour</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={responseTimeData}>
                          <defs>
                            <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4C84FF" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#4C84FF" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px',
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="avgTime"
                            stroke="#4C84FF"
                            fillOpacity={1}
                            fill="url(#colorTime)"
                            name="Avg Time (min)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Category Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ticket Category Distribution</CardTitle>
                      <CardDescription>By ticket type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={categoryDistribution}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {categoryDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px',
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* AI Assistance Trend */}
                  <Card>
                    <CardHeader>
                      <CardTitle>AI vs Manual Resolution</CardTitle>
                      <CardDescription>6-month trend</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={aiAssistanceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px',
                            }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="aiAssisted"
                            stroke="#4C84FF"
                            strokeWidth={2}
                            name="AI-Assisted %"
                          />
                          <Line
                            type="monotone"
                            dataKey="manual"
                            stroke="#6B7280"
                            strokeWidth={2}
                            name="Manual %"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Team Performance Tab */}
              <TabsContent value="team" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Leaderboard</CardTitle>
                    <CardDescription>Individual performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {teamPerformance.map((agent, index) => (
                        <div key={agent.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium">{agent.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {agent.resolved} tickets • {agent.responseTime} avg
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="flex items-center gap-1">
                                  <Award size={16} className="text-yellow-500" />
                                  <span className="font-medium">{agent.rating}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">Rating</p>
                              </div>
                            </div>
                          </div>
                          <Progress value={(agent.resolved / 124) * 100} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Insights Tab */}
              <TabsContent value="ai" className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle>AI Performance Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Response Time Reduction</span>
                        <span className="font-bold text-green-600">-42%</span>
                      </div>
                      <Progress value={58} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Resolution Rate Improvement</span>
                        <span className="font-bold text-green-600">+28%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">CSAT Score Increase</span>
                        <span className="font-bold text-green-600">+0.6</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top AI Suggestions This Week</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Payment error troubleshooting</span>
                        <span className="text-sm font-medium">23 uses</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">API rate limit explanation</span>
                        <span className="text-sm font-medium">18 uses</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Account verification steps</span>
                        <span className="text-sm font-medium">15 uses</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Subscription cancellation</span>
                        <span className="text-sm font-medium">12 uses</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Trends Tab */}
              <TabsContent value="trends" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Trends & Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <TrendingUp size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Payment-related tickets decreased by 18%</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Thanks to improved documentation and proactive KB articles
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <TrendingUp size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Peak response time shifting earlier</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Most tickets now resolved before 2PM, improving customer satisfaction
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <Zap size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">AI confidence scores improving</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Average confidence increased from 78% to 86% over 3 months
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
      </div>
    </ModernScreenWrapper>
  );
}