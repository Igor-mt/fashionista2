import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css"

import SearchProvider from './context/search'
import CartProvider from "./context/cart";

import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Produto from "./pages/Produto";
import Catalogo from "./pages/Catalogo/Catalogo";
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaCheckout from "./pages/TelaCheckout/TelaCheckout";
import TelaUsuario from "./pages/TelaUsuario/TelaUsuario";

const App = () => {
  return (
    <>
      <SearchProvider>
        <CartProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/produto/:id" element={<Produto />}></Route>
                <Route path="/catalogo/:category" element={<Catalogo />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/checkout" element={<TelaCheckout />} />
                <Route path="/usuario" element={<TelaUsuario />} />
              </Routes>
              <Footer />
            </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </>

  );
};

export default App;
