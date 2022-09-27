/* eslint-disable jsx-a11y/anchor-is-valid */
import "../components/TelaLogin/TelaLogin.css";

import Button from "../components/Button/Button";
import Input from "../components/TelaLogin/Input/Input";
import SelecionarOpcao from "../components/TelaLogin/SelecionarOpcao/SelecionarOpcao";

const TelaLogin = () => {
  return (
    <div className="main-container">
      <div className="container-main">
        <div className="container-login">
          <h2 className="title">Já sou cliente</h2>

          <form className="form" action="" name="login">
            <label>
              <span>CPF ou Email</span>
              <Input type="text" name="inputCPF_email" />
            </label>

            <label>
              <span>Senha</span>
              <Input type="password" name="input_senha" />
            </label>


            <a href="#" className="a-esqueciSenha">
              Esqueci minha senha
            </a>

            <Button type="submit">ACESSAR CONTA</Button>
          </form>
        </div>

        <div className="divider"></div>

        <div className="container-cadastro">
          <form className="form" action="" name="cadastro">
            <h2 className="title">Quero me cadastrar</h2>

            <label>
              <span>Nome</span>
              <Input type="text" name="input_nome" />
            </label>

            <label>
              <span>Sobrenome</span>
              <Input type="text" name="input_sobrenome" />
            </label>

            <label>
              <span>Email</span>
              <Input type="email" name="input_email" />
            </label>

            <label>
              <span>Sexo</span>
              <SelecionarOpcao name="select_sexo" />
            </label>

            <label>
              <span>CPF</span>
              <Input type="text" name="input_CPF" />
            </label>

            <label>
              <span>Nascimento</span>
              <Input type="date" name="input_nascimento" />
            </label>

            <label>
              <span>Senha</span>
              <Input type="password" name="input_cadastrarSenha" />
            </label>

            <label>
              <span>Confirmar Senha</span>
              <Input type="password" name="input_confirmarSenha" />
            </label>

            <Button type="submit">CRIAR CONTA</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;
