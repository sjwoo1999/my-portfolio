import React from 'react';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  logo: string;  // 프로젝트 로고 이미지 경로
  projectName: string; // 프로젝트명
  description: string; // 간단한 설명
  period: string; // 프로젝트 기간
}

const ProjectCard: React.FC<ProjectCardProps> = ({ logo, projectName, description, period }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt={`${projectName} logo`} className={styles.logo} />
      </div>
      <div className={styles.info}>
        <div className={styles.projectName}>{projectName}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.period}>{period}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
