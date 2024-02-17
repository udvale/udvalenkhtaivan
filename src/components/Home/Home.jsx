import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Nice to meet you!",
    "I'm a 3rd year student at Dickinson College.",
    "Passionate about software development and management",
    "and a fanatic for good coffee and tea.",
    "I'm also an unabashed mint chocolate supporter",
    "who playes sudoku for stress relief.",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(id);
  }, [texts.length]);

  return (
    <section className={styles.container}>
      <div className={styles.forCol}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Hi THERE, <span className={styles.secondTitle}>this is</span>{" "}
          </h2>
          <div className={styles.nameWrapper}>
            <span className={styles.firstName}>Udval</span>
            <span className={styles.lastName}>Enkhtaivan</span>
          </div>
        </div>

        <div className={styles.content}>
          {texts[index].split(",").map((char, index) => (
            <span key={index} className="content-text">
              {char}
            </span>
          ))}
        </div>
      </div>
      <img src={"/pics/me2.jpg"} alt="Udval" className={styles.meImg} />
    </section>
  );
};




