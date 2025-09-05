'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { createRevealVariants } from '../../utils/motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'outlined' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  animated?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  hoverable = true,
  animated = true,
  onClick,
}) => {
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const reveal = createRevealVariants(prefersReduced);

  // Variant styles
  const variantStyles = {
    default: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md',
    glass: 'bg-white/30 dark:bg-neutral-800/40 backdrop-blur-md border border-white/40 dark:border-neutral-700/60 shadow-glass',
    elevated: 'bg-white dark:bg-neutral-800 border-0 shadow-xl',
    outlined: 'bg-transparent border-2 border-neutral-200 dark:border-neutral-700 shadow-none',
    flat: 'bg-neutral-50 dark:bg-neutral-900 border-0 shadow-none',
  };

  // Size styles
  const sizeStyles = {
    sm: 'p-4 rounded-lg',
    md: 'p-6 rounded-xl',
    lg: 'p-8 rounded-2xl',
  };

  // Hover styles
  const hoverStyles = hoverable ? (
    prefersReduced ? 
    'transition-all duration-300 hover:shadow-lg' : 
    'transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
  ) : '';

  const baseStyles = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${hoverStyles}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  if (animated) {
    return (
      <motion.div
        className={baseStyles}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={hoverable && !prefersReduced ? { 
          scale: 1.02,
          rotateX: 1,
          rotateY: -1 
        } : {}}
        whileTap={onClick ? { scale: 0.98 } : {}}
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

export default Card;