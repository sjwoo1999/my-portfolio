import React, { useState } from 'react';
import styles from '../styles/Tabs.module.css';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeYear: string;
  setActiveYear: (year: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, activeYear, setActiveYear }) => {
  const tabItems = [
    { key: 'education', label: '학력' },
    { key: 'career', label: '활동 이력' },
    { key: 'awards', label: '수상 경력' },
    { key: 'projects', label: '프로젝트' },
  ];

  const yearItems = [
    { key: '전체', label: '전체' },
    { key: '2022', label: '2022' },
    { key: '2023', label: '2023' },
    { key: '2024', label: '2024' },
  ];

  return (
    <>
      <nav className={styles.nav}>
        {tabItems.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActiveTab(item.key);
              setActiveYear('전체'); // 탭을 변경할 때 연도를 '전체'로 리셋
            }}
            className={`${styles.tabButton} ${activeTab === item.key ? styles.active : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {(activeTab === 'career' || activeTab === 'projects' || activeTab === 'awards') && (
        <nav className={styles.yearNav}>
          {yearItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveYear(item.key)}
              className={`${styles.yearButton} ${activeYear === item.key ? styles.active : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </>
  );
};

export default Tabs;
