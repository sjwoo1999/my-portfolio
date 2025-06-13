'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  campus: string;
  majorType: string;
  college: string;
  major: string;
  period: string;
  location: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  campus,
  majorType,
  college,
  major,
  period,
  location,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-xl bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-lg transition-all duration-300 hover:shadow-2xl p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 opacity-50" />
      <div className="relative z-10">
        <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">{majorType}</div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {campus}
        </h3>
        <div className="text-base text-slate-700 dark:text-slate-200 mb-2">
          {college} · {major}
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {period}
          </div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
