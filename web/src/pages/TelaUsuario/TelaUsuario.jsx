import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './TelaUsuario.css'

import { WishlistContext } from '../../context/wishlist'

import Button from '../../components/Button/Button'
import Orders from '../../components/TelaUsuario/Orders/Orders'
import UpdateUser from '../../components/TelaUsuario/UpdateForms/UpdateUser/UpdateUser'
import UpdateAddress from '../../components/TelaUsuario/UpdateForms/UpdateAddress/UpdateAddress'
import WishlistComponent from '../../components/TelaUsuario/Wishlist/Wishlist'
import UpdateAuth from '../../components/TelaUsuario/UpdateForms/UpdateAuth/UpdateAuth'
import UserMenuButton from '../../components/TelaUsuario/UserMenu/UserMenuButton/UserMenuButton'

const TelaUsuario = () => {
  const [orders, setOrders] = useState([])
  const [content, setContent] = useState('orders')
  const [toggleShowPassword, setToggleShowPassword] = useState(false)
  const [isPasswordLenghtValid, setIsPasswordLenghtValid] = useState(true)
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true)
  const [infoUser, setInfoUser] = useState([]);

  const { wishlist } = useContext(WishlistContext)

  const userId = Cookies.get('user_id')

  useEffect(() => {
    const getInfoUserById = async () => {
      if (userId) {
        await axios.get(`http://localhost:5450/user/${userId}`)
          .then(res => setInfoUser(res.data))
          .catch(function (error) {
            console.log(error.response)
          })
      }

    };

    getInfoUserById();

  }, [userId]);

  const handleLogout = () => {
    Cookies.remove('user_id')
    Cookies.remove('authToken')
    document.location.reload()
  }

  const handleToggleShowPassword = () => {
    if (toggleShowPassword) {
      setToggleShowPassword(false)
    } else {
      setToggleShowPassword(true)
    }
  }

  const estados = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" },
  ];

  const generos = [
    { id: "1", nome: "Masculino" },
    { id: "2", nome: "Feminino" },
    { id: "3", nome: "Prefiro Não Informar" },
  ];

  useEffect(() => {
    axios.get(`http://localhost:5450/${userId}/pedidos`)
      .then(res => setOrders(res.data))
  }, [userId])

  if (userId) {
    return (
      <main>
        <div className='user-main-container'>
          <div className="user-menu-container">
            <UserMenuButton onClick={() => setContent('orders')}>Pedidos</UserMenuButton>
            <UserMenuButton onClick={() => setContent('updateUser')}>Atualizar dados da conta</UserMenuButton>
            <UserMenuButton onClick={() => setContent('updateAddress')}>Atualizar dados de endereço</UserMenuButton>
            <UserMenuButton onClick={() => setContent('updateAuth')}>Atualizar dados de autenticação</UserMenuButton>
            <UserMenuButton onClick={() => setContent('wishlist')}>Lista de Desejos</UserMenuButton>
            <UserMenuButton onClick={handleLogout}>Deslogar</UserMenuButton>
          </div>
          <div className="content-container">
            {content === 'orders' &&
              <Orders orders={orders} />
            }

            {content === 'updateUser' &&
              <UpdateUser genderList={generos} />
            }

            {content === 'updateAddress' &&
              <UpdateAddress
                estados={estados}
                infoUser={infoUser}
                userId={userId}
              />
            }

            {content === 'updateAuth' &&
              <UpdateAuth
                handleToggleShowPassword={handleToggleShowPassword}
                toggleShowPassword={toggleShowPassword}
                setToggleShowPassword={setToggleShowPassword}
                isPasswordLenghtValid={isPasswordLenghtValid}
                isConfirmPasswordValid={isConfirmPasswordValid}
              />
            }

            {content === 'wishlist' &&
              <WishlistComponent wishlist={wishlist} />
            }
          </div >
        </div >
      </main >
    )
  } else {
    return (
      <div className='telaLoggedIn__container'>
        <h1 className='tituloLoggedIn'>Você não está logado</h1>
        <Button><Link to={{ pathname: "/login" }}>Ir à pagina de login</Link></Button>
      </div>
    )
  }
}

export default TelaUsuario
