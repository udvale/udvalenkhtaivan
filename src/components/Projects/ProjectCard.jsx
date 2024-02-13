import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: {title, description, skills, github},
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={github} className={styles.link} target="_blank">
          <img
            className={styles.icon}
            src={"/pics/githubIcon.png"}
            alt="Github icon"
          />
        </a>
      </div>
    </div>
  );
};