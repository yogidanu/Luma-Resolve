import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import { Search, Plus, Edit2, Trash2, BookOpen, Tag, ExternalLink, ChevronDown, ChevronRight, FileText, Link as LinkIcon } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  tags: string[];
  content: string;
  lastUpdated: string;
  usageCount: number;
  status: 'published' | 'draft';
  linkedTickets: string[];
}

interface KnowledgeBaseProps {
  onBack: () => void;
}

const mockArticles: Article[] = [
  {
    id: 'KB-001',
    title: 'How to manually refresh user permissions',
    category: 'Technical Support',
    tags: ['permissions', 'billing', 'account'],
    content: 'When users upgrade their account, permissions should update automatically. However, if there\'s a sync delay:\n\n1. Navigate to Admin > User Management\n2. Search for the user\'s email\n3. Click "Refresh Permissions"\n4. Verify new tier is reflected\n\nTypical resolution time: < 5 minutes',
    lastUpdated: '2 days ago',
    usageCount: 47,
    status: 'published',
    linkedTickets: ['TKT-1001', 'TKT-0945', 'TKT-0823']
  },
  {
    id: 'KB-002',
    title: 'CSV export size limitations and workarounds',
    category: 'Technical Support',
    tags: ['export', 'bug', 'data'],
    content: 'Current limitation: CSV exports fail for datasets > 10,000 rows.\n\nWorkaround:\n1. Split exports by date range (3 months recommended)\n2. Download each segment separately\n3. Combine CSV files if needed\n\nFix scheduled: Release v2.8.1 (7 days)',
    lastUpdated: '5 days ago',
    usageCount: 23,
    status: 'published',
    linkedTickets: ['TKT-1002']
  },
  {
    id: 'KB-003',
    title: 'Understanding invoice line items and add-ons',
    category: 'Billing',
    tags: ['billing', 'pricing', 'invoice'],
    content: 'Invoice breakdown:\n- Base plan price (Starter $39, Pro $79, Enterprise $299)\n- Add-ons (Analytics +$10, API Access +$20, Priority Support +$50)\n- Prorated charges if mid-cycle changes\n\nTo view add-ons: Settings > Billing > Active Add-ons',
    lastUpdated: '1 week ago',
    usageCount: 89,
    status: 'published',
    linkedTickets: ['TKT-1003']
  },
  {
    id: 'KB-004',
    title: 'API rate limit troubleshooting',
    category: 'Technical Support',
    tags: ['api', 'technical', 'rate-limits'],
    content: 'Rate limits by plan:\n- Starter: 1,000 requests/hour\n- Pro: 10,000 requests/hour\n- Enterprise: 100,000 requests/hour\n\nIf hitting limits:\n1. Check current usage in API Dashboard\n2. Implement exponential backoff\n3. Consider upgrading plan\n4. Request custom limit (Enterprise only)',
    lastUpdated: '3 days ago',
    usageCount: 34,
    status: 'published',
    linkedTickets: []
  },
  {
    id: 'KB-005',
    title: 'SSO integration setup guide (Draft)',
    category: 'Enterprise Features',
    tags: ['sso', 'security', 'enterprise'],
    content: 'Draft content for SSO setup...\n\nThis article is being reviewed by the security team.',
    lastUpdated: '1 hour ago',
    usageCount: 0,
    status: 'draft',
    linkedTickets: []
  }
];

