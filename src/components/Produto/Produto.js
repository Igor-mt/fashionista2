import React from "react";
import "./Produto.css"

const Produto = ({img, name, price, installment}) => {

  return (
    <>
      <div className="productContainer">
        <div className="productImageContainer">
          <img src={img} alt="" className="productImage" />
        </div>
        <div className="productDetailsContainer">
          <h1 className="productName">{name}</h1>
          <div className="productPrice">
            <p className="price">R${price}</p>
            <p className="installments">em até 3x R${installment}</p>
          </div>
          <div className="sizeContainer">
            <p className="sizeText">Escolha o tamanho</p>
            <div className="sizeOptions">
              <button className="sizeOption" aria-label="Tamanho P">P</button>
              <button className="sizeOption" aria-label="Tamanho M">M</button>
              <button className="sizeOption" aria-label="Tamanho G">G</button>
            </div>
          </div>
          <button className="addProduct" aria-label="Adicionar à Sacola">Adicionar à Sacola</button>
        </div>
      </div>
    </>
  );
};

export default Produto;
