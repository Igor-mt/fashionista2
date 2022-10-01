import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

import "./TelaLogin.css";
import "./Mobile-telaLogin.css"

import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";
import Titulo from "../../components/Titulo/Titulo";
import BarraLateral from "../../components/BarraLateral/BarraLateral";
import Warning from '../../components/Form/Warning/Warning';
import { Link } from 'react-router-dom';

const TelaLogin = () => {
  const [validatedUser, setValidatedUser] = useState(true)
  const [validationPasswordLength, setValidationPasswordLength] = useState(true)
  const [validationMatchPasswords, setValidationMatchPasswords] = useState(true)

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
      axios.post(`https://fashionista-ecommerce.herokuapp.com/cadastro`, {
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
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao criar o usuário.')
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)

    if (data.password.length < 6) setValidationPasswordLength(false)
    if (data.password !== data.confirm_password) setValidationMatchPasswords(false)

    try {
      const response = await axios.post(`https://fashionista-ecommerce.herokuapp.com/login/`, {
        email: data.email,
        password: data.password
      })
      if (!response.data.user_id) setValidatedUser(false)
      alert("Usuário logado com sucesso!!")
      Cookies.set('user_id', response.data.user_id)
      Cookies.set('authToken', response.data.loginToken)
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
              />

              <Input
                title="Senha"
                type="password"
                name="password"
                placeholder="Senha"
              />
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
                />

                <div className="sobrenomeESexo__container">
                  <Input
                    title="Sobrenome"
                    type="text"
                    name="surname"
                    placeholder="Sobrenome"
                  />

                  <select name="gender" id="sexo" className="selected">
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

                <Input
                  title="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />

                <Input
                  title="CPF"
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                />

                <Input
                  title="Nascimento"
                  type="date"
                  name="birthdate"
                  placeholder="Nascimento"
                />

                <Input
                  title="Senha"
                  type="password"
                  name="password"
                  placeholder="******"
                />

                <Input
                  title="Confirmar Senha"
                  type="password"
                  name="confirm_password"
                  placeholder="******"
                />
              </div>

              <div className="cadastro--ladoEsquerdo">
                <Input
                  title="Telefone"
                  type="text"
                  name="phone"
                  placeholder="62 99999-8888"
                  pattern="\d*"
                  maxLenght={11}
                />

                <Input
                  title="CEP"
                  type="text"
                  name="cep"
                  placeholder="12345678"
                  pattern="\d*"
                  maxLenght={8}
                />

                <Input
                  title="Endereço"
                  type="text"
                  name="address"
                  placeholder="Rua"
                />

                <Input
                  title="Numero"
                  type="text"
                  name="address_number"
                  placeholder="Nº"
                />

                <Input
                  title="Bairro"
                  type="text"
                  name="district"
                  placeholder="Bairro"
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
                  />

                  <select
                    name="uf"
                    className="selected"
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
            <Button>CRIAR CONTA</Button>
            {!validationPasswordLength && <Warning>* A senha deve ter mais de 6 caracteres.</Warning>}
            {!validationMatchPasswords && <Warning>* As duas senhas não são iguais.</Warning>}
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
