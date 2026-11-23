import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Filter, X, Calendar, User, Tag, AlertCircle, Clock, TrendingUp } from 'lucide-react';

interface FilterState {
  status: string[];
  priority: string[];
  assignee: string[];
  tags: string[];
  dateRange: { from: string; to: string };
  customer: string;
  aiConfidence: string[];
  hasAttachments: boolean | null;
}

interface AdvancedFiltersProps {
  onApply: (filters: FilterState) => void;
  onClose: () => void;
}

export function AdvancedFilters({ onApply, onClose }: AdvancedFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    status: [],
    priority: [],
    assignee: [],
    tags: [],
    dateRange: { from: '', to: '' },
    customer: '',
    aiConfidence: [],
    hasAttachments: null
  });

  const [savedFilters] = useState([
    { name: 'High Priority Unassigned', count: 8 },
    { name: 'My Open Tickets', count: 12 },
    { name: 'VIP Customers', count: 5 },
    { name: 'Low Confidence AI', count: 3 }
  ]);

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      const current = prev[category] as string[];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value]
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      status: [],
      priority: [],
      assignee: [],
      tags: [],
      dateRange: { from: '', to: '' },
      customer: '',
      aiConfidence: [],
      hasAttachments: null
    });
  };

  const activeFiltersCount = 
    filters.status.length +
    filters.priority.length +
    filters.assignee.length +
    filters.tags.length +
    filters.aiConfidence.length +
    (filters.dateRange.from ? 1 : 0) +
    (filters.customer ? 1 : 0) +
    (filters.hasAttachments !== null ? 1 : 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[20px] mb-1">Advanced Filters</h2>
              <p className="text-[14px] text-[#5E5E5E]">
                {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#5E5E5E] hover:text-[#1F1F1F] text-[24px]"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Saved Filters */}
            <div className="col-span-3 mb-2">
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <TrendingUp size={16} className="text-[#4C84FF]" />
                Quick Filters
              </h3>
              <div className="flex gap-2 flex-wrap">
                {savedFilters.map(filter => (
                  <button
                    key={filter.name}
                    className="px-3 py-2 bg-white border border-[#D7D7DA] hover:border-[#4C84FF] rounded-[6px] text-[13px] transition-all"
                  >
                    {filter.name} <span className="text-[#5E5E5E]">({filter.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-[#4C84FF]" />
                Status
              </h3>
              <div className="space-y-2">
                {['open', 'in-progress', 'pending', 'resolved', 'closed'].map(status => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.status.includes(status)}
                      onChange={() => toggleFilter('status', status)}
                      className="w-4 h-4 accent-[#4C84FF]"
                    />
                    <span className="text-[13px] capitalize">{status.replace('-', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Priority */}
            <div>
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-[#4C84FF]" />
                Priority
              </h3>
              <div className="space-y-2">
                {['high', 'medium', 'low'].map(priority => (
                  <label key={priority} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.priority.includes(priority)}
                      onChange={() => toggleFilter('priority', priority)}
                      className="w-4 h-4 accent-[#4C84FF]"
                    />
                    <span className="text-[13px] capitalize">{priority}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* AI Confidence */}
            <div>
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <TrendingUp size={16} className="text-[#4C84FF]" />
                AI Confidence
              </h3>
              <div className="space-y-2">
                {['high', 'medium', 'low'].map(confidence => (
                  <label key={confidence} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.aiConfidence.includes(confidence)}
                      onChange={() => toggleFilter('aiConfidence', confidence)}
                      className="w-4 h-4 accent-[#4C84FF]"
                    />
                    <span className="text-[13px] capitalize">
                      {confidence === 'high' ? 'High (>85%)' :
                       confidence === 'medium' ? 'Medium (60-85%)' :
                       'Low (<60%)'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Assignee */}
            <div>
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <User size={16} className="text-[#4C84FF]" />
                Assignee
              </h3>
              <div className="space-y-2">
                {['Unassigned', 'Sarah Johnson', 'Mike Chen', 'Emma Davis', 'Me'].map(assignee => (
                  <label key={assignee} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.assignee.includes(assignee)}
                      onChange={() => toggleFilter('assignee', assignee)}
                      className="w-4 h-4 accent-[#4C84FF]"
                    />
                    <span className="text-[13px]">{assignee}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <Tag size={16} className="text-[#4C84FF]" />
                Tags
              </h3>
              <div className="space-y-2">
                {['VIP', 'Technical', 'Billing', 'Bug', 'Feature Request'].map(tag => (
                  <label key={tag} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.tags.includes(tag)}
                      onChange={() => toggleFilter('tags', tag)}
                      className="w-4 h-4 accent-[#4C84FF]"
                    />
                    <span className="text-[13px]">{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Attachments */}
            <div>
              <h3 className="text-[14px] mb-3">Attachments</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={filters.hasAttachments === true}
                    onChange={() => setFilters(prev => ({ ...prev, hasAttachments: true }))}
                    className="w-4 h-4 accent-[#4C84FF]"
                  />
                  <span className="text-[13px]">Has attachments</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={filters.hasAttachments === false}
                    onChange={() => setFilters(prev => ({ ...prev, hasAttachments: false }))}
                    className="w-4 h-4 accent-[#4C84FF]"
                  />
                  <span className="text-[13px]">No attachments</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={filters.hasAttachments === null}
                    onChange={() => setFilters(prev => ({ ...prev, hasAttachments: null }))}
                    className="w-4 h-4 accent-[#4C84FF]"
                  />
                  <span className="text-[13px]">Any</span>
                </label>
              </div>
            </div>

            {/* Date Range */}
            <div className="col-span-3 pt-4 border-t border-[#EAEAED]">
              <h3 className="text-[14px] mb-3 flex items-center gap-2">
                <Calendar size={16} className="text-[#4C84FF]" />
                Date Range
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] text-[#5E5E5E] block mb-1">From</label>
                  <input
                    type="date"
                    value={filters.dateRange.from}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      dateRange: { ...prev.dateRange, from: e.target.value }
                    }))}
                    className="w-full px-3 py-2 border border-[#D7D7DA] rounded-[6px] text-[13px]"
                  />
                </div>
                <div>
                  <label className="text-[12px] text-[#5E5E5E] block mb-1">To</label>
                  <input
                    type="date"
                    value={filters.dateRange.to}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      dateRange: { ...prev.dateRange, to: e.target.value }
                    }))}
                    className="w-full px-3 py-2 border border-[#D7D7DA] rounded-[6px] text-[13px]"
                  />
                </div>
              </div>
            </div>

            {/* Customer Search */}
            <div className="col-span-3 pt-4 border-t border-[#EAEAED]">
              <h3 className="text-[14px] mb-3">Customer Name or Email</h3>
              <input
                type="text"
                placeholder="Search by customer..."
                value={filters.customer}
                onChange={(e) => setFilters(prev => ({ ...prev, customer: e.target.value }))}
                className="w-full px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#EAEAED]">
            <Button variant="secondary" onClick={clearFilters}>
              <X size={16} />
              Clear All
            </Button>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={() => {
                onApply(filters);
                onClose();
              }}>
                <Filter size={16} />
                Apply Filters
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
