// src/pages/Portfolio.js
import React from "react";
import "./Portfolio.css";
import eletricaImage from "../assets/images/eletrica.png";
import equipmanageImage from "../assets/images/equipmanage.png";
import ordemdeservicoImage from "../assets/images/ordem-de-servico.png";

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
      title: "EquipManage - Sistema de Gestão de Certificados de Calibração",
      description:
        "Criei um sistema para gestão de certificados de calibração de equipamentos, instrumentos e válvulas, com registro de usuários, corpo técnico, clientes, equipamento e certificados de calibração. O sistema está sendo desenvolvido em Node.js, Express, PostgreSQL e tem o objetivo de facilitar o registro de informações importantes e padronizar a criação de certificados.",
      imageUrl: equipmanageImage,
      videoUrl: "/assets/videos/equipmanage.mkv",
      repoUrl: "https://github.com/Wil-JC-Pimenta/EquipManage",
    },
    {
      title: "NheengatuX (NGTX)",
      description:
        "NheengatuX é um token SPL desenvolvido na blockchain Solana, inspirado na língua indígena Nheengatu, com o objetivo de promover inclusão financeira no mundo das criptomoedas e desenvolvimento de tecnologias para blockchain, como dApp (Aplicativos descentralizados). O projeto utiliza tecnologias como CLI Solana, Anchor Framework, Node.js, Express, React.js e Rust para criação de contratos inteligentes. O token foi criado inicialmente na rede Testnet (Rede de Teste) e depois implantado na Mainnet Beta , podendo ser consultado no Solana Explorer.",
      imageUrl: "https://ngt-pi.vercel.app/my-image.png",
      repoUrl: "https://nheengatux.vercel.app/",
      deployUrl: "https://nheengatux.vercel.app/",
      solanaExplorer:
        "https://explorer.solana.com/address/mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE?cluster=mainnet",
      additionalInfo: "Supply Total: 50 milhões (50,000,000 NGTX)",
      mintAddress: "mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE",
    },
    {
      title: "Sistema de Controle de Ordens de Serviço",
      description:
        "Desenvolvi um sistema para controle de Ordens de Serviço que permite inserir, atualizar e deletar dados dos clientes, número da OS e valores de mão de obra e materiais. Utilizei as tecnologias PHP para o Back End, MySQL para o Banco de Dados, HTML e CSS para o Front-End. , utilizando PHP e MySQL. O projeto permite operações CRUD e está em fase de desenvolvimento de controle de acesso.",
      imageUrl: ordemdeservicoImage,
      videoUrl: "/assets/videos/ordem-de-servico.mkv",
      repoUrl: "https://github.com/Wil-JC-Pimenta/ordem-de-servico",
      deployUrl: "https://github.com/Wil-JC-Pimenta/ordem-de-servico",
    },
  ];

  const handleCopyMintAddress = (address) => {
    navigator.clipboard.writeText(address);
    alert("Endereço do Mint copiado para a área de transferência!");
  };

  const handleDeployClick = (projectTitle) => {
    if (
      projectTitle ===
      "EquipManage - Sistema de Gestão de Certificados de Calibração"
    ) {
      alert("Projeto em desenvolvimento");
    } else if (projectTitle === "Sistema de Controle de Ordens de Serviço") {
      alert("Projeto em desenvolvimento");
    }
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

            {project.videoUrl && (
              <video
                src={project.videoUrl}
                controls
                className="project-video"
                width="100%"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}

            {project.title === "Nheengatu (NEGATU)" && (
              <>
                <button
                  className="project-link mint-link"
                  onClick={() => handleCopyMintAddress(project.mintAddress)}
                >
                  Copy Token Mint
                </button>
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link deploy-link"
                >
                  NGT-Dapp
                </a>
                <a
                  href={project.solanaExplorer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link explorer-link"
                >
                  Solana Explorer
                </a>
              </>
            )}

            {project.title !== "Nheengatu (NEGATU)" && (
              <>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link repo-link"
                >
                  Repositório
                </a>
                <button
                  className="project-link deploy-link"
                  onClick={() => handleDeployClick(project.title)}
                >
                  Deploy
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
