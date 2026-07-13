import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import SectionTitle from '../atoms/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';

interface WorksSectionProps {
  selectedWorks: Project[];
  kinokoContents: Project[];
}

const WorksSection: React.FC<WorksSectionProps> = ({ selectedWorks, kinokoContents }) => {
  return (
    <section id="works" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Selected Works */}
        {selectedWorks.length > 0 && (
          <div>
            <div className="flex items-end justify-between mb-16">
              <SectionTitle
                title="マッシュ＆ルーム"
                subtitle="創造せよ！頭にキノコが生えるまで"
                align="left"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
              {selectedWorks.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  span={(index === 0 || index === 3) ? 2 : 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Kinoko Contents */}
        {kinokoContents.length > 0 && (
          <div id="kinoko">
            <div className="flex items-end justify-between mb-16">
              <SectionTitle
                title="Kinoko Contents"
                subtitle="キノコなコンテンツをご紹介します。"
                align="left"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
              {kinokoContents.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  span={(index === 0 || index === 3) ? 2 : 1}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://mashandroom.org/lp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 font-bold text-lg hover:text-orange-600 transition-colors group"
              >
                他のコンテンツも見る
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default WorksSection;
