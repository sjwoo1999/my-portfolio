import React, { useState, useEffect } from 'react';
import styles from '../styles/Tabs.module.css';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeYear: string;
  setActiveYear: (year: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, activeYear, setActiveYear }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 브라우저에 마운트된 후에만 렌더링 허용
  }, []);

  if (!isMounted) {
    return null; // SSR에서 초기 렌더링 방지
  }

  const tabItems = [
    { key: 'education', label: '학력' },
    { key: 'career', label: '활동 이력' },
    { key: 'awards', label: '수상 경력' },
    { key: 'projects', label: '프로젝트' },
    { key: 'news', label: 'News' }, // News 추가
  ];

  const yearItems = [
    { key: '전체', label: '전체' },
    { key: '2024', label: '2024' },
    { key: '2023', label: '2023' },
    { key: '2022', label: '2022' },
  ];

  return (
    <>
      {/* 탭 버튼 */}
      <nav className={styles.nav}>
        {tabItems.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActiveTab(item.key);
              setActiveYear('전체'); // 탭 변경 시 연도 초기화
            }}
            className={`${styles.tabButton} ${activeTab === item.key ? styles.active : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* 연도 버튼 */}
      {activeTab !== 'education' && activeTab !== 'news' && ( // News 탭에서는 연도 버튼 제외
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
