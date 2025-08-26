'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EducationCard from './EducationCard';
import CareerCard from './CareerCard';
import AwardCard from './AwardCard';
import ProjectCard from './ProjectCard';
import NewsList from './NewsList';
import SummarySection from './SummarySection';
import styles from '../styles/TabContent.module.css';
import { createRevealVariants, createStaggerContainer } from '../utils/motion';

interface TabContentProps {
  activeTab: string;
  activeYear: string;
  setActiveTab: (tab: string) => void;
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
}

interface Career {
  organization: string;
  position: string;
  year: string;
  description?: string;
  skills?: string[];
}

interface Award {
  title: string;
  award: string;
  organization: string;
  year: string;
  awardDate: string;
  description?: string;
  category?: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, activeYear, setActiveTab, language, setLanguage }) => {
  // 연도별 활동 목록 (수료와 참여를 분리하여 수정된 활동 내용)
  const careers: Record<string, any[]> = {
    '2022': [
      { organization: { ko: '멋쟁이사자처럼 대학 고려대학교(세종) 부원', en: 'LIKELION KU (Sejong) Member' }, position: { ko: '활동', en: 'Activity' }, year: { ko: '2022', en: '2022' }, description: { ko: '', en: '' } },
      { organization: { ko: '[멋쟁이사자처럼 X 넥슨] MOD Supporters Hackathon', en: '[LIKELION X NEXON] MOD Supporters Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2022', en: '2022' }, description: { ko: '', en: '' } },
      { organization: { ko: '[멋쟁이사자처럼 X 넥슨] MapleStory Worlds Super Hackathon', en: '[LIKELION X NEXON] MapleStory Worlds Super Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2022', en: '2022' }, description: { ko: '', en: '' } },
      { organization: { ko: '[멋쟁이사자처럼 X 넥슨] Supporters/Super Hackathon', en: '[LIKELION X NEXON] Supporters/Super Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2022', en: '2022' }, description: { ko: '', en: '' } },
      { organization: { ko: '고려대학교 컴퓨터융합소프트웨어학과 학과 소모임 KUDING 운영진', en: 'KUDING, Dept. of Computer Convergence Software, KU (Staff)' }, position: { ko: '활동', en: 'Staff' }, year: { ko: '2022', en: '2022' }, description: { ko: '', en: '' } },
    ],
    '2023': [
      { organization: { ko: '고려대학교 메타버스 학회 유나이티드', en: 'KU Metaverse Society UNITED' }, position: { ko: '수료', en: 'Completed' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '멋쟁이사자처럼 대학 11기 고려대학교(세종) 운영진', en: 'LIKELION KU (Sejong) 11th Staff' }, position: { ko: '활동', en: 'Staff' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '언더독 레볼루션 창업 트랙 운영진', en: 'Underdog Revolution Startup Track Staff' }, position: { ko: '활동', en: 'Staff' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '2023 혁신창업스쿨 1단계', en: '2023 Innovation Startup School Step 1' }, position: { ko: '수료', en: 'Completed' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: 'SKYCC-PAIRING', en: 'SKYCC-PAIRING' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: 'SB통합 서포터즈 2기', en: 'SB Integrated Supporters 2nd' }, position: { ko: '수료', en: 'Completed' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '멋쟁이사자처럼 대학 11기 아이디어톤', en: 'LIKELION KU (Sejong) 11th Ideathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: 'Pitching In Sejong 7월', en: 'Pitching In Sejong (July)' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '상리 로컬 크리에이터 역량 강화 교육', en: 'Sangri Local Creator Capacity Building Education' }, position: { ko: '활동', en: 'Activity' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '멋쟁이사자처럼 대학 11기 중앙해커톤', en: 'LIKELION 11th Central Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '제10회 대한민국 SW융합 해커톤', en: '10th Korea SW Convergence Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '2023 SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤', en: '2023 SW Convergence Cluster 2.0 Digital Content DX Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
      { organization: { ko: '구름톤 유니브 1기 중앙운영진', en: 'Gooroomthon Univ. 1st Central Staff' }, position: { ko: '활동', en: 'Staff' }, year: { ko: '2023', en: '2023' }, description: { ko: '', en: '' } },
    ],
    '2024': [
      { organization: { ko: '멋쟁이사자처럼 대학 12기 고려대학교(세종) 운영진', en: 'LIKELION KU (Sejong) 12th Staff' }, position: { ko: '활동', en: 'Staff' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '언더독 레볼루션 창업 트랙 운영진', en: 'Underdog Revolution Startup Track Staff' }, position: { ko: '활동', en: 'Staff' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '구름톤 유니브 2기 고려대학교(세종) 대표', en: 'Gooroomthon Univ. 2nd KU (Sejong) Leader' }, position: { ko: '활동', en: 'Leader' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '구름톤 유니브 3기 고려대학교(세종) 대표', en: 'Gooroomthon Univ. 3rd KU (Sejong) Leader' }, position: { ko: '활동', en: 'Leader' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '스파르타코딩클럽 내일배움캠프 Node.js 4기', en: 'Sparta Coding Club Tomorrow Learning Camp Node.js 4th' }, position: { ko: '수료', en: 'Completed' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '멋쟁이사자처럼 대학 12기 아이디어톤', en: 'LIKELION KU (Sejong) 12th Ideathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '전국 대학생 창업 네트워크 Brave - 우주유영 TF', en: 'Brave National University Startup Network - Spacewalk TF' }, position: { ko: '활동', en: 'Activity' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '2024 하나 소셜벤처 유니버시티', en: '2024 Hana Social Venture University' }, position: { ko: '수료', en: 'Completed' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '2024 SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤', en: '2024 SW Convergence Cluster 2.0 Digital Content DX Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '멋쟁이사자처럼 대학 12기 중앙해커톤', en: 'LIKELION 12th Central Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '제11회 대한민국 SW융합 해커톤', en: '11th Korea SW Convergence Hackathon' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '고려대학교 세종 창업동아리 단계상승 피칭데이', en: 'KU Sejong Startup Club Step-up Pitching Day' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 이그니션 스타트업톤 [20명 中 10명 선발]', en: '2024 Pre-Startup Package Incubation (Base) - Ignition Startupton [10 out of 20 selected]' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 스파크 투 스타트업', en: '2024 Pre-Startup Package Incubation (Base) - Spark to Startup' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 앙트십 익스플로전', en: '2024 Pre-Startup Package Incubation (Base) - Entrepreneurship Explosion' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '2024년 예비창업패키지 사전인큐베이팅(거점형) - 파이널 플레임', en: '2024 Pre-Startup Package Incubation (Base) - Final Flame' }, position: { ko: '참여', en: 'Participant' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
      { organization: { ko: '오렌지 플래닛 Learning Mate 3기', en: 'Orange Planet Learning Mate 3rd' }, position: { ko: '수료', en: 'Completed' }, year: { ko: '2024', en: '2024' }, description: { ko: '', en: '' } },
    ],
  };

  // 연도별 수상 경력 목록
  const awards: Record<string, any[]> = {
    '2022': [
      { title: { ko: '컴퓨터융합소프트웨어학과 제2회 KUDING 프로그래밍 경진대회', en: '2nd KUDING Programming Contest, Dept. of Computer Convergence Software' }, award: { ko: '장려상', en: 'Encouragement Award' }, organization: { ko: '고려대학교', en: 'Korea University' }, year: { ko: '2022', en: '2022' }, awardDate: { ko: '2022년 06월 29일', en: 'June 29, 2022' }, description: { ko: '', en: '' } },
    ],
    '2023': [
      { title: { ko: '멋쟁이사자처럼 운영진 해커톤 벚꽃톤', en: 'LIKELION Staff Hackathon Cherry Blossomthon' }, award: { ko: '우수상', en: 'Excellence Award' }, organization: { ko: '멋쟁이사자처럼', en: 'LIKELION' }, year: { ko: '2023', en: '2023' }, awardDate: { ko: '2023년 02월 25일', en: 'Feb 25, 2023' }, description: { ko: '', en: '' } },
      { title: { ko: 'DSC 기업애로기술해결 프로젝트 랩', en: 'DSC Corporate Technical Problem Solving Project Lab' }, award: { ko: '대상', en: 'Grand Prize' }, organization: { ko: 'DSC', en: 'DSC' }, year: { ko: '2023', en: '2023' }, awardDate: { ko: '2023년 07월 14일', en: 'Jul 14, 2023' }, description: { ko: '', en: '' } },
      { title: { ko: '호서대학교 창업중심대학 창업로드캠프', en: 'Hoseo University Startup-Centered University Startup Road Camp' }, award: { ko: '장려상', en: 'Encouragement Award' }, organization: { ko: '호서대학교', en: 'Hoseo University' }, year: { ko: '2023', en: '2023' }, awardDate: { ko: '2023년 05월 23일', en: 'May 23, 2023' }, description: { ko: '', en: '' } },
      { title: { ko: '멋쟁이사자처럼 아이디어톤 고려대 세종', en: 'LIKELION Ideathon KU Sejong' }, award: { ko: '3등', en: '3rd Place' }, organization: { ko: '멋쟁이사자처럼', en: 'LIKELION' }, year: { ko: '2023', en: '2023' }, awardDate: { ko: '2023년 06월 21일', en: 'Jun 21, 2023' }, description: { ko: '', en: '' } },
      { title: { ko: '2023 SW융합클러스터 2.0 디지털 콘텐츠 DX 해커톤', en: '2023 SW Convergence Cluster 2.0 Digital Content DX Hackathon' }, award: { ko: 'SW융합클러스터 인재상', en: 'SW Convergence Cluster Talent Award' }, organization: { ko: '고려대학교 세종산학협력단, 홍익대학교 세종캠퍼스 산학협력단', en: 'KU Sejong IACF, Hongik Univ. Sejong IACF' }, year: { ko: '2023', en: '2023' }, awardDate: { ko: '2023년 09월 23일', en: 'Sep 23, 2023' }, description: { ko: '', en: '' } },
    ],
    '2024': [
      { title: { ko: '제11회 대한민국 SW 융합 해커톤 대회', en: '11th Korea SW Convergence Hackathon' }, award: { ko: '우수상', en: 'Excellence Award' }, organization: { ko: '대한민국', en: 'Korea' }, year: { ko: '2024', en: '2024' }, awardDate: { ko: '2024년 08월 25일', en: 'Aug 25, 2024' }, description: { ko: '', en: '' } },
      { title: { ko: 'THE CHALLENGE SEASON.2', en: 'THE CHALLENGE SEASON.2' }, award: { ko: '우수상', en: 'Excellence Award' }, organization: { ko: '고려대 세종', en: 'KU Sejong' }, year: { ko: '2024', en: '2024' }, awardDate: { ko: '2024년 10월 02일', en: 'Oct 2, 2024' }, description: { ko: '', en: '' } },
      { title: { ko: 'DSC 지역혁신 플랫폼 운영사업 롤링캠프', en: 'DSC Regional Innovation Platform Operation Project Rolling Camp' }, award: { ko: '우수상', en: 'Excellence Award' }, organization: { ko: 'DSC', en: 'DSC' }, year: { ko: '2024', en: '2024' }, awardDate: { ko: '추후 기재 예정', en: 'TBD' }, description: { ko: '', en: '' } },
    ],
    '2025': [
      { title: { ko: '제2회 2025 대한민국 학생 창업주간 - MVP 제작 및 PoC 실증 검증', en: '2nd 2025 Korea Student Startup Week - MVP Production and PoC Verification' }, award: { ko: '대상', en: 'Grand Prize' }, organization: { ko: '한국장학재단', en: 'Korea Student Aid Foundation' }, year: { ko: '2025', en: '2025' }, awardDate: { ko: '2025년 07월 18일', en: 'Jul 18, 2025' }, description: { ko: '팀 AIDn으로 참여하여 MVP 제작 및 PoC 실증 검증 과정에서 우수한 성과를 거둠', en: 'Participated as Team AIDn, achieving excellent results in MVP production and PoC verification process' } },
    ],
  };

  const newsData = [
    {
      title: { ko: "상리 로컬 크리에이터 1차 역량 강화 교육, 지역 활성화를 위한 예비창업자 육성", en: "Sangri Local Creator 1st Capacity Building Education, Fostering Prospective Entrepreneurs for Regional Revitalization" },
      link: "https://sejongtoday.tistory.com/49",
    },
    {
      title: { ko: "세종테크노파크, 제11회 대한민국 SW융합 해커톤 대회 세종팀 수상", en: "Sejong Technopark, Sejong Team Wins at the 11th Korea SW Convergence Hackathon" },
      link: "https://www.ccnnews.co.kr/news/articleView.html?idxno=345521",
    },
    {
      title: { ko: "세종 대표팀, SW융합 해커톤 대회서 '두각'", en: "Sejong Representative Team Stands Out at SW Convergence Hackathon" },
      link: "https://www.goodmorningcc.com/news/articleView.html?idxno=403794",
    },
    {
      title: { ko: "대한민국 SW융합 해커톤 대회, 세종팀 우수·특별상 수상", en: "Korea SW Convergence Hackathon, Sejong Team Wins Excellence and Special Awards" },
      link: "https://www.daejonilbo.com/news/articleView.html?idxno=2152629",
    },
    {
      title: { ko: "세종테크노파크, 제11회 대한민국 SW융합 해커톤 대회서 세종팀 수상", en: "Sejong Technopark, Sejong Team Wins at the 11th Korea SW Convergence Hackathon" },
      link: "https://www.wikitree.co.kr/articles/979132",
    },
    {
      title: { ko: "[포토] (재)세종테크노파크 '제11회 대한민국 SW융합 해커톤 대회'서 2개팀 수상", en: "[Photo] Sejong Technopark, Two Teams Win at the 11th Korea SW Convergence Hackathon" },
      link: "https://www.gukjenews.com/news/articleView.html?idxno=3077898",
    },
    {
      title: { ko: "세종TP, '대한민국 SW융합 해커톤 대회'서 세종 2개팀 우수·특별상 수상", en: "SejongTP, Two Sejong Teams Win Excellence and Special Awards at Korea SW Convergence Hackathon" },
      link: "https://www.econovill.com/news/articleView.html?idxno=665367",
    },
    {
      title: { ko: "고려대 세종산학협력단, 예비창업패키지 사전인큐베이팅 프로그램 '이그니션 스타트업톤' 개최", en: "KU Sejong Industry-Academic Cooperation Foundation Holds 'Ignition Startupton' Pre-Startup Package Incubation Program" },
      link: "https://www.businesskorea.co.kr/news/articleView.html?idxno=226103",
    },
    {
      title: { ko: "고려대 세종산학협력단, 예비창업패키지 사전인큐베이팅(거점형) 프로그램 개최", en: "KU Sejong Industry-Academic Cooperation Foundation Holds Pre-Startup Package Incubation (Base Type) Program" },
      link: "https://www.gukjenews.com/news/articleView.html?idxno=3101152",
    },
    {
      title: { ko: "고려대 세종산학협력단, 예비창업패키지 사전인큐베이팅 '파이널 플레임' 성료", en: "KU Sejong Industry-Academic Cooperation Foundation Successfully Concludes 'Final Flame' Pre-Startup Package Incubation" },
      link: "https://www.datanet.co.kr/news/articleView.html?idxno=198143",
    },
    {
      title: { ko: "고려대 세종산학협력단, 예비창업패키지 사전인큐베이팅(거점형) 프로그램 '파이널 플레임(Final Flame)' 성료", en: "KU Sejong Industry-Academic Cooperation Foundation Successfully Concludes 'Final Flame' Pre-Startup Package Incubation (Base Type) Program" },
      link: "https://dhnews.co.kr/news/view/1065600088335618",
    },
  ];

  // 연도별 필터링을 적용한 활동 및 수상 경력 목록 가져오기
  const getFilteredCareers = () => {
    if (activeYear === '전체') {
      return Object.entries(careers)
        .flatMap(([year, careersArr]) =>
          careersArr.map((career) => ({
            organization: typeof career.organization === 'string' ? { ko: career.organization, en: career.organization } : career.organization,
            position: typeof career.position === 'string' ? { ko: career.position, en: career.position } : career.position,
            year: typeof career.year === 'string' ? { ko: career.year, en: career.year } : career.year,
            description: career.description
              ? (typeof career.description === 'string' ? { ko: career.description, en: career.description } : career.description)
              : { ko: '', en: '' },
          }))
        )
        .reverse();
    }
    return (careers[activeYear]?.map((career) => ({
      organization: typeof career.organization === 'string' ? { ko: career.organization, en: career.organization } : career.organization,
      position: typeof career.position === 'string' ? { ko: career.position, en: career.position } : career.position,
      year: typeof career.year === 'string' ? { ko: career.year, en: career.year } : career.year,
      description: career.description
        ? (typeof career.description === 'string' ? { ko: career.description, en: career.description } : career.description)
        : { ko: '', en: '' },
    })).reverse() || []);
  };

  const getFilteredAwards = () => {
    if (activeYear === '전체') {
      return Object.entries(awards)
        .flatMap(([year, awardsArr]) =>
          awardsArr.map((award) => ({
            title: typeof award.title === 'string' ? { ko: award.title, en: award.title } : award.title,
            organization: typeof award.organization === 'string' ? { ko: award.organization, en: award.organization } : award.organization,
            year: typeof award.year === 'string' ? { ko: award.year, en: award.year } : award.year,
            awardDate: typeof award.awardDate === 'string' ? { ko: award.awardDate, en: award.awardDate } : award.awardDate,
            description: award.description
              ? (typeof award.description === 'string' ? { ko: award.description, en: award.description } : award.description)
              : { ko: '', en: '' },
          }))
        )
        .reverse();
    }
    return (awards[activeYear]?.map((award) => ({
      title: typeof award.title === 'string' ? { ko: award.title, en: award.title } : award.title,
      organization: typeof award.organization === 'string' ? { ko: award.organization, en: award.organization } : award.organization,
      year: typeof award.year === 'string' ? { ko: award.year, en: award.year } : award.year,
      awardDate: typeof award.awardDate === 'string' ? { ko: award.awardDate, en: award.awardDate } : award.awardDate,
      description: award.description
        ? (typeof award.description === 'string' ? { ko: award.description, en: award.description } : award.description)
        : { ko: '', en: '' },
    })).reverse() || []);
  };

  const filteredCareers = getFilteredCareers();
  const filteredAwards = getFilteredAwards();

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const containerVariants = createStaggerContainer(prefersReduced);
  const reveal = createRevealVariants(prefersReduced);

  // 학력 데이터 예시 (세종캠퍼스 왼쪽, 서울캠퍼스 오른쪽)
  const educations = [
    {
      campus: { ko: '고려대학교 세종캠퍼스', en: 'Korea University Sejong Campus' },
      majorType: { ko: '제1전공', en: 'Primary Major' },
      college: { ko: '과학기술대학', en: 'College of Science and Technology' },
      major: { ko: '컴퓨터융합소프트웨어학과', en: 'Department of Computer Convergence Software' },
      period: { ko: '2019.03 - 2025.12', en: 'Mar 2019 - Dec 2025' },
      location: { ko: '세종특별자치시', en: 'Sejong City' },
    },
    {
      campus: { ko: '고려대학교 서울캠퍼스', en: 'Korea University Seoul Campus' },
      majorType: { ko: '제2전공', en: 'Double Major' },
      college: { ko: '공과대학', en: 'College of Engineering' },
      major: { ko: '기술창업 융합전공', en: 'Tech Entrepreneurship Convergence Major' },
      period: { ko: '2025.03 - 2025.12', en: 'Mar 2025 - Dec 2025' },
      location: { ko: '서울특별시', en: 'Seoul' },
    },
  ];

  const educationRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || typeof window === 'undefined') return;
    const sections = [
      { ref: educationRef, key: 'education' },
      { ref: careerRef, key: 'career' },
      { ref: awardsRef, key: 'awards' },
      { ref: projectsRef, key: 'projects' },
      { ref: newsRef, key: 'news' },
    ];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, [setActiveTab, hasMounted]);

  if (!hasMounted) return null;

  return (
    <motion.div className="mt-8 space-y-16" variants={containerVariants} initial={false}>
      <motion.section id="education" ref={educationRef} className="scroll-mt-24 bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-700 rounded-none" variants={reveal} initial={false}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {language === 'ko' ? '학력' : 'Education'}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {educations.map((edu, index) => (
            <motion.div
              key={`${edu.campus.ko}-${index}`}
              variants={reveal}
              transition={{ delay: prefersReduced ? 0 : index * 0.06 }}
            >
              <EducationCard
                campus={edu.campus[language]}
                majorType={edu.majorType[language]}
                college={edu.college[language]}
                major={edu.major[language]}
                period={edu.period[language]}
                location={edu.location[language]}
                order="campusFirst"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section id="career" ref={careerRef} className="relative scroll-mt-24 bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-700 rounded-none" variants={reveal} initial={false}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {language === 'ko' ? '활동 이력' : 'Activities & Experience'}
        </h2>
        <motion.span
          aria-hidden
          className="absolute left-3 top-28 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-700"
          style={{ transformOrigin: 'top' }}
          initial={{ scaleY: prefersReduced ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReduced ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="space-y-6">
          {getFilteredCareers().map((career, index) => (
            <motion.div
              key={`${career.year.ko || career.year}-${index}`}
              variants={reveal}
              transition={{ delay: prefersReduced ? 0 : index * 0.06 }}
            >
              <CareerCard
                company={career.organization[language]}
                position={career.position[language]}
                period={career.year[language]}
                description={career.description ? career.description[language] : ''}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section id="awards" ref={awardsRef} className="scroll-mt-24 bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-700 rounded-none" variants={reveal} initial={false}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {language === 'ko' ? '수상 이력' : 'Awards'}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {getFilteredAwards().map((award, index) => (
            <motion.div
              key={`${award.year.ko || award.year}-${index}`}
              variants={reveal}
              transition={{ delay: prefersReduced ? 0 : index * 0.06 }}
            >
              <AwardCard
                title={award.title[language]}
                organization={award.organization[language]}
                date={award.awardDate[language]}
                description={award.description ? award.description[language] : ''}
                year={award.year[language]}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section id="projects" ref={projectsRef} className="scroll-mt-24 bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-700 rounded-none" variants={reveal} initial={false}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {language === 'ko' ? '프로젝트' : 'Projects'}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* 실제 프로젝트 데이터로 교체 필요 */}
          <motion.div variants={reveal}>
            <ProjectCard
              title={language === 'ko' ? '샘플 프로젝트' : 'Sample Project'}
              description={language === 'ko' ? '이것은 샘플 프로젝트입니다.' : 'This is a sample project.'}
              period={language === 'ko' ? '2023년' : '2023'}
              technologies={["React", "TypeScript", "Tailwind CSS"]}
            />
          </motion.div>
        </div>
      </motion.section>
      <motion.section id="news" ref={newsRef} className="scroll-mt-24 bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-700 rounded-none" variants={reveal} initial={false}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {language === 'ko' ? '뉴스' : 'News'}
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NewsList newsData={newsData.map(news => ({
            title: news.title[language],
            link: news.link
          }))} />
        </motion.div>
      </motion.section>
      {/* Summary Section (append-only) */}
      <motion.section id="summary" className="scroll-mt-24 bg-white dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-700 rounded-none" variants={reveal} initial={false}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {language === 'ko' ? '요약' : 'Summary'}
        </h2>
        <SummarySection
          language={language}
          activeYear={activeYear}
          careersCount={getFilteredCareers().length}
          awardsCount={getFilteredAwards().length}
          projectsCount={1}
        />
      </motion.section>
    </motion.div>
  );
};

export default TabContent;
