import React from 'react'
import { useParams } from "react-router"

import "../components/Catalogo/Catalogo.css"
import "../components/Catalogo/Mobile-catalogo.css"

import Filtro from "../components/Catalogo/Filtro/Filtro";
import ProdutoCatalogo from "../components/Catalogo/ProdutoCatalogo/ProdutoCatalogo"
import products from "../Products/products.json"

const Catalogo = () => {

    const params = useParams()

    let categoria = products.filter((produto) => (produto.category === params.category))

    return (
        <main>
            <Filtro />
            <div className='produtos'>
                {categoria.map((categoria) => {
                    return (
                        <ProdutoCatalogo
                            key={categoria.id}
                            link={`/produto/${categoria.id}`}
                            img={categoria.img}
                            name={categoria.name}
                            oldPrice="R$220"
                            actualPrice={categoria.price}
                        />
                        )
                })}
            </div>
        </main>
    );
}

export default Catalogo;



