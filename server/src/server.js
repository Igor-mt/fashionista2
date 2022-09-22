require('dotenv').config()

const express = require('express');


const productsRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/ordersRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 5450;

app.use(express.json());

// Rotas de Produtos
app.use('/', productsRoutes)

// Rotas de Pedidos
app.use('/', orderRoutes)

// Rota de Autenticação
app.use('/', authRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})