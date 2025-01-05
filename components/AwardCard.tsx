import React from "react";
import Image from "next/image";
import styles from "../styles/AwardCard.module.css";

interface AwardCardProps {
  title: string;
  award: string;
  organization: string;
  certificate?: string;
  awardDate: string;
  width?: number; // 추가
  height?: number; // 추가
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  award,
  organization,
  certificate,
  awardDate,
  width,
  height,
}) => {
  const defaultImage = "/images/default.png";

  return (
    <div className={styles.card}>
      <div className={styles.certificateContainer}>
        <Image
          src={certificate && certificate.trim() ? certificate : defaultImage} // 조건 개선
          alt={`${award} certificate`}
          width={width || 300} // 기본 너비 제공
          height={height || 200} // 기본 높이 제공
          className={styles.certificateImage}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.organization}>{organization}</div>
        <div className={styles.award}>{award}</div>
        <div className={styles.awardDate}>수상일자: {awardDate}</div>
      </div>
    </div>
  );
};

export default AwardCard;
