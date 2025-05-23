import React from "react";
import Card from "./Card";
import style from'./work.module.css';
import Amezon from'../../assets/workimg/Amazon.jpeg'
import applereact from'../../assets/workimg/apple-react.jpeg'
import Book from'../../assets/workimg/Book.png'
import Netflix from'../../assets/workimg/Netflix.jpeg'
import portfolio from'../../assets/workimg/portfolio.png'
import zemate from'../../assets/workimg/zemate.png'
import ecommerce from'../../assets/workimg/ecommerce.png'
// import Amezon from'../../assets/workimg/Amazon.jpeg'
export default function Work() {
  return (
    <div className={style.works}>
        <Card
          className={style.cared}
          title={'Portfolio Website'}
          background_img={portfolio}
          demo_link={"https://abrshi.netlify.app/"}
          github_link={"https://github.com/Abrshi/my-portfolio"}
        />
        <Card
          className={style.cared}
          title={"Amazon"}
          background_img={Amezon}
          demo_link={"https://main--amazon-clones-by-abrham.netlify.app/"}
          github_link={"https://github.com/abrshi/amazon"}
        />
         <Card
          className={style.cared}
          title={"E-commerce"}
          background_img={Netflix}
          demo_link={"https://abrshi-ecommerce.netlify.app"}
          github_link={"https://github.com/Abrshi/ecommerce"}
        />
         <Card
          className={style.cared}
          title={"zemate"}
          background_img={zemate}
          demo_link={"https://zemate.netlify.app/"}
          github_link={"https://github.com/Abrshi/podcast"}
        />
        <Card
          className={style.cared}
          title={"Netflex"}
          background_img={ecommerce}
          demo_link={"https://abrshi.github.io/netflixx/"}
          github_link={"https://github.com/Abrshi/netflixx"}
        />
          <Card
          className={style.cared}
          title={"Appl"}
          background_img={applereact}
          demo_link={"https://appldotcom.netlify.app/"}
          github_link={"https://github.com/Abrshi/apple.com"}
        /> 
         <Card
        className={style.cared}
        title={"Free Book Store"}
        background_img={Book}
        demo_link={"https://csbookstore.netlify.app/"}
        github_link={"https://github.com/Abrshi/bookfrontend"}
      />
       
    </div>
  );
}
