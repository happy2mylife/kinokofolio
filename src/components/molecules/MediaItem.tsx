import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { MediaItemData } from '../../types';
import Badge from '../atoms/Badge';

interface MediaItemProps {
  item: MediaItemData;
}

const MediaItem: React.FC<MediaItemProps> = ({ item }) => {
  return (
    <div className="group relative pl-6 border-l-2 border-slate-100 hover:border-orange-300 transition-colors">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white group-hover:bg-orange-400 transition-colors"></div>
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="default">
          {item.tag}
        </Badge>
        {item.year && (
          <span className="text-xs text-slate-400 font-medium">{item.year}</span>
        )}
      </div>
      <h4 className="text-lg font-bold text-slate-900 leading-snug mb-1">
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            {item.title} <ExternalLink size={14} />
          </a>
        ) : (
          item.title
        )}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
      {item.subLinks && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.subLinks.map((subLink) => (
            <a
              key={subLink.href}
              href={subLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 border border-orange-200 bg-orange-50 rounded-full px-3 py-1 hover:bg-orange-100 hover:border-orange-300 transition-colors"
            >
              <FileText size={12} /> {subLink.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaItem;
