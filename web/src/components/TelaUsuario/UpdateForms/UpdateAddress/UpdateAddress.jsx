import React, { useState } from 'react'
import cep from 'cep-promise'

import './UpdateAddress.css'

import Button from '../../../Button/Button'
import Input from '../../../Form/Input/Input'
import Select from '../../../Form/Select/Select'
import Titulo from '../../../Titulo/Titulo'
import AvisoValidacao from '../../../AvisoValidacao/AvisoValidacao'

const UpdateAddress = ({ onSubmit, infoUser, estados, successfulUpdate }) => {
  const [addressValue, setAddressValue] = useState('')
  const [districtValue, setDistrictValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [ufValue, setUfValue] = useState('')

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

  return (
    <div className="update-container">
      <Titulo>Atualizar dados de endereço</Titulo>

      <form id="updateAddress" method="put" onSubmit={onSubmit}>
        <div className="formInputs">
          <Input
            title="CEP"
            type="text"
            name="cep"
            placeholder="12345678"
            pattern="\d*"
            maxLenght={8}
            defaultValue={infoUser?.cep}
            onBlur={handleCep}
            required
          />
          <Input
            title="Endereço"
            type="text"
            name="address"
            placeholder="Rua"
            value={addressValue}
            required
          />

          <Input
            title="Bairro"
            type="text"
            name="district"
            placeholder="Bairro"
            value={districtValue}
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
              value={cityValue}
              required
            />
            <div className="stateContainer">
              <span className='select-label'>UF<AvisoValidacao /></span>
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
        {successfulUpdate && <h1 className='success-warning'>Dados atualizados com sucesso!</h1>}
        <Button type="submit">ATUALIZAR DADOS</Button>
      </form>
    </div>
  )
}

export default UpdateAddress