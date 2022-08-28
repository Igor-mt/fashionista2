import React from 'react'
import { Link } from 'react-router-dom';

import "./ProdutoCatalogo.css"

const ProdutoCatalogo = ({link,img,name,oldPrice,actualPrice}) => {

    return ( 
        <div className="cartao-produto-catalogo">
            
            <Link to={link}>
                <img src={img} className="imagem-produto-catalogo" alt="imagem produto" />
                <div className="informacao-produto-catalogo">
                    <div className="avaliacao-produto">
                        <img src="/assets/icons/rating.png" alt="nota do produto" />
                    </div>
                    <div className="nome-produto-catalogo">{name}</div>
                    <span className="preco-antigo-catalogo preco">{oldPrice}</span>
                    <span className="preco-atual-catalogo preco">R${actualPrice}</span>
                </div>
            </Link>
        </div>
    );
}
 
export default ProdutoCatalogo;