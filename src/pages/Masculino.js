import React, { useState } from "react";
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar/Navbar";
import Produto from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";

import productsMasc from "../Products/productsMasc.json"

const Masculino = () => {
  const [isToggle, setToggle] = useState(false);
  const params = useParams()

  let prod = productsMasc.filter((produto) => { return produto.id === Number(params.id) })
  console.log(prod)
  return (
    <>
      <Navbar>
        <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
      </Navbar>
      {prod.map((produto) => {
        return <Produto
          key={produto.id}
          link="#"
          img={produto.img}
          name={produto.name}
          oldPrice="R$220"
          actualPrice={produto.price}
        />
      })}
      <Footer />
    </>
  )
};

export default Masculino;
