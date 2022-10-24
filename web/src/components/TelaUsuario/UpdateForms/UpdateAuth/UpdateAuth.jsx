import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AvisoValidacao from '../../../AvisoValidacao/AvisoValidacao'
import Button from '../../../Button/Button'
import Input from '../../../Form/Input/Input'
import Titulo from '../../../Titulo/Titulo'

import './UpdateAuth.css'

const UpdateAuth = ({ onSubmit, handleToggleShowPassword, toggleShowPassword, isPasswordLenghtValid, isConfirmPasswordValid }) => {
  return (
    <>
      <div className="update-container">
        <Titulo>Atualizar dados de autenticação</Titulo>
        <form id="updateUser" method="put" onSubmit={onSubmit}>
          <div className="formInputs">
            <Input
              title="Email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <Input
              title="Senha Antiga"
              type={toggleShowPassword ? "text" : "password"}
              name="oldPassword"
              placeholder={toggleShowPassword ? "Senha" : "******"}
              required
            />
              <Input
                title="Nova Senha"
                type={toggleShowPassword ? "text" : "password"}
                name="newPassword"
                placeholder={toggleShowPassword ? "Senha" : "******"}
                required
              />
            </div>
          {!isPasswordLenghtValid && <AvisoValidacao>As senha deve ter mais de 6 caracteres.</AvisoValidacao>}
          {!isConfirmPasswordValid && <AvisoValidacao>As senhas não são iguais</AvisoValidacao>}
          <Button type="button" onClick={handleToggleShowPassword}><FontAwesomeIcon icon={faEye} /> Ver senha</Button>
          <Button type="submit">ATUALIZAR DADOS</Button>
        </form>
      </div>
    </>
  )
}

export default UpdateAuth