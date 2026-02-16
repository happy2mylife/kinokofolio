import React from 'react';
import NavLink from '../molecules/NavLink';

interface NavigationProps {
  activeSection: string;
  scrollY: number;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollY, onSectionChange }) => {
  const sections = ['home', 'works', 'media', 'profile', 'contact'];

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 ${scrollY > 50 ? 'bg-[#FDFBF7]/80 backdrop-blur-md py-4' : ''}`}>
      <div className="flex bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full mx-4 no-scrollbar">
        {sections.map((section) => (
          <NavLink
            key={section}
            section={section}
            isActive={activeSection === section}
            onClick={() => handleSectionClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
