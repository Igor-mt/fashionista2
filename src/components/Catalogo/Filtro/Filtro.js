import React from 'react';

import "./Filtro.css"

const Filtro = () => {
    return ( 
        <div class="filter">
            <div class="filterOptions">
                <section class="precoFilter filterOption">+ PREÇO</section>
                <section class="tamanhoFilter filterOption">+ TAMANHO</section>
                <section class="marcaFilter filterOption">+ MARCA</section>
                <section class="corFilter filterOption">- COR</section>
            </div>
            <div class="selectCor">
                <section class="selectCorBox">Busca</section>
                <div class="colorOptions">
                    <section class="amareloCor colorOption nonSelected">Amarelo</section>
                    <section class="azulCor colorOptionSelected">Azul</section>
                    <section class="vermelhoCor colorOption nonSelected">Vermelho</section>
                    <section class="pretoCor colorOption nonSelected">Preto</section>
                </div>
            </div>
        </div>
    );
}
 
export default Filtro;