import React, { useState, useRef } from 'react';
import { Paperclip, Trash2 } from 'lucide-react';
import svgPaths from '../imports/svg-pxi50698pc';

interface Message {
  id: string;
  text: string;
  sender: 'agent' | 'customer';
  timestamp: string;
  avatar: string;
}

interface ConversationSectionProps {
  ticketId: string;
  initialMessages?: Message[];
}

export function ConversationSection({ 
  ticketId,
  initialMessages = [
    {
      id: '1',
      text: "Hi Sarah, thanks for reaching out. I'm looking into this for you right now. Could you confirm if you received a confirmation email from Stripe?",
      sender: 'agent',
      timestamp: '1 hour ago',
      avatar: 'AG'
    },
    {
      id: '2',
      text: 'Yes, I did. Here is the receipt attached above. The money definitely left our account.',
      sender: 'customer',
      timestamp: '55 mins ago',
      avatar: 'SC'
    }
  ]
}: ConversationSectionProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [replyText, setReplyText] = useState('');
  const [replyMode, setReplyMode] = useState<'public' | 'internal'>('public');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!replyText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: replyText,
      sender: 'agent',
      timestamp: 'Just now',
      avatar: 'AG'
    };

    setMessages([...messages, newMessage]);
    setReplyText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSend();
    }
  };

  const handleAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload - could show a toast or add to messages
      console.log('Files selected:', files);
      alert(`Selected ${files.length} file(s)`);
    }
  };

  const handleClear = () => {
    setReplyText('');
  };

  return (
    <div className="bg-white relative rounded-[16.4px] border border-[rgba(229,229,229,0.6)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col h-full">
      {/* Header */}
      <div className="bg-[rgba(245,245,245,0.1)] border-b border-[rgba(229,229,229,0.6)] px-6 py-4 flex items-center justify-between shrink-0">
        <h3 className="font-bold text-[18px] text-neutral-950 leading-[28px]">Conversation</h3>
        <p className="font-normal text-[14px] text-[#4c84ff] leading-[20px]">Ticket #{ticketId}</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-[rgba(245,245,245,0.05)] px-6 py-6">
        {/* Date Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[rgba(245,245,245,0.8)] rounded-full px-3 py-1 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
            <p className="font-medium text-[12px] text-neutral-900 leading-[16px]">Today, Oct 24</p>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'agent' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className="shrink-0">
                <div className={`size-[40px] rounded-full shadow-[0px_0px_0px_1px_rgba(229,229,229,0.5),0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center ${
                  message.sender === 'agent' 
                    ? 'bg-[#4c84ff]' 
                    : 'bg-white'
                }`}>
                  <p className={`font-bold text-[14px] leading-[20px] ${
                    message.sender === 'agent' 
                      ? 'text-neutral-50' 
                      : 'text-[#4c84ff]'
                  }`}>
                    {message.avatar}
                  </p>
                </div>
              </div>

              {/* Message Content */}
              <div className={`flex flex-col gap-1.5 max-w-[584px] ${
                message.sender === 'agent' ? 'items-end' : 'items-start'
              }`}>
                <div className={`px-4 py-3.5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] ${
                  message.sender === 'agent'
                    ? 'bg-[#4c84ff] rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px]'
                    : 'bg-white rounded-tr-[16px] rounded-bl-[16px] rounded-br-[16px] border border-[rgba(229,229,229,0.5)]'
                }`}>
                  <p className={`font-normal text-[14px] leading-[22.75px] ${
                    message.sender === 'agent' 
                      ? 'text-neutral-50' 
                      : 'text-neutral-950'
                  }`}>
                    {message.text}
                  </p>
                </div>
                <p className="font-medium text-[11px] text-neutral-500 leading-[16.5px] px-1">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reply Input Area */}
      <div className="bg-white border-t border-[rgba(229,229,229,0.6)] px-6 py-6 shrink-0">
        <div className="bg-white border border-[rgba(229,229,229,0.6)] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          {/* Textarea */}
          <div className="p-3">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your manual reply..."
              className="w-full h-[100px] resize-none font-normal text-[14px] leading-[20px] text-neutral-950 placeholder:text-[rgba(115,115,115,0.6)] focus:outline-none bg-transparent"
            />
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[rgba(229,229,229,0.1)] px-4 py-3 flex items-center justify-between">
            {/* Left Side - Attachment and Mode Toggle */}
            <div className="flex items-center gap-4">
              {/* Attachment Button */}
              <button
                onClick={handleAttachment}
                className="size-[40px] rounded-[6.8px] flex items-center justify-center hover:bg-neutral-50 transition-colors"
                title="Attach file"
              >
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3cb14e80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Mode Toggle */}
              <div className="bg-[rgba(245,245,245,0.6)] rounded-[10px] p-1 flex gap-1">
                <button
                  onClick={() => setReplyMode('public')}
                  className={`px-3 h-[28px] rounded-[6.8px] font-semibold text-[12px] leading-[16px] transition-all ${
                    replyMode === 'public'
                      ? 'bg-white text-neutral-950 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]'
                      : 'text-neutral-500'
                  }`}
                >
                  Public Reply
                </button>
                <button
                  onClick={() => setReplyMode('internal')}
                  className={`px-3 h-[28px] rounded-[6.8px] font-semibold text-[12px] leading-[16px] transition-all ${
                    replyMode === 'internal'
                      ? 'bg-white text-neutral-950 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]'
                      : 'text-neutral-500'
                  }`}
                >
                  Internal Note
                </button>
              </div>
            </div>

            {/* Right Side - Clear and Send */}
            <div className="flex items-center gap-3">
              {/* Clear Button */}
              {replyText && (
                <button
                  onClick={handleClear}
                  className="size-[40px] rounded-[6.8px] flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  title="Clear text"
                >
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M8.33333 9.16667V14.1667" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M11.6667 9.16667V14.1667" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3bbb0f80} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 5H17.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ba73400} stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </button>
              )}

              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!replyText.trim()}
                className={`h-[40px] px-6 rounded-[6.8px] font-normal text-[14px] leading-[20px] text-center transition-all ${
                  replyText.trim()
                    ? 'bg-[#4c84ff] text-neutral-50 hover:bg-[#3d6fd9]'
                    : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                }`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
