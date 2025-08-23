'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { createRevealVariants } from '../utils/motion';

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
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = createRevealVariants(prefersReduced);
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-xl bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-lg transition-all duration-300 hover:shadow-2xl p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 opacity-50" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {company}
            </h3>
            <motion.p className="text-slate-600 dark:text-slate-300 mt-1" variants={reveal}>{position}</motion.p>
          </div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <motion.svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" whileHover={{ rotate: prefersReduced ? 0 : 8 }} transition={{ duration: 0.12 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </motion.svg>
            {period}
          </div>
        </div>
        <motion.p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed" variants={reveal}>{description}</motion.p>
      </div>
    </motion.div>
  );
};

export default CareerCard;
