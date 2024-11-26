import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profileSection}>
        <img src="/images/profile.jpeg" alt="profile" className={styles.profileImage} />
        <h1>우성종</h1>
        <p>지속적인 성장을 목표로 합니다. 우성종입니다.</p>
      </div>
    </div>
  );
};

export default Header;