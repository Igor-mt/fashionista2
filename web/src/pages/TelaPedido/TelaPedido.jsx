import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button';

import CardProduto from "../../components/CardProduto/CardProduto";

import './TelaPedido.css'

const TelaPedido = () => {
  const params = useParams()
  const orderId = params.id

  const [orderItems, setOrderItems] = useState([])


  useEffect(() => {
    axios.get(`https://fashionista-ecommerce.herokuapp.com/pedido/${orderId}/items`)
      .then(res => setOrderItems(res.data))
  }, [orderId])

  return (
    <div className='main-container'>
      <div className="order-info-main-container">
        <h1 className='order-info-title'>Pedido: #{orderId}</h1>
        <div className="order-items-container">
          {orderItems.map(item => <CardProduto key={item.product_id} produto={item} />)}
        </div>
        <div className="goBackBtn-container">
          <Button>
            <Link to={{ pathname: "/usuario" }}>Voltar à página de pedidos</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TelaPedido