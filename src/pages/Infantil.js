import React, { useState } from "react";
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar/Navbar";
import Produto from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";

import productsInf from "../Products/productsInf.json"

const Infantil = () => {
  const [isToggle, setToggle] = useState(false);
  const params = useParams()

  let prod = productsInf.filter((produto) => { return produto.id === Number(params.id) })
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
          installment={(Number(produto.price) / 3).toFixed(2)}
        />
      })}
      <Footer />
    </>
  )
};

export default Infantil;
