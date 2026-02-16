import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode | string;
  title: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full  hover:bg-slate-700 hover:text-orange-400 transition-all font-bold"
      title={title}
    >
      {typeof icon === 'string' ? icon : icon}
    </a>
  );
};

export default SocialLink;
