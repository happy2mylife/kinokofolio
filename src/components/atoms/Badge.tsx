import React, { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'glass' | 'solid';
  children: ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = ''
}) => {
  const variantClasses = {
    default: 'px-2 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded',
    glass: 'px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/10',
    solid: 'px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md'
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
