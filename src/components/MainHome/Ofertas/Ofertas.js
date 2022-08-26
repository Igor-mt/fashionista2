import React from 'react'
import Produto from '../../CardProduto/CardProduto'
import './Ofertas.css'
import productsProm from '../../../Products/productsProm.json'

const Ofertas = () => {
    return (
        <div className="melhoresOfertas" id="melhoresOfertas">
            <div className="container-titulo-descricao">
                <h1 className="ofertas-title">Melhores Ofertas</h1>
                <p className="container-ofertas-text">Confira nossas ofertas e promoções, aproveite!</p>
            </div>

            <div className="container-melhoresOfertas">
                {productsProm.map((produto) => {
                    return <Produto
                        key={produto.id}
                        link="#"
                        img={produto.img}
                        name={produto.name}
                        oldPrice="R$220"
                        actualPrice={produto.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Ofertas