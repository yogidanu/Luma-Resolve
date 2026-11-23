import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error' | 'info';
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ type, message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);
  
  const config = {
    success: {
      icon: <CheckCircle size={20} />,
      bg: 'bg-[#2EB67D]',
      color: 'text-white'
    },
    error: {
      icon: <AlertCircle size={20} />,
      bg: 'bg-[#E25555]',
      color: 'text-white'
    },
    info: {
      icon: <Info size={20} />,
      bg: 'bg-[#4C84FF]',
      color: 'text-white'
    }
  };
  
  const { icon, bg, color } = config[type];
  
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 ${bg} ${color} px-6 py-4 rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.10)] flex items-center gap-3 animate-slide-up min-w-[320px]`}>
      {icon}
      <span className="flex-1 text-[14px]">{message}</span>
      <button onClick={onClose} className="hover:opacity-80 transition-opacity">
        <X size={16} />
      </button>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = React.useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  
  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    setToast({ type, message });
  };
  
  const ToastComponent = toast ? (
    <Toast
      type={toast.type}
      message={toast.message}
      onClose={() => setToast(null)}
    />
  ) : null;
  
  return { showToast, ToastComponent };
}
