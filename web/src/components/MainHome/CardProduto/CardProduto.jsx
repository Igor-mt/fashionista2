import React from 'react'
import './CardProduto.css'

const produto = ({ product_id, img_url, name, regular_price, actual_price }) => {
    // const { img_url, name, regular_price, actual_price } = item;
    const link = `http://localhost:3000/produto/${product_id}`

    return (
        <div className="cartao-produto">
            <a href={link}>
                <img src={img_url} className="imagem-produto" alt="imagem produto" />
                <div className="informacao-produto">
                    <div className="avaliacao-produto">
                        <img src="/assets/icons/rating.png" alt="nota do produto" />
                    </div>
                    <div className="nome-produto">{name}</div>
                    <div className="price-container">
                        <span className="preco-antigo">R${Number(regular_price).toFixed(2).replace('.', ',')}</span>
                        <span className="preco-atual">R${Number(actual_price).toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default produto