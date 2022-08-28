import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo";

import Home from "./pages/Home";
import Produto from "./pages/Produto";
import TelaLogin from "./pages/TelaLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/produto/:id" element={<Produto/>}></Route>
        <Route path="/catalogo/:category" element={<Catalogo/>} />
        <Route path="/login" element={<TelaLogin />}/>
      </Routes>  
    </BrowserRouter>
  );
};

export default App;
