import React from 'react'
import './CardProduto.css'

const produto = ({ link, img, name, oldPrice, actualPrice }) => {
    return (
        <div className="cartao-produto">
            <a href={link}>
                <img src={img} className="imagem-produto" alt="imagem produto" />
                <div className="informacao-produto">
                    <div className="avaliacao-produto">
                        <img src="/assets/icons/rating.png" alt="nota do produto" />
                    </div>
                    <div className="nome-produto">{name}</div>
                    <div className="price-container">
                        <span className="preco-antigo">R${oldPrice}</span>
                        <span className="preco-atual">R${actualPrice}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default produto