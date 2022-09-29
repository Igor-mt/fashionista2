import "./TelaLogin.css";
import "./Mobile-telaLogin.css"

import Button from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";

import Titulo from "../../components/Titulo/Titulo";
import BarraLateral from "../../components/BarraLateral/BarraLateral";

const TelaLogin = () => {
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

  return (
    <div className="telaLogin__container">
      <div className="login__container">
        <Titulo>Já sou cliente</Titulo>

        <form id="login" method="get">
          <Input
            title="Email"
            type="text"
            name="input__email"
            placeholder="Email"
          />

          <Input
            title="Senha"
            type="password"
            name="input__Senha"
            placeholder="Senha"
          />
        </form>

        <Button type="submit">ACESSAR CONTA</Button>
      </div>

      <BarraLateral />

      <div className="cadastro__container">
        
        <Titulo>Quero me cadastrar</Titulo>

        <form id="cadastro" method="post">
          <div className="cadastro--ladoDireito">
            <Input
              title="Nome"
              type="text"
              name="input__nome"
              placeholder="Nome"
            />

            <div className="sobrenomeESexo__container">
              <Input
                title="Sobrenome"
                type="text"
                name="input__sobrenome"
                placeholder="Sobrenome"
              />

              <select name="sexo" id="sexo" className="selected">
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
              name="input__email"
              placeholder="Email"
            />

            <Input
              title="CPF"
              type="text"
              name="input__CPF"
              placeholder="CPF"
            />

            <Input
              title="Nascimento"
              type="date"
              name="input__nascimento"
              placeholder="Nascimento"
            />

            <Input
              title="Senha"
              type="password"
              name="input_cadastrarSenha"
              placeholder="******"
            />

            <Input
              title="Confirmar Senha"
              type="password"
              name="input_confirmarSenha"
              placeholder="******"
            />
          </div>

          <div className="cadastro--ladoEsquerdo">
            <Input
              title="CEP"
              type="text"
              name="numeroDoCEP"
              placeholder="12345678"
              pattern="\d*"
              maxLenght={8}
              handleInputChange=""
            />

            <Input
              title="Endereço"
              type="text"
              name="endereco"
              placeholder="Rua"
            />

            <Input
              title="Bairro"
              type="text"
              name="bairro"
              placeholder="Bairro"
            />

            <Input title="Numero" type="text" name="numero" placeholder="Nº" />

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
            />

            <select
              name="estados"
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
          
        </form>

        <Button type="submit">CRIAR CONTA</Button>
      </div>
    </div>
  );
};

export default TelaLogin;
