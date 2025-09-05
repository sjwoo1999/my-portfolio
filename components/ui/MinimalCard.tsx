'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface MinimalCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'elevated' | 'bordered' | 'subtle' | 'plain';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  onClick?: () => void;
}

const MinimalCard: React.FC<MinimalCardProps> = ({
  children,
  className = '',
  variant = 'subtle',
  padding = 'lg',
  animated = true,
  onClick,
}) => {
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Minimal variant styles - very subtle and elegant
  const variantStyles = {
    elevated: 'bg-white dark:bg-stone-900 shadow-sm hover:shadow-md border-0',
    bordered: 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-none',
    subtle: 'bg-stone-50 dark:bg-stone-900/50 border-0 shadow-none',
    plain: 'bg-transparent border-0 shadow-none',
  };

  // Generous padding for elegant spacing
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-6',
    md: 'p-8', 
    lg: 'p-12',
    xl: 'p-16',
  };

  const baseStyles = `
    ${variantStyles[variant]}
    ${paddingStyles[padding]}
    rounded-none
    transition-all duration-500 ease-out
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  if (animated && !prefersReduced) {
    return (
      <motion.div
        className={baseStyles}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.25, 0, 1],
          delay: 0.1 
        }}
        whileHover={onClick ? { 
          y: -2,
          transition: { duration: 0.3 }
        } : {}}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseStyles} onClick={onClick}>
      {children}
    </div>
  );
};

export default MinimalCard;