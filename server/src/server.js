require('dotenv').config()

const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const productsRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/ordersRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5450;

let corsOptions = {
    origin: ['https://fashionista-hackadev.netlify.app', 'http://localhost:3000'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Rotas de Produtos
app.use('/', productsRoutes)

// Rotas de Pedidos
app.use('/', orderRoutes)

// Rota de Autenticação
app.use('/', authRoutes)

// Rota de usuário
app.use('/', userRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
