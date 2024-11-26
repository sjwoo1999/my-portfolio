import React from 'react';
import styles from '../styles/CareerCard.module.css';

interface CareerCardProps {
  logo: string;  // 회사 로고 이미지 경로
  companyName: string; // 회사명
  position: string; // 직무명
  period: string; // 기간
}

const CareerCard: React.FC<CareerCardProps> = ({ logo, companyName, position, period }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${companyName} logo`} className={styles.logo} />
      </div>
      <div className={styles.info}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.period}>{period}</div>
      </div>
    </div>
  );
};

export default CareerCard;
