import React from 'react'
import introduction from './Introduction.module.css'
import img1 from '../../assets/009ddc17-7f94-4eeb-b0fb-06acbabb4502.png'
import img2 from '../../assets/47cac9a8-8e10-4431-9f96-c26cc6c87c27.jpg'
import img3 from '../../assets/5079723f-0372-49ce-baa8-1b6bdfcf3683.jpg'
import img4 from '../../assets/6b943e78-8760-45c7-98b2-cd5a2eb5d8a3.png'

function Introduction() {
  return (
    <div  className={introduction.outer}>
    <div  className={introduction.firstSection}>
       <div className={introduction.name}>
           <h2 className={introduction.name}>Abreham Yeshitlay</h2>
           <h2 className={introduction.job}>Full Stack Web Developer </h2>
       </div>
       <div className={introduction.discription}>
        <p>I am a passionate and dedicated full stack developer with a keen eye for detail and a strong foundation in programming languages. My goal is to create innovative and user-friendly web applications that meet the needs of my clients.</p>
       </div>
       <div className={introduction.cvAndContact}>
        <button>Hire Me</button>
        <button>Hire Me</button>
        </div>
        <div className={introduction.socials}>
        <span>L</span>
        <span>E</span>
        <span>G</span>
        </div>
    
    </div>
    <div  className={introduction.secondSection}>
    <img src={img4} alt="profile-pic"/>
    </div>

    </div>
  )
}

export default Introduction