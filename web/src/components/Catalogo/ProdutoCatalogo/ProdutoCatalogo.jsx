import React from 'react'
import { Link } from 'react-router-dom';

import "./ProdutoCatalogo.css"

const ProdutoCatalogo = ({ link, img, name, oldPrice, actualPrice, onSale }) => {

    return (
        <div className="cartao-produto-catalogo">

            <Link to={link}>
                <div className="image-container">
                    <img src={img} className="imagem-produto-catalogo" alt="imagem produto" />
                    {onSale ? <div className="saleLabel">Promoção</div> : ''}
                </div>
                <div className="informacao-produto-catalogo">
                    <div className="avaliacao-produto">
                        <img src="/assets/icons/rating.png" alt="nota do produto" />
                    </div>
                    <div className="nome-produto-catalogo">{name}</div>
                    <span className="preco-antigo-catalogo preco">{oldPrice}</span>
                    <span className="preco-atual-catalogo preco">R${Number(actualPrice).toFixed(2).replace(".", ",")}</span>
                </div>
            </Link>
        </div>
    );
}

export default ProdutoCatalogo;