import React from 'react'
import './CardProduto.css'

const CardProduto = ({img, name, quantity, price}) => {
    return (
        <>
            <div className="cart-produto-container">
                <img className="cart-produto-image" src={img} alt="" />
                <div className="cart-produto-info">
                    <h1 className="cart-produto-title">{name}</h1>
                    <p className="cart-produto-quantity">Quantidade Total <div className="cart-produto-quantity-number">({quantity})</div>R${price}</p>
                </div>
                <button className="cart-produto-remove">✖</button>
            </div>
        </>
    );
}

export default CardProduto