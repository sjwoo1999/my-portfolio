"use client";

import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import Header from "../components/Header";
import NoSSR from "../components/NoSSR";
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
      {/* subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-neutral-100/5 before:to-transparent before:opacity-20" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex justify-end mb-4">
          <button
            className={`rounded-full px-5 py-2 font-semibold border shadow transition
              ${language === 'ko'
                ? 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white shadow-lg border-neutral-800'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
            onClick={() => setLanguage('ko')}
            suppressHydrationWarning
          >
            한국어
          </button>
          <button
            className={`rounded-full px-5 py-2 font-semibold border shadow transition
              ${language === 'en'
                ? 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white shadow-lg border-neutral-800'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
            onClick={() => setLanguage('en')}
            suppressHydrationWarning
          >
            English
          </button>
        </div>
        <NoSSR fallback={
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl p-8 mb-8">
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">우성종</h1>
                <div className="text-lg font-medium text-slate-100">
                  백엔드 개발자, 창업가, 그리고 도전가.
                </div>
              </div>
            </div>
          </div>
        }>
          <Header />
        </NoSSR>
        <div className="mt-8 space-y-8">
          <NoSSR fallback={
            <div className="space-y-4">
              <nav className="flex flex-wrap gap-2 rounded-xl bg-white/30 dark:bg-neutral-800/40 p-2 shadow-sm">
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-gradient-to-r from-neutral-800 to-neutral-900 text-white shadow-lg">
                  🎓 학력
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                  💼 활동 이력
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                  🏆 수상 경력
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                  🚀 프로젝트
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                  📰 News
                </button>
              </nav>
            </div>
          }>
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeYear={activeYear}
              setActiveYear={setActiveYear}
            />
          </NoSSR>
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
