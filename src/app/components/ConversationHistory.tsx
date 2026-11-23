import React, { useState } from 'react';
import { Card } from './Card';
import { MessageSquare, User, Bot, Clock, ChevronDown, ChevronRight, FileText, ExternalLink } from 'lucide-react';

interface Message {
  id: string;
  type: 'customer' | 'agent' | 'ai-suggestion' | 'system';
  sender: string;
  content: string;
  timestamp: string;
  edited?: boolean;
  aiConfidence?: number;
  approved?: boolean;
  attachments?: string[];
}

interface ConversationHistoryProps {
  ticketId: string;
}

export function ConversationHistory({ ticketId }: ConversationHistoryProps) {
  const [expandedMessages, setExpandedMessages] = useState<string[]>(['1']);

  const messages: Message[] = [
    {
      id: '1',
      type: 'customer',
      sender: 'Sarah Chen',
      content: "I've just upgraded to the Enterprise plan and paid $299, but I still can't access any of the premium features. I've tried logging out and back in, but nothing has changed. This is urgent as we have a presentation tomorrow and need these features.",
      timestamp: '2 hours ago',
      attachments: ['payment-receipt.pdf']
    },
    {
      id: '2',
      type: 'system',
      sender: 'System',
      content: 'Ticket automatically assigned to Agent Queue based on "billing" and "enterprise" keywords',
      timestamp: '2 hours ago'
    },
    {
      id: '3',
      type: 'ai-suggestion',
      sender: 'AI Assistant',
      content: "Hi Sarah,\\n\\nThank you for upgrading to Enterprise! I can see your payment has been processed successfully.\\n\\nI've identified the issue - there was a sync delay between our billing and permissions systems. I've manually refreshed your account permissions, and you should now have full access to all Enterprise features.\\n\\nPlease try logging out and back in. Everything should work perfectly now.\\n\\nSorry for the inconvenience, and thank you for your patience!\\n\\nBest regards",
      timestamp: '2 hours ago',
      aiConfidence: 94,
      approved: false
    },
    {
      id: '4',
      type: 'agent',
      sender: 'You',
      content: "Hi Sarah,\\n\\nThank you for upgrading to Enterprise! I can see your payment of $299 has been processed successfully.\\n\\nI've identified the issue - there was a sync delay between our billing and permissions systems. I've manually refreshed your account permissions, and you should now have full access to all Enterprise features.\\n\\nPlease try logging out and back in. Everything should work perfectly now.\\n\\nI apologize for the inconvenience, and thank you for your patience! If you have any issues, please let me know immediately.\\n\\nBest regards,\\nAgent Team",
      timestamp: '1 hour ago',
      edited: true
    },
    {
      id: '5',
      type: 'system',
      sender: 'System',
      content: 'Manual action performed: User permissions refreshed for sarah.chen@example.com',
      timestamp: '1 hour ago'
    },
    {
      id: '6',
      type: 'customer',
      sender: 'Sarah Chen',
      content: 'Perfect! It works now. Thank you so much for the quick resolution! 🎉',
      timestamp: '45 min ago'
    },
    {
      id: '7',
      type: 'agent',
      sender: 'You',
      content: "Great to hear! Enjoy your Enterprise features. Don't hesitate to reach out if you need anything else!",
      timestamp: '43 min ago'
    },
    {
      id: '8',
      type: 'system',
      sender: 'System',
      content: 'Ticket marked as resolved. Customer satisfaction survey sent.',
      timestamp: '43 min ago'
    }
  ];

  const toggleExpand = (messageId: string) => {
    setExpandedMessages(prev =>
      prev.includes(messageId)
        ? prev.filter(id => id !== messageId)
        : [...prev, messageId]
    );
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare size={18} className="text-[#4C84FF]" />
        <h3 className="text-[15px]">Conversation History</h3>
        <span className="text-[11px] text-[#5E5E5E]">
          ({messages.length} events)
        </span>
      </div>

      <div className="space-y-3">
        {messages.map((message, index) => {
          const isExpanded = expandedMessages.includes(message.id);
          const isLongMessage = message.content.length > 150;

          return (
            <div
              key={message.id}
              className={`relative ${
                index < messages.length - 1 ? 'pb-3' : ''
              }`}
            >
              {/* Timeline connector */}
              {index < messages.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-[#EAEAED]" />
              )}

              <div className="flex gap-3">
                {/* Avatar/Icon */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white relative z-10 ${
                  message.type === 'customer' ? 'bg-[#4C84FF]' :
                  message.type === 'agent' ? 'bg-[#00C48C]' :
                  message.type === 'ai-suggestion' ? 'bg-[#FFA500]' :
                  'bg-[#9E9E9E]'
                }`}>
                  {message.type === 'customer' && <User size={16} />}
                  {message.type === 'agent' && <User size={16} />}
                  {message.type === 'ai-suggestion' && <Bot size={16} />}
                  {message.type === 'system' && <Clock size={16} />}
                </div>

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[13px]">{message.sender}</span>
                    {message.type === 'ai-suggestion' && (
                      <span className="px-2 py-0.5 bg-[#FFF4E6] text-[#FFA500] text-[10px] rounded-[4px]">
                        AI Suggestion
                      </span>
                    )}
                    {message.edited && (
                      <span className="px-2 py-0.5 bg-[#F6F6F7] text-[#5E5E5E] text-[10px] rounded-[4px]">
                        Edited
                      </span>
                    )}
                    {message.aiConfidence && (
                      <span className="px-2 py-0.5 bg-[#E6F9F3] text-[#00C48C] text-[10px] rounded-[4px]">
                        {message.aiConfidence}% confidence
                      </span>
                    )}
                    <span className="text-[11px] text-[#5E5E5E]">
                      <Clock size={10} className="inline mr-1" />
                      {message.timestamp}
                    </span>
                  </div>

                  {/* Message Body */}
                  <div className={`p-3 rounded-[6px] ${
                    message.type === 'customer' ? 'bg-[#F0F4FF]' :
                    message.type === 'agent' ? 'bg-[#E6F9F3]' :
                    message.type === 'ai-suggestion' ? 'bg-[#FFF4E6]' :
                    'bg-[#F6F6F7]'
                  }`}>
                    {isLongMessage && !isExpanded ? (
                      <>
                        <p className="text-[13px] text-[#5E5E5E] whitespace-pre-line">
                          {message.content.substring(0, 150)}...
                        </p>
                        <button
                          onClick={() => toggleExpand(message.id)}
                          className="text-[12px] text-[#4C84FF] hover:text-[#3D6FE6] mt-2 flex items-center gap-1"
                        >
                          <ChevronRight size={14} />
                          Show more
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-[13px] text-[#5E5E5E] whitespace-pre-line">
                          {message.content}
                        </p>
                        {isLongMessage && (
                          <button
                            onClick={() => toggleExpand(message.id)}
                            className="text-[12px] text-[#4C84FF] hover:text-[#3D6FE6] mt-2 flex items-center gap-1"
                          >
                            <ChevronDown size={14} />
                            Show less
                          </button>
                        )}
                      </>
                    )}

                    {/* Attachments */}
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {message.attachments.map(attachment => (
                          <a
                            key={attachment}
                            href="#"
                            className="flex items-center gap-1 px-2 py-1 bg-white border border-[#D7D7DA] rounded-[4px] text-[11px] hover:border-[#4C84FF] transition-colors"
                          >
                            <FileText size={12} />
                            {attachment}
                            <ExternalLink size={10} />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* AI Suggestion Actions */}
                    {message.type === 'ai-suggestion' && !message.approved && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-[#EAEAED]">
                        <button className="px-3 py-1 bg-white border border-[#D7D7DA] hover:border-[#00C48C] text-[11px] rounded-[4px] transition-colors">
                          Approve & Send
                        </button>
                        <button className="px-3 py-1 bg-white border border-[#D7D7DA] hover:border-[#4C84FF] text-[11px] rounded-[4px] transition-colors">
                          Edit First
                        </button>
                        <button className="px-3 py-1 bg-white border border-[#D7D7DA] hover:border-[#FF4D4D] text-[11px] rounded-[4px] transition-colors">
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Link */}
      <button className="w-full mt-4 pt-4 border-t border-[#EAEAED] text-[12px] text-[#4C84FF] hover:text-[#3D6FE6] transition-colors">
        View Full Conversation Thread →
      </button>
    </Card>
  );
}
