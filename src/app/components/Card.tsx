import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white border border-[#EAEAED] rounded-[8px] ${className}`}>
      {children}
    </div>
  );
}
