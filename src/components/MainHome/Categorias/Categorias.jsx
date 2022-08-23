import React from 'react'
import './Categorias.css'

const Categorias = () => {
    return (
        <div className="container-categorias">
            <div className="container-categorias-text">
                <h1 className="categorias-title">Categorias</h1>
                <p className="categorias-text">
                    Moda feminina, masculina e infantil! Confira nossas promoções e
                    aproveite!
                </p>
            </div>

            <div className="categorias">
                <div className="categoria">
                    <a href="/pages/catalogo/feminino.html"
                    ><img src="/assets/img/feminino/14.jpg" alt=""
                        /></a>
                    <span className="categoria-name"> MODA FEMININA </span>
                </div>

                <div className="categoria">
                    <a href="/pages/catalogo/masculino.html"
                    ><img src="/assets/img/masculino/05.jpg" alt=""
                        /></a>
                    <span className="categoria-name"> MODA MASCULINA </span>
                </div>

                <div className="categoria">
                    <a href="/pages/catalogo/infantil.html"
                    ><img src="/assets/img/infantil/07.jpg" alt=""
                        /></a>
                    <span className="categoria-name"> MODA INFANTIL </span>
                </div>
            </div>
        </div>
    )
}

export default Categorias