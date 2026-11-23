import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { ArrowLeft, Sparkles, FileText, Tag, Save, Edit3 } from 'lucide-react';
import { Input } from './Input';

interface AutoDocumentationProps {
  ticketId: string;
  onBack: () => void;
  onSave: () => void;
}

export function AutoDocumentation({ ticketId, onBack, onSave }: AutoDocumentationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [summary, setSummary] = useState('Customer upgraded to Enterprise plan but account permissions were not automatically updated due to billing system sync delay.');
  const [rootCause, setRootCause] = useState('Sync delay between Stripe payment processing and internal permissions database.');
  const [resolution, setResolution] = useState('Manually refreshed account permissions in admin panel. Verified Enterprise features are now accessible.');
  const [tags, setTags] = useState(['payment-issue', 'permissions', 'enterprise']);
  const [newTag, setNewTag] = useState('');
  
  const handleSave = () => {
    setIsEditing(false);
    alert('Documentation saved successfully!');
    onSave();
  };
  
  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };
  
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
            <div className="flex items-center gap-2">
              <Sparkles size={24} className="text-[#4C84FF]" />
              <h1 className="text-[24px]">Auto Documentation</h1>
            </div>
          </div>
          
          <div className="flex gap-2">
            {!isEditing ? (
              <>
                <Button variant="secondary" icon={<Edit3 size={16} />} onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
                <Button variant="primary" icon={<Save size={16} />} onClick={handleSave}>
                  Save & Close Ticket
                </Button>
              </>
            ) : (
              <>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button variant="primary" icon={<Save size={16} />} onClick={handleSave}>
                  Save Changes
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* AI Banner */}
        <div className="bg-[rgba(76,132,255,0.06)] border border-[rgba(76,132,255,0.32)] rounded-[8px] p-4">
          <div className="flex items-start gap-3">
            <Sparkles size={20} className="text-[#4C84FF] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[14px] mb-1">AI Generated Documentation</div>
              <div className="text-[12px] text-[#5E5E5E]">
                This documentation was automatically generated based on the ticket resolution. You can review and edit before saving.
              </div>
            </div>
          </div>
        </div>
        
        {/* Ticket Summary */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={20} className="text-[#4C84FF]" />
            <h2 className="text-[18px]">Ticket Summary</h2>
          </div>
          
          {isEditing ? (
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full p-3 border border-[#D7D7DA] rounded-[6px] text-[14px] resize-none focus:outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] leading-[1.6]"
              rows={3}
            />
          ) : (
            <p className="text-[14px] text-[#5E5E5E] leading-[1.6]">{summary}</p>
          )}
        </Card>
        
        {/* Root Cause */}
        <Card>
          <h2 className="text-[18px] mb-4">Root Cause Analysis</h2>
          
          {isEditing ? (
            <textarea
              value={rootCause}
              onChange={(e) => setRootCause(e.target.value)}
              className="w-full p-3 border border-[#D7D7DA] rounded-[6px] text-[14px] resize-none focus:outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] leading-[1.6]"
              rows={3}
            />
          ) : (
            <p className="text-[14px] text-[#5E5E5E] leading-[1.6]">{rootCause}</p>
          )}
        </Card>
        
        {/* Resolution Steps */}
        <Card>
          <h2 className="text-[18px] mb-4">Resolution Steps</h2>
          
          {isEditing ? (
            <textarea
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full p-3 border border-[#D7D7DA] rounded-[6px] text-[14px] resize-none focus:outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] leading-[1.6]"
              rows={4}
            />
          ) : (
            <p className="text-[14px] text-[#5E5E5E] leading-[1.6]">{resolution}</p>
          )}
        </Card>
        
        {/* Tags & Metadata */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Tag size={20} className="text-[#4C84FF]" />
            <h2 className="text-[18px]">Tags & Classification</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 bg-[rgba(76,132,255,0.12)] text-[#4C84FF] rounded-[6px] text-[12px] flex items-center gap-2"
              >
                {tag}
                {isEditing && (
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-[#E25555] transition-colors"
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
          
          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder="Add new tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="flex-1"
              />
              <Button variant="secondary" onClick={handleAddTag}>
                Add Tag
              </Button>
            </div>
          )}
        </Card>
        
        {/* Metadata */}
        <Card>
          <h2 className="text-[18px] mb-4">Metadata</h2>
          
          <div className="grid grid-cols-2 gap-4 text-[14px]">
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-1">Ticket ID</div>
              <div>TKT-1001</div>
            </div>
            
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-1">Resolution Time</div>
              <div>12 minutes</div>
            </div>
            
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-1">Agent</div>
              <div>Agent User</div>
            </div>
            
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-1">AI Confidence</div>
              <div className="text-[#2EB67D]">94% (High)</div>
            </div>
            
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-1">Priority</div>
              <div>High</div>
            </div>
            
            <div>
              <div className="text-[12px] text-[#5E5E5E] mb-1">Category</div>
              <div>Payment Issues</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
