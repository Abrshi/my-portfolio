import React, { useRef } from 'react'
import style from './Paralex.module.css'
import { motion , useScroll ,useTransform} from 'framer-motion';
function Paralex({title}) {
    const ref = useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","start end"]
    })
    const planet = useTransform(scrollYProgress , [0,1],["0%","60%"])
    const text = useTransform(scrollYProgress , [0,1],["0%","500%"])
    return (
    <motion.div 
        className={style.paralex}
        ref = {ref}
        >
            <motion.h1 
                style={{y : text}}
                className={style.title}>
                        {title}
                    </motion.h1>
            <div   className={style.mounten}></div>
            <motion.div style={{y : planet}} className={style.moon}></motion.div>
            <motion.div  style={{x : planet}}  className={style.stars}></motion.div>
    </motion.div>
  )
}

export default Paralex