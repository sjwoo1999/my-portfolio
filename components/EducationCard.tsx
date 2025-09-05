'use client';

import React from 'react';
import { MinimalCard } from './ui';

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
  return (
    <MinimalCard variant="elevated" padding="lg" animated>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          {order === 'campusFirst' ? (
            <>
              <h3 className="text-2xl font-light text-stone-900 dark:text-stone-100 tracking-tight">
                {campus}
              </h3>
              <div className="text-lg font-medium text-accent-600 dark:text-accent-400">
                {majorType}
              </div>
            </>
          ) : (
            <>
              <div className="text-lg font-medium text-accent-600 dark:text-accent-400">
                {majorType}
              </div>
              <h3 className="text-2xl font-light text-stone-900 dark:text-stone-100 tracking-tight">
                {campus}
              </h3>
            </>
          )}
          <p className="text-lg text-stone-600 dark:text-stone-300 font-light">
            {college}
          </p>
          <p className="text-base text-stone-500 dark:text-stone-400">
            {major}
          </p>
        </div>
        
        {/* Metadata */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-700">
          <div className="text-sm text-stone-400 dark:text-stone-500 font-medium tracking-wide">
            {period}
          </div>
          <div className="text-sm text-stone-400 dark:text-stone-500 font-medium tracking-wide">
            {location}
          </div>
        </div>
      </div>
    </MinimalCard>
  );
};

export default EducationCard;
