import React, { useContext } from "react";
import { useParams } from "react-router"

import { CartContext } from '../context/cart'
import ProdutoComponent from "../components/Produto/Produto";

import products from '../Products/products.json'

const Produto = ({onAdd, onRemove}) => {
  const params = useParams()

  const {
    productsCart = [],
    addProducToCart,
    removeProductToCart,
    clearCart,
  } = useContext(CartContext);

  let prod = products.filter((produto) => { return produto.id === Number(params.id) })
  return (
  <div className="main-container">
    {prod.map((produto) => {
      return <ProdutoComponent
        key={produto.id}
        item={produto}
        installment={(Number(produto.price) / 3).toFixed(2)}
        onAdd={addProducToCart}
        onRemove={removeProductToCart}
      />
    })}
  </div>
  )
}

export default Produto;