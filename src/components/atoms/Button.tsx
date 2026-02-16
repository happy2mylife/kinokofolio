import React, { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  onClick,
  className = ''
}) => {
  const baseClass = 'rounded-full font-medium transition-all flex items-center gap-2 justify-center';
  
  const variantClasses = {
    primary: 'group bg-slate-900 text-white hover:bg-slate-800 hover:scale-105',
    secondary: 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300',
    outline: 'border-2 border-current hover:bg-current hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
