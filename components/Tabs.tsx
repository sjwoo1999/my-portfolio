'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeYear: string;
  setActiveYear: (year: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, activeYear, setActiveYear }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const tabItems = [
    { key: 'education', label: '학력', icon: '🎓' },
    { key: 'career', label: '활동 이력', icon: '💼' },
    { key: 'awards', label: '수상 경력', icon: '🏆' },
    { key: 'projects', label: '프로젝트', icon: '🚀' },
    { key: 'news', label: 'News', icon: '📰' },
  ];

  const yearItems = [
    { key: '전체', label: '전체' },
    { key: '2024', label: '2024' },
    { key: '2023', label: '2023' },
    { key: '2022', label: '2022' },
  ];

  return (
    <div className="space-y-8 sticky top-0 z-20 backdrop-blur supports-backdrop-blur:bg-stone-50/90 dark:supports-backdrop-blur:bg-stone-950/90 py-4">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3"
        role="tablist"
        aria-label="Profile sections"
      >
        {tabItems.map((item) => (
          <motion.button
            key={item.key}
            onClick={() => {
              setActiveTab(item.key);
              setActiveYear('전체');
              if (typeof window !== 'undefined') {
                const section = document.getElementById(item.key);
                if (section) {
                  const yOffset = -100;
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }
            }}
            className={`flex items-center gap-3 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 border-b-2 ${
              activeTab === item.key
                ? 'text-stone-900 dark:text-stone-100 border-stone-900 dark:border-stone-100'
                : 'text-stone-500 dark:text-stone-400 border-transparent hover:text-stone-700 dark:hover:text-stone-300 hover:border-stone-300 dark:hover:border-stone-600'
            }`}
            role="tab"
            aria-selected={activeTab === item.key}
            tabIndex={activeTab === item.key ? 0 : -1}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </motion.button>
        ))}
      </motion.nav>

      {activeTab !== 'education' && activeTab !== 'news' && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          {yearItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => setActiveYear(item.key)}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 border-b border-transparent ${
                activeYear === item.key
                  ? 'text-accent-600 dark:text-accent-400 border-accent-600 dark:border-accent-400'
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400 hover:border-stone-300 dark:hover:border-stone-600'
              }`}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </div>
  );
};

export default Tabs;
