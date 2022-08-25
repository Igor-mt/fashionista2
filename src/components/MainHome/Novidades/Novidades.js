import React from 'react'
import Produto from '../../CardProduto/CardProduto'
import './Novidades.css'

const Novidades = () => {
    return (
        <div id="novidades">
            <div className="container-novidades">
                <div className="container-novidades-text">
                    <h1 className="novidades-title">Novidades</h1>
                    <p className="novidades-text">
                        As melhores novidades no mundo <br />
                        da moda!
                    </p>
                    <button
                        className="btn-branco btn-aproveite"
                    >
                        APROVEITE
                    </button>
                </div>

                <div className="container-produto">
                    <Produto
                        link="#"
                        img="/assets/img/feminino/04.jpg"
                        name="Roupa Feminina"
                        oldPrice="R$220"
                        actualPrice="R$140"
                    />
                    <Produto
                        link="#"
                        img="/assets/img/masculino/01.jpg"
                        name="Roupa Masculina"
                        oldPrice="R$220"
                        actualPrice="R$140"
                    />
                </div>
            </div>
        </div>
    )
}

export default Novidades