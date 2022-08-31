import React, { useContext } from 'react'
import './CardProduto.css'

import { CartContext } from '../../../context/cart'

const CardProduto = ({ produto, onRemove }) => {
    const { increaseProductsCart, decreaseProductsCart, clearCart } = useContext(CartContext)

    if (produto.qtd === 0) return clearCart()
    return (
        <>
            { }
            <div className="cart-produto-container">
                <div className="product-container">
                    <img className="cart-produto-image" src={produto.id.img} alt="" />
                    <div className="cart-produto-info">
                        <h1 className="cart-produto-title">{produto.id.name}</h1>
                        <div className="cart-produto-size">Tamanho: {produto.size}</div>
                        <div className='cart-produto-price'>R${(produto.id.price).replace('.', ',')}</div>
                    </div>
                </div>
                <button className="cart-produto-remove" onClick={() => onRemove(produto.id)}>✖</button>
                <div className="quantity-control-container">
                    <button className="increase-quantity-btn" onClick={() => increaseProductsCart(produto.id)}>+</button>
                    <span className="quantity-number">{produto.qtd}</span>
                    <button className="decrease-quantity-btn" onClick={() => decreaseProductsCart(produto.id)}>-</button>
                </div>

            </div>
        </>
    );
}

export default CardProduto