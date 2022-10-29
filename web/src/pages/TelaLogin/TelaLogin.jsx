import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import cep from 'cep-promise'

import "./TelaLogin.css";
import "./Mobile-telaLogin.css"

import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";
import Titulo from "../../components/Titulo/Titulo";
import BarraLateral from "../../components/BarraLateral/BarraLateral";
import Warning from '../../components/Form/Warning/Warning';
import AvisoValidacao from '../../components/AvisoValidacao/AvisoValidacao';
import Select from '../../components/Form/Select/Select';

const TelaLogin = () => {
  const [validatedUser, setValidatedUser] = useState(true)
  const [toggleShowPassword, setToggleShowPassword] = useState(false)
  const [isPasswordLenghtValid, setIsPasswordLenghtValid] = useState(true)
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true)

  const [addressValue, setAddressValue] = useState('')
  const [districtValue, setDistrictValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [ufValue, setUfValue] = useState('')

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

  const handleCep = async (event) => {
    event.preventDefault();

    const cepValue = event.target.value

    await cep(cepValue)
      .then((res) => {
        setAddressValue(res.street)
        setDistrictValue(res.neighborhood)
        setCityValue(res.city)
        setUfValue(res.state)
      })
  }

  const handleCreateUser = async (event) => {
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
      alert("Usuário criado com sucesso!")
      const response = await axios.post(`http://localhost:5450/login`, {
        email: data.email,
        password: data.password
      })
      alert("Usuário logado com sucesso!!")
      Cookies.set('authToken', response.data.loginToken)
      Cookies.set('user_id', response.data.user_id)
      window.location.reload()
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao criar o usuário.')
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

    try {
      const response = await axios.post(`http://localhost:5450/login`, {
        email: data.email,
        password: data.password
      })
      if (!response.data.user_id) setValidatedUser(false)
      alert("Usuário logado com sucesso!!")
      Cookies.set('authToken', response.data.loginToken)
      Cookies.set('user_id', response.data.user_id)
      window.location.reload()
    } catch (e) {
      alert('Ocorreu um erro ao validar o usuário.')
    }
  }
  if (!Cookies.get('authToken')) {
    return (
      <div className="telaLogin__container">
        <div className="login__container">
          <Titulo>Já sou cliente</Titulo>

          <form id="login" method="get" onSubmit={handleLogin}>
            <div className="login__form--container">
              <Input
                title="Email"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
              <div className="password-container">
                <Input
                  title="Senha"
                  type={toggleShowPassword ? "text" : "password"}
                  name="password"
                  placeholder={toggleShowPassword ? "Senha" : "******"}
                  required
                />
                <Button type="button" onClick={handleToggleShowPassword}><FontAwesomeIcon icon={faEye} /></Button>
              </div>
            </div>
            <Button type="submit">ACESSAR CONTA</Button>
            {!validatedUser && <Warning>* Email ou senha incorretos.</Warning>}
          </form>
        </div>

        <BarraLateral />

        <div className="cadastro__container">

          <Titulo>Quero me cadastrar</Titulo>

          <form id="cadastro" method="post" onSubmit={handleCreateUser}>
            <div className="cadastro__form--container">
              <div className="cadastro--ladoDireito">
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
                    <Select name="gender" id="sexo" required={true} itens={generos} placeholder="Sexo" />
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
                  onBlur={handleCep}
                />

                <Input
                  title="Endereço"
                  type="text"
                  name="address"
                  placeholder="Rua"
                  id="address"
                  value={addressValue}
                  defaultValue=""
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
                  id="district"
                  value={districtValue}
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
                    id="city"
                    value={cityValue}
                    placeholder="Cidade"
                    required
                  />
                  <div className="estado_container">
                    <div className="estado_container">
                      <AvisoValidacao />
                      <Select
                        name="uf"
                        id="estados"
                        itens={estados}
                        placeholder="UF"
                        required
                        value={ufValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!isPasswordLenghtValid && <AvisoValidacao>As senha deve ter mais de 6 caracteres.</AvisoValidacao>}
            {!isConfirmPasswordValid && <AvisoValidacao>As senhas não são iguais</AvisoValidacao>}
            <Button>CRIAR CONTA</Button>
          </form>
        </div>
      </div>
    );
  } else if (Cookies.get('authToken')) {
    return (
      <div className='telaLoggedIn__container'>
        <h1 className='tituloLoggedIn'>Você já está logado</h1>
        <Button><Link to={{ pathname: "/" }}>Voltar à home</Link></Button>
      </div>
    )
  }


}
export default TelaLogin;
