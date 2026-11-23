import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
}

export function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  icon,
  label
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-[14px] text-[#5E5E5E]">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E5E5E]">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 ${icon ? 'pl-10' : ''} bg-white border border-[#D7D7DA] rounded-[6px] transition-all duration-200 focus:outline-none focus:border-[#4C84FF] focus:ring-2 focus:ring-[rgba(76,132,255,0.12)] ${className}`}
        />
      </div>
    </div>
  );
}
