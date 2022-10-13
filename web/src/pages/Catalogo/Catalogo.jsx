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
    const [filterOption, setFilterOption] = useState('')

    const handleToggleSubOptions = () => {
        !toggleFilterSubOptions ? setToggleFilterSubOptions(true) : setToggleFilterSubOptions(false)
    }

    // eslint-disable-next-line no-unused-vars
    let filteredProducts = []

    const handleFilterOption = (event) => {
        setFilterOption(event.target.value)
        filteredProducts = products.filter(product => product.color === filterOption)
    }

    const filterOptions = ['Cor']

    if (category === 'Masculino' || category === 'Feminino' || category === 'Infantil') {
        useEffect(() => {
            axios.get(`https://fashionista-ecommerce.herokuapp.com/categorias/${category}`)
                .then(res => setProducts(res.data))
        }, [category])

        return (
            <main>
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
            </main>
        );
    } else if (category === 'Promocoes') {
        useEffect(() => {
            axios.get('https://fashionista-ecommerce.herokuapp.com/promocao/produtos')
                .then(res => setProducts(res.data))
        }, [category])

        return (
            <main>
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
            </main>
        )
    } else {
        useEffect(() => {
            axios.get(`https://fashionista-ecommerce.herokuapp.com/pesquisa/produtos/${category}`)
                .then(res => setSearchProducts(res.data))
        }, [category])

        if (searchProducts.length > 0) {
            return (
                <main>
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



