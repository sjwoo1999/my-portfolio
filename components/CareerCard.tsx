import React from 'react';
import styles from '../styles/CareerCard.module.css';

interface CareerCardProps {
  year: string;
  organization: string;
  position: string;
  period: string;
  certificate: string;
  width?: number; // 추가
  height?: number; // 추가
}

const CareerCard: React.FC<CareerCardProps> = ({
  year,
  organization,
  position,
  period,
  //certificate,
  width,
  height,
}) => {
  // const defaultImage = "/images/default.png";

  return (
    <div className={styles.card}>
      <div className={styles.certificateContainer}>
      {/*<img
        src={certificate && certificate.trim() !== "" ? certificate : defaultImage}
        alt={`${organization} certificate`}
        onError={(e) => (e.currentTarget.src = defaultImage)} // 이미지 로드 실패 시 기본 이미지로 대체
        width={width || 300} // 기본 너비
        height={height || 200} // 기본 높이
        className={styles.certificateImage}
      /> */}
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
