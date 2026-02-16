import React, { ReactNode } from 'react';

interface IconWrapperProps {
  icon: ReactNode;
  variant?: 'default' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variantClasses = {
    default: '',
    rounded: 'p-3 bg-slate-50 rounded-xl',
    circle: 'p-3 rounded-full'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {icon}
    </div>
  );
};

export default IconWrapper;
