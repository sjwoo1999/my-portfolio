'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { createRevealVariants } from '../utils/motion';

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
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = createRevealVariants(prefersReduced);
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03, rotateX: prefersReduced ? 0 : 2, rotateY: prefersReduced ? 0 : -2 }}
      className="relative overflow-hidden rounded-xl bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-lg transition-all duration-300 hover:shadow-2xl p-6"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 opacity-50"
        whileHover={{ x: prefersReduced ? 0 : -8, y: prefersReduced ? 0 : -6 }}
        transition={{ duration: 0.2 }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {title}
          </h3>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <motion.svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" whileHover={{ rotate: prefersReduced ? 0 : 8 }} transition={{ duration: 0.12 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
            {period}
          </div>
        </div>
        <motion.p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4" variants={reveal}>
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
              variants={reveal}
              transition={{ delay: prefersReduced ? 0 : 0.04 * index }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
