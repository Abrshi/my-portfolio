import React from 'react'
import { motion } from "framer-motion"
import linkden from'../../assets/img/linkdin.png'
import facebook from'../../assets/img/facebook.png'
import phone from'../../assets/img/phone.png'
import gmail from'../../assets/img/gmail.png'
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
        <a href="https://www.linkedin.com/in/abreham-yeshitila-00b3b5250" target="_blank"><img src={linkden} alt="linkden"  /></a>
        <a href="tel:+251966394582" target="_blank"><img src={phone} alt="phone" /></a>
        <a href="mailto:abrehamyeshitla990@gmail.com" target="_blank"><img src={gmail} alt="gmail" /></a>
        <a href="https://www.facebook.com/abrham.yeshetila" target="_blank"><img src={facebook} alt="facebook" /></a>
               </div>
      </div>
      </motion.div>
  )
}

export default Header