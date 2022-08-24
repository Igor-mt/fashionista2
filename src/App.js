import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Feminino from "./pages/Feminino";
import Home from "./pages/Home";
import Infantil from "./pages/Infantil";
import Masculino from "./pages/Masculino";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/produto/feminino" element={<Feminino/>}></Route>
      <Route path="/produto/masculino" element={<Masculino/>}></Route>
      <Route path="/produto/infantil" element={<Infantil/>}></Route>
    </Routes>
  );
};

export default App;
