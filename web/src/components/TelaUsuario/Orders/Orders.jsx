import React from 'react'
import { Link } from 'react-router-dom'

import './Orders.css'

import Button from '../../Button/Button'
import OrderTableRow from '../../OrderTableRow/OrderTableRow'
import Titulo from '../../Titulo/Titulo'

const Orders = ({orders}) => {
    return (
        <>
            <Titulo>Seus pedidos</Titulo>
            <div className="orders-container">
                <table className='orders-table'>
                    <tbody>
                        <tr >
                            <td className='order-table-col order-table-title'>Id do pedido:</td>
                            <td className='order-table-col order-table-title'>Data do pedido:</td>
                            <td className='order-table-col order-table-title'>Valor total:</td>
                        </tr>
                        {orders ?
                            orders.map((order) =>
                                <OrderTableRow key={order.order_id} order={order}
                                />) :
                            <div className='no-orders-container'>
                                <h1 className='no-orders-title'>
                                    Você não possui pedidos.
                                </h1>
                                <Button>
                                    <Link to={{ pathname: "/" }}>Voltar à home</Link>
                                </Button>
                            </div>}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders