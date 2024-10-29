import React, { useState } from "react";
import "./Contact.css";
import logo from "../assets/images/logo.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        //URL Production

        ///  "http://localhost:5678/webhook/5c6db754-2fb8-422e-8478-0501ab448553",

        //URL test
        "http://localhost:5678/webhook-test/5c6db754-2fb8-422e-8478-0501ab448553",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        const responseData = await response.json(); // Aqui está a leitura da resposta
        console.log("Dados enviados com sucesso para o n8n!", responseData);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Erro ao enviar dados para o n8n.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  };

  return (
    <div className="contact-container">
      <h2>Entre em Contato</h2>
      <div className="contact-flex">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
