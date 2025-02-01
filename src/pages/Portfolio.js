import React from "react";
import "./Portfolio.css";
import eletricaImage from "../assets/images/eletrica.png";
import equipmanageImage from "../assets/images/equipmanage.png";
import ordemdeservicoImage from "../assets/images/ordem-de-servico.png";
import wiviplayImage from "../assets/images/wiviplay.png";
import socafeImage from "../assets/images/socafe.png";
import saboresbrasilImage from "../assets/images/saboresbrasil.png";
import elitetrainingImage from "../assets/images/elitetraining.png";
import landingcursosImage from "../assets/images/landingcursos.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Site Filipe Eletricista",
      description:
        "Desenvolvi um site comercial para o profissional Filipe Eletricista...",
      imageUrl: eletricaImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/filipe-eletricista",
      deployUrl: "https://filipe-eletricista-6d1z.vercel.app/",
    },
    {
      title: "EquipManage - Sistema de Gestão de Certificados de Calibração",
      description:
        "Criei um sistema para gestão de certificados de calibração...",
      imageUrl: equipmanageImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/EquipManage",
      isInDevelopment: true, // 🚨 Indica que está em desenvolvimento
    },
    {
      title: "Sistema de Controle de Ordens de Serviço",
      description:
        "Desenvolvi um sistema para controle de Ordens de Serviço...",
      imageUrl: ordemdeservicoImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/ordem-de-servico",
      isInDevelopment: true, // 🚨 Indica que está em desenvolvimento
    },
    {
      title: "Wiviplay - Online Rádio",
      description:
        "Site sobre música, com opção de buscas de estações de rádio...",
      imageUrl: wiviplayImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/wiviplay",
      deployUrl: "https://www.wiviplay.com",
    },
    {
      title: "SóCafé - Landing Page Comercial para Cafeteria",
      description: "Landing page criada para a cafeteria SóCafé...",
      imageUrl: socafeImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/socafe-experience",
      deployUrl: "https://socafe-experience.vercel.app/",
    },
    {
      title: "Sabores Brasil",
      description: "Site institucional para a Sabores Brasil...",
      imageUrl: saboresbrasilImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/saboresdobrasil",
      deployUrl: "http://www.saboresbrasil.com",
    },
    {
      title: "Elite Training - Site Comercial Personal Trainer",
      description: "Site comercial para um personal trainer...",
      imageUrl: elitetrainingImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/elite-training",
      deployUrl: "https://elite-training-murex.vercel.app/",
    },
    {
      title: "Landingcursos - Cursos de programação.",
      description:
        "Landing page com cursos de programação, banco de dados e desenvolvimento web.",
      imageUrl: landingcursosImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/landingcursos",
      deployUrl: "https://landingcursos.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfólio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Link para o repositório */}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link repo-link"
            >
              Repositório
            </a>

            {/* Botão de Deploy */}
            {project.isInDevelopment ? (
              <button
                className="project-link deploy-link"
                onClick={() => alert("Projeto em desenvolvimento")}
              >
                Deploy
              </button>
            ) : project.deployUrl ? (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link deploy-link"
              >
                Deploy
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
