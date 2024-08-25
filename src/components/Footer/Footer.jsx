import React from 'react'
import style from'./Footer.module.css'
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>&copy; {new Date().getFullYear()} Abrham Yeshitla. All rights reserved. Design inspired by [Lama Dev]</p>
        <p>
          <a href="/privacy-policy"></a> | <a href="/contact"></a>
        </p>
      </div>
    </footer>
  )
}

export default Footer