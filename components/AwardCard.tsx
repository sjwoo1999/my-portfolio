import React from 'react';
import styles from '../styles/AwardCard.module.css';
import Image from 'next/image';

interface AwardCardProps {
  title: string;         // 상 이름
  award: string;         // 상 종류
  organization: string;  // 수여 기관
  certificate: string;   // 상장 이미지 경로
  awardDate: string;     // 수상일자
}

const AwardCard: React.FC<AwardCardProps> = ({ title, award, organization, certificate, awardDate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.certificateContainer}>
        <Image src={certificate} alt={`${award} certificate`} className={styles.certificateImage} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.organization}>{organization}</div>
        <div className={styles.award}>
          {award}
        </div>
        <div className={styles.awardDate}>수상일자: {awardDate}</div>
      </div>
    </div>
  );
};

export default AwardCard;
