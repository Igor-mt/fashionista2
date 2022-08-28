import React, { useRef, useContext } from 'react'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import { Wrapper, CartCount, Icon, SideBar, EmptyCart, SideBarTitle, SideBarTotal, CartBtn, ClearCartBtn } from './styles'
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CardProduto from './cardProduto/CardProduto'

import { CartContext } from '../../context/cart'

const ShoppingCart = ({ isToggle, setToggle, onRemove }) => {
    const $sideBarRef = useRef();
    useOnClickOutside($sideBarRef, () => setToggle(false));

    const { productsCart, removeProductToCart, clearCart } = useContext(CartContext)

    let totalPrice = 0
    return (
        <>
            <Wrapper onClick={() => setToggle(true)}>
                <Icon icon={faShoppingBag} />
                <CartCount>{productsCart.length}</CartCount>

            </Wrapper>

            <SideBar ref={$sideBarRef} className={isToggle ? 'expand' : 'shrink'}>
                <SideBarTitle>Carrinho de Compras</SideBarTitle>
                {productsCart.length === 0 && <EmptyCart>Carrinho Vazio</EmptyCart>}

                {
                    productsCart.map((produto) => {
                        totalPrice += produto.id.price * produto.qtd
                        return (
                            <CardProduto
                                key={produto.id}
                                produto={produto}
                                onRemove={removeProductToCart} />
                        )
                    })
                }
                {productsCart.length !== 0 && <ClearCartBtn onClick={() => { clearCart() }}>Limpar Carrinho</ClearCartBtn>}
                {productsCart.length !== 0 && <SideBarTotal>Total: R${totalPrice.toFixed(2)}</SideBarTotal>}
                {productsCart.length !== 0 && <CartBtn><Link to={{ pathname: "/checkout", hash: "" }}>Comprar</Link></CartBtn>}
            </SideBar>
        </>
    )
}

export default ShoppingCart