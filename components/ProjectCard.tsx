'use client';

import React from 'react';
import { MinimalCard } from './ui';

interface ProjectCardProps {
  title: string;
  description: string;
  period: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  period,
  technologies,
}) => {
  return (
    <MinimalCard variant="subtle" padding="lg" animated>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-light text-stone-900 dark:text-stone-100 tracking-tight flex-1">
              {title}
            </h3>
            <div className="text-sm text-stone-400 dark:text-stone-500 font-medium tracking-wide ml-6">
              {period}
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="space-y-3">
          <div className="text-xs text-stone-400 dark:text-stone-500 font-medium tracking-wide uppercase">
            Technologies
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-stone-600 dark:text-stone-400 font-light border-b border-stone-300 dark:border-stone-600 pb-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MinimalCard>
  );
};

export default ProjectCard;