export function KnowledgeBase({ onBack }: KnowledgeBaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const categories = ['all', ...Array.from(new Set(mockArticles.map(a => a.category)))];
  
  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    total: mockArticles.length,
    published: mockArticles.filter(a => a.status === 'published').length,
    drafts: mockArticles.filter(a => a.status === 'draft').length,
    totalUsage: mockArticles.reduce((sum, a) => sum + a.usageCount, 0)
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-card border-b border-border/40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </button>
            <div className="flex items-center gap-2">
              <BookOpen size={24} className="text-primary" />
              <h1 className="text-[24px] text-foreground">Knowledge Base</h1>
            </div>
          </div>
          
          <Button onClick={() => setIsCreating(true)}>
            <Plus size={16} />
            New Article
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="p-4 bg-card border-border">
            <div className="text-muted-foreground text-[12px]">Total Articles</div>
            <div className="text-[24px] mt-1 text-foreground">{stats.total}</div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-muted-foreground text-[12px]">Published</div>
            <div className="text-[24px] mt-1 text-emerald-500">{stats.published}</div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-muted-foreground text-[12px]">Drafts</div>
            <div className="text-[24px] mt-1 text-amber-500">{stats.drafts}</div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-muted-foreground text-[12px]">Total Usage</div>
            <div className="text-[24px] mt-1 text-foreground">{stats.totalUsage}</div>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-4 bg-card border-border">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search articles, tags..."
                icon={<Search size={16} />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-[6px] text-[14px] bg-card text-foreground hover:border-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {/* Articles List */}
        <div className="space-y-3">
          {filteredArticles.map(article => (
            <Card key={article.id} className="p-4 bg-card border-border hover:shadow-md transition-all">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                        className="hover:bg-muted p-1 rounded transition-colors"
                      >
                        {expandedArticle === article.id ? (
                          <ChevronDown size={16} className="text-muted-foreground" />
                        ) : (
                          <ChevronRight size={16} className="text-muted-foreground" />
                        )}
                      </button>
                      <FileText size={16} className="text-primary" />
                      <h3 className="text-[16px] text-foreground font-medium">{article.title}</h3>
                      {article.status === 'draft' && (
                        <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[12px] rounded-[4px] font-medium border border-amber-500/20">
                          Draft
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2 ml-8 text-[12px] text-muted-foreground">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>Used {article.usageCount} times</span>
                      <span>•</span>
                      <span>Updated {article.lastUpdated}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-2 mt-2 ml-8">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-[12px] rounded-[4px] flex items-center gap-1 border border-primary/20"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted rounded-[6px] transition-colors text-muted-foreground hover:text-foreground">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 rounded-[6px] transition-colors text-muted-foreground hover:text-destructive">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedArticle === article.id && (
                  <div className="ml-8 pt-3 border-t border-border space-y-3">
                    <div className="p-4 bg-muted/50 rounded-[6px] text-[14px] text-foreground/90 whitespace-pre-line leading-relaxed">
                      {article.content}
                    </div>
                    
                    {article.linkedTickets.length > 0 && (
                      <div>
                        <div className="text-[12px] text-muted-foreground mb-2 flex items-center gap-1">
                          <LinkIcon size={12} />
                          Linked Tickets ({article.linkedTickets.length})
                        </div>
                        <div className="flex gap-2">
                          {article.linkedTickets.map(ticketId => (
                            <span
                              key={ticketId}
                              className="px-2 py-1 bg-card border border-border text-foreground text-[12px] rounded-[4px] hover:border-primary transition-colors cursor-pointer"
                            >
                              {ticketId}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <Card className="p-12 text-center bg-card border-border">
            <BookOpen size={48} className="text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-[18px] text-foreground mb-2">No articles found</h3>
            <p className="text-[14px] text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </Card>
        )}
      </div>

      {/* Create Article Modal (simplified) */}
      {isCreating && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm" onClick={() => setIsCreating(false)}>
          <Card className="p-6 w-full max-w-2xl bg-card border-border shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[20px] text-foreground font-semibold mb-6">Create New Article</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1.5 ml-1">Title</label>
                <Input placeholder="Article title" />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1.5 ml-1">Category</label>
                <select className="w-full px-4 py-2 border border-border rounded-[6px] text-[14px] bg-card text-foreground focus:ring-1 focus:ring-primary focus:outline-none">
                  <option>Select category...</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                  <option>Enterprise Features</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1.5 ml-1">Content</label>
                <textarea
                  placeholder="Article content..."
                  className="w-full px-4 py-2 border border-border rounded-[6px] text-[14px] bg-card text-foreground min-h-[200px] focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[12px] text-muted-foreground mb-1.5 ml-1">Tags</label>
                <Input placeholder="Tags (comma-separated)" />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <Button variant="secondary" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreating(false)}>
                  Create Article
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div></div>
  );
}
