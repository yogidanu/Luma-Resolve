import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { ArrowLeft, TrendingUp, TrendingDown, Clock, CheckCircle, Sparkles, Download, Calendar, Users, MessageSquare, Target, Award, AlertCircle } from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, 
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

interface EnhancedAnalyticsProps {
  onBack: () => void;
}

export function EnhancedAnalytics({ onBack }: EnhancedAnalyticsProps) {
  const [dateRange, setDateRange] = useState('30d');

  // Enhanced data sets
  const volumeTrendData = [
    { date: 'Dec 1', total: 45, resolved: 38, pending: 7 },
    { date: 'Dec 8', total: 52, resolved: 46, pending: 6 },
    { date: 'Dec 15', total: 48, resolved: 43, pending: 5 },
    { date: 'Dec 22', total: 50, resolved: 47, pending: 3 },
    { date: 'Dec 29', total: 47, resolved: 45, pending: 2 }
  ];

  const aiPerformanceData = [
    { metric: 'Accuracy', value: 94 },
    { metric: 'Speed', value: 88 },
    { metric: 'Confidence', value: 91 },
    { metric: 'Adoption', value: 78 },
    { metric: 'Satisfaction', value: 92 }
  ];

  const hourlyDistribution = [
    { hour: '12am', tickets: 2 },
    { hour: '4am', tickets: 1 },
    { hour: '8am', tickets: 15 },
    { hour: '12pm', tickets: 28 },
    { hour: '4pm', tickets: 22 },
    { hour: '8pm', tickets: 8 }
  ];

  const resolutionTimeDistribution = [
    { range: '0-5m', count: 145, color: '#00C48C' },
    { range: '5-15m', count: 98, color: '#4C84FF' },
    { range: '15-30m', count: 56, color: '#FFA500' },
    { range: '30-60m', count: 23, color: '#FF4D4D' },
    { range: '60m+', count: 8, color: '#9E9E9E' }
  ];

  const customerSatisfaction = [
    { month: 'Jul', csat: 4.2, nps: 42 },
    { month: 'Aug', csat: 4.3, nps: 45 },
    { month: 'Sep', csat: 4.4, nps: 48 },
    { month: 'Oct', csat: 4.5, nps: 51 },
    { month: 'Nov', csat: 4.6, nps: 54 },
    { month: 'Dec', csat: 4.7, nps: 58 }
  ];

  const categoryTrends = [
    { week: 'W1', payment: 25, technical: 18, billing: 12, features: 8 },
    { week: 'W2', payment: 28, technical: 22, billing: 15, features: 10 },
    { week: 'W3', payment: 23, technical: 20, billing: 14, features: 9 },
    { week: 'W4', payment: 30, technical: 19, billing: 13, features: 11 }
  ];

  const teamPerformanceComparison = [
    { name: 'Sarah', efficiency: 95, quality: 92, speed: 88, satisfaction: 94 },
    { name: 'Mike', efficiency: 88, quality: 90, speed: 92, satisfaction: 89 },
    { name: 'Emma', efficiency: 92, quality: 95, speed: 85, satisfaction: 93 },
    { name: 'James', efficiency: 85, quality: 87, speed: 90, satisfaction: 86 }
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#EAEAED] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-[24px]">Enhanced Analytics & Insights</h1>
          </div>
          
          <div className="flex gap-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px] bg-white"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
            <Button variant="secondary" icon={<Download size={16} />}>
              Export Report
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-5 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock size={20} className="text-[#4C84FF]" />
              <TrendingDown size={16} className="text-[#00C48C]" />
            </div>
            <div className="text-[12px] text-[#5E5E5E] mb-1">Avg Handle Time</div>
            <div className="text-[24px] mb-1">4.2 min</div>
            <div className="text-[11px] text-[#00C48C]">↓ 12% vs last month</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle size={20} className="text-[#00C48C]" />
              <TrendingUp size={16} className="text-[#00C48C]" />
            </div>
            <div className="text-[12px] text-[#5E5E5E] mb-1">Resolution Rate</div>
            <div className="text-[24px] mb-1">94%</div>
            <div className="text-[11px] text-[#00C48C]">↑ 3% vs last month</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Sparkles size={20} className="text-[#FFA500]" />
              <TrendingUp size={16} className="text-[#00C48C]" />
            </div>
            <div className="text-[12px] text-[#5E5E5E] mb-1">AI Adoption</div>
            <div className="text-[24px] mb-1">78%</div>
            <div className="text-[11px] text-[#00C48C]">↑ 8% vs last month</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <MessageSquare size={20} className="text-[#4C84FF]" />
              <TrendingUp size={16} className="text-[#00C48C]" />
            </div>
            <div className="text-[12px] text-[#5E5E5E] mb-1">CSAT Score</div>
            <div className="text-[24px] mb-1">4.7/5</div>
            <div className="text-[11px] text-[#00C48C]">↑ 0.2 vs last month</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Target size={20} className="text-[#00C48C]" />
              <TrendingUp size={16} className="text-[#00C48C]" />
            </div>
            <div className="text-[12px] text-[#5E5E5E] mb-1">First Response</div>
            <div className="text-[24px] mb-1">2.3 min</div>
            <div className="text-[11px] text-[#00C48C]">↓ 18% vs last month</div>
          </Card>
        </div>

        {/* Volume Trends */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-[#4C84FF]" />
              Ticket Volume Trends
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={volumeTrendData}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4C84FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4C84FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C48C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00C48C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#EAEAED" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#5E5E5E" />
                <YAxis tick={{ fontSize: 12 }} stroke="#5E5E5E" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="total" stroke="#4C84FF" fillOpacity={1} fill="url(#colorTotal)" />
                <Area type="monotone" dataKey="resolved" stroke="#00C48C" fillOpacity={1} fill="url(#colorResolved)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-[#FFA500]" />
              AI Performance Radar
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={aiPerformanceData}>
                <PolarGrid stroke="#EAEAED" />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Radar name="AI Performance" dataKey="value" stroke="#4C84FF" fill="#4C84FF" fillOpacity={0.5} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Hourly Distribution & Resolution Time */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <Clock size={18} className="text-[#4C84FF]" />
              Hourly Ticket Distribution
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={hourlyDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EAEAED" />
                <XAxis dataKey="hour" tick={{ fontSize: 12 }} stroke="#5E5E5E" />
                <YAxis tick={{ fontSize: 12 }} stroke="#5E5E5E" />
                <Tooltip />
                <Bar dataKey="tickets" fill="#4C84FF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <Target size={18} className="text-[#00C48C]" />
              Resolution Time Distribution
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={resolutionTimeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="count"
                  label={({ range, count }) => `${range}: ${count}`}
                >
                  {resolutionTimeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Customer Satisfaction Trend */}
        <Card className="p-6">
          <h3 className="text-[16px] mb-4 flex items-center gap-2">
            <Award size={18} className="text-[#FFA500]" />
            Customer Satisfaction Trends
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={customerSatisfaction}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EAEAED" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#5E5E5E" />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="#5E5E5E" domain={[0, 5]} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="#5E5E5E" domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="csat" stroke="#4C84FF" strokeWidth={3} name="CSAT (out of 5)" />
              <Line yAxisId="right" type="monotone" dataKey="nps" stroke="#00C48C" strokeWidth={3} name="NPS Score" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Trends */}
        <Card className="p-6">
          <h3 className="text-[16px] mb-4">Category Trends Over Time</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={categoryTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EAEAED" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="#5E5E5E" />
              <YAxis tick={{ fontSize: 12 }} stroke="#5E5E5E" />
              <Tooltip />
              <Legend />
              <Bar dataKey="payment" stackId="a" fill="#4C84FF" name="Payment Issues" />
              <Bar dataKey="technical" stackId="a" fill="#00C48C" name="Technical" />
              <Bar dataKey="billing" stackId="a" fill="#FFA500" name="Billing" />
              <Bar dataKey="features" stackId="a" fill="#9E9E9E" name="Features" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Team Performance Comparison */}
        <Card className="p-6">
          <h3 className="text-[16px] mb-4 flex items-center gap-2">
            <Users size={18} className="text-[#4C84FF]" />
            Team Performance Comparison
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={teamPerformanceComparison} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#EAEAED" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#5E5E5E" />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} stroke="#5E5E5E" />
              <Tooltip />
              <Legend />
              <Bar dataKey="efficiency" fill="#4C84FF" />
              <Bar dataKey="quality" fill="#00C48C" />
              <Bar dataKey="speed" fill="#FFA500" />
              <Bar dataKey="satisfaction" fill="#9E9E9E" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Insights Summary */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-to-br from-[#F0F4FF] to-white">
            <div className="flex items-start gap-3">
              <TrendingUp size={20} className="text-[#00C48C] mt-1" />
              <div>
                <div className="text-[13px] mb-1">🎉 Top Insight</div>
                <div className="text-[11px] text-[#5E5E5E]">
                  AI adoption increased 8% this month, correlating with 12% faster handle times
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-[#FFF4E6] to-white">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-[#FFA500] mt-1" />
              <div>
                <div className="text-[13px] mb-1">⚠️ Attention Needed</div>
                <div className="text-[11px] text-[#5E5E5E]">
                  Payment issues trending up 20% - consider priority triage queue
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-[#E6F9F3] to-white">
            <div className="flex items-start gap-3">
              <Award size={20} className="text-[#00C48C] mt-1" />
              <div>
                <div className="text-[13px] mb-1">🏆 Achievement</div>
                <div className="text-[11px] text-[#5E5E5E]">
                  Hit 94% resolution rate - highest ever! Great team work!
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
