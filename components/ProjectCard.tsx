'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from './ui';

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
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Card variant="glass" size="md" hoverable animated>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 flex-1">
            {title}
          </h3>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 ml-4">
            <motion.svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ rotate: prefersReduced ? 0 : 8 }} 
              transition={{ duration: 0.12 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
            {period}
          </div>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              size="sm"
              animated={!prefersReduced}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
