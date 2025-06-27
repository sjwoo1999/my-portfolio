"use client";

import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [activeTab, setActiveTab] = useState<string>("education");
  const [activeYear, setActiveYear] = useState<string>("전체");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white/80 to-slate-200/80 dark:from-slate-900/80 dark:to-slate-800/80 overflow-hidden">
      {/* subtle grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-10" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        {hasMounted && (
          <div className="flex justify-end mb-4">
            <button
              className={`rounded-full px-5 py-2 font-semibold border shadow transition
                ${language === 'ko'
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg border-slate-800'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-gray-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              onClick={() => setLanguage('ko')}
            >
              한국어
            </button>
            <button
              className={`rounded-full px-5 py-2 font-semibold border shadow transition
                ${language === 'en'
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg border-slate-800'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-gray-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
          </div>
        )}
        <Header />
        <div className="mt-8 space-y-8">
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />
          <TabContent
            activeTab={activeTab}
            activeYear={activeYear}
            setActiveTab={setActiveTab}
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
