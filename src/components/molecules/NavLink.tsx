import React, { ReactNode } from 'react';

interface NavLinkProps {
  section: string;
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ section, isActive, onClick, children }) => {
  return (
    <a
      onClick={onClick}
      className={`
        cursor-pointer px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium whitespace-nowrap
        ${isActive
          ? 'bg-slate-900 text-white shadow-lg transform scale-105'
          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}
      `}
    >
      {children}
    </a>
  );
};

export default NavLink;
