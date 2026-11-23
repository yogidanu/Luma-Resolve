import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface ApproveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: () => void;
  message: string;
}

export function ApproveModal({ isOpen, onClose, onSend, message }: ApproveModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.10)] max-w-lg w-full">
        <div className="border-b border-[#EAEAED] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-[#2EB67D]" />
            <h2 className="text-[18px]">Approve & Send Response</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-[#5E5E5E] hover:text-[#1F1F1F] transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-5">
          <p className="text-[14px] text-[#5E5E5E] mb-4">
            Review the final message before sending to the customer:
          </p>
          
          <div className="bg-[#F6F6F7] p-4 rounded-[8px] mb-6 text-[14px] text-[#1F1F1F] leading-[1.6] max-h-60 overflow-y-auto">
            {message}
          </div>
          
          <div className="flex gap-3">
            <Button variant="secondary" onClick={onClose} className="flex-1">
              Edit Again
            </Button>
            <Button variant="primary" onClick={onSend} className="flex-1">
              Send to Customer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
