import React from "react";
import styles from './Heading.module.css';
import Logo from '../assets/logo-img.png';

const Heading = () => {
  return (
        <div className={styles.container}>
          <div>
            <a href="/">
              <img className={styles.logo} src={Logo} alt="logo" />
            </a>
          </div>
          <div className={styles.title}>
            <a href="/">
              <h1 className="text-4xl">Investation</h1>
            </a>
          </div>
          <div className={styles.navigation}>
            <a href="/">
              <button className={styles.navBtn}>Home</button>
            </a>
              <a href="/portfolio">
              <button className={styles.navBtn}>Portfolio</button>
              </a>
              <a href="/future-value">
              <button className={styles.navBtn}>Future Value</button>
              </a>
          </div>
          <div>
            <button className={styles.profileBtn}>i</button>
          </div>
        </div>
  );
};

export default Heading;