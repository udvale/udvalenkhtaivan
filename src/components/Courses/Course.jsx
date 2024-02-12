import React from "react";
import styles from "./Course.module.css";

export const Course = () => {
  return (
    <section className={styles.container} id="course">
      <h2 className={styles.title}>Relevant Courseworks</h2>
      <div className={styles.content}>
         <ul className={styles.techList}>
            <li className={styles.techListItem}>
               <div className={styles.textColumn}>
               <p>Computer Networks</p>
               <p>Data Structures and Algorithms</p>
               <p>Linear Algebra</p>
               </div>
            </li>
            <li className={styles.techListItem}>
               <div className={styles.textColumn}>
               <p>Discreate Mathematics</p>
               <p>Database Systems</p>
               </div>
            </li>
         </ul>
      </div>
    </section>
  );
};
