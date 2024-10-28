// src/pages/Portfolio.js
import React from "react";
import "./Portfolio.css";
import eletricaImage from "../assets/images/eletrica.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Site Filipe Eletricista",
      description:
        "Desenvolvi um site comercial para o profissional Filipe Eletricista, com o objetivo de destacar seus serviços elétricos de forma atrativa e informativa, facilitando a captação de clientes. O site foi construído com HTML, CSS, JavaScript e Bootstrap, garantindo uma estrutura responsiva e uma navegação intuitiva. A interface destaca o portfólio de serviços e os diferenciais do profissional, além de facilitar o contato para orçamentos.",
      imageUrl: eletricaImage,
      repoUrl: "https://github.com/Wil-JC-Pimenta/filipe-eletricista",
      deployUrl: "https://filipe-eletricista-6d1z.vercel.app/",
    },
    {
      title: "Sistema de Geração de Certificados de Calibração",
      description:
        "Criei um sistema para gestão de certificados de calibração de instrumentos e válvulas, com registro de usuários, corpo técnico, clientes, equipamento e certificados de calibração. O sistema está sendo desenvolvido em Node js, Express, PostgreSQL e tem o objetivo de facilitar e padronizar a criação de certificados.",
      imageUrl: "url-da-imagem-para-certificados.jpg",
      repoUrl: "link-do-repositorio-para-certificados",
      deployUrl: "url-do-deploy-para-certificados",
    },
    {
      title: "Nheengatu (NEGATU)",
      description:
        "Nheengatu é um token digital na blockchain Solana, inspirado na língua indígena Nheengatu, com o objetivo de promover inclusão financeira e ser um meio de troca acessível. Ele conecta comunidades, incentiva transações locais e apoia projetos sustentáveis. Foi desenvolvido utilizando tecnologias como CLI Solana, Anchor, Node.js, Express, React.js e Rust. O token foi criado inicialmente na rede de teste da Solana e depois implantado na rede principal, podendo ser consultado no Solana Explorer.",
      imageUrl: "https://ngt-pi.vercel.app/my-image.png",
      repoUrl: "https://ngtdapp-front-end.vercel.app/",
      deployUrl:
        "https://explorer.solana.com/address/mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE?cluster=mainnet",
      additionalInfo: "Supply Total: 50 milhões (50,000,000 NEGATU)",
      mintAddress: "mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE",
    },
    {
      title: "Sistema de Controle de Usuários",
      description:
        "Desenvolvi um sistema completo para gerenciamento de usuários com autenticação e autorização, utilizando PHP e MySQL. O projeto permite operações CRUD e controle de acesso.",
      imageUrl: "url-da-imagem-para-controle-usuarios.jpg",
      repoUrl: "link-do-repositorio-para-controle-usuarios",
      deployUrl: "url-do-deploy-para-controle-usuarios",
    },
    {
      title: "Conversor de Moedas",
      description:
        "Projeto de conversão de moedas em tempo real, utilizando APIs externas para obter taxas de câmbio e calcular valores. Implementado com Java e biblioteca Gson para manipulação de JSON.",
      imageUrl: "url-da-imagem-para-conversor-moedas.jpg",
      repoUrl: "link-do-repositorio-para-conversor-moedas",
      deployUrl: "url-do-deploy-para-conversor-moedas",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert("mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE"),
      (err) => console.error("Falha ao copiar: ", err)
    );
  };

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
            {project.additionalInfo && <p>{project.additionalInfo}</p>}
            {project.mintAddress && (
              <button
                onClick={() => copyToClipboard(project.mintAddress)}
                className="copy-button"
              >
                Copy Token Mint
              </button>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link repo-link"
            >
              Repositório
            </a>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link deploy-link"
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
