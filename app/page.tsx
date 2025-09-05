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
    <main className="relative min-h-screen bg-stone-50 dark:bg-stone-950 overflow-hidden">
      {/* Minimal texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.015] bg-gradient-to-br from-stone-400 to-stone-600" />
      <div className="container mx-auto px-8 py-24 relative z-10 max-w-5xl">
        <div className="flex justify-end mb-16 gap-1">
          <button
            className={`px-5 py-2 font-light text-sm tracking-wider transition-all duration-300 border-b-2 ${
              language === 'ko'
                ? 'text-stone-900 dark:text-stone-100 border-stone-900 dark:border-stone-100'
                : 'text-stone-400 dark:text-stone-500 border-transparent hover:text-stone-600 dark:hover:text-stone-400'
            }`}
            onClick={() => setLanguage('ko')}
            suppressHydrationWarning
          >
            한국어
          </button>
          <button
            className={`px-5 py-2 font-light text-sm tracking-wider transition-all duration-300 border-b-2 ${
              language === 'en'
                ? 'text-stone-900 dark:text-stone-100 border-stone-900 dark:border-stone-100'
                : 'text-stone-400 dark:text-stone-500 border-transparent hover:text-stone-600 dark:hover:text-stone-400'
            }`}
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
        <div className="mt-16 space-y-16">
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
