import React from "react";

import "./Produto.css"

const Produto = ({ item, onAdd, onRemove }) => {
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
            <div className="sizeOptions">
              <button className="sizeOption" aria-label="Tamanho P">P</button>
              <button className="sizeOption" aria-label="Tamanho M">M</button>
              <button className="sizeOption" aria-label="Tamanho G">G</button>
            </div>
          </div>
          <button className="addProduct" aria-label="Adicionar à Sacola" onClick={() => onAdd(item)}>Adicionar à Sacola</button>
        </div>
      </div>
    </>
  );
};

export default Produto;