import React from "react";
import { motion } from "framer-motion";
import styles from './work.module.css'

function Card({ title, background_img, demo_link, github_link }) {
  
  return (
    <motion.div
      className={styles.cardprops}
      initial={{
        opacity: 0,
    
      }}
      
      
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}
    >
    

      <div className={styles.itms}>

      <h1>{title}</h1>
       <img src={background_img} alt="img" />
       <div>  <a href={github_link} className={styles.a}>github_link</a>   <a href={demo_link} className={styles.a}>demo_link</a></div>


      </div>


    </motion.div>
  );
}

export default Card;
