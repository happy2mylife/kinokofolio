import React from 'react';
import { QualificationItemData } from '../../types';

interface QualificationItemProps {
  item: QualificationItemData;
}

const QualificationItem: React.FC<QualificationItemProps> = ({ item }) => {
  return (
    <li className="flex items-start gap-2 text-slate-600 text-sm">
      <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
      {item.link ? (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`hover:text-orange-600 transition-colors underline decoration-slate-300 underline-offset-2 ${item.name.includes("AWS") ? "font-medium text-slate-800" : ""}`}
        >
          {item.name}
        </a>
      ) : (
        <span className={item.name.includes("AWS") ? "font-medium text-slate-800" : ""}>
          {item.name}
        </span>
      )}
    </li>
  );
};

export default QualificationItem;
