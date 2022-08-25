import React from 'react'
import Produto from '../../CardProduto/CardProduto'
import './Ofertas.css'

const Ofertas = () => {
    return (
        <div className="melhoresOfertas" id="melhoresOfertas">
            <div className="container-titulo-descricao">
                <h1 className="ofertas-title">Melhores Ofertas</h1>
                <p className="container-ofertas-text">Confira nossas ofertas e promoções, aproveite!</p>
            </div>

            <div className="container-melhoresOfertas">
                <Produto
                    link="#"
                    img="/assets/img/feminino/01.jpg"
                    name="Roupa Feminina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/feminino/03.jpg"
                    name="Roupa Feminina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/feminino/05.jpg"
                    name="Roupa Feminina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/feminino/07.jpg"
                    name="Roupa Feminina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/masculino/09.jpg"
                    name="Roupa Masculina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/feminino/14.jpg"
                    name="Roupa Feminina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/masculino/12.jpg"
                    name="Roupa Masculina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
                <Produto
                    link="#"
                    img="/assets/img/masculino/11.jpg"
                    name="Roupa Masculina"
                    oldPrice="R$220"
                    actualPrice="R$140"
                />
            </div>
        </div>
    )
}

export default Ofertas