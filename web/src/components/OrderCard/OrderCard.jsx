import React from 'react'

import './OrderCard.css'

const OrderCard = ({ order }) => {
    const { order_id, date } = order

    return (
        <div className='order-card-container'>
            <h1 className="order-card-title">Pedido: </h1><span className="order-card-text">{order_id}</span>
            <h1 className="order-card-title">Data do Pedido:</h1><span className='order-card-text'>{date}</span>
        </div>
    )
}

export default OrderCard