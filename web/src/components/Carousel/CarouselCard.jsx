import React from 'react'

import './CarouselCard.css'

const CarouselCard = ({ product }) => {
    const { product_id, img_url, name, regular_price, actual_price, on_sale } = product

    const link = `http://localhost:3000/produto/${product_id}`

    return (
        <div className="carousel-card-container">
            <a href={link}>
                <img src={img_url} className="carousel-card-img" alt="imagem produto" />
                <div className="carousel-card-info">
                    <div className="carousel-card-rating">
                        <img src="/assets/icons/rating.png" alt="nota do produto" />
                    </div>
                    <div className="carousel-card-title">{name}</div>
                    <div className="carousel-card-price-container">
                        {on_sale && <span className="carousel-regular-price">R${Number(regular_price).toFixed(2).replace('.', ',')}</span>}
                        <span className="carousel-actual-price">R${Number(actual_price).toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CarouselCard