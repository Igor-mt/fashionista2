const express = require('express');

const productsRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/ordersRoutes');
const loginRoutes = require('./routes/loginRoutes');
const signUpRoutes = require('./routes/signUpRoutes');

const app = express();
const port = process.env.PORT || 5450;

app.use(express.json());

// Rotas de Produtos
app.use('/', productsRoutes)

// Rotas de Pedidos
app.use('/', orderRoutes)

// Rota de Login
app.use('/', loginRoutes)

// Rota de Cadastro
app.use('/', signUpRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})