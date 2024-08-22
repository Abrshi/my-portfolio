import React from "react";
import { motion } from "framer-motion";
import './work.css'

function Card({ title, background_img, demo_link, github_link }) {
  
  return (
    <motion.div
      className="card"
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
    

      <div className="item">

      <h1>{title}</h1>
       <img src={background_img} alt="img" />
       <div>  <a href={github_link}>github_link</a>   <a href={demo_link}>demo_link</a></div>


      </div>


    </motion.div>
  );
}

export default Card;
