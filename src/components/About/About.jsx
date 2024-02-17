import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About me</h1>
      <div className={styles.content}>
        <p className={styles.description}>
          I am currently a Computer Science major and Mathematics minor at
          Dickinson College. As an aspiring software engineer with interest
          product management, I am also a avid learner, seeking out new
          opportunities to expand my knowledge base. In my spare time, In enjoy
          learning tech new skills and apply it in practice whether from
          experimenting with code or gaining hands-on experience. Aside from
          technology, I enjoy baking, finding good coffee, and discovering
          interesting reads.
        </p>
        <p className={styles.description2}>
          Some technologies I have worked with:
        </p>
        <ul className={styles.techList}>
          <li className={styles.techListItem}>
            <div className={styles.textColumn}>
              <p>Java</p>
              <p>Python</p>
            </div>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.textColumn}>
              <p>Javascript</p>
              <p>React.JS</p>
            </div>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.textColumn}>
              <p>Node.js</p>
              <p>Matlab</p>
            </div>
          </li>
        </ul>
        <p className={styles.description2}>Relevant Courseworks:</p>
        <ul className={styles.courseLists}>
          <li className={styles.courseList}>
            <div className={styles.courseColumn}>
              <p>Principles of Object-Oriented-Programming </p>
              <p>Data Structures </p>
              <p>Analysis of Algorithm </p>
              <p>Computer Networks </p>
              <p>Computing Abstractions </p>
              <p>Database Systems </p>
              <p>Open Source Software Development </p>
              <p>Database Systems and Management </p>
              <p>Discreate Mathematics </p>
              <p>Linear Algebra</p>
              <p>Numerical Analysis</p>
            </div>
          </li>
          {/* <li className={styles.courseList}>
            <div className={styles.courseColumn}>
              <p>Database Systems(COMP378)</p>
              <p>Discreate Mathematics (MATH211)</p>
              <p>Linear Algebra (MATH262)</p>
              <p>Open Source Software Development (COMP290)</p>
              <p>Database Systems and Management (DATA200)</p>
            </div>
          </li> */}
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
