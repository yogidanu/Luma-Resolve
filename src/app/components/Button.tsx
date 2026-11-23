import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '',
  disabled = false,
  type = 'button',
  icon
}: ButtonProps) {
  const baseStyles = 'px-4 py-2.5 rounded-[6px] transition-colors text-[14px] inline-flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-[#4C84FF] text-white hover:bg-[#3D73E8] disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-white text-[#1F1F1F] border border-[#EAEAED] hover:bg-[#FAFAFA] disabled:opacity-50',
    tertiary: 'bg-transparent text-[#4C84FF] hover:bg-[rgba(76,132,255,0.12)]',
    danger: 'bg-[#FF4C4C] text-white hover:bg-[#E83D3D] disabled:opacity-50'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
}