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
  const [successfulUpdate, setSuccessfulUpdate] = useState(false)
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

  useEffect(() => {
    axios.get(`http://localhost:5450/${userId}/pedidos`)
      .then(res => setOrders(res.data))
  }, [userId])

  const handleUpdateUserInfo = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

    let genderId = ''

    if (data.gender === 'Masculino') {
      genderId = 'f5269b82-70c9-461d-a26c-61e753d71142'
    } else if (data.gender === 'Feminino') {
      genderId = 'db2ffff2-bd33-4fc7-aef9-3cdc3306a103'
    } else {
      genderId = '6d6655f6-57de-4b87-8f26-1eaf5f0d4a48'
    }

    axios.defaults.withCredentials = true;

    try {
      await axios.put(`http://localhost:5450/update/user/account`, {
        customer_id: userId,
        name: data.name + " " + data.surname,
        gender_id: genderId,
        cpf: data.cpf,
        birth: data.birthdate,
        phone: data.phone,
      })
      setSuccessfulUpdate(true)
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao atualizar os dados do usuário.')
    }
  }

  const handleUpdateAddressInfo = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

    axios.defaults.withCredentials = true;

    try {
      await axios.put(`http://localhost:5450/update/user/address`, {
        customer_id: userId,
        cep: data.cep,
        address: data.address + data.complement,
        district: data.district,
        address_number: data.address_number,
        city: data.city,
        uf: data.uf
      })
      setSuccessfulUpdate(true)
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao atualizar os dados do usuário.')
    }
  }

  const handleUpdateAuthInfo = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

    axios.defaults.withCredentials = true;

    try {
      if (data.newPassword.length < 6) {
        setIsPasswordLenghtValid(false)
        return
      }
      try {
        await axios.post(`http://localhost:5450/login`, {
          email: data.email,
          password: data.oldPassword
        })
      } catch (e) {
        alert("A senha ou email digitados não correspondem aos dados do usuário.")
        return
      }

      await axios.put(`http://localhost:5450/update/user/auth`, {
        customer_id: userId,
        email: data.email,
        password: data.newPassword
      })

      setSuccessfulUpdate(true)
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao atualizar os dados do usuário.')
    }
  }


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
    { sigla: "AC" },
    { sigla: "AL" },
    { sigla: "AP" },
    { sigla: "AM" },
    { sigla: "BA" },
    { sigla: "CE" },
    { sigla: "DF" },
    { sigla: "ES" },
    { sigla: "GO" },
    { sigla: "MA" },
    { sigla: "MT" },
    { sigla: "MS" },
    { sigla: "MG" },
    { sigla: "PA" },
    { sigla: "PB" },
    { sigla: "PR" },
    { sigla: "PE" },
    { sigla: "PI" },
    { sigla: "RJ" },
    { sigla: "RN" },
    { sigla: "RS" },
    { sigla: "RO" },
    { sigla: "RR" },
    { sigla: "SC" },
    { sigla: "SP" },
    { sigla: "SE" },
    { sigla: "TO" },
  ];

  const generos = [
    { id: "1", nome: "Masculino" },
    { id: "2", nome: "Feminino" },
    { id: "3", nome: "Prefiro Não Informar" },
  ];


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
              <UpdateUser
                genderList={generos}
                successfulUpdate={successfulUpdate}
                onSubmit={handleUpdateUserInfo}
                infoUser={infoUser}
              />
            }

            {content === 'updateAddress' &&
              <UpdateAddress
                estados={estados}
                infoUser={infoUser}
                userId={userId}
                successfulUpdate={successfulUpdate}
                onSubmit={handleUpdateAddressInfo}
              />
            }

            {content === 'updateAuth' &&
              <UpdateAuth
                handleToggleShowPassword={handleToggleShowPassword}
                toggleShowPassword={toggleShowPassword}
                setToggleShowPassword={setToggleShowPassword}
                isPasswordLenghtValid={isPasswordLenghtValid}
                successfulUpdate={successfulUpdate}
                infoUser={infoUser}
                onSubmit={handleUpdateAuthInfo}
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
