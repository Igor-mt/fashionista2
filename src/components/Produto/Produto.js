import React, { useState } from "react";

import "./Produto.css"

const Produto = ({ item, onAdd }) => {
  const [size, setSize] = useState('M')

  const { img, name, price } = item;
  const installment = (Number(price) / 3).toFixed(2)


  return (
    <>
      <div className="productContainer">
        <div className="productImageContainer">
          <img src={img} alt="" className="productImage" />
        </div>
        <div className="productDetailsContainer">
          <h1 className="productName">{name}</h1>
          <div className="productPrice">
            <p className="price">R${price.replace(".", ",")}</p>
            <p className="installments">em até 3x R${installment.replace(".", ",")}</p>
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
          <button className="addProduct" aria-label="Adicionar à Sacola" onClick={() => onAdd(item, size)}>Adicionar à Sacola</button>
        </div>
      </div>
    </>
  );
};

export default Produto;