import React from 'react'

import './OrderCard.css'

const OrderCard = ({ order }) => {
    const { order_id, order_date, order_total } = order
    const order_total_formated = Number(order_total).toFixed(2).replace('.', ',')

    return (
        <div className='order-card-container'>
            <h1 className="order-card-title">Id do Pedido: </h1><span className="order-card-text">{order_id}</span>
            <h1 className="order-card-title">Data do Pedido:</h1><span className='order-card-text'>{(order_date).replace(/-/g, '/')}</span>
            <h1 className="order-card-title">Valor Total:</h1><span className='order-card-text'>{order_total_formated}</span>
        </div>
    )
}

export default OrderCard