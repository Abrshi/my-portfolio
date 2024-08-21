import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './Skil.module.css';

const words = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'jQuery', 'React', 'Express', 'MySQL', 'Node', 'PHP', 'Python', 'GitHub'];

const Skile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={style.skil}>
      <div>
        <p className={style.p}>
          I enjoy diving into and learning new things. Here's a list of technologies I've worked with. I have a sound understanding of how to use these languages to create visually appealing and responsive websites with engaging user experiences and dynamic content.
        </p>

        <ul className={style.ul}>
          {words.map((word, index) => (
            <motion.li
              className={style.li}
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skile;
