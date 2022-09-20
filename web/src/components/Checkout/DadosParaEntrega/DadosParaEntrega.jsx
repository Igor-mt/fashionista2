
import InputCheckout from "../InputCheckout/InputCheckout";
import Titulo from "../Titulo/Titulo";

import "./DadosParaEntrega.css"

const DadosParaEntrega = () => {

    return ( 
        <section className="informacoesEntrega__container">
            <Titulo>Dados Para Entrega</Titulo>

            <div className="inputCEP--largura">
                <InputCheckout 
                    titulo="CEP"
                    type="number"
                    name="numeroDoCEP"
                    placeholder="00000-000"
                />
            </div>

            <form className="opcoesTipoEntrega" action=''>

                <h1>Tipo de entrega</h1>

                <label className='opcoesTipoEntrega__label'>
                    <p>
                        <span className="opcoesTipoEntrega__label--negrito">SEDEX: </span> 
                        R$50,00
                    </p>
                    <input type="radio" name="tipoEntrega" value="1"/>
                </label>

                <label className='opcoesTipoEntrega__label'>
                    <p>
                        <span className="opcoesTipoEntrega__label--negrito">Encomenda PAC: </span> 
                        R$50,00
                    </p>
                    <input type="radio" name="tipoEntrega" value="2" />
                </label>

                <label className='opcoesTipoEntrega__label'>
                    <p>
                        <span className="opcoesTipoEntrega__label--negrito">Transportadora: </span>
                         R$50,00
                    </p>
                    <input type="radio" name="tipoEntrega" value="3"/>
                </label>

            </form>

            <InputCheckout 
                titulo="Endereço"
                type="text"
                name="endereco"
                placeholder="Rua, avenida..."
             />
        
            <InputCheckout 
                titulo="Complemento"
                type="text"
                name="endereco"
                placeholder="Apartamento, casa..."
            />

            <InputCheckout 
                titulo="Numero"
                type="text"
                name="endereco"
                placeholder=""
            />             
            
            <InputCheckout 
                titulo="Bairro"
                type="text"
                name="bairro"
                placeholder=""
            />   

            <InputCheckout 
                titulo="Referêcia"
                type="text"
                name="referencia"
                placeholder=""
            /> 

            <InputCheckout 
                titulo="Cidade"
                type="text"
                name="cidade"
                placeholder=""
            />   
            
            <InputCheckout 
                titulo="Estado"
                type="text"
                name="referencia"
                placeholder="Ex: Goiás;"
            /> 

        </section>
    );
}
 
export default DadosParaEntrega;