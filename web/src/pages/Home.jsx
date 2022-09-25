import React from "react";

import Banner from "../components/MainHome/Banner/Banner";
import Categorias from "../components/MainHome/Categorias/Categorias";
import Novidades from "../components/MainHome/Novidades/Novidades";
import Ofertas from "../components/MainHome/Ofertas/Ofertas";

const Home = () => {
  return (
    <div className="main-container">
      <Banner />
      <Categorias />
      <Novidades/>
      <Ofertas />
    </div>
  );
};

export default Home