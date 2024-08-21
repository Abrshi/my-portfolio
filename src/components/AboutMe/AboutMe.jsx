import React from 'react'
import   './aboutme.module.css'
import style from './aboutme.module.css'
function AboutMe() {
  return (
    <div className={style.about}> 
      <div>
          <h1 className={style.h1}>
          This is <span className={style.name}>Abreham Yeshitla </span>, a web developer from Addis Abeba:Ethiopia. Thank you for taking the time to visit my portfolio website.
          </h1>
          <p className={style.p}>
          A software developer with experience in building responsive and scalable web apps. I am well-knowledged in UI/UX principles and practices. I believe that a website is more than just a collection of web pages; it should be a reflection of the brand or individual it represents. I bring a strong foundational understanding of computer science concepts and programming languages to each project I work on. Whether working collaboratively or individually, I’m committed to taking each task with persistence and striving towards delivering the best possible product.</p>
         
      </div>
    </div>
  )
}
export default AboutMe