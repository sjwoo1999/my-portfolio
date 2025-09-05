'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui';

interface EducationCardProps {
  campus: string;
  majorType: string;
  college: string;
  major: string;
  period: string;
  location: string;
  order?: 'campusFirst' | 'majorTypeFirst';
}

const EducationCard: React.FC<EducationCardProps> = ({
  campus,
  majorType,
  college,
  major,
  period,
  location,
  order = 'campusFirst',
}) => {
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Card variant="glass" size="md" hoverable animated>
      <div className="space-y-4">
        <div>
          {order === 'campusFirst' ? (
            <>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                {campus}
              </h3>
              <div className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                {majorType}
              </div>
            </>
          ) : (
            <>
              <div className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                {majorType}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                {campus}
              </h3>
            </>
          )}
          <div className="text-base text-neutral-700 dark:text-neutral-200 mb-2">
            {college} · {major}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
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
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <motion.svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ scale: prefersReduced ? 1 : 1.1 }} 
              transition={{ duration: 0.12 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </motion.svg>
            {location}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
