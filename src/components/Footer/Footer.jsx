import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <p className={styles.firstText}> Built & Coded by Udvale</p>
      <p className={styles.secondText}>All Rights Reserved</p>
    </footer>
  );
};
