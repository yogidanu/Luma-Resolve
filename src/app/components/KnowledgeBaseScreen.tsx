import React, { useState } from 'react';
import { BookOpen, Plus, Search, Edit, Trash2, Eye, Sparkles, FileText, Tag } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ModernScreenWrapper } from './ModernScreenWrapper';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface KnowledgeBaseScreenProps {
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const mockArticles = [
  {
    id: 'KB-001',
    title: 'How to Reset Your Password',
    category: 'Account Management',
    tags: ['password', 'security', 'account'],
    views: 1243,
    helpful: 156,
    lastUpdated: '2 days ago',
    status: 'published',
    aiGenerated: false,
  },
  {
    id: 'KB-002',
    title: 'Understanding API Rate Limits',
    category: 'Developer',
    tags: ['api', 'rate-limit', 'technical'],
    views: 892,
    helpful: 98,
    lastUpdated: '5 days ago',
    status: 'published',
    aiGenerated: true,
  },
  {
    id: 'KB-003',
    title: 'Payment Failed Error 503 - Troubleshooting',
    category: 'Billing',
    tags: ['payment', 'error', 'troubleshooting'],
    views: 2104,
    helpful: 234,
    lastUpdated: '1 day ago',
    status: 'published',
    aiGenerated: true,
  },
  {
    id: 'KB-004',
    title: 'Team Collaboration Features Guide',
    category: 'Features',
    tags: ['collaboration', 'teams', 'guide'],
    views: 456,
    helpful: 67,
    lastUpdated: '3 days ago',
    status: 'draft',
    aiGenerated: false,
  },
];

const aiSuggestions = [
  {
    title: 'Common Issues with Email Verification',
    reason: '23 tickets mention email verification problems',
    tickets: 23,
    confidence: 'high',
  },
  {
    title: 'Integration Setup Guide for Webhooks',
    reason: '15 tickets ask about webhook configuration',
    tickets: 15,
    confidence: 'high',
  },
  {
    title: 'Subscription Cancellation Process',
    reason: '12 tickets request cancellation help',
    tickets: 12,
    confidence: 'medium',
  },
];

export function KnowledgeBaseScreen({ onBack, isDarkMode, onToggleDarkMode }: KnowledgeBaseScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <ModernScreenWrapper
      title="Knowledge Base"
      subtitle="Articles, guides, and AI-suggested content"
      onBack={onBack}
      isDarkMode={isDarkMode}
      onToggleDarkMode={onToggleDarkMode}
    >
      <div className="max-w-7xl mx-auto">
            {/* Search & Stats */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <Card className="col-span-3">
                <CardContent className="pt-6">
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search articles, categories, tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{mockArticles.length}</p>
                    <p className="text-sm text-muted-foreground mt-1">Total Articles</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="articles" className="space-y-6">
              <TabsList>
                <TabsTrigger value="articles">All Articles</TabsTrigger>
                <TabsTrigger value="ai-suggestions">
                  <Sparkles size={14} className="mr-2" />
                  AI Suggestions
                </TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Articles Tab */}
              <TabsContent value="articles" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Knowledge Base Articles</CardTitle>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm">
                          <FileText size={16} className="mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Article</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Tags</TableHead>
                          <TableHead>Views</TableHead>
                          <TableHead>Helpful</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Updated</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockArticles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell>
                              <div className="flex items-start gap-3">
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium truncate">{article.title}</p>
                                  <p className="text-xs text-muted-foreground">{article.id}</p>
                                </div>
                                {article.aiGenerated && (
                                  <Badge variant="secondary" className="flex-shrink-0 text-xs">
                                    <Sparkles size={10} className="mr-1" />
                                    AI
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{article.category}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {article.tags.slice(0, 2).map((tag, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {article.tags.length > 2 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{article.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{article.views}</TableCell>
                            <TableCell className="text-muted-foreground">{article.helpful}</TableCell>
                            <TableCell>
                              <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>
                                {article.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {article.lastUpdated}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Edit size={16} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Suggestions Tab */}
              <TabsContent value="ai-suggestions" className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Sparkles size={20} className="text-primary" />
                      <CardTitle>AI-Suggested Articles</CardTitle>
                    </div>
                    <CardDescription>
                      Based on recurring customer issues and ticket patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {aiSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                      className="flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors shadow-sm bg-card"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium mb-2">{suggestion.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {suggestion.reason}
                          </p>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">
                              {suggestion.tickets} tickets
                            </Badge>
                            <Badge
                              variant={suggestion.confidence === 'high' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {suggestion.confidence} confidence
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" className="gap-2">
                            <Sparkles size={14} />
                            Generate
                          </Button>
                          <Button variant="outline" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardDescription>Total Views (30 days)</CardDescription>
                      <CardTitle className="text-3xl">4,695</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-green-600">+12% from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardDescription>Avg. Helpfulness</CardDescription>
                      <CardTitle className="text-3xl">87%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-green-600">+5% from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardDescription>Search Success Rate</CardDescription>
                      <CardTitle className="text-3xl">76%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">2% from last month</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Most Viewed Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockArticles
                        .sort((a, b) => b.views - a.views)
                        .slice(0, 5)
                        .map((article, index) => (
                          <div key={article.id} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{article.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {article.views} views • {article.helpful} helpful
                              </p>
                            </div>
                            <Badge variant="outline">{article.category}</Badge>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
      </div>
    </ModernScreenWrapper>
  );
}