import React from 'react';
import styles from '../styles/CareerCard.module.css';

interface CareerCardProps {
  year: string;
  organization: string;
  position: string;
  period: string;
  certificate: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ year, organization, position, period, certificate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.certificateContainer}>
        <img src={certificate} alt={`${organization} certificate`} className={styles.certificateImage} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{organization}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.period}>활동 기간: {period}</div>
      </div>
    </div>
  );
};

export default CareerCard;
