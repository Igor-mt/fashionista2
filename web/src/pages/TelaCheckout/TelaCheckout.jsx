import { useState, useContext, useEffect } from "react";
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Titulo from "../../components/Titulo/Titulo";
import CardProduto from "../../components/CardProdutoCart/CardProduto";
import { EmptyCart, Icon } from "../../components/ShoppingCart/styles";
import BarraLateral from "../../components/BarraLateral/BarraLateral";
import Select from "../../components/Form/Select/Select";
import AvisoValidacao from "../../components/AvisoValidacao/AvisoValidacao";

import "./TelaCheckout.css";
import "./Mobile-telaCheckout.css";

import { CartContext } from "../../context/cart";


const TelaCheckout = () => {

  const [paymentMode, setPaymentMode] = useState("");
  const [userId, setUserId] = useState("")

  const [infoUser, setInfoUser] = useState([]);

  useEffect(() => {
    setUserId(Cookies.get('user_id'))
  }, [])


  useEffect(() => {
    const getInfoUserById = async () => {
      if (userId) {
        await axios.get(`http://localhost:5450/user/${userId}`)
          .then(res => setInfoUser(res.data))
          .catch(function (error) {
            console.log(error.response)
          })
      }

    };

    getInfoUserById();

  }, [userId]);

  const isLogged = Cookies.get('authToken')

  const { productsCart, removeProductToCart, clearCart } = useContext(CartContext);

  const handleCreateOrder = async () => {
    let paymentModeId = ''

    if (paymentMode === 'boleto') {
      paymentModeId = '73c9f163-5cd4-4367-a1f4-ac8d5f48df5c'
    }

    if (!isLogged) {
      alert('Crie uma conta para poder fazer seu pedido')
      return
    }

    if (paymentModeId.length < 1) {
      alert('Informe o modo de pagamento.')
      return
    };
    try {
      await axios.post(`http://localhost:5450/pedidos/${userId}`, {
        payment_mode_id: paymentModeId,
        order_total: totalPrice,
        products: productsCart
      })
      alert('Pedido criado com sucesso!')
      clearCart()
    } catch (e) {
      console.log(e);
      alert('Ocorreu um erro ao criar o pedido.')
    }
  }

  const handleOpcaoPagamentoChange = (event) => {
    setPaymentMode(event.target.value)
  }

  let totalPrice = 0

  let totalItems = 0

  for (let product of productsCart) {
    totalItems += product.qtd
  }

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
    { nome: "Tocantins", sigla: "TO" }
  ];

  return (
    <main className="TelaCheckout__container">
      <section className="checkoutInfo__container">
        <Titulo>{isLogged ? 'Modo de Pagamento' : 'Dados do Pedido'}</Titulo>

        {!isLogged && <div className="perguntaCadastro__container">
          <div className="perguntaCadastro">
            <p className="perguntaCadastro__p">Não possui uma conta?</p>
            <Link to="/login"><Button type="button">CADASTRE-SE</Button></Link>
          </div>
          <div className="perguntaCadastro">
            <p className="perguntaCadastro__p">Já possui cadastro ?</p>
            <Link to="/login"><Button type="button">FAÇA SEU LOGIN</Button></Link>
          </div>
        </div>}
        <form name="checkout-form" className="opcoesPagamento">
          <Input
            type="radio"
            img="/assets/icons/boleto.png"
            name="pagamento"
            value="boleto"
            onChange={handleOpcaoPagamentoChange}
          />
        </form>
      </section>

      <BarraLateral />

      <section className="informacoesEntrega">
        <div className="heading">
          <Titulo>Dados Para Entrega</Titulo>
          <h2 className="informacoesEntrega__aviso">Opcional</h2>
        </div>
        <div className="informacoesEntrega__divCEP--largura">
          <Input
            title="CEP"
            type="text"
            name="numeroDoCEP"
            placeholder="12345678"
            pattern="\d*"
            maxLenght={8}
            value={infoUser?.cep}
          />
        </div>
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

          <div className="stateContainer">
            <span className='select-label'>UF<AvisoValidacao /></span>
            <Select
              name="state"
              id="estados"
              itens={estados}
              placeholder="UF"
              required
              value={infoUser?.uf}
            />
          </div>
        </div>
      </section>


      <BarraLateral />

      <div className="resumoCompra">
        <Titulo>Resumo da Compra</Titulo>

        <div className="resumoCompra__listaProdutos">
          {productsCart.length === 0 ? (
            <EmptyCart>Carrinho Vazio <Icon icon={faFaceSadCry} style={{ color: "rgb(46, 46, 46)" }} /></EmptyCart>
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
            </span> R$ {totalPrice.toFixed(2).replace(".", ",")}
          </p>
        </div>

        <Button type="submit" onClick={() => handleCreateOrder()}>Finalizar Compra</Button>
      </div>
    </main >
  );
};

export default TelaCheckout;
