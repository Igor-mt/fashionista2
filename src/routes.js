import { render } from "react-dom";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Produto from "./pages/Produto";

render(
  <BrowserRouter>
    <Routes>
      <Route index component={Home} path="/" exact />
      <Route component={Produto} path="/produto/feminino" exact />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
