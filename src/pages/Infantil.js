import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Produto from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";

const Infantil = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <Navbar>
        <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
      </Navbar>
      <Produto
      img="/assets/img/infantil/02.jpg"
      name="Blusa Branca Feminina Infantil"
      price="60,00"
      ></Produto>
      <Footer></Footer>
    </>
  );
};

export default Infantil;
