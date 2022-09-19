
import "./FormCartao.css"
import InputCheckout from "../InputCheckout/InputCheckout";

const FormCartao = () => {

    return ( 
        <form className="formCartao" action="">

            <InputCheckout 
                titulo="Número do cartão"
                type="number"
                name="numeroDoCartao"
                placeholder="0000 0000 0000 0000"
            />

            <InputCheckout 
                titulo="Nome do titular"
                type="text"
                name="nomeTitular"
                placeholder="Nome como está gravado no cartão"
            />

            <InputCheckout 
                titulo="Data de Validade"
                type="text"
                name="dataValidade"
                placeholder="Mês/Ano"
            />

            <InputCheckout 
                titulo="Código de Segurança"
                type="number"
                name="codigoSeguranca"
                placeholder="***"
            />

            <InputCheckout 
                titulo="Número de Parcelas"
                type="text"
                name="numeroParcelas"
                placeholder="Número de Parcelas"
            />          
           
        </form>
    );
}
 
export default FormCartao;
