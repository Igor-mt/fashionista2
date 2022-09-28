import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Produto from '../CardProduto/CardProduto'
import './Novidades.css'

const Novidades = () => {
    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5450/novidades/produtos/')
            .then(res => setNewProducts(res.data))
    }, [])

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

                    {newProducts.slice(0, 2).map((produto) => (
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
        </div>
    )
}

export default Novidades