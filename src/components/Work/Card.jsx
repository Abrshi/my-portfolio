// Card.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./work.module.css";

function Card({ title, background_img, demo_link, github_link }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [1, 1], [1, 1]);

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      style={{ scale, opacity }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title} <div className={styles.links}>
          <a href={github_link} className={styles.link} target="_blank" rel="noreferrer">GitHub</a>
          <a href={demo_link} className={styles.link} target="_blank" rel="noreferrer">Live Demo</a>
        </div></h1>
        <img src={background_img} alt={title} className={styles.image} />
       
      </div>
    </motion.section>
  );
}

export default Card;
