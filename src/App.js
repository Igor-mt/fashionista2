import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo";

import CartProvider from "./context/cart";

import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import TelaLogin from "./pages/TelaLogin";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
    
      <CartProvider>
        <BrowserRouter>
          <Navbar isToggle={isToggle} setToggle={setToggle} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/produto/:id" element={<Produto />}></Route>
            <Route path="/catalogo/:category" element={<Catalogo/>} />
            <Route path="/login" element={<TelaLogin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
      
    </>
    
  );
};

export default App;
