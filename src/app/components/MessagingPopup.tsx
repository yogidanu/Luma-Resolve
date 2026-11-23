import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Paperclip, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'agent' | 'customer';
  timestamp: string;
  avatar: string;
  agentName?: string;
}

interface MessagingPopupProps {
  ticketId: string;
  customerName: string;
  customerAvatar: string;
  onClose: () => void;
  initialMessages?: Message[];
  messages?: Message[];
  awaitingFeedback?: boolean;
  onCustomerFeedback?: (resolved: boolean) => void;
}

export function MessagingPopup({ 
  ticketId, 
  customerName,
  customerAvatar,
  onClose,
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
    },
    {
      id: '3',
      text: 'I can see that you were charged twice. Let me process a refund for the duplicate charge right away.',
      sender: 'agent',
      timestamp: '50 mins ago',
      avatar: 'AG'
    },
    {
      id: '4',
      text: 'Thank you! How long will it take to show up in my account?',
      sender: 'customer',
      timestamp: '45 mins ago',
      avatar: 'SC'
    }
  ],
  messages = [],
  awaitingFeedback = false,
  onCustomerFeedback = () => {}
}: MessagingPopupProps) {
  // Merge initial messages with passed messages (sent from TicketDetailScreen)
  const allMessages = [...initialMessages, ...messages];
  const [messagesList, setMessagesList] = useState<Message[]>(allMessages);
  const [messageText, setMessageText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update messages when new messages are passed
  useEffect(() => {
    if (messages.length > 0) {
      setMessagesList([...initialMessages, ...messages]);
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesList]);

  const handleSend = () => {
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'agent',
      timestamp: 'Just now',
      avatar: 'AG'
    };

    setMessagesList([...messagesList, newMessage]);
    setMessageText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log('Files selected:', files);
      alert(`Selected ${files.length} file(s)`);
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#4c84ff] text-white rounded-t-lg px-4 py-3 shadow-lg hover:bg-[#3d6fe6] transition-all flex items-center gap-3"
        >
          <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
            <p className="text-sm font-semibold">{customerAvatar}</p>
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm">{customerName}</p>
            <p className="text-xs text-white/80">Ticket #{ticketId}</p>
          </div>
          <Maximize2 size={16} className="ml-2" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[600px] flex flex-col bg-white rounded-[12px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] border border-neutral-200">
      {/* Header */}
      <div className="bg-[#4c84ff] rounded-t-[12px] px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-white/20 flex items-center justify-center">
            <p className="text-sm font-semibold text-white">{customerAvatar}</p>
          </div>
          <div>
            <p className="font-semibold text-[15px] text-white leading-tight">{customerName}</p>
            <p className="text-xs text-white/80 mt-0.5">Ticket #{ticketId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="size-8 rounded-md hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <Minimize2 size={16} className="text-white" />
          </button>
          <button
            onClick={onClose}
            className="size-8 rounded-md hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-[rgba(245,245,245,0.3)] px-5 py-4 min-h-0">
        {/* Date Divider */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white rounded-full px-3 py-1 shadow-sm border border-neutral-200">
            <p className="font-medium text-[11px] text-neutral-600 leading-[16px]">Today, Dec 4</p>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-4">
          {messagesList.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'agent' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                message.sender === 'agent' 
                  ? 'bg-[#4c84ff] text-white' 
                  : 'bg-neutral-200 text-neutral-700'
              }`}>
                <p className="text-xs font-semibold">{message.avatar}</p>
              </div>

              {/* Message Bubble */}
              <div className={`flex flex-col gap-1 max-w-[75%] ${message.sender === 'agent' ? 'items-end' : 'items-start'}`}>
                <div className={`rounded-[12px] px-4 py-2.5 ${
                  message.sender === 'agent'
                    ? 'bg-[#4c84ff] text-white rounded-tr-sm'
                    : 'bg-white text-neutral-900 border border-neutral-200 rounded-tl-sm'
                }`}>
                  <p className="text-[14px] leading-[20px]">{message.text}</p>
                </div>
                <p className="text-[11px] text-neutral-500 px-1">{message.timestamp}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />

          {/* Customer Feedback Prompt - Shows when awaiting customer confirmation */}
          {awaitingFeedback && (
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[12px] p-4 border border-blue-200">
              <div className="text-center mb-3">
                <p className="font-semibold text-[13px] text-neutral-900 mb-1">Was your issue resolved?</p>
                <p className="text-[11px] text-neutral-600">Help us close this ticket</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onCustomerFeedback(true);
                    const confirmMessage: Message = {
                      id: Date.now().toString(),
                      text: 'Yes, the issue is resolved! Thank you for your help.',
                      sender: 'customer',
                      timestamp: 'Just now',
                      avatar: customerAvatar
                    };
                    setMessagesList([...messagesList, confirmMessage]);
                  }}
                  className="flex-1 bg-[#05df72] hover:bg-[#04c564] text-white rounded-md px-4 py-2.5 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span className="text-lg">✓</span>
                  <span className="font-semibold text-[13px]">Issue Resolved</span>
                </button>
                <button
                  onClick={() => {
                    onCustomerFeedback(false);
                    const needHelpMessage: Message = {
                      id: Date.now().toString(),
                      text: 'I still need help with this issue.',
                      sender: 'customer',
                      timestamp: 'Just now',
                      avatar: customerAvatar
                    };
                    setMessagesList([...messagesList, needHelpMessage]);
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2.5 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span className="text-lg">✗</span>
                  <span className="font-semibold text-[13px]">Still Having Issues</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-neutral-200 px-4 py-4 bg-white rounded-b-[12px] shrink-0">
        <div className="flex items-end gap-2">
          <div className="flex-1 bg-neutral-50 rounded-[8px] border border-neutral-200 focus-within:border-[#4c84ff] focus-within:ring-2 focus-within:ring-[#4c84ff]/20 transition-all">
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full bg-transparent px-3 py-2.5 text-[14px] text-neutral-900 placeholder:text-neutral-500 outline-none resize-none max-h-[100px]"
              rows={2}
            />
          </div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            multiple
          />
          <button
            onClick={handleAttachment}
            className="size-9 rounded-md hover:bg-neutral-100 flex items-center justify-center shrink-0 transition-colors"
          >
            <Paperclip size={18} className="text-neutral-600" />
          </button>
          <button
            onClick={handleSend}
            disabled={!messageText.trim()}
            className="size-9 rounded-md bg-[#4c84ff] hover:bg-[#3d6fe6] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0 transition-colors"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>
        <p className="text-[11px] text-neutral-500 mt-2 px-1">Press Enter to send, Shift+Enter for new line</p>
      </div>
    </div>
  );
}