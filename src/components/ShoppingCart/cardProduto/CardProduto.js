import React from 'react'
import './CardProduto.css'

const CardProduto = ({ produto, onRemove }) => {
    return (
        <>
            <div className="cart-produto-container">
                <img className="cart-produto-image" src={produto.id.img} alt="" />
                <div className="cart-produto-info">
                    <h1 className="cart-produto-title">{produto.id.name}</h1>
                    <div className="cart-produto-quantity">Quantidade Total <div className="cart-produto-quantity-number">({produto.qtd})</div>
                        <div className='cart-produto-price'>R${(produto.id.price).replace('.', ',')}</div>
                    </div>
                </div>
                <button className="cart-produto-remove" onClick={() => onRemove(produto.id)}>✖</button>
            </div>
        </>
    );
}

export default CardProduto