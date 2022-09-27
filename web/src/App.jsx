import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo";

import SearchProvider from './context/search'
import CartProvider from "./context/cart";

import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import TelaLogin from "./pages/TelaLogin";
import Footer from "./components/Footer/Footer";
import TelaCheckout from "./pages/TelaCheckout/TelaCheckout";

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
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </>

  );
};

export default App;
