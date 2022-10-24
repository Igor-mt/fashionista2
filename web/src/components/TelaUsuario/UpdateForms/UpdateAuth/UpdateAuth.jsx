import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import AvisoValidacao from '../../../AvisoValidacao/AvisoValidacao'
import Button from '../../../Button/Button'
import Input from '../../../Form/Input/Input'
import Titulo from '../../../Titulo/Titulo'

import './UpdateAuth.css'

const UpdateAuth = ({ onSubmit, handleToggleShowPassword, toggleShowPassword, isPasswordLenghtValid, infoUser, successfulUpdate }) => {
  const isMobile = window.innerWidth <= 1024;
  
  return (
    <>
      <div className="update-container">
        <Titulo>Atualizar dados de autenticação</Titulo>
        <form id="updateUserAuth" method="put" onSubmit={onSubmit}>
          <div className="formInputs">
            <Input
              title="Email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={infoUser?.email}
            />
            <Input
              title="Senha Antiga"
              type={toggleShowPassword ? "text" : "password"}
              name="oldPassword"
              placeholder={toggleShowPassword ? "Senha" : "******"}
              required
              style={!isMobile ? {width: "52%"} : {width: "66%"}}
            />
            <div className="password-container-register">
              <Input
                title="Nova Senha"
                type={toggleShowPassword ? "text" : "password"}
                name="newPassword"
                placeholder={toggleShowPassword ? "Senha" : "******"}
                required
              />
              <Button type="button" onClick={handleToggleShowPassword}><FontAwesomeIcon icon={faEye} /></Button>
            </div>
          </div>
          {!isPasswordLenghtValid && <AvisoValidacao>As senha deve ter mais de 6 caracteres.</AvisoValidacao>}
          {successfulUpdate && <h1 className='success-warning'>Dados atualizados com sucesso!</h1>}
          <Button type="submit">ATUALIZAR SENHA</Button>
        </form>
      </div>
    </>
  )
}

export default UpdateAuth