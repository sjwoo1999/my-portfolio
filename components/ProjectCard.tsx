import React from 'react';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  logo?: string;
  projectName: string;
  description: string;
  period: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ logo, projectName, description, period }) => {
  const defaultImage = '/images/default.png';

  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img
          src={logo || defaultImage}
          alt={`${projectName} logo`}
          className={styles.logo}
        />
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
