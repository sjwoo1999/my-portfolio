import React from 'react';
import EducationCard from './EducationCard';
import CareerCard from './CareerCard';
import AwardCard from './AwardCard';
import ProjectCard from './ProjectCard';
import styles from '../styles/TabContent.module.css';

interface TabContentProps {
  activeTab: string;
  activeYear: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, activeYear }) => {
  const filterByYear = (year: string, period: string) => {
    if (year === '전체') return true;
    return period.includes(year);
  };

  if (activeTab === 'education') {
    return (
      <div className={styles.content}>
        <h2 className={styles.title}>학력</h2>
        {filterByYear(activeYear, '2019년 3월 - 2025년 12월') && (
          <EducationCard
            logo="/images/crimson2negative.gif"
            schoolName="고려대학교 세종캠퍼스"
            major="컴퓨터융합소프트웨어학과"
            period="2019년 3월 - 2025년 12월"
          />
        )}
        {filterByYear(activeYear, '2025년 3월 - 2025년 12월') && (
          <EducationCard
            logo="/images/crimson2negative.gif"
            schoolName="고려대학교 서울캠퍼스"
            major="기술창업 융합전공"
            period="2025년 3월 - 2025년 12월"
          />
        )}
      </div>
    );
  } else if (activeTab === 'career') {
    return (
      <div className={styles.content}>
        <h2 className={styles.title}>활동 이력</h2>
        {filterByYear(activeYear, '2023년 1월 - 현재') && (
          <CareerCard
            logo="/images/sample_company_logo.png"
            companyName="샘플 회사"
            position="소프트웨어 엔지니어"
            period="2023년 1월 - 현재"
          />
        )}
      </div>
    );
  } else if (activeTab === 'awards') {
    return (
      <div className={styles.content}>
        <h2 className={styles.title}>수상 경력</h2>
        {filterByYear(activeYear, '2022년') && (
          <AwardCard
            logo="/images/award_logo.png"
            awardTitle="샘플 수상"
            organization="샘플 기관"
            period="2022년"
          />
        )}
      </div>
    );
  } else if (activeTab === 'projects') {
    return (
      <div className={styles.content}>
        <h2 className={styles.title}>프로젝트</h2>
        {filterByYear(activeYear, '2023년') && (
          <ProjectCard
            logo="/images/project_logo.png"
            projectName="샘플 프로젝트"
            description="이것은 샘플 프로젝트입니다."
            period="2023년"
          />
        )}
      </div>
    );
  }

  return null;
};

export default TabContent;
