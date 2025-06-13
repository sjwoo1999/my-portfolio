'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  year: string;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  organization,
  date,
  description,
  year,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-xl bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-lg transition-all duration-300 hover:shadow-2xl p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 opacity-50" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">{organization}</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
            {year}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;
