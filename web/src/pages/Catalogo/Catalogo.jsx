import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import axios from 'axios'

import "./Catalogo.css"
import "./Mobile-catalogo.css"

import ProdutoCatalogo from "../../components/Catalogo/ProdutoCatalogo/ProdutoCatalogo"
import Aviso from '../../components/Aviso/Aviso'

const Catalogo = () => {
    const [categoryProducts, setCategoryProducts] = useState([])
    const [saleProducts, setSaleProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])

    const params = useParams()
    const category = params.category

    useEffect(() => {
        axios.get(`http://localhost:5450/categorias/${category}`)
            .then(res => setCategoryProducts(res.data))
    }, [category])

    useEffect(() => {
        axios.get('http://localhost:5450/promocao/produtos')
            .then(res => setSaleProducts(res.data))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5450/pesquisa/produtos/${category}`)
            .then(res => setSearchProducts(res.data))
    }, [category])

    if (category === 'Masculino' || category === 'Feminino' || category === 'Infantil') {
        return (
            <main>
                <div className="filter">
                    <div className="filterOptions">
                        <section className="precoFilter filterOption">+ PREÇO</section>
                        <section className="tamanhoFilter filterOption">+ TAMANHO</section>
                        <section className="marcaFilter filterOption">+ MARCA</section>
                        <section className="corFilter filterOption">- COR</section>
                    </div>
                    <div className="selectCor">
                        <div className="colorOptions">
                            <section className="amareloCor colorOption nonSelected">Amarelo</section>
                            <section className="azulCor colorOptionSelected">Azul</section>
                            <section className="vermelhoCor colorOption nonSelected">Vermelho</section>
                            <section className="pretoCor colorOption nonSelected">Preto</section>
                        </div>
                    </div>
                </div>
                <div className='produtos'>
                    {categoryProducts.map((product) => (
                        <ProdutoCatalogo
                            key={product.product_id}
                            link={`/produto/${product.product_id}`}
                            img={product.img_url}
                            name={product.name}
                            oldPrice={product.regular_price}
                            actualPrice={product.actual_price}
                            onSale={product.on_sale}
                        />
                    ))
                    }
                </div>
            </main>
        );
    } else if (category === 'Promocoes') {
        return (
            <main>
                <div className="filter">
                    <div className="filterOptions">
                        <section className="precoFilter filterOption">+ PREÇO</section>
                        <section className="tamanhoFilter filterOption">+ TAMANHO</section>
                        <section className="marcaFilter filterOption">+ MARCA</section>
                        <section className="corFilter filterOption">- COR</section>
                    </div>
                    <div className="selectCor">
                        <div className="colorOptions">
                            <section className="amareloCor colorOption nonSelected">Amarelo</section>
                            <section className="azulCor colorOptionSelected">Azul</section>
                            <section className="vermelhoCor colorOption nonSelected">Vermelho</section>
                            <section className="pretoCor colorOption nonSelected">Preto</section>
                        </div>
                    </div>
                </div>
                <div className='produtos'>
                    {saleProducts.map((product) => (
                        <ProdutoCatalogo
                            key={product.product_id}
                            link={`/produto/${product.product_id}`}
                            img={product.img_url}
                            name={product.name}
                            oldPrice={product.regular_price}
                            actualPrice={product.actual_price}
                            onSale={product.on_sale}
                        />
                    ))
                    }
                </div>
            </main>
        )
    } else {
        if (searchProducts.length > 0) {
            return (
                <main>
                    <div className="filter">
                        <div className="filterOptions">
                            <section className="precoFilter filterOption">+ PREÇO</section>
                            <section className="tamanhoFilter filterOption">+ TAMANHO</section>
                            <section className="marcaFilter filterOption">+ MARCA</section>
                            <section className="corFilter filterOption">- COR</section>
                        </div>
                        <div className="selectCor">
                            <div className="colorOptions">
                                <section className="amareloCor colorOption nonSelected">Amarelo</section>
                                <section className="azulCor colorOptionSelected">Azul</section>
                                <section className="vermelhoCor colorOption nonSelected">Vermelho</section>
                                <section className="pretoCor colorOption nonSelected">Preto</section>
                            </div>
                        </div>
                    </div>
                    <div className='produtos'>
                        {searchProducts.map((product) => (
                            <ProdutoCatalogo
                                key={product.product_id}
                                link={`/produto/${product.product_id}`}
                                img={product.img_url}
                                name={product.name}
                                oldPrice={product.regular_price}
                                actualPrice={product.actual_price}
                                onSale={product.on_sale}
                            />
                        ))
                        }
                    </div>
                </main>
            )
        } else {
            return (
                <Aviso />
            )
        }
    }
}

export default Catalogo;



