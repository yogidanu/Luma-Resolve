import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Edit3, XCircle } from 'lucide-react';

interface AutoDocumentationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onApprove: () => void;
  ticketId: string;
}

export function AutoDocumentationPanel({
  isOpen,
  onClose,
  onApprove,
  ticketId
}: AutoDocumentationPanelProps) {
  const [summary, setSummary] = useState('Customer experiencing API authentication errors due to expired API key. Issue resolved by guiding user through key refresh process.');
  const [rootCause, setRootCause] = useState('Expired API key');
  const [resolutionSteps, setResolutionSteps] = useState('1. Verified API key expiration\n2. Guided customer through key refresh in dashboard\n3. Confirmed successful authentication');
  const [category, setCategory] = useState('API / Authentication');
  const [tags, setTags] = useState(['API', 'Authentication', 'Resolved']);
  const [isEditing, setIsEditing] = useState(false);

  if (!isOpen) return null;

  const handleApprove = () => {
    onApprove();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
      <div className="bg-white rounded-[12px] shadow-[0px_4px_24px_rgba(0,0,0,0.20)] w-full max-w-[720px] max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#EAEAED] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
              <Sparkles size={20} className="text-[#4C84FF]" />
            </div>
            <div>
              <h2 className="text-[20px]">Auto Documentation</h2>
              <p className="text-[12px] text-[#5E5E5E]">Ticket {ticketId}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="flex items-start gap-2 p-4 bg-[rgba(76,132,255,0.08)] border border-[rgba(76,132,255,0.20)] rounded-[8px] mb-6">
            <Sparkles size={16} className="text-[#4C84FF] flex-shrink-0 mt-0.5" />
            <p className="text-[13px] text-[#1F1F1F] leading-relaxed">
              AI has automatically generated documentation for this resolved ticket. Review and approve or make edits as needed.
            </p>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[13px] text-[#5E5E5E]">SUMMARY</label>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-[12px] text-[#4C84FF] hover:underline flex items-center gap-1"
                >
                  <Edit3 size={12} />
                  Edit
                </button>
              )}
            </div>
            {isEditing ? (
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full min-h-[80px] px-4 py-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] transition-all resize-none"
              />
            ) : (
              <div className="p-4 bg-[#FAFAFA] border border-[#EAEAED] rounded-[6px] text-[14px] leading-relaxed">
                {summary}
              </div>
            )}
          </div>

          {/* Root Cause */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#5E5E5E] mb-2">ROOT CAUSE</label>
            {isEditing ? (
              <input
                type="text"
                value={rootCause}
                onChange={(e) => setRootCause(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] transition-all"
              />
            ) : (
              <div className="p-4 bg-[#FAFAFA] border border-[#EAEAED] rounded-[6px] text-[14px]">
                {rootCause}
              </div>
            )}
          </div>

          {/* Resolution Steps */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#5E5E5E] mb-2">RESOLUTION STEPS</label>
            {isEditing ? (
              <textarea
                value={resolutionSteps}
                onChange={(e) => setResolutionSteps(e.target.value)}
                className="w-full min-h-[100px] px-4 py-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] transition-all resize-none"
              />
            ) : (
              <div className="p-4 bg-[#FAFAFA] border border-[#EAEAED] rounded-[6px] text-[14px] leading-relaxed whitespace-pre-wrap">
                {resolutionSteps}
              </div>
            )}
          </div>

          {/* Metadata - Category */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#5E5E5E] mb-2">CATEGORY</label>
            {isEditing ? (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] transition-all"
              >
                <option value="API / Authentication">API / Authentication</option>
                <option value="Billing / Payment">Billing / Payment</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Account Management">Account Management</option>
              </select>
            ) : (
              <div className="p-4 bg-[#FAFAFA] border border-[#EAEAED] rounded-[6px] text-[14px]">
                {category}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#5E5E5E] mb-2">TAGS</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[rgba(76,132,255,0.12)] text-[#4C84FF] text-[12px] rounded-[6px] flex items-center gap-2"
                >
                  {tag}
                  {isEditing && (
                    <button
                      onClick={() => setTags(tags.filter((_, i) => i !== index))}
                      className="hover:text-[#E25555]"
                    >
                      <XCircle size={12} />
                    </button>
                  )}
                </span>
              ))}
              {isEditing && (
                <button className="px-3 py-1.5 bg-[#F6F6F7] border border-[#EAEAED] text-[#5E5E5E] text-[12px] rounded-[6px] hover:bg-[#EAEAED] transition-colors">
                  + Add Tag
                </button>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="flex items-center gap-3 pt-4 border-t border-[#EAEAED]">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 px-4 py-2.5 bg-white border border-[#EAEAED] text-[#1F1F1F] rounded-[6px] text-[14px] hover:bg-[#FAFAFA] transition-colors"
              >
                Cancel Editing
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 px-4 py-2.5 bg-[#4C84FF] text-white rounded-[6px] text-[14px] hover:bg-[#3D73E8] transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Footer - Action Buttons */}
        {!isEditing && (
          <div className="px-8 py-6 border-t border-[#EAEAED] flex items-center justify-end gap-3 flex-shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-white border border-[#EAEAED] text-[#1F1F1F] rounded-[6px] text-[14px] hover:bg-[#FAFAFA] transition-colors flex items-center gap-2"
            >
              <XCircle size={16} />
              Reject
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 bg-white border border-[#EAEAED] text-[#1F1F1F] rounded-[6px] text-[14px] hover:bg-[#FAFAFA] transition-colors flex items-center gap-2"
            >
              <Edit3 size={16} />
              Edit
            </button>
            <button
              onClick={handleApprove}
              className="px-5 py-2.5 bg-[#4C84FF] text-white rounded-[6px] text-[14px] hover:bg-[#3D73E8] transition-colors flex items-center gap-2"
            >
              <CheckCircle size={16} />
              Approve
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
