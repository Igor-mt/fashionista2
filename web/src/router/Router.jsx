import React from 'react'
import { Route, Routes } from "react-router-dom";


import Home from '../pages/Home/Home';
import Produto from '../pages/TelaProduto/Produto';
import Catalogo from '../pages/Catalogo/Catalogo';
import TelaLogin from '../pages/TelaLogin/TelaLogin';
import TelaCheckout from '../pages/TelaCheckout/TelaCheckout';
import TelaUsuario from '../pages/TelaUsuario/TelaUsuario';
import TelaPedido from '../pages/TelaPedido/TelaPedido';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/produto/:id" element={<Produto />}></Route>
            <Route path="/catalogo/:category" element={<Catalogo />} />
            <Route path="/login" element={<TelaLogin />} />
            <Route path="/checkout" element={<TelaCheckout />} />
            <Route path="/usuario" element={<TelaUsuario />} />
            <Route path="/pedido/:id" element={<TelaPedido />} />
        </Routes>
    )
}

export default Router