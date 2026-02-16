import React from 'react';
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
                title="Selected Works"
                subtitle="最近の取り組みの一部をご紹介します。"
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
          <div>
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
          </div>
        )}

      </div>
    </section>
  );
};

export default WorksSection;
