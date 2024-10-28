// src/pages/Portfolio.js
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "API REST para FórumHub",
      description:
        "Desenvolvi uma API REST usando Spring Boot para um fórum que permite criar, visualizar, atualizar e excluir tópicos. A API garante que apenas usuários cadastrados e logados possam criar tópicos e que apenas o autor possa alterá-los.",
      imageUrl: "url-da-imagem-para-forumhub.jpg", // Substitua pela URL da imagem do projeto
      repoUrl: "link-do-repositorio-para-forumhub", // Substitua pelo link do repositório
      deployUrl: "url-do-deploy-para-forumhub", // Substitua pela URL do deploy
    },
    {
      title: "Sistema de Geração de Certificados de Calibração",
      description:
        "Criei um sistema para registro em tempo real de dados de pressão durante ensaios de válvulas, gerando certificados de calibração. O sistema utiliza sensores com saída de 4 a 20 mA.",
      imageUrl: "url-da-imagem-para-certificados.jpg", // Substitua pela URL da imagem do projeto
      repoUrl: "link-do-repositorio-para-certificados", // Substitua pelo link do repositório
      deployUrl: "url-do-deploy-para-certificados", // Substitua pela URL do deploy
    },
    {
      title: "Cifra de César",
      description:
        "Desenvolvi um projeto em Java que implementa a cifra de César para criptografar e descriptografar mensagens. O projeto possui uma estrutura modular e a intenção de adicionar uma interface de front-end com JavaFX.",
      imageUrl: "url-da-imagem-para-cifra.jpg", // Substitua pela URL da imagem do projeto
      repoUrl: "link-do-repositorio-para-cifra", // Substitua pelo link do repositório
      deployUrl: "url-do-deploy-para-cifra", // Substitua pela URL do deploy
    },

    {
      title: "Sistema de Controle de Usuários",
      description:
        "Desenvolvi um sistema completo para gerenciamento de usuários com autenticação e autorização, utilizando PHP e MySQL. O projeto permite operações CRUD e controle de acesso.",
      imageUrl: "url-da-imagem-para-controle-usuarios.jpg", // Substitua pela URL da imagem do projeto
      repoUrl: "link-do-repositorio-para-controle-usuarios", // Substitua pelo link do repositório
      deployUrl: "url-do-deploy-para-controle-usuarios", // Substitua pela URL do deploy
    },

    {
      title: "Conversor de Moedas",
      description:
        "Projeto de conversão de moedas em tempo real, utilizando APIs externas para obter taxas de câmbio e calcular valores. Implementado com Java e biblioteca Gson para manipulação de JSON.",
      imageUrl: "url-da-imagem-para-conversor-moedas.jpg", // Substitua pela URL da imagem do projeto
      repoUrl: "link-do-repositorio-para-conversor-moedas", // Substitua pelo link do repositório
      deployUrl: "url-do-deploy-para-conversor-moedas", // Substitua pela URL do deploy
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
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
