import React from 'react'

import Button from '../../../Button/Button'
import Input from '../../../Form/Input/Input'
import Select from '../../../Form/Select/Select'
import Titulo from '../../../Titulo/Titulo'

import './UpdateAddress.css'

const UpdateAddress = ({ onSubmit, infoUser, estados }) => {
  return (
    <div className="update-container">
      <Titulo>Atualizar dados de endereço</Titulo>

      <form id="updateAddress" method="put" onSubmit={onSubmit}>
        <div className="formInputs">
          <Input
            title="CEP"
            type="text"
            name="numeroDoCEP"
            placeholder="12345678"
            pattern="\d*"
            maxLenght={8}
            value={infoUser?.cep}
          />
          <Input
            title="Telefone"
            type="text"
            name="phone"
            placeholder="62999998888"
            pattern="\d*"
            maxLenght={11}
            value={infoUser?.phone}
          />
          <Input
            title="Endereço"
            type="text"
            name="endereco"
            placeholder="Rua"
            value={infoUser?.address}
          />

          <Input
            title="Bairro"
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={infoUser?.district}
          />

          <Input title="Numero" type="text" name="numero" placeholder="Nº" value={infoUser?.address_number} />

          <Input
            title="Complemento"
            type="text"
            name="complemento"
            placeholder="Complemento"
          />
          <div className="cidadeEstado__container">
            <Input
              title="Cidade"
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={infoUser?.city}
            />
            <Select name="estados" id="estados" itens={estados} placeholder="UF" required />
          </div>
        </div>
        <Button>ATUALIZAR DADOS</Button>
      </form>
    </div>
  )
}

export default UpdateAddress