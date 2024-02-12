import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const texts = [ "Nice to meet you!",
                  "My name is Udval and I'm from Mongolia", 
                  "I'm a 3rd year student at Dickinson College",     
                  "Software and Coffee enthusiast", 
                  "Fan of mint chocolate", 
                  "I play sudoku for stress relieve.",];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
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
          <img
            src={getImageUrl("home/me.JPEG")}
            alt="image of me"
            className={styles.meImg}
          />
    </section>
  );
};




