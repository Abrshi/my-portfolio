import React, { useState } from 'react';
import navcss from './nav.module.css';
import { motion } from 'framer-motion';

function Nav() {
    const [display, setDisplay] = useState(false);

    const toggle = () => {
        setDisplay(!display);
        console.log(!display);  // Log the new state
    };

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <motion.div 
            className={navcss.navbar} 
            animate={display ? 'open' : 'closed'} 
            variants={variants} 
        >
           <button className={`${navcss.button} ${display ? navcss.close : navcss.open}`} onClick={toggle}>
              <span> </span>
              <span> </span>
              <span> </span>
            </button>
            <motion.ul className={navcss.ul} variants={variants}>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutme">About</a></li>
                <li><a href="#skils">skils</a></li>
                <li><a href="#work">Projects</a></li>
                <li><a href="#contact">Contat</a></li>
            </motion.ul>
        </motion.div>
    );
}

export default Nav;
