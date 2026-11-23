import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { ArrowLeft, TrendingUp, Clock, CheckCircle, Sparkles, Download, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface AnalyticsProps {
  onBack: () => void;
}

const handleTimeData = [
  { month: 'Jul', aht: 5.2 },
  { month: 'Aug', aht: 4.8 },
  { month: 'Sep', aht: 4.5 },
  { month: 'Oct', aht: 4.3 },
  { month: 'Nov', aht: 4.2 },
  { month: 'Dec', aht: 4.2 }
];

const resolutionData = [
  { month: 'Jul', rate: 88 },
  { month: 'Aug', rate: 90 },
  { month: 'Sep', rate: 91 },
  { month: 'Oct', rate: 92 },
  { month: 'Nov', rate: 93 },
  { month: 'Dec', rate: 94 }
];

const categoryData = [
  { name: 'Payment Issues', value: 156, color: '#4C84FF' },
  { name: 'Technical Support', value: 124, color: '#2EB67D' },
  { name: 'Billing Questions', value: 98, color: '#F4C14E' },
  { name: 'Feature Requests', value: 67, color: '#E25555' },
  { name: 'Other', value: 45, color: '#5E5E5E' }
];

const agentData = [
  { name: 'Sarah Kim', resolved: 89, aiUsage: 92, avgTime: '3.8 min' },
  { name: 'Marcus Lee', resolved: 87, aiUsage: 88, avgTime: '4.1 min' },
  { name: 'Jessica Wu', resolved: 85, aiUsage: 85, avgTime: '4.3 min' },
  { name: 'David Chen', resolved: 83, aiUsage: 79, avgTime: '4.5 min' },
  { name: 'Emily Patel', resolved: 81, aiUsage: 75, avgTime: '4.7 min' }
];

export function Analytics({ onBack }: AnalyticsProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-card border-b border-border/40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-[24px] font-semibold">Performance & Analytics</h1>
          </div>
          
          <div className="flex gap-2">
            <Button variant="secondary" icon={<Calendar size={16} />}>
              Last 30 Days
            </Button>
            <Button variant="secondary" icon={<Download size={16} />}>
              Export Report
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card border-border p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Avg Handle Time</div>
                <div className="text-[28px] font-bold text-foreground">4.2 min</div>
                <div className="text-[12px] text-emerald-500 mt-1 font-medium">↓ 12% vs last month</div>
              </div>
              <Clock size={32} className="text-primary opacity-20" />
            </div>
          </Card>
          
          <Card className="bg-card border-border p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Resolution Rate</div>
                <div className="text-[28px] font-bold text-foreground">94%</div>
                <div className="text-[12px] text-emerald-500 mt-1 font-medium">↑ 6% vs last month</div>
              </div>
              <CheckCircle size={32} className="text-emerald-500 opacity-20" />
            </div>
          </Card>
          
          <Card className="bg-card border-border p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">AI Usage Rate</div>
                <div className="text-[28px] font-bold text-foreground">78%</div>
                <div className="text-[12px] text-emerald-500 mt-1 font-medium">↑ 15% vs last month</div>
              </div>
              <Sparkles size={32} className="text-primary opacity-20" />
            </div>
          </Card>
          
          <Card className="bg-card border-border p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] text-muted-foreground mb-1">Total Tickets</div>
                <div className="text-[28px] font-bold text-foreground">490</div>
                <div className="text-[12px] text-muted-foreground mt-1">This month</div>
              </div>
              <TrendingUp size={32} className="text-primary opacity-20" />
            </div>
          </Card>
        </div>
        
        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Average Handle Time Trend */}
          <Card className="bg-card border-border p-6">
            <h3 className="text-[18px] font-semibold text-foreground mb-6">Average Handle Time Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={handleTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} 
                  axisLine={{ stroke: 'var(--border)' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} 
                  axisLine={{ stroke: 'var(--border)' }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                  itemStyle={{ color: 'var(--primary)' }}
                />
                <Line type="monotone" dataKey="aht" stroke="var(--primary)" strokeWidth={3} dot={{ fill: 'var(--primary)', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          
          {/* Resolution Rate Trend */}
          <Card className="bg-card border-border p-6">
            <h3 className="text-[18px] font-semibold text-foreground mb-6">Resolution Rate Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={resolutionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} 
                  axisLine={{ stroke: 'var(--border)' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} 
                  axisLine={{ stroke: 'var(--border)' }}
                  domain={[80, 100]} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                  itemStyle={{ color: 'var(--emerald-500)' }}
                />
                <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
        
        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ticket Categories */}
          <Card className="bg-card border-border p-6">
            <h3 className="text-[18px] font-semibold text-foreground mb-6">Ticket Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="var(--primary)"
                  dataKey="value"
                  stroke="var(--card)"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          
          {/* Agent Leaderboard */}
          <Card className="bg-card border-border p-6">
            <h3 className="text-[18px] font-semibold text-foreground mb-6">Agent Performance Leaderboard</h3>
            <div className="space-y-3">
              {agentData.map((agent, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-[10px] hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px] font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-foreground">{agent.name}</div>
                      <div className="text-[12px] text-muted-foreground">Avg: {agent.avgTime}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[14px] font-semibold text-foreground">{agent.resolved}% resolved</div>
                    <div className="text-[12px] text-primary font-medium">{agent.aiUsage}% AI usage</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* AI Impact Section */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={20} className="text-primary" />
            <h3 className="text-[18px] font-semibold text-foreground">AI Impact Analysis</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-primary/5 dark:bg-primary/10 rounded-[12px] border border-primary/10">
              <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Time Saved</div>
              <div className="text-[28px] font-bold text-foreground mb-1">127 hours</div>
              <div className="text-[12px] text-primary font-medium">This month with AI assistance</div>
            </div>
            
            <div className="p-5 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-[12px] border border-emerald-500/10">
              <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">Customer Satisfaction</div>
              <div className="text-[28px] font-bold text-foreground mb-1">4.8/5.0</div>
              <div className="text-[12px] text-emerald-500 font-medium">↑ 0.3 points with AI responses</div>
            </div>
            
            <div className="p-5 bg-amber-500/5 dark:bg-amber-500/10 rounded-[12px] border border-amber-500/10">
              <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">First Response Time</div>
              <div className="text-[28px] font-bold text-foreground mb-1">2.1 min</div>
              <div className="text-[12px] text-amber-600 dark:text-amber-400 font-medium">47% faster with AI drafts</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
