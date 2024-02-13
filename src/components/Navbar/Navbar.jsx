import React, { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Udval Enkhtaivan
      </a>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto: enkhtaiu@dickinson.edu">
            <img
              className={styles.icon}
              src={"/pics/icons8-email-50.png"}
              alt="Email icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/udval-enkhtaivan/"
            target="_blank"
          >
            <img
              className={styles.icon}
              src={"/pics/icons8-linkedin-50.png"}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/udvale" target="_blank">
            <img
              className={styles.icon}
              src={"/pics/github-mark.png"}
              alt="Github icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
