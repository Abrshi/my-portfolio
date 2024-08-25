import React from 'react'
import   './aboutme.module.css'
import style from './aboutme.module.css'
function AboutMe() {
  return (
    <div className={style.about}> 
      <div>
          <h1 className={style.h1}>
          This is <span className={style.name}>Abreham Yeshitla </span>, a web developer based in Addis Ababa, Ethiopia. Thank you for visiting my portfolio website.
          </h1>
          <p className={style.p}>
          I am a software developer with a focus on building responsive and scalable web applications. I believe a website should be more than a series of pages—it should authentically reflect the brand or individual it represents. With a solid grounding in computer science principles and programming languages, I approach every project with a commitment to excellence. Whether working collaboratively or independently, I am dedicated to delivering high-quality results through perseverance and meticulous attention to detail.</p>
         
      </div>
    </div>
  )
}
export default AboutMe