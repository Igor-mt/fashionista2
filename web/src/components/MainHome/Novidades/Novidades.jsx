import React from 'react'
import Produto from '../../CardProduto/CardProduto'
import './Novidades.css'

import products from '../../../Products/products.json'

const Novidades = () => {

    const produtos = products.filter((produto,indice) => (indice < 2))

    return (
        <div id="novidades">
            <div className="container-novidades">
                <div className="container-novidades-text">
                    <h1 className="novidades-title">Novidades</h1>
                    <p className="novidades-text">
                        As melhores novidades no mundo <br />
                        da moda!
                    </p>
                    <a
                        href='#melhoresOfertas'
                        className="btn-branco btn-aproveite"
                        aria-label="Aproveite as novidades"
                    >
                        APROVEITE
                    </a>
                </div>

                <div className="container-produto">

                    {produtos.map((produto) => (
                        <Produto 
                            key={produto.id}
                            link={`produto/${produto.id}`}
                            img={produto.img}
                            name={produto.name}
                            oldPrice="220.00"
                            actualPrice={produto.price}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Novidades