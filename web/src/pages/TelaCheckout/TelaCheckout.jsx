import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Titulo from "../../components/Titulo/Titulo";

import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";

import CardProduto from "../../components/ShoppingCart/CardProduto/CardProduto.jsx";

import { EmptyCart, Icon } from "../../components/ShoppingCart/styles";

import "./TelaCheckout.css";
import "./Mobile-telaCheckout.css";

import { useState, useContext } from "react";

import { CartContext } from "../../context/cart";
import BarraLateral from "../../components/BarraLateral/BarraLateral";

const TelaCheckout = () => {
  const [opcaoPagamento, setOpcaoPagamento] = useState(null);

  const { productsCart, removeProductToCart } = useContext(CartContext);

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

  let totalPrice = 0

  let totalItems = 0

  for(let product of productsCart){
    totalItems += product.qtd
  }

  

  return (
    <main className="TelaCheckout__container">
      <section className="pagamentoContainer">
        <Titulo>Forma de Pagamento</Titulo>

        <div className="perguntaCadastro">
          <p className="perguntaCadastro__p">Já possui cadastro ?</p>

          <Button type="button">IDENTIFIQUE-SE</Button>
        </div>

        <form className="opcoesPagamento" action="">
          <Input
            type="radio"
            img="/assets/icons/boleto.png"
            name="pagamento"
            value="boleto"
            handleInputChange={setOpcaoPagamento}
          />
        </form>

        {opcaoPagamento === "boleto" && (
          <>
            <div>
              <img
                src="/assets/img/checkout/exemploBoleto.png"
                alt="boleto"
                className="boleto__img"
              />
            </div>
          </>
        )}
      </section>

      <BarraLateral />

      <section className="informacoesEntrega">
        <Titulo>Dados Para Entrega</Titulo>

        <form className="informacoesEntrega__form">
          <div className="informacoesEntrega__divCEP--largura">
            <Input
              title="CEP"
              type="text"
              name="numeroDoCEP"
              placeholder="12345678"
              pattern="\d*"
              maxLenght={8}
              handleInputChange=""
            />
          </div>

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
              id="estados"
            >
              <option selected disabled>UF</option>
              {estados.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.sigla}
                </option>
              ))}
            </select>
          </div>

          <div className="opcoesTipoEntrega">
            <h1>Tipo de entrega</h1>

            <label className="opcoesTipoEntrega__label">
              <input type="radio" name="tipoEntrega" value="1" />
              <p>
                <span className="opcoesTipoEntrega__label--negrito">
                  SEDEX: {" "}
                </span>
                R$50,00
              </p>
            </label>

            <label className="opcoesTipoEntrega__label">
              <input type="radio" name="tipoEntrega" value="2" />
              <p>
                <span className="opcoesTipoEntrega__label--negrito">
                  Encomenda PAC: {" "}
                </span>
                R$25,00
              </p>
            </label>

            <label className="opcoesTipoEntrega__label">
              <input type="radio" name="tipoEntrega" value="3" />
              <p>
                <span className="opcoesTipoEntrega__label--negrito">
                  Transportadora:{" "}
                </span>
                R$35,00
              </p>
            </label>
          </div>
        </form>
      </section>

      <BarraLateral />

      <div className="resumoCompra">
        <Titulo>Resumo da Compra</Titulo>

        <div className="resumoCompra__listaProdutos">
          {productsCart.length === 0 ? (
            <EmptyCart>Carrinho Vazio <Icon icon={faFaceSadCry} style={{color: "rgb(46, 46, 46)"}} /></EmptyCart>
          ) : (
            productsCart.map((produto, size) => {
              totalPrice += produto.id.actual_price * produto.qtd;
              return (
                <CardProduto
                  key={produto.id + size}
                  produto={produto}
                  onRemove={removeProductToCart}
                />
              );
            })
          )}
        </div>

        <div className="resumoCompra__informacao">
          <p>
            <span className="resumoCompra__informacao--negrito">
              Quantidade total de produtos:
            </span> {totalItems}
          </p>

          <p>
            <span className="resumoCompra__informacao--negrito">
              Valor Total: 
            </span> R$ {totalPrice.toFixed(2).replace(".",",")}
          </p>
        </div>

        <Button type="submit">Finalizar Compra</Button>
      </div>
    </main>
  );
};

export default TelaCheckout;
