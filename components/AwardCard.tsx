'use client';

import React from 'react';
import { MinimalCard } from './ui';

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
    <MinimalCard variant="bordered" padding="lg" animated>
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-normal text-stone-900 dark:text-stone-100 leading-tight">
                {title}
              </h3>
            </div>
            <div className="text-right">
              <div className="inline-block px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full">
                <span className="text-xs font-medium text-stone-600 dark:text-stone-400 tracking-wide">
                  {year}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-lg font-light text-accent-600 dark:text-accent-400">
            {organization}
          </p>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <div className="text-sm text-stone-400 dark:text-stone-500 font-medium tracking-wide uppercase">
            {date}
          </div>
          
          {description && (
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>
      </div>
    </MinimalCard>
  );
};

export default AwardCard;
