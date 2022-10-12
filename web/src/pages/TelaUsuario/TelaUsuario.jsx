import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'
import OrderCard from '../../components/OrderCard/OrderCard'
import Titulo from '../../components/Titulo/Titulo'

import './TelaUsuario.css'

const TelaUsuario = () => {
  const [orders, setOrders] = useState([])

  const userId = Cookies.get('user_id')

  const handleLogout = () => {
    Cookies.remove('user_id')
    Cookies.remove('authToken')
    document.location.reload()
  }

  useEffect(() => {
    axios.get(`https://fashionista-ecommerce.herokuapp.com/${userId}/pedidos`)
      .then(res => setOrders(res.data))
  }, [userId])

  return (
    <main>
      <div className='user-main-container'>
        <div className="orders-container">
          <Titulo>Seus pedidos:</Titulo>
          <div className="orders">
            {orders ? orders.map((order) => <OrderCard order={order} />) : <div className='no-orders-container'><h1 className='no-orders-title'>Você não possui pedidos.</h1><Button><Link to={{ pathname: "/" }}>Voltar à home</Link></Button></div>}
          </div>
        </div>
        {/* <div className='divider' />
        <div className="wish-list-container">
        </div> */}
        <Button onClick={handleLogout} type="button">Deslogar</Button>
      </div>
    </main>
  )
}

export default TelaUsuario
