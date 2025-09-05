'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui';

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
    <div className="relative pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 -translate-x-1/2">
        <motion.div
          className="w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-neutral-800 shadow-md"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      
      <Card variant="glass" size="md" hoverable animated>
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                {company}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {position}
              </p>
            </div>
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
          
          {description && (
            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CareerCard;
