import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { WishlistContext } from '../../context/wishlist'

import WishlistCardProduto from '../../components/Wishlist/WishlistCardProduto/WishlistCardProduto'
import Button from '../../components/Button/Button'
import OrderTableRow from '../../components/OrderTableRow/OrderTableRow'
import Titulo from '../../components/Titulo/Titulo'
import Input from '../../components/Form/Input/Input'

import './TelaUsuario.css'
import AvisoValidacao from '../../components/AvisoValidacao/AvisoValidacao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const TelaUsuario = () => {
  const [orders, setOrders] = useState([])
  const [content, setContent] = useState('orders')
  const [toggleShowPassword, setToggleShowPassword] = useState(false)
  const [isPasswordLenghtValid, setIsPasswordLenghtValid] = useState(true)
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true)

  const { wishlist } = useContext(WishlistContext)

  const userId = Cookies.get('user_id')

  const handleLogout = () => {
    Cookies.remove('user_id')
    Cookies.remove('authToken')
    document.location.reload()
  }

  const hangleUpdateUser = async (event) => {
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
      if (data.password !== data.confirm_password) {
        setIsConfirmPasswordValid(false)
        return
      }

      if (data.password.length < 6) {
        setIsPasswordLenghtValid(false)
        return
      }

      await axios.post(`http://localhost:5450/cadastro`, {
        name: data.name + " " + data.surname,
        gender_id: genderId,
        email: data.email,
        cpf: data.cpf,
        birth: data.birthdate,
        password: data.password,
        phone: data.phone,
        cep: data.cep,
        address: data.address + data.complement,
        district: data.district,
        address_number: data.address_number,
        city: data.city,
        uf: data.uf
      })
      alert("Usuário atualizado com sucesso!!")
      window.location.reload()
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao criar o usuário.')
    }
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
            <button className="user-menu-btn" type="button" onClick={() => setContent('orders')}>Pedidos</button>
            <button className="user-menu-btn" type="button" onClick={() => setContent('update')}>Atualizar dados da conta</button>
            <button className="user-menu-btn" type="button" onClick={() => setContent('wishlist')}>Lista de Desejos</button>
            <button className="user-menu-btn" type="button" onClick={handleLogout}>Deslogar</button>
          </div>
          <div className="content-container">
            {content === 'orders' &&
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
            }

            {content === 'update' &&
              <div className="update-container">
                <Titulo>Atualizar dados de cadastro</Titulo>
                <form id="update" method="put" onSubmit={hangleUpdateUser}>
                  <div className="update__form--container">
                    <div className="update--ladoDireito">
                      <Input
                        title="Nome"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                      />

                      <div className="sobrenomeESexo__container">
                        <Input
                          title="Sobrenome"
                          type="text"
                          name="surname"
                          placeholder="Sobrenome"
                          required
                        />

                        <div className="sexo-container">
                          <span>Sexo</span>
                          <select name="gender" id="sexo" className="selected" required>
                            <option selected disabled>
                              Sexo
                            </option>
                            {generos.map((genero) => (
                              <option key={genero.id} value={genero.nome}>
                                {genero.nome}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Input
                        title="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />

                      <Input
                        title="CPF"
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        required
                      />

                      <Input
                        title="Nascimento"
                        type="date"
                        name="birthdate"
                        placeholder="Nascimento"
                        required
                      />

                      <div className="password-container-register">
                        <Input
                          title="Senha"
                          type={toggleShowPassword ? "text" : "password"}
                          name="password"
                          placeholder={toggleShowPassword ? "Senha" : "******"}
                          required
                        />
                        <Button type="button" onClick={handleToggleShowPassword}><FontAwesomeIcon icon={faEye} /></Button>
                      </div>

                      <Input
                        title="Confirmar Senha"
                        type={toggleShowPassword ? "text" : "password"}
                        name="confirm_password"
                        placeholder={toggleShowPassword ? "Senha" : "******"}
                        required
                      />
                    </div>

                    <div className="cadastro--ladoEsquerdo">
                      <Input
                        title="Telefone"
                        type="text"
                        name="phone"
                        placeholder="62 9999-8888"
                        pattern="\d*"
                        maxLenght={11}
                        required
                      />

                      <Input
                        title="CEP"
                        type="text"
                        name="cep"
                        placeholder="12345678"
                        pattern="\d*"
                        maxLenght={8}
                        required
                      />

                      <Input
                        title="Endereço"
                        type="text"
                        name="address"
                        placeholder="Rua"
                        required
                      />

                      <Input
                        title="Numero"
                        type="text"
                        name="address_number"
                        placeholder="Nº"
                        required
                      />

                      <Input
                        title="Bairro"
                        type="text"
                        name="district"
                        placeholder="Bairro"
                        required
                      />

                      <Input
                        title="Complemento"
                        type="text"
                        name="complement"
                        placeholder="Complemento"
                      />

                      <div className="cidadeEstado__container">
                        <Input
                          title="Cidade"
                          type="text"
                          name="city"
                          placeholder="Cidade"
                          required
                        />
                        <div className="estado_container">
                          <AvisoValidacao />
                          <select
                            name="uf"
                            className="selected"
                            required
                          >
                            <option selected disabled>UF</option>
                            {estados.map((estado) => (
                              <option key={estado.sigla} value={estado.sigla}>
                                {estado.sigla}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!isPasswordLenghtValid && <AvisoValidacao>As senhas não são iguais</AvisoValidacao>}
                  {!isConfirmPasswordValid && <AvisoValidacao>As senhas não são iguais</AvisoValidacao>}
                  <Button>CRIAR CONTA</Button>
                </form>
              </div>
            }

            {content === 'wishlist' &&
              <>
                <Titulo>Sua lista de desejos</Titulo>
                <div className="wishlist-container">
                  {wishlist.map((item) => {
                    return <WishlistCardProduto
                      key={item.id.product_id}
                      produto={item.id}
                    />
                  })}
                </div>
              </>
            }
          </div>
        </div>
      </main>
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
