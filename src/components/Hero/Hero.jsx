import React from 'react';
import { motion } from "framer-motion"
import herocss from './hero.module.css';
import profile from '../../assets/img/profile.png';
import scroll from '../../assets/img/scroll.png';
import cv from '../../assets/Abreham-Yeshitila-CV.pdf'

function Hero() {
  return (
    <motion.div className={herocss.hero}
    initial={{opacity:0, scale:0.5 }}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.5}}
    >
      <div className={herocss.textAndimg}>
        <div className={herocss.text}>
          <div className={herocss.name}>Abreham Yeshitla</div>
          <div className={herocss.profation}>Full Stack <br/>Web Developer</div>
          <div lassName={herocss.buttons}>
          <a href="#work"><button className={herocss.button1}>Latest Work</button></a>
           <a href={cv}> <button className={herocss.button2}> My CV</button></a>
          </div>
          <a href="#aboutme"><img src={scroll} className={herocss.scroll} alt="scroll" /></a>
        </div>
        <div 
        
        className={herocss.img}>
          <img className={herocss.profile} src={profile} alt="profile" />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
