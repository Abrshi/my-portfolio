import React from 'react'
import { motion } from "framer-motion"

import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// import linkden from'../../assets/img/linkdin.png'
// import facebook from'../../assets/img/facebook.png'
// import phone from'../../assets/img/phone.png'
// import gmail from'../../assets/img/gmail.png'
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
        <a href="https://www.linkedin.com/in/abreham-yeshitila-00b3b5250" target="_blank"><FaLinkedin /></a>
        <a href="tel:+251966394582" target="_blank"><FaPhoneAlt /></a>
        <a href="mailto:abrehamyeshitla990@gmail.com" target="_blank"><MdEmail/></a>
               </div>
      </div>
      </motion.div>
  )
}

export default Header