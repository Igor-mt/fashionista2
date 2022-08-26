import React from "react";
import {BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feminino from "./pages/Feminino";
import Infantil from "./pages/Infantil";
import Masculino from "./pages/Masculino";
import TelaLogin from "./pages/TelaLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/feminino/:id" element={<Feminino/>}></Route>
        <Route path="/masculino/:id" element={<Masculino />}></Route>
        <Route path="/infantil/:id" element={<Infantil />}></Route>
        <Route path="/login" element={<TelaLogin />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
