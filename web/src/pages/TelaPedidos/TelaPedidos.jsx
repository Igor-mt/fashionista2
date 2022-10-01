import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import OrderCard from '../../components/OrderCard/OrderCard'

import Titulo from '../../components/Titulo/Titulo'

import './TelaPedido.css'

const TelaPedidos = () => {
  const [orders, setOrders] = useState([])

  const userId = Cookies.get('user_id')

  useEffect(() => {
    axios.get(`https://fashionista-ecommerce.herokuapp.com/${userId}/pedidos`)
      .then(res => setOrders(res.data))
  }, [userId])

  return (
    <main>
      <div className='orders-main-container'>
        <Titulo>Seus pedidos:</Titulo>
        <div className="orders-container">
          {orders ? orders.map(order => <OrderCard order={order} />) : <div className='no-orders-container'><h1 className='no-orders-title'>Você não possui pedidos.</h1><Button><Link to={{ pathname: "/" }}>Voltar à home</Link></Button></div>}
        </div>
      </div>
    </main>
  )
}

export default TelaPedidos