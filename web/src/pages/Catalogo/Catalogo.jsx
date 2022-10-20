/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useParams } from "react-router"
import axios from 'axios'

import "./Catalogo.css"
import "./Mobile-catalogo.css"

import ProdutoCatalogo from "../../components/Catalogo/ProdutoCatalogo/ProdutoCatalogo"
import Aviso from '../../components/Aviso/Aviso'
import FilterOption from '../../components/Filter/FilterOption/FilterOption'
import { useEffect } from 'react'

const Catalogo = () => {
    const params = useParams()
    const category = params.category

    const [toggleFilterSubOptions, setToggleFilterSubOptions] = useState(false)
    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])

    const handleToggleSubOptions = () => {
        !toggleFilterSubOptions ? setToggleFilterSubOptions(true) : setToggleFilterSubOptions(false)
    }

    const handleFilterOption = async (event) => {
        const filter = event.target.value

        if(products.length < 1) document.location.reload()

        setProducts(products.filter(product => product.color === filter))
    }


    const filterOptions = ['Cor']

    if (category === 'Masculino' || category === 'Feminino' || category === 'Infantil') {
        useEffect(() => {
            axios.get(`http://localhost:5450/categorias/${category}`)
                .then(res => setProducts(res.data))
        }, [category])

        return (
            <div className='main-container catalogue-container'>
                <div className="filterContainer">
                    <h2 className='filterTitle'>Filtros</h2>
                    <div className="filterOptions">
                        {filterOptions.map((filter) =>
                            <FilterOption
                                key={filter}
                                toggleFilterSubOptions={toggleFilterSubOptions}
                                onClick={handleToggleSubOptions}
                                handleFilterOption={handleFilterOption}
                            >
                                {filter}
                            </FilterOption>
                        )}
                    </div>
                </div>
                <div className='produtos'>
                    {products.map((product) => (
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
            </div>
        );
    } else if (category === 'Promocoes') {
        useEffect(() => {
            axios.get('http://localhost:5450/promocao/produtos')
                .then(res => setProducts(res.data))
        }, [category])

        return (
            <div className='main-container catalogue-container'>
                <div className="filterContainer">
                    <h2 className='filterTitle'>Filtros</h2>
                    <div className="filterOptions">
                        {filterOptions.map((filter) =>
                            <FilterOption
                                key={filter}
                                toggleFilterSubOptions={toggleFilterSubOptions}
                                onClick={handleToggleSubOptions}
                                handleFilterOption={handleFilterOption}
                            >
                                {filter}
                            </FilterOption>
                        )}
                    </div>
                </div>
                <div className='produtos'>
                    {products.map((product) => (
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
            </div>
        )
    } else {
        useEffect(() => {
            axios.get(`http://localhost:5450/pesquisa/produtos/${category}`)
                .then(res => setSearchProducts(res.data))
        }, [category])

        if (searchProducts.length > 0) {
            return (
                <div className='main-container catalogue-container'>
                    <div className="filterContainer">
                        <h2 className='filterTitle'>Filtros</h2>
                        <div className="filterOptions">
                            {filterOptions.map((filter) =>
                                <FilterOption
                                    key={filter}
                                    toggleFilterSubOptions={toggleFilterSubOptions}
                                    onClick={handleToggleSubOptions}
                                    products={searchProducts}
                                    handleFilterOption={handleFilterOption}
                                >
                                    {filter}
                                </FilterOption>
                            )}
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
                </div>
            )
        } else {
            return (
                <Aviso />
            )
        }
    }
}

export default Catalogo;



