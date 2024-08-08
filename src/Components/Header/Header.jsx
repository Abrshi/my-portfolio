import React, { useState } from 'react';
import styles from './header.module.css';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.outerHeader} ${styles.navbar}`}>
      <div className={styles.rightHeader}>
        <ul>

          <li>
          <div className={styles.latterA}>A</div>
          </li>
          <li><a href='#'>Abreham Yeshitla</a></li>
        </ul>
      </div>
      <div className={styles.leftHeader}>
        <ul className={`${styles.navLinks} ${isActive ? styles.active : ''}`}>
          <li className={styles.netflexLogo}></li>
          <li className={styles.li}><a href='#'>Home</a></li>
          <li className={styles.li}><a href='#'>Portfolio</a></li>
          <li className={styles.li}><a href='#'>Projects</a></li>
          <li className={styles.li}><a href='#'>Resume</a></li>
          <li className={styles.li}><a href='#'>Contact Me</a></li>
        </ul>
      </div>
      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
        onClick={handleClick}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default Header;
