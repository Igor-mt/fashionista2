import React from 'react'
import { Link } from 'react-router-dom';

import './OrderTableRow.css'

const OrderTableRow = ({ order }) => {
    const { order_id, order_date, order_total } = order
    const formatDate = (dateStr) => {
        const [day, month, year] = dateStr.split('-');
        let newDate = `${day}/${month}/${year}`;
        return newDate;
    };
    const order_date_formated = formatDate(order_date)
    const order_total_formated = 'R$ ' + Number(order_total).toFixed(2).replace('.', ',')

    return (
        <tr className='order-table-row'>
            <td className='order-table-col'><Link to={{ pathname: `/pedido/${order_id}` }} className="order_info_link">{order_id}</Link></td>
            <td className='order-table-col'><Link to={{ pathname: `/pedido/${order_id}` }} className="order_info_link">{order_date_formated}</Link></td>
            <td className='order-table-col'><Link to={{ pathname: `/pedido/${order_id}` }} className="order_info_link">{order_total_formated}</Link></td>
        </tr>
    )
}

export default OrderTableRow