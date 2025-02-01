// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "seu_banco_de_dados",
  password: "sua_senha",
  port: 5432,
});

const app = express();
const port = 5678;

app.use(cors());
app.use(bodyParser.json());

// Endpoint para receber dados do formulário
app.post("/webhook-test/:id", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Inserir os dados no PostgreSQL
    const result = await pool.query(
      "INSERT INTO contatos (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    res.status(201).json({
      message: "Dados recebidos e armazenados com sucesso!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Erro ao salvar dados no banco de dados:", error);
    res.status(500).json({ message: "Erro ao salvar dados." });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
