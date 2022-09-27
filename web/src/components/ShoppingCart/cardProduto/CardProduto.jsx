import React, { useContext } from 'react'
import './CardProduto.css'

import { CartContext } from '../../../context/cart'

const CardProduto = ({ produto, onRemove }) => {
    const { increaseProductsCart, decreaseProductsCart, removeProductToCart } = useContext(CartContext)

    if (produto.qtd < 1) return removeProductToCart(produto.id, produto.size);
    return (
        <>
            <div className="cart-produto-container">
                <div className="product-container">
                    <img className="cart-produto-image" src={produto.id.img_url} alt="" />
                    <div className="cart-produto-info">
                        <h1 className="cart-produto-title">{produto.id.name}</h1>
                        <div className="cart-produto-size">Tamanho: {produto.size}</div>
                        <div className='cart-produto-price'>R${(produto.id.actual_price)}</div>
                    </div>
                </div>
                <button className="cart-produto-remove" onClick={() => onRemove(produto.id, produto.size)}>✖</button>
                <div className="quantity-control-container">
                    <button className="decrease-quantity-btn" onClick={() => decreaseProductsCart(produto.id, produto.size)}>-</button>
                    <span className="quantity-number">{produto.qtd}</span>
                    <button className="increase-quantity-btn" onClick={() => increaseProductsCart(produto.id, produto.size)}>+</button>
                </div>

            </div>
        </>
    );
}

export default CardProduto