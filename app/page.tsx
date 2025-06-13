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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white/80 to-slate-200/80 dark:from-slate-900/80 dark:to-slate-800/80 overflow-hidden">
      {/* subtle grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-10" />
      <div className="container mx-auto px-4 py-8 relative z-10">
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
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
