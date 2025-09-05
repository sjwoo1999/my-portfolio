'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  animated = true,
}) => {
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Variant styles
  const variantStyles = {
    default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200',
    success: 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200',
    warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200',
    error: 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-200',
    outline: 'bg-transparent text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs font-medium rounded-full',
    md: 'px-2.5 py-1 text-sm font-medium rounded-full',
    lg: 'px-3 py-1.5 text-sm font-semibold rounded-full',
  };

  const baseStyles = `
    inline-flex items-center justify-center
    font-medium transition-colors duration-200
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (animated && !prefersReduced) {
    return (
      <motion.span
        className={baseStyles}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className={baseStyles}>
      {children}
    </span>
  );
};

export default Badge;