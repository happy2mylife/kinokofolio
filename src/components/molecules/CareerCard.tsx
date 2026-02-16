import React from 'react';
import { CareerItem } from '../../types';
import Badge from '../atoms/Badge';

interface CareerCardProps {
  item: CareerItem;
}

const CareerCard: React.FC<CareerCardProps> = ({ item }) => {
  return (
    <div className="space-y-3">
      <h5 className="font-bold text-lg text-slate-800">{item.title}</h5>
      {item.description && (
        <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
      )}
      {item.tech && (
        <div className="flex flex-wrap gap-2 pt-2">
          {item.tech.map(t => (
            <Badge key={t} variant="solid">{t}</Badge>
          ))}
        </div>
      )}
      {item.details && (
        <ul className="list-inside text-sm text-slate-500 space-y-1 pt-2">
          {item.details.map((d, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              {d.link ? (
                <a href={d.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline decoration-slate-300 underline-offset-2 transition-colors">
                  {d.text}
                </a>
              ) : (
                <span>{d.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CareerCard;
