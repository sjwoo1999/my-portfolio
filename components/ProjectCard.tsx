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
    <MinimalCard variant="elevated" padding="lg" animated>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-semibold text-foreground tracking-tight flex-1">
              {title}
            </h3>
            <div className="text-sm text-muted-foreground font-medium tracking-wide ml-6">
              {period}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed font-normal">
          {description}
        </p>

        {/* Technologies */}
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
            Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary ring-1 ring-inset ring-secondary/20"
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
