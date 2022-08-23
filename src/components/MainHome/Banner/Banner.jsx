import React from 'react'
import "./Banner.css";

const Banner = () => {
    return (
        <div className="container-banner">
            <div className="container-banner-text">
                <h1>
                    Encontre o <br />
                    melhor da <br />moda
                </h1>
                <p className="banner">
                    Aqui você encontra roupas femininas, moda <br />
                    infantil, moda masculina e muito mais. Confira <br />
                    as promoções e aproveite!
                </p>
                <a href="#melhoresOfertas">Melhores Ofertas</a>
            </div>

            <div className="container-banner-image">
                <img src='/assets/img/feminino/15.jpg' alt="imagem produto feminino"/>
            </div>
        </div>
    )
}

export default Banner