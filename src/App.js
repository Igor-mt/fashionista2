import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Produto from "./pages/Produto";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/produto/:id" element={<Produto/>}></Route>
    </Routes>
  );
};

export default App;
