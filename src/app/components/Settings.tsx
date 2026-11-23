import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { ArrowLeft, Bell, MessageSquare, Database, Save } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

export function Settings({ onBack }: SettingsProps) {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(true);
  const [aiSuggestions, setAISuggestions] = useState(true);
  const [tonePreference, setTonePreference] = useState('balanced');
  const [autoResolve, setAutoResolve] = useState(false);
  
  const handleSave = () => {
    alert('Settings saved successfully!');
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
            <h1 className="text-[24px]">Settings</h1>
          </div>
          
          <Button variant="primary" icon={<Save size={16} />} onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Notifications */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Bell size={20} className="text-[#4C84FF]" />
            <h2 className="text-[18px]">Notification Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#EAEAED]">
              <div>
                <div className="text-[14px] mb-1">Email Notifications</div>
                <div className="text-[12px] text-[#5E5E5E]">Receive email alerts for new tickets</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#D7D7DA] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C84FF]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-[#EAEAED]">
              <div>
                <div className="text-[14px] mb-1">Slack Notifications</div>
                <div className="text-[12px] text-[#5E5E5E]">Get Slack messages for high-priority tickets</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={slackNotifications}
                  onChange={(e) => setSlackNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#D7D7DA] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C84FF]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="text-[14px] mb-1">AI Auto-Suggestions</div>
                <div className="text-[12px] text-[#5E5E5E]">Show AI-generated responses automatically</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={aiSuggestions}
                  onChange={(e) => setAISuggestions(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#D7D7DA] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C84FF]"></div>
              </label>
            </div>
          </div>
        </Card>
        
        {/* Tone of Voice */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare size={20} className="text-[#4C84FF]" />
            <h2 className="text-[18px]">Tone of Voice Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-[14px] mb-3 block">Default Response Tone</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-[#D7D7DA] rounded-[6px] cursor-pointer hover:border-[#4C84FF] transition-colors">
                  <input
                    type="radio"
                    name="tone"
                    value="formal"
                    checked={tonePreference === 'formal'}
                    onChange={(e) => setTonePreference(e.target.value)}
                    className="text-[#4C84FF] focus:ring-[#4C84FF]"
                  />
                  <div>
                    <div className="text-[14px]">Formal & Professional</div>
                    <div className="text-[12px] text-[#5E5E5E]">Best for enterprise customers</div>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3 border border-[#D7D7DA] rounded-[6px] cursor-pointer hover:border-[#4C84FF] transition-colors">
                  <input
                    type="radio"
                    name="tone"
                    value="balanced"
                    checked={tonePreference === 'balanced'}
                    onChange={(e) => setTonePreference(e.target.value)}
                    className="text-[#4C84FF] focus:ring-[#4C84FF]"
                  />
                  <div>
                    <div className="text-[14px]">Balanced & Friendly</div>
                    <div className="text-[12px] text-[#5E5E5E]">Works for most customers</div>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3 border border-[#D7D7DA] rounded-[6px] cursor-pointer hover:border-[#4C84FF] transition-colors">
                  <input
                    type="radio"
                    name="tone"
                    value="casual"
                    checked={tonePreference === 'casual'}
                    onChange={(e) => setTonePreference(e.target.value)}
                    className="text-[#4C84FF] focus:ring-[#4C84FF]"
                  />
                  <div>
                    <div className="text-[14px]">Casual & Conversational</div>
                    <div className="text-[12px] text-[#5E5E5E]">Best for startups and tech-savvy users</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Knowledge Base */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Database size={20} className="text-[#4C84FF]" />
            <h2 className="text-[18px]">Knowledge Base Connections</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-[#D7D7DA] rounded-[8px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#4C84FF] rounded-[6px] flex items-center justify-center text-white">
                  KB
                </div>
                <div>
                  <div className="text-[14px]">Internal Knowledge Base</div>
                  <div className="text-[12px] text-[#2EB67D]">Connected • 1,247 articles</div>
                </div>
              </div>
              <Button variant="secondary">Manage</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-[#D7D7DA] rounded-[8px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5E5E5E] rounded-[6px] flex items-center justify-center text-white">
                  GD
                </div>
                <div>
                  <div className="text-[14px]">Google Drive Documentation</div>
                  <div className="text-[12px] text-[#2EB67D]">Connected • 342 docs</div>
                </div>
              </div>
              <Button variant="secondary">Manage</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-dashed border-[#D7D7DA] rounded-[8px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EAEAED] rounded-[6px] flex items-center justify-center">
                  <Database size={20} className="text-[#5E5E5E]" />
                </div>
                <div>
                  <div className="text-[14px]">Add New Source</div>
                  <div className="text-[12px] text-[#5E5E5E]">Connect Notion, Confluence, or custom API</div>
                </div>
              </div>
              <Button variant="primary">Connect</Button>
            </div>
          </div>
        </Card>
        
        {/* AI Automation */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[18px]">AI Automation</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#EAEAED]">
              <div>
                <div className="text-[14px] mb-1">Auto-Resolve Simple Tickets</div>
                <div className="text-[12px] text-[#5E5E5E]">Let AI automatically resolve high-confidence simple tickets</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoResolve}
                  onChange={(e) => setAutoResolve(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#D7D7DA] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C84FF]"></div>
              </label>
            </div>
            
            <div className="p-4 bg-[rgba(244,193,78,0.12)] border border-[rgba(244,193,78,0.32)] rounded-[8px]">
              <div className="text-[14px] mb-2 flex items-center gap-2">
                <span>⚠️</span>
                <span>Important Note</span>
              </div>
              <div className="text-[12px] text-[#5E5E5E] leading-[1.6]">
                Auto-resolve will only work for tickets with 95%+ confidence scores. All actions are logged and can be reviewed in the audit log.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
