const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'API Gateway' });
});

app.get('/', (req, res) => {
  res.send('API Gateway da Loja Veloz rodando!');
});

app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});