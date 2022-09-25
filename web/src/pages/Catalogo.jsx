import React, {  useState, useEffect } from 'react'
import { useParams } from "react-router"
import axios from 'axios'

import "../components/Catalogo/Catalogo.css"
import "../components/Catalogo/Mobile-catalogo.css"

import Filtro from "../components/Catalogo/Filtro/Filtro";
import ProdutoCatalogo from "../components/Catalogo/ProdutoCatalogo/ProdutoCatalogo"
import Aviso from '../components/Aviso/Aviso'

const Catalogo = () => {
    const [products, setProducts] = useState([])
    const [saleProducts, setSaleProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])

    const params = useParams()
    const category = params.category

    useEffect(() => {
        axios.get(`http://localhost:5450/categorias/${category}`)
            .then(res => setProducts(res.data))
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
                <Filtro />
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
        return (
            <main>
                <Filtro />
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
                    <Filtro />
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



