// src/pages/Portfolio.js
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição do Projeto 1" },
    { title: "Projeto 2", description: "Descrição do Projeto 2" },
    { title: "Projeto 3", description: "Descrição do Projeto 3" },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfólio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
