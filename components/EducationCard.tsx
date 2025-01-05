import Image from 'next/image';
import styles from '../styles/EducationCard.module.css';

interface EducationCardProps {
  logo?: string;
  schoolName: string;
  major: string;
  period: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ logo, schoolName, major, period }) => {
  const defaultImage = '/images/default.png';

  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <div className={styles.logoBorder}>
          <Image
            src={logo || defaultImage}
            alt={`${schoolName} logo`}
            className={styles.logo}
            width={60} // 적절한 크기 설정
            height={60}
          />
        </div>
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
