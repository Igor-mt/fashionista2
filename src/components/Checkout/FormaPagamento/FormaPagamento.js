
import React, { useState } from 'react'

import Button from "../Button/Button";
import FormCartao from '../FormCartao/FormCartao';

import Titulo from "../Titulo/Titulo"

import "./FormaPagamento.css"

const FormaPagamento = () => {

    const [opcaoPagamento, setOpcaoPagamento] = useState(null);

    return ( 
        <section className="pagamentoContainer">

            <Titulo>Forma de Pagamento</Titulo>

            <div className="perguntaCadastro">
                <p>Já possui cadastro ?</p>
                
                <div className="perguntaCadastro__containerButton">
                    <Button type="button">IDENTIFIQUE-SE</Button>
                </div>
            </div>

            <form className="opcoesPagamento" action=''>

                <label className='opcoesPagamento__label'>
                    <input type="radio" name="pagamento" value="cartao" onChange={(e) => setOpcaoPagamento(e.target.value)}/>
                    <img src='/assets/icons/cartoes.png' alt='cartoes'/>
                </label>

                <label className='opcoesPagamento__label'>
                    <input type="radio" name="pagamento" value="pix" onChange={(e) => setOpcaoPagamento(e.target.value)} />
                    <img src='/assets/icons/pix.png' alt='pix'/>
                </label>

                <label className='opcoesPagamento__label'>
                    <input type="radio" name="pagamento" value="boleto" onChange={(e) => setOpcaoPagamento(e.target.value)}/>
                    <img src='/assets/icons/boleto.png' alt='boleto'/>
                </label>

            </form>

            {opcaoPagamento === "cartao" &&(
                <FormCartao />
            )}

            {opcaoPagamento === "pix" &&(
                <div className='pix__container'>
                        <img src='/assets/img/checkout/exemploPix.png' alt='pix' className='pix__img'/>
                </div>
            )}

            {opcaoPagamento === "boleto" &&(
                <>  
                    <div className='boleto__botoes'>
                        <Button>Imprimir</Button>
                        <Button>Pagar Boleto</Button>
                    </div>
                    <div>
                        <img src='/assets/img/checkout/exemploBoleto.png' alt='boleto' className='boleto__img' />
                    </div>
                </>
            )}

        </section>
    );
}
 
export default FormaPagamento;