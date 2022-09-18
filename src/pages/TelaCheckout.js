
import DadosParaEntrega from "../components/Checkout/DadosParaEntrega/DadosParaEntrega";
import FormaPagamento from "../components/Checkout/FormaPagamento/FormaPagamento";
import ResumoCompra from "../components/Checkout/ResumoCompra/ResumoCompra";

import "../components/Checkout/TelaCheckout.css"

const TelaCheckout = () => {
    return ( 
        <main className="TelaCheckout__container">

            <FormaPagamento />

            <div className="divider"></div>

            <DadosParaEntrega />

            <div className="divider"></div>

            <ResumoCompra />

        </main>
    );
}
 
export default TelaCheckout;