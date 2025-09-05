'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  animated?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  animated = true,
  disabled,
  onClick,
  type = 'button',
}) => {
  const prefersReduced = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Variant styles
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-primary-600 to-primary-500 
      text-white border border-primary-600
      hover:from-primary-700 hover:to-primary-600
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      active:from-primary-800 active:to-primary-700
      disabled:from-neutral-300 disabled:to-neutral-300 disabled:border-neutral-300
    `,
    secondary: `
      bg-gradient-to-r from-secondary-600 to-secondary-500 
      text-white border border-secondary-600
      hover:from-secondary-700 hover:to-secondary-600
      focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2
      active:from-secondary-800 active:to-secondary-700
      disabled:from-neutral-300 disabled:to-neutral-300 disabled:border-neutral-300
    `,
    outline: `
      bg-transparent text-primary-600 dark:text-primary-400 
      border border-primary-600 dark:border-primary-400
      hover:bg-primary-50 dark:hover:bg-primary-950
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      active:bg-primary-100 dark:active:bg-primary-900
      disabled:text-neutral-400 disabled:border-neutral-300
    `,
    ghost: `
      bg-transparent text-neutral-700 dark:text-neutral-200 
      border border-transparent
      hover:bg-neutral-100 dark:hover:bg-neutral-800
      focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2
      active:bg-neutral-200 dark:active:bg-neutral-700
      disabled:text-neutral-400
    `,
    link: `
      bg-transparent text-primary-600 dark:text-primary-400 
      border border-transparent underline-offset-4
      hover:underline hover:text-primary-700 dark:hover:text-primary-300
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      active:text-primary-800 dark:active:text-primary-200
      disabled:text-neutral-400 disabled:no-underline
    `,
  };

  // Size styles
  const sizeStyles = {
    xs: 'px-2.5 py-1.5 text-xs font-medium rounded-md',
    sm: 'px-3 py-2 text-sm font-medium rounded-md',
    md: 'px-4 py-2.5 text-sm font-medium rounded-lg',
    lg: 'px-5 py-3 text-base font-medium rounded-lg',
    xl: 'px-6 py-3.5 text-base font-semibold rounded-xl',
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium transition-all duration-200
    focus:outline-none focus:ring-offset-white dark:focus:ring-offset-neutral-900
    disabled:cursor-not-allowed disabled:opacity-50
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) return;
    onClick?.(e);
  };

  const buttonContent = (
    <>
      {loading ? (
        <svg 
          className="animate-spin h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : leftIcon}
      
      <span>{children}</span>
      
      {!loading && rightIcon}
    </>
  );

  if (animated && !prefersReduced) {
    return (
      <motion.button
        className={baseStyles}
        onClick={handleClick}
        disabled={disabled || loading}
        type={type}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      className={baseStyles}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
    >
      {buttonContent}
    </button>
  );
};

export default Button;