import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <p className={styles.firstText}> Coded & Desgined by udvale</p>
      <p className={styles.secondText}>All Rights Reserved©</p>
    </footer>
  );
};
