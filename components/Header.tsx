import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const profileImage = '/images/Profile/profile.jpeg'; // 사용자 지정 이미지 경로
  const defaultImage = '/images/default.png'; // 기본 이미지 경로

  return (
    <div className={styles.header}>
      <div className={styles.profileSection}>
        <img
          src={profileImage}
          alt="profile"
          className={styles.profileImage}
          onError={(e) => {
            // 이미지 로드 실패 시 기본 이미지로 대체
            (e.target as HTMLImageElement).src = defaultImage;
          }}
        />
        <h1 className={styles.headerTitle}>우성종</h1>
        <p className={styles.headerText}>지속적인 성장을 목표로 합니다.</p>
      </div>
    </div>
  );
};

export default Header;
