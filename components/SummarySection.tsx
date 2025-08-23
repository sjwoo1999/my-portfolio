'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { createRevealVariants } from '../utils/motion';

interface SummarySectionProps {
  language: 'ko' | 'en';
  activeYear: string;
  careersCount: number;
  awardsCount: number;
  projectsCount: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({ language, activeYear, careersCount, awardsCount, projectsCount }) => {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = createRevealVariants(prefersReduced);

  const yearLabel = activeYear === '전체' ? (language === 'ko' ? '전체 기간' : 'the entire period') : activeYear;

  const lines = language === 'ko'
    ? [
        `${yearLabel} 기준으로 활동 ${careersCount}건과 수상 ${awardsCount}건을 수행하여, 신속한 실험 및 성과 중심의 실행 역량을 입증하였습니다.`,
        `학력은 기술 기반과 창업 융합을 병행하여, 문제 발굴–실행–검증 전 과정을 체계적으로 습득하였습니다.`,
        `프로젝트 ${projectsCount}건은 API 중심 MVP 및 피드백 루프 설계를 통해 검증 리드타임 단축에 초점을 두었습니다.`,
      ]
    : [
        `As of ${yearLabel}, ${careersCount} activities and ${awardsCount} awards collectively evidence rapid iteration and outcome‑oriented execution.`,
        `Education combines core computer science with entrepreneurship, encompassing problem discovery, delivery, and validation.`,
        `${projectsCount} projects prioritized an API‑first MVP and well‑defined feedback loops to shorten validation lead time.`,
      ];

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent" />
      <div className="relative z-10 space-y-2">
        {lines.map((text, idx) => (
          <motion.p key={idx} variants={reveal} className="text-sm text-[var(--foreground)]/90">
            {text}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default SummarySection;


