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
    <main className="relative min-h-screen overflow-hidden">
      <div className="container-custom py-24 relative z-10">
        <div className="flex justify-end mb-16 gap-1">
          <button
            className={`px-5 py-2 font-medium text-sm tracking-wide transition-all duration-300 border-b-2 ${language === 'ko'
                ? 'text-foreground border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            onClick={() => setLanguage('ko')}
            suppressHydrationWarning
          >
            한국어
          </button>
          <button
            className={`px-5 py-2 font-medium text-sm tracking-wide transition-all duration-300 border-b-2 ${language === 'en'
                ? 'text-foreground border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            onClick={() => setLanguage('en')}
            suppressHydrationWarning
          >
            English
          </button>
        </div>
        <NoSSR fallback={
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent shadow-xl p-8 mb-8">
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-extrabold text-primary-foreground drop-shadow-lg">우성종</h1>
                <div className="text-lg font-medium text-primary-foreground/90">
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
              <nav className="flex flex-wrap gap-2 rounded-xl bg-muted/50 p-2 shadow-sm">
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-background text-foreground shadow-sm">
                  🎓 학력
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-background/50">
                  💼 활동 이력
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-background/50">
                  🏆 수상 경력
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-background/50">
                  🚀 프로젝트
                </button>
                <button className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-background/50">
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
