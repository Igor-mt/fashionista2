import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Produto from '../CardProduto/CardProduto'
import './Ofertas.css'

const Ofertas = () => {
    const [saleProducts, setSaleProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5450/promocao/produtos/')
            .then(res => setSaleProducts(res.data))
    }, [])

    return (
        <div className="melhoresOfertas" id="melhoresOfertas">
            <div className="container-titulo-descricao">
                <h1 className="ofertas-title">Melhores Ofertas</h1>
                <p className="container-ofertas-text">Confira nossas ofertas e promoções, aproveite!</p>
            </div>

            <div className="container-melhoresOfertas">
                {saleProducts.slice(0, 8).map((produto) => (
                    <Produto
                        key={produto.product_id}
                        product_id={produto.product_id}
                        img_url={produto.img_url}
                        name={produto.name}
                        regular_price={produto.regular_price}
                        actual_price={produto.actual_price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Ofertas