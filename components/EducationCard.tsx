import React from 'react';
import styles from '../styles/EducationCard.module.css';

interface EducationCardProps {
  logo: string;  // 학교 로고 이미지 경로
  schoolName: string; // 학교명
  major: string; // 전공명
  period: string; // 기간
}

const EducationCard: React.FC<EducationCardProps> = ({ logo, schoolName, major, period }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${schoolName} logo`} className={styles.logo} />
      </div>
      <div className={styles.info}>
        <div className={styles.schoolName}>{schoolName}</div>
        <div className={styles.major}>{major}</div>
        <div className={styles.period}>{period}</div>
      </div>
    </div>
  );
};

export default EducationCard;
