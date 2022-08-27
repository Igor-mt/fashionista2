import React, { useState } from "react";
import { useParams } from "react-router"
import Navbar from "../components/Navbar/Navbar";
import ProdutoComponent from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";
import products from "../Products/products.json"

const Produto = () => {
  const [isToggle, setToggle] = useState(false);
  const params = useParams()

  let prod = products.filter((produto) => { return produto.id === Number(params.id) })
  return (<>
  <Navbar>
    <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
  </Navbar>
      {prod.map((produto) => {
        return <ProdutoComponent
          key={produto.id}
          link="#"
          img={produto.img}
          name={produto.name}
          price={produto.price}
          installment={(Number(produto.price) / 3).toFixed(2)}
        />
      })}
      <Footer />
    </>
  )
}

export default Produto;
