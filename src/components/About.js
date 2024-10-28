// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Mim</h2>
      <p>
        {" "}
        Olá! Eu sou <strong>Wilker Pimenta</strong>, um desenvolvedor apaixonado
        por tecnologia e inovação.<br></br> Estou cursando{" "}
        <em>Análise e Desenvolvimento de Sistemas</em> na{" "}
        <strong>Universidade Católica de Brasília</strong>, trago uma base
        sólida em programação e desenvolvimento de software, complementada por
        uma experiência prática em projetos pessoais. <br></br>
        Minha missão é construir sistemas de alta qualidade que atenda às
        necessidades dos clientes e que se destaque pela eficiência e
        usabilidade.{" "}
      </p>{" "}
      <p>
        {" "}
        Minha jornada na tecnologia me levou a me especializar em diversas
        linguagens e ferramentas. Tenho desenvolvido projetos utilizando{" "}
        <strong>Java</strong>, <strong>JavaScript</strong>,{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, e bancos de dados como{" "}
        <strong>MySQL</strong> e <strong>PostgreSQL</strong>.<br></br>
        Atualmente, estou explorando frameworks modernos como{" "}
        <strong>Spring Boot</strong> e <strong>React</strong>, o que me permite
        desenvolver aplicações robustas e responsivas que proporcionam uma
        experiência excepcional aos usuários.{" "}
      </p>{" "}
      <p>
        {" "}
        Estou sempre em busca de aprendizado contínuo, seja por meio de cursos,
        projetos pessoais ou explorando novas tecnologias. Atualmente, estou
        aprofundando meus conhecimentos em{" "}
        <strong>segurança cibernética</strong>, <strong>cloud computing</strong>{" "}
        e <strong>microserviços</strong>, áreas que considero fundamentais para
        o futuro do desenvolvimento de software.{" "}
      </p>{" "}
      <p>
        {" "}
        Estou entusiasmado para aplicar minhas habilidades e experiências em
        novos desafios e contribuir para o sucesso da sua equipe. Acredito que a
        colaboração e a inovação são essenciais para criar soluções que impactem
        positivamente a vida das pessoas.{" "}
      </p>{" "}
      <p>
        {" "}
        Estou à disposição para conversarmos sobre como posso agregar valor ao
        seu time. Obrigado pela consideração!{" "}
      </p>
    </section>
  );
};

export default About;
