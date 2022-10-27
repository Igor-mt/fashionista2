import React from 'react'

import './UpdateUser.css'

import Button from '../../../Button/Button'
import Input from '../../../Form/Input/Input'
import Select from '../../../Form/Select/Select'
import Titulo from '../../../Titulo/Titulo'
import AvisoValidacao from '../../../AvisoValidacao/AvisoValidacao'

const UpdateUser = ({ onSubmit, genderList, successfulUpdate, infoUser }) => {
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
                            value={infoUser?.name}
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
                                <span className='select-label'>Sexo<AvisoValidacao /></span>
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
                            value={infoUser?.cpf}
                        />

                        <Input
                            title="Nascimento"
                            type="date"
                            name="birthdate"
                            placeholder="Nascimento"
                            required
                            defaultValue={infoUser?.birth}
                        />
                        <Input
                            title="Telefone"
                            type="text"
                            name="phone"
                            placeholder="62 9999-8888"
                            pattern="\d*"
                            maxLenght={11}
                            required
                            value={infoUser?.phone}
                        />
                    </div>
                    {successfulUpdate && <h1 className='success-warning'>Dados atualizados com sucesso!</h1>}
                    <Button>ATUALIZAR DADOS</Button>
                </form>
            </div>
        </>
    )
}

export default UpdateUser