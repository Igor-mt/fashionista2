import React, { useContext } from 'react'
import { useParams } from "react-router"

import "../components/Catalogo/Catalogo.css"
import "../components/Catalogo/Mobile-catalogo.css"

import Filtro from "../components/Catalogo/Filtro/Filtro";
import ProdutoCatalogo from "../components/Catalogo/ProdutoCatalogo/ProdutoCatalogo"
import Aviso from '../components/Aviso/Aviso'
import products from "../Products/products.json"

import { SearchContext } from '../context/search'

const Catalogo = () => {
    const params = useParams()

    const { query } = useContext(SearchContext)

    let categoria = products.filter((produto) => (produto.category === params.category))

    let promocoes = products.filter((produto) => produto.promotion)

    let searchQuery = products.filter((produto) => {
        return produto.name.toLowerCase().includes(query.toLowerCase())
    })

    let searchQueryLength = searchQuery.length > 0;

    if (params.category === "Promocoes") {
        return (
            <main>
                <Filtro />
                <div className='produtos'>
                    {promocoes.map((promocao) => (
                        <ProdutoCatalogo
                            key={promocao.id}
                            link={`/produto/${promocao.id}`}
                            img={promocao.img}
                            name={promocao.name}
                            oldPrice="R$220"
                            actualPrice={promocao.price}
                        />
                    ))
                    }
                </div>
            </main>
        );
    } else if (params.category === "Masculino" || params.category === "Feminino" || params.category === "Infantil") {
        return (
            <main>
                <Filtro />
                <div className='produtos'>
                    {categoria.map((categoria) => (
                        <ProdutoCatalogo
                            key={categoria.id}
                            link={`/produto/${categoria.id}`}
                            img={categoria.img}
                            name={categoria.name}
                            oldPrice="R$220"
                            actualPrice={categoria.price}
                        />
                    ))
                    }
                </div>
            </main>
        );
    } else {
        if (searchQueryLength) {
            return (
                <main>
                    <Filtro />
                    <div className='produtos'>
                        {searchQuery.map((param) => (
                            <ProdutoCatalogo
                                key={param.id}
                                link={`/produto/${param.id}`}
                                img={param.img}
                                name={param.name}
                                oldPrice="R$220"
                                actualPrice={param.price}
                            />
                        ))
                        }
                    </div>
                </main>
            );
        } else {
            return <Aviso/>
        }
    }
}

export default Catalogo;



