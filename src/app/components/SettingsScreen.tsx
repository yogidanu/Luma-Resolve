import React, { useState } from 'react';
import { ArrowLeft, User, Bell, MessageSquare, Database, Check } from 'lucide-react';

interface SettingsScreenProps {
  onBack: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function SettingsScreen({ onBack, isDarkMode, onToggleDarkMode }: SettingsScreenProps) {
  const [selectedTone, setSelectedTone] = useState('professional');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [desktopNotifications, setDesktopNotifications] = useState(true);
  const [aiSuggestions, setAiSuggestions] = useState(true);
  const [kbConnected, setKbConnected] = useState(true);

  const toneOptions = [
    {
      value: 'neutral',
      label: 'Neutral',
      description: 'Balanced and straightforward communication'
    },
    {
      value: 'professional',
      label: 'Professional',
      description: 'Formal and business-appropriate tone'
    },
    {
      value: 'friendly',
      label: 'Friendly',
      description: 'Warm and approachable language'
    },
    {
      value: 'crisp-intelligent',
      label: 'Crisp Intelligent',
      description: 'Clear, concise, and authoritative'
    },
    {
      value: 'empathetic',
      label: 'Empathetic',
      description: 'Understanding and compassionate'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-card border-b border-border/40">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-[20px] font-bold text-foreground">Settings</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Profile Section */}
          <div className="bg-white border border-[#EAEAED] rounded-[8px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
                <User size={20} className="text-[#4C84FF]" />
              </div>
              <h2 className="text-[18px]">User Profile</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-[#5E5E5E] mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Agent User"
                    className="w-full px-4 py-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-[#5E5E5E] mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="agent@company.com"
                    className="w-full px-4 py-3 bg-white border border-[#D7D7DA] rounded-[6px] text-[14px] outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-[#5E5E5E] mb-2">Role</label>
                <input
                  type="text"
                  defaultValue="Support Agent"
                  disabled
                  className="w-full px-4 py-3 bg-[#F6F6F7] border border-[#EAEAED] rounded-[6px] text-[14px] text-[#5E5E5E]"
                />
              </div>
            </div>
          </div>

          {/* Tone of Voice Preferences */}
          <div className="bg-white border border-[#EAEAED] rounded-[8px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
                <MessageSquare size={20} className="text-[#4C84FF]" />
              </div>
              <h2 className="text-[18px]">Tone of Voice Preferences</h2>
            </div>

            <p className="text-[13px] text-[#5E5E5E] mb-6">
              Select your preferred tone for AI-generated responses. This will influence how LumaAI drafts messages to customers.
            </p>

            <div className="space-y-3">
              {toneOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedTone(option.value)}
                  className={`w-full p-4 border rounded-[8px] text-left transition-all ${
                    selectedTone === option.value
                      ? 'border-[#4C84FF] bg-[rgba(76,132,255,0.08)]'
                      : 'border-[#EAEAED] bg-white hover:bg-[#FAFAFA]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-[14px] mb-1">{option.label}</div>
                      <div className="text-[13px] text-[#5E5E5E]">{option.description}</div>
                    </div>
                    {selectedTone === option.value && (
                      <div className="w-5 h-5 bg-[#4C84FF] rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white border border-[#EAEAED] rounded-[8px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
                <Bell size={20} className="text-[#4C84FF]" />
              </div>
              <h2 className="text-[18px]">Notification Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-[#EAEAED]">
                <div>
                  <div className="text-[14px] mb-1">Email Notifications</div>
                  <div className="text-[13px] text-[#5E5E5E]">Receive email alerts for new tickets</div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    emailNotifications ? 'bg-[#4C84FF]' : 'bg-[#D7D7DA]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      emailNotifications ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-[#EAEAED]">
                <div>
                  <div className="text-[14px] mb-1">Desktop Notifications</div>
                  <div className="text-[13px] text-[#5E5E5E]">Show desktop alerts for urgent tickets</div>
                </div>
                <button
                  onClick={() => setDesktopNotifications(!desktopNotifications)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    desktopNotifications ? 'bg-[#4C84FF]' : 'bg-[#D7D7DA]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      desktopNotifications ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-[14px] mb-1">AI Suggestions</div>
                  <div className="text-[13px] text-[#5E5E5E]">Enable real-time AI assistance</div>
                </div>
                <button
                  onClick={() => setAiSuggestions(!aiSuggestions)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    aiSuggestions ? 'bg-[#4C84FF]' : 'bg-[#D7D7DA]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      aiSuggestions ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Knowledge Base Integration */}
          <div className="bg-white border border-[#EAEAED] rounded-[8px] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgba(76,132,255,0.12)] rounded-[8px] flex items-center justify-center">
                <Database size={20} className="text-[#4C84FF]" />
              </div>
              <h2 className="text-[18px]">Knowledge Base Integration</h2>
            </div>

            <div className="flex items-center justify-between p-4 bg-[rgba(46,182,125,0.08)] border border-[rgba(46,182,125,0.20)] rounded-[8px] mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2EB67D] rounded-full flex items-center justify-center">
                  <Check size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-[14px]">Connected</div>
                  <div className="text-[12px] text-[#5E5E5E]">Knowledge base synced 2 minutes ago</div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white border border-[#EAEAED] text-[#1F1F1F] rounded-[6px] text-[13px] hover:bg-[#FAFAFA] transition-colors">
                Refresh
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#5E5E5E]">Total Articles</span>
                <span>1,247</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#5E5E5E]">Last Updated</span>
                <span>Nov 28, 2024</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#5E5E5E]">AI Training Status</span>
                <span className="text-[#2EB67D]">Active</span>
              </div>
            </div>

            <button className="w-full mt-6 px-4 py-3 bg-[#F6F6F7] text-[#1F1F1F] border border-[#EAEAED] rounded-[6px] text-[14px] hover:bg-[#EAEAED] transition-colors">
              Manage Knowledge Base
            </button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-white border border-[#EAEAED] text-[#1F1F1F] rounded-[6px] text-[14px] hover:bg-[#FAFAFA] transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-3 bg-[#4C84FF] text-white rounded-[6px] text-[14px] hover:bg-[#3D73E8] transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}