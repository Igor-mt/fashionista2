import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Produto from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";

const Masculino = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <Navbar>
        <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
      </Navbar>
      <Produto
        img="/assets/img/masculino/05.jpg"
        name="Terno Masculino"
        price="250,00"
      ></Produto>
      <Footer></Footer>
    </>
  );
};

export default Masculino;
