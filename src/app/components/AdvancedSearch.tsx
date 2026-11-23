import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Search, X, Clock, Tag, User, AlertCircle, Sparkles, Calendar } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'ticket' | 'customer' | 'kb-article';
  title: string;
  subtitle: string;
  relevance: number;
  highlight?: string;
  metadata: Record<string, string>;
}

interface AdvancedSearchProps {
  onClose: () => void;
  onResultClick: (result: SearchResult) => void;
}

export function AdvancedSearch({ onClose, onResultClick }: AdvancedSearchProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'all' | 'tickets' | 'customers' | 'kb'>('all');
  const [isSearching, setIsSearching] = useState(false);

  const mockResults: SearchResult[] = [
    {
      id: 'TKT-1001',
      type: 'ticket',
      title: 'Unable to access premium features after payment',
      subtitle: 'Sarah Chen • 2 hours ago • High Priority',
      relevance: 98,
      highlight: 'Payment processed but permissions not updated',
      metadata: { status: 'open', priority: 'high', confidence: '94%' }
    },
    {
      id: 'KB-001',
      type: 'kb-article',
      title: 'How to manually refresh user permissions',
      subtitle: 'Technical Support • Used 47 times',
      relevance: 95,
      highlight: 'When users upgrade their account, permissions should update automatically...',
      metadata: { category: 'Technical', usage: '47' }
    },
    {
      id: 'CUST-245',
      type: 'customer',
      title: 'Sarah Chen',
      subtitle: 'TechCorp Inc. • Enterprise • sarah.chen@example.com',
      relevance: 92,
      highlight: '2 previous tickets, last contact 3 weeks ago',
      metadata: { tier: 'Enterprise', tickets: '2' }
    },
    {
      id: 'TKT-0945',
      type: 'ticket',
      title: 'Payment completed but account not upgraded',
      subtitle: 'Marcus Lee • 1 week ago • Resolved',
      relevance: 88,
      highlight: 'Similar issue - manual permission refresh resolved',
      metadata: { status: 'resolved', priority: 'medium', confidence: '96%' }
    }
  ];

  const filteredResults = mockResults.filter(result => {
    if (searchType === 'all') return true;
    if (searchType === 'tickets') return result.type === 'ticket';
    if (searchType === 'customers') return result.type === 'customer';
    if (searchType === 'kb') return result.type === 'kb-article';
    return true;
  });

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50" onClick={onClose}>
      <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Card className="p-6">
          {/* Search Header */}
          <div className="flex items-center gap-3 mb-4">
            <Search size={20} className="text-[#4C84FF]" />
            <input
              type="text"
              placeholder="Search tickets, customers, knowledge base..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handleSearch();
              }}
              autoFocus
              className="flex-1 text-[16px] outline-none"
            />
            <button onClick={onClose} className="text-[#5E5E5E] hover:text-[#1F1F1F]">
              <X size={20} />
            </button>
          </div>

          {/* Search Type Filters */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSearchType('all')}
              className={`px-3 py-1.5 rounded-[6px] text-[12px] transition-all ${
                searchType === 'all'
                  ? 'bg-[#4C84FF] text-white'
                  : 'bg-[#F6F6F7] text-[#5E5E5E] hover:bg-[#EAEAED]'
              }`}
            >
              All Results
            </button>
            <button
              onClick={() => setSearchType('tickets')}
              className={`px-3 py-1.5 rounded-[6px] text-[12px] transition-all ${
                searchType === 'tickets'
                  ? 'bg-[#4C84FF] text-white'
                  : 'bg-[#F6F6F7] text-[#5E5E5E] hover:bg-[#EAEAED]'
              }`}
            >
              Tickets
            </button>
            <button
              onClick={() => setSearchType('customers')}
              className={`px-3 py-1.5 rounded-[6px] text-[12px] transition-all ${
                searchType === 'customers'
                  ? 'bg-[#4C84FF] text-white'
                  : 'bg-[#F6F6F7] text-[#5E5E5E] hover:bg-[#EAEAED]'
              }`}
            >
              Customers
            </button>
            <button
              onClick={() => setSearchType('kb')}
              className={`px-3 py-1.5 rounded-[6px] text-[12px] transition-all ${
                searchType === 'kb'
                  ? 'bg-[#4C84FF] text-white'
                  : 'bg-[#F6F6F7] text-[#5E5E5E] hover:bg-[#EAEAED]'
              }`}
            >
              Knowledge Base
            </button>
          </div>

          {/* Search Tips */}
          {query === '' && (
            <div className="p-4 bg-[#F6F6F7] rounded-[6px] mb-4">
              <div className="text-[12px] text-[#5E5E5E] mb-2">Search tips:</div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5E5E5E]">
                <div>• Use quotes for exact match: "payment issue"</div>
                <div>• Filter by priority: priority:high</div>
                <div>• Search by status: status:open</div>
                <div>• Find by assignee: assignee:@sarah</div>
                <div>• Date range: created:last-week</div>
                <div>• Tag search: tag:vip</div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isSearching && (
            <div className="py-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#4C84FF]"></div>
              <div className="text-[12px] text-[#5E5E5E] mt-2">Searching...</div>
            </div>
          )}

          {/* Search Results */}
          {!isSearching && query !== '' && (
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-3">
                {filteredResults.length} results found
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredResults.map(result => (
                  <button
                    key={result.id}
                    onClick={() => onResultClick(result)}
                    className="w-full p-4 bg-white hover:bg-[#F6F6F7] border border-[#EAEAED] hover:border-[#4C84FF] rounded-[6px] text-left transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {result.type === 'ticket' && <AlertCircle size={16} className="text-[#4C84FF]" />}
                        {result.type === 'customer' && <User size={16} className="text-[#00C48C]" />}
                        {result.type === 'kb-article' && <Sparkles size={16} className="text-[#FFA500]" />}
                        <span className="text-[13px]">{result.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#5E5E5E]">
                          {result.relevance}% match
                        </span>
                        <div
                          className="w-12 h-1.5 bg-[#EAEAED] rounded-full overflow-hidden"
                        >
                          <div
                            className="h-full bg-[#4C84FF]"
                            style={{ width: `${result.relevance}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-[11px] text-[#5E5E5E] mb-2">
                      {result.subtitle}
                    </div>
                    
                    {result.highlight && (
                      <div className="text-[11px] text-[#5E5E5E] bg-[#F6F6F7] p-2 rounded-[4px] mb-2">
                        {result.highlight}
                      </div>
                    )}
                    
                    <div className="flex gap-2 flex-wrap">
                      {Object.entries(result.metadata).map(([key, value]) => (
                        <span
                          key={key}
                          className="px-2 py-0.5 bg-[#F0F4FF] text-[#4C84FF] text-[10px] rounded-[4px]"
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Keyboard Shortcuts Hint */}
          <div className="mt-4 pt-4 border-t border-[#EAEAED] flex items-center justify-between text-[11px] text-[#5E5E5E]">
            <div className="flex items-center gap-4">
              <div>
                <kbd className="px-1.5 py-0.5 bg-[#F6F6F7] border border-[#D7D7DA] rounded text-[10px]">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-[#F6F6F7] border border-[#D7D7DA] rounded text-[10px] ml-1">↓</kbd>
                <span className="ml-2">Navigate</span>
              </div>
              <div>
                <kbd className="px-1.5 py-0.5 bg-[#F6F6F7] border border-[#D7D7DA] rounded text-[10px]">Enter</kbd>
                <span className="ml-2">Select</span>
              </div>
              <div>
                <kbd className="px-1.5 py-0.5 bg-[#F6F6F7] border border-[#D7D7DA] rounded text-[10px]">Esc</kbd>
                <span className="ml-2">Close</span>
              </div>
            </div>
            <div>Press <kbd className="px-1.5 py-0.5 bg-[#F6F6F7] border border-[#D7D7DA] rounded text-[10px]">Ctrl K</kbd> anytime to search</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
