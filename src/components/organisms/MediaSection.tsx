import React from 'react';
import { MediaCategory } from '../../types';
import SectionTitle from '../atoms/SectionTitle';
import IconWrapper from '../atoms/IconWrapper';
import MediaItem from '../molecules/MediaItem';

interface MediaSectionProps {
  mediaData: MediaCategory[];
}

const MediaSection: React.FC<MediaSectionProps> = ({ mediaData }) => {
  return (
    <section id="media" className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Publications & Media" 
          subtitle="論文、書籍寄稿、メディア出演、LTなど。"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {mediaData.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <IconWrapper icon={category.icon} variant="rounded" />
                <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
              </div>
              
              <div className="space-y-8">
                {category.items.map((item, i) => (
                  <MediaItem key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
