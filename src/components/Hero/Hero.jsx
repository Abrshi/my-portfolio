import React from 'react';
import { motion } from "framer-motion"
import herocss from './hero.module.css';
import profile from '../../assets/img/profile.png';
import scroll from '../../assets/img/scroll.png';

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
            <button className={herocss.button1}>Latest Work</button>
            <button className={herocss.button2}> My CV</button>
          </div>
          <img src={scroll} alt="scroll" />
        </div>
        <div 
        
        className={herocss.img}>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
