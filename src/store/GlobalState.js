import React, { useReducer } from 'react'

import Context from './Context'
import Reducer from "./Reducer";

import products from '../Products/products.json'

const GlobalState = (props) => {
    const [state, dispatch] = useReducer(Reducer, { carts: []})

    // Adicionar Produto ao Carrinho
    const addProductToCart = (product) => {}

    // Remover Produto do Carrinho
    const removeProductFromCart = (product) => {}

    // Limpar Produtos do Carrinho
    const clearCart = () => {}

    return (
        <Context.Provider
            value={{
                products: products
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState