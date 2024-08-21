import React from 'react'
import { motion } from "framer-motion"
import linkden from'../../assets/img/instagram.png'
import facebook from'../../assets/img/facebook.png'
import instagram from'../../assets/img/youtube.png'
import whatsup from'../../assets/img/facebook.png'
import styles from './header.module.css'
import Nav from './Nav'
function Header() {
  return (
    <motion.div initial={{opacity:0, scale:0.5 }}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.5}}
    className={styles.header} >
      
        <div className={styles.nav}><Nav/></div>
        <div className={styles.info}>
        <span className={styles.name}>Abrhem Yeshitla</span>

        <div className={styles.socials}>
        <a href="#"><img src={linkden} alt="linkden"  /></a>
        <a href="#"><img src={instagram} alt="instagram"  /></a>
        <a href="#"><img src={facebook} alt="facebook" /></a>
        <a href="#"><img src={whatsup} alt="whatsup" /></a>
        </div>
      </div>
      </motion.div>
  )
}

export default Header