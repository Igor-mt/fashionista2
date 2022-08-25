import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Produto from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";

const Feminino = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar>
      <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
      </Navbar>
      <Produto
      img="/assets/img/feminino/03.jpg"
      name="Blusa Branca Feminina"
      price="120,00"
      ></Produto>
      <Footer></Footer>
    </div>
  );
};

export default Feminino;
