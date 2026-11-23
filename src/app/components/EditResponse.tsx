import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { ArrowLeft, Sparkles, Bold, Italic, List, Link as LinkIcon, Save } from 'lucide-react';
import { mockTickets } from '../data/mockData';

interface EditResponseProps {
  ticketId: string;
  onBack: () => void;
  onSave: () => void;
}

export function EditResponse({ ticketId, onBack, onSave }: EditResponseProps) {
  const ticket = mockTickets.find(t => t.id === ticketId);
  const [message, setMessage] = useState(ticket?.aiDraft || '');
  const [tone, setTone] = useState(50);
  const [showAIAssist, setShowAIAssist] = useState(false);
  
  const handleSave = () => {
    alert('Response saved!');
    onSave();
  };
  
  const handleAIAssist = () => {
    setShowAIAssist(true);
    setTimeout(() => {
      alert('AI suggestions applied!');
      setShowAIAssist(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#EAEAED] px-6 py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-[24px]">Edit Response</h1>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="secondary" onClick={onBack}>
              Cancel
            </Button>
            <Button variant="primary" icon={<Save size={16} />} onClick={handleSave}>
              Save & Continue
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {/* Editor */}
          <div className="col-span-2 space-y-4">
            <Card>
              <h3 className="text-[14px] mb-3">Response Editor</h3>
              
              {/* Toolbar */}
              <div className="flex gap-2 mb-3 pb-3 border-b border-[#EAEAED]">
                <button className="p-2 hover:bg-[#F6F6F7] rounded-[6px] transition-colors">
                  <Bold size={16} className="text-[#5E5E5E]" />
                </button>
                <button className="p-2 hover:bg-[#F6F6F7] rounded-[6px] transition-colors">
                  <Italic size={16} className="text-[#5E5E5E]" />
                </button>
                <button className="p-2 hover:bg-[#F6F6F7] rounded-[6px] transition-colors">
                  <List size={16} className="text-[#5E5E5E]" />
                </button>
                <button className="p-2 hover:bg-[#F6F6F7] rounded-[6px] transition-colors">
                  <LinkIcon size={16} className="text-[#5E5E5E]" />
                </button>
              </div>
              
              {/* Text Area */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-[#D7D7DA] rounded-[8px] text-[14px] resize-none focus:outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] leading-[1.6]"
                rows={16}
              />
              
              <div className="mt-3 text-[12px] text-[#5E5E5E]">
                {message.length} characters
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4">
            {/* Tone Adjustment */}
            <Card>
              <h3 className="text-[14px] mb-4">Tone of Voice</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[12px] text-[#5E5E5E] mb-2">
                    <span>Formal</span>
                    <span>Casual</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={tone}
                    onChange={(e) => setTone(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div className="text-[12px] text-center text-[#5E5E5E]">
                  Current: {tone < 33 ? 'Formal' : tone < 66 ? 'Balanced' : 'Casual'}
                </div>
              </div>
            </Card>
            
            {/* AI Assist */}
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-[#4C84FF]" />
                <h3 className="text-[14px]">AI Assist</h3>
              </div>
              
              <p className="text-[12px] text-[#5E5E5E] mb-4">
                Let AI help improve your response
              </p>
              
              <div className="space-y-2">
                <Button 
                  variant="secondary" 
                  className="w-full text-[12px]"
                  onClick={handleAIAssist}
                  disabled={showAIAssist}
                >
                  {showAIAssist ? 'Processing...' : 'Check Grammar'}
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full text-[12px]"
                  onClick={handleAIAssist}
                  disabled={showAIAssist}
                >
                  Make More Empathetic
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full text-[12px]"
                  onClick={handleAIAssist}
                  disabled={showAIAssist}
                >
                  Simplify Language
                </Button>
              </div>
            </Card>
            
            {/* Quick Snippets */}
            <Card>
              <h3 className="text-[14px] mb-3">Quick Snippets</h3>
              
              <div className="space-y-2">
                <button 
                  onClick={() => setMessage(message + "\n\nBest regards,\nSupport Team")}
                  className="w-full text-left p-2 hover:bg-[#F6F6F7] rounded-[6px] text-[12px] transition-colors"
                >
                  Add Signature
                </button>
                <button 
                  onClick={() => setMessage(message + "\n\nIf you need any further assistance, please don't hesitate to reach out.")}
                  className="w-full text-left p-2 hover:bg-[#F6F6F7] rounded-[6px] text-[12px] transition-colors"
                >
                  Add Follow-up Offer
                </button>
                <button 
                  onClick={() => setMessage(message + "\n\nThank you for your patience!")}
                  className="w-full text-left p-2 hover:bg-[#F6F6F7] rounded-[6px] text-[12px] transition-colors"
                >
                  Add Thank You
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
