import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About me</h1>
      <div className={styles.content}>
        <p className={styles.description}>
        I am currently a Computer Science major and Mathematics minor at Dickinson College. I enjoy learning new tech skills to navigate the digital landscape, from tinkering with code to having hands on experience. Aside from technology, I enjoy baking, find good coffee, and discover interesting reads.</p>
        <p className={styles.description2}>Some technologies I have worked with:</p>
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
              <p>React</p>
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
              <p>Principles of OOP (COMP132)</p>
              <p>Data Structures (COMP232)</p>
              <p>Analysis of Algorithm (COMP332)</p>
              <p>Computer Networks (COMP352)</p>
              <p>Computing Abstractions (COMP256)</p>
              <p>Database Systems (COMP378)</p>
              <p>Open Source Software Development (COMP290)</p>
              <p>Database Systems and Management (DATA200)</p>
              <p>Discreate Mathematics (MATH211)</p>
              <p>Linear Algebra (MATH262)</p>
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
