import React from 'react'

import './UpdateUser.css'

import Button from '../../../Button/Button'
import Input from '../../../Form/Input/Input'
import Select from '../../../Form/Select/Select'
import Titulo from '../../../Titulo/Titulo'
import AvisoValidacao from '../../../AvisoValidacao/AvisoValidacao'

const UpdateUser = ({ onSubmit, genderList }) => {
    return (
        <>
            <div className="update-container">
                <Titulo>Atualizar dados da conta</Titulo>
                <form id="updateUser" method="put" onSubmit={onSubmit}>
                    <div className="formInputs">
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
                                <span className='select-label'>Sexo<AvisoValidacao/></span>
                                <Select
                                    name="gender"
                                    id="sexo"
                                    required={true}
                                    itens={genderList}
                                    placeholder="Sexo"
                                />
                            </div>
                        </div>

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
                        <Input
                            title="Telefone"
                            type="text"
                            name="phone"
                            placeholder="62 9999-8888"
                            pattern="\d*"
                            maxLenght={11}
                            required
                        />
                    </div>
                    <Button>ATUALIZAR DADOS</Button>
                </form>
            </div>
        </>
    )
}

export default UpdateUser