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
    <div className="space-y-4">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-2 rounded-xl bg-[var(--card-bg)] p-2 shadow-sm"
      >
        {tabItems.map((item) => (
          <motion.button
            key={item.key}
            onClick={() => {
              setActiveTab(item.key);
              setActiveYear('전체');
              const section = document.getElementById(item.key);
              if (section) {
                const yOffset = -100; // 헤더/탭 높이에 맞게 조정
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-md bg-white/30 dark:bg-slate-800/40 ${
              activeTab === item.key
                ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{item.icon}</span>
            {item.label}
          </motion.button>
        ))}
      </motion.nav>

      {activeTab !== 'education' && activeTab !== 'news' && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {yearItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => setActiveYear(item.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-md bg-white/30 dark:bg-slate-800/40 ${
                activeYear === item.key
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
