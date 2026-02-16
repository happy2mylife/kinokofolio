import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import Badge from '../atoms/Badge';

interface ProjectCardProps {
  project: Project;
  span?: 1 | 2;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, span = 1 }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${span === 2 ? 'md:col-span-2' : ''} bg-slate-100`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.tags.map(tag => (
            <Badge key={tag} variant="glass">{tag}</Badge>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-200 line-clamp-2 text-sm md:text-base group-hover:text-white transition-colors">
          {project.description}
        </p>
      </div>

      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 group-hover:rotate-0">
        <ExternalLink size={20} />
      </div>
    </a>
  );
};

export default ProjectCard;
