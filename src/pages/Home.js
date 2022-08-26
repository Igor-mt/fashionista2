import React, { useState } from "react";
import Banner from "../components/MainHome/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Categorias from "../components/MainHome/Categorias/Categorias";
import Novidades from "../components/MainHome/Novidades/Novidades";
import Ofertas from "../components/MainHome/Ofertas/Ofertas";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <div className="main-container">
      <Navbar>
        <ShoppingCart isToggle={isToggle} setToggle={setToggle} />
      </Navbar>
      <Banner />
      <Categorias />
      <Novidades />
      <Ofertas />
      <Footer />
    </div>
  );
};

export default Home