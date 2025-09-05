'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MinimalCard } from './ui';

interface CareerCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  company,
  position,
  period,
  description,
}) => {
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="relative pl-12">
      {/* Minimal timeline indicator */}
      <div className="absolute left-0 top-8 -translate-x-1/2">
        <motion.div
          className="w-2 h-2 bg-accent-400 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
      
      <MinimalCard variant="plain" padding="md" animated>
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h3 className="text-xl font-light text-stone-900 dark:text-stone-100 tracking-tight">
              {company}
            </h3>
            <p className="text-lg text-brand-600 dark:text-brand-400 font-medium">
              {position}
            </p>
            <div className="text-sm text-stone-400 dark:text-stone-500 font-medium tracking-wide">
              {period}
            </div>
          </div>
          
          {/* Description */}
          {description && (
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>
      </MinimalCard>
    </div>
  );
};

export default CareerCard;
