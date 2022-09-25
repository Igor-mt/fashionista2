import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router"

import { CartContext } from '../context/cart'
import ProdutoComponent from "../components/Produto/Produto";

const Produto = () => {
  const params = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5450/produtos/${params.id}`)
      .then(res => setProduct(res.data))
  }, [params])

  const {
    addProductToCart,
    removeProductToCart,
  } = useContext(CartContext);

  return (
    <div className="main-container">
      {product.map((produto) => {
        return <ProdutoComponent
          key={produto.product_id}
          item={produto}
          onAdd={addProductToCart}
        />
      })}
    </div>
  )
}

export default Produto;