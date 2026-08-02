const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

const pool = new Pool({
  user: process.env.DB_USER || 'admin',
  host: process.env.DB_HOST || 'postgres',
  database: process.env.DB_NAME || 'pedidos_veloz_db',
  password: process.env.DB_PASS || 'password123',
  port: process.env.DB_PORT || 5432,
});

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'Serviço de Pedidos' });
});

app.get('/pedidos', async (req, res) => {
  try {
    res.json({ message: 'Lista de pedidos da Loja Veloz', data: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serviço de Pedidos rodando na porta ${PORT}`);
});