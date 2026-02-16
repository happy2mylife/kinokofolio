import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`${alignClass[align]} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
