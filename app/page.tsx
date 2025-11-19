"use client";

import React, { useState, useEffect } from "react";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { HeroWidget, TechStackWidget, ProjectWidget, BioWidget, ConnectWidget } from "@/components/BentoItems";
import Tabs from "@/components/Tabs";
import TabContent from "@/components/TabContent";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
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

  if (isLoading) {
    return (
      <div className="envelopeAnimation">
        <motion.div
          className="envelope"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          📧
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Bento Grid Section */}
      <div className="p-4 md:p-8 pt-24">
        <div className="flex justify-end mb-8 gap-1">
          <button
            className={`px-5 py-2 font-medium text-sm tracking-wide transition-all duration-300 border-b-2 ${language === 'ko'
                ? 'text-white border-violet-500'
                : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            onClick={() => setLanguage('ko')}
          >
            한국어
          </button>
          <button
            className={`px-5 py-2 font-medium text-sm tracking-wide transition-all duration-300 border-b-2 ${language === 'en'
                ? 'text-white border-violet-500'
                : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>

        <BentoGrid className="pb-20">
          <HeroWidget />
          <BioWidget />
          <ConnectWidget />
          <TechStackWidget />
          <ProjectWidget
            title="SMEats"
            desc="Connecting local markets with small businesses. A platform for sustainable growth."
            tags={["Next.js", "Supabase", "Flutter"]}
            color="from-orange-500 to-red-500"
          />
          <ProjectWidget
            title="DIAL"
            desc="Healthcare smartwatch interface for elderly monitoring and emergency response."
            tags={["React Native", "IoT", "Node.js"]}
            color="from-emerald-500 to-teal-500"
          />
          <ProjectWidget
            title="BeMore"
            desc="Full-stack productivity platform for student developers."
            tags={["Next.js", "Prisma", "PostgreSQL"]}
            color="from-violet-500 to-purple-500"
          />
        </BentoGrid>
      </div>

      {/* Detailed Content Section */}
      <div className="bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="container-custom py-24">
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
}
