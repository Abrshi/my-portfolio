import React from "react";
import Card from "./Card";
import './work.css';
import projects from './data.json'; // Importing the JSON file

export default function Work() {
  return (
    <div className="App">
      {projects.map((project, i) => (
        <Card
          key={i}
          title={project.title}
          background_img={project.background_img}
          demo_link={project.demo_link}
          github_link={project.github_link}
        />
      ))}
    </div>
  );
}
