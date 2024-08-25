import React, { useRef, useState } from "react";
import style from './ContactMe.module.css';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Footer from './../Footer/Footer';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
    transition: {
      duration: 8,
      staggerChildren: 8,
    }
  },
  animate: {
    y: 0,
    opacity: 1,
  }
};

function ContactMe() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [message, setMessage] = useState(''); // State to hold success/error messages
  const [isError, setIsError] = useState(false); // State to track if it's an error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f7uyjf2', 'template_pax7mgx', formRef.current, 'HCJAS8hPUsYEozVaF')
      .then(
        () => {
          setMessage('Thank you for reaching out. I will get back to you promptly.');
          setIsError(false); // Set to false to indicate success
        },
        (error) => {
          setMessage('Failed to send the message. Please try again later.');
          setIsError(true); 
        }
      );
  };

  return (
    <div>
      <div className={style.contactMe} ref={ref}>
      <motion.div
        className={style.textContener}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h1 className={style.h1}>Feel free to reach me</motion.h1>
        <motion.h3 className={style.h3} variants={variants}>
          Mail <br />
          <span className={style.h5}>
            <a href="mailto:abrhmeyeshitla990@gmail.com">abrhmeyeshitla990@gmail.com</a>
          </span>
        </motion.h3>
        <motion.h3 className={style.h3} variants={variants}>
          Address <br />
          <span className={style.h5}>
            <address>Addis Ababa, Ethiopia</address>
          </span>
        </motion.h3>
        <motion.h3 className={style.h3} variants={variants}>
          Phone <br />
          <span className={style.h5}>
            <a href="tel:+251-963-945-82">+251-963-945-82</a>
          </span>
        </motion.h3>
      </motion.div>
      <div className={style.formContener}>
        <motion.div
          className={style.contactsvg}
          initial={{ pathLength: 0 }}
          animate={isInView && { pathLength: 1 }}
          transition={{ duration: 3 }}
        >
          {/* Optional SVG animation */}
        </motion.div>
        <motion.form
          ref={formRef}
          className={style.form}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onSubmit={sendEmail}
        >
          <input className={style.text} type="text" placeholder="Name" name="from_name" required />
          <input className={style.email} type="email" placeholder="Email" name="reply_to" required />
          <textarea className={style.content} type="text" rows="6" placeholder="Message" name="message" required />
          <input className={style.submit} type="submit" value="Send" />
        </motion.form>
        {message && (
          <div className={isError ? style.errorMessage : style.successMessage}>
            {message}
          </div>
        )}
      </div>
    </div>
    
    <Footer/>
    </div>
  );
}

export default ContactMe;