import React from 'react';

import "./Filtro.css"

const Filtro = () => {
    return ( 
        <div className="filter">
            <div className="filterOptions">
                <section className="precoFilter filterOption">+ PREÇO</section>
                <section className="tamanhoFilter filterOption">+ TAMANHO</section>
                <section className="marcaFilter filterOption">+ MARCA</section>
                <section className="corFilter filterOption">- COR</section>
            </div>
            <div className="selectCor">
                <section className="selectCorBox">Busca</section>
                <div className="colorOptions">
                    <section className="amareloCor colorOption nonSelected">Amarelo</section>
                    <section className="azulCor colorOptionSelected">Azul</section>
                    <section className="vermelhoCor colorOption nonSelected">Vermelho</section>
                    <section className="pretoCor colorOption nonSelected">Preto</section>
                </div>
            </div>
        </div>
    );
}
 
export default Filtro;