import { useState } from "react";
import Button from "../Button/Button";
import Titulo from "../Titulo/Titulo";

import "./ResumoCompra.css"

const ResumoCompra = () => {

    const [quantidadeProdutos] = useState(8);
    const [desconto] = useState(10);
    const [valorTotal] = useState("1.808,00");

    return ( 
        <div className="resumoCompra__container">

            <Titulo>Resumo da Compra</Titulo>

            <div className="resumoCompra__listaProdutos">
                {/* Aqui vai está os produtos que foi adicionado no carrinho */}
            </div>

            <div className="resumoCompra__informacao">
                <p>
                    <span className="resumoCompra__informacao--negrito">Quantidade total de produtos:</span> {quantidadeProdutos}
                </p>
                <p>
                    <span className="resumoCompra__informacao--negrito">Desconto: </span> {desconto}%
                </p>
                <p>
                    <span className="resumoCompra__informacao--negrito">Valor Total: </span> R$ {valorTotal}
                </p>
            </div>

            <Button type="submit">
                Finalizar Compra
            </Button>

        </div>
    );
}
 
export default ResumoCompra;