import React, { useState } from "react";

import "./ProdutoComponent.css"

const Produto = ({ item, onAddToCart, onAddToWishList }) => {
  const [size, setSize] = useState('M')
  const [addToCart, setAddToCart] = useState(false)
  const [addToWishlist, setAddToWishlist] = useState(false)

  const { img_url, name, regular_price, actual_price, color, installments, onSale } = item;
  const installment = (Number(actual_price) / installments).toFixed(2)
  return (
    <>
      <div className="productContainer">
        <div className="productImageContainer">
          <img src={img_url} alt="" className="productImage" />
        </div>
        <div className="productDetailsContainer">
          <h1 className="productName">{name}</h1>
          <div className="productInfoContainer">
            <p className="productInfo"><strong>Cor:</strong> {color}</p>
          </div>
          <div className="productPrice">
            {onSale ? <p className="old_price">R${regular_price}</p> : ''}
            <p className="price">R${actual_price.toFixed(2).replace('.', ',')}</p>
            <p className="installments">em até {installments}x R${installment.replace('.', ',')}</p>
          </div>
          <div className="sizeContainer">
            <p className="sizeText">Escolha o tamanho</p>
            <select name="size" value={size} className="sizeOptions" onChange={texto => setSize(texto.target.value)}>
              <option value="PP">PP</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </div>
          {addToCart && <h2 className="cartWarning">Seu produto foi adicionado à sacola.</h2>}
          <button className="addProduct" aria-label="Adicionar à Sacola" onClick={() => { setAddToCart(true); return onAddToCart(item, size) }}>Adicionar à Sacola</button>
          <button className="wishlistBtn" aria-label="Adicionar à Sacola" onClick={() => { setAddToWishlist(true); return onAddToWishList(item) }}>Adicionar à lista de desejos</button>
          {addToWishlist && <h2 className="cartWarning">O produto foi adicionado à sua lista de desejos.</h2>}
        </div>
      </div>
    </>
  );
};

export default Produto;