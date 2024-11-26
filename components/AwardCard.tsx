import React from 'react';
import styles from '../styles/AwardCard.module.css';

interface AwardCardProps {
  logo: string;  // 수상 로고 이미지 경로
  awardTitle: string; // 수상명
  organization: string; // 수여 기관명
  period: string; // 수상 연도
}

const AwardCard: React.FC<AwardCardProps> = ({ logo, awardTitle, organization, period }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${awardTitle} logo`} className={styles.logo} />
      </div>
      <div className={styles.info}>
        <div className={styles.awardTitle}>{awardTitle}</div>
        <div className={styles.organization}>{organization}</div>
        <div className={styles.period}>{period}</div>
      </div>
    </div>
  );
};

export default AwardCard;
