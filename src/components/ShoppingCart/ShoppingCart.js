import React, { useRef, useContext } from 'react'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import { Wrapper, CartCount, Icon, SideBar, EmptyCart, SideBarTitle, SideBarTotal, CartBtn } from './styles'
import useOnClickOutside from "../../hooks/useOnClickOutside";
// eslint-disable-next-line no-unused-vars
import CardProduto from './cardProduto/CardProduto'

import { CartContext } from '../../context/cart'

const ShoppingCart = ({ isToggle, setToggle, onRemove }) => {
    const $sideBarRef = useRef();
    useOnClickOutside($sideBarRef, () => setToggle(false));

    const { productsCart, removeProductToCart, clearCart } = useContext(CartContext)
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
                        return (
                            <CardProduto
                                key={produto.id}
                                produto={produto}
                                onRemove={removeProductToCart} />
                        )
                    })
                }
                {productsCart.length !== 0 && <CartBtn onClick={() => { clearCart() }}>Limpar Carrinho</CartBtn>}
                {productsCart.length !== 0 && <CartBtn><Link to={{ pathname: "/checkout", hash: "" }}>Comprar</Link></CartBtn>}
            </SideBar>
        </>
    )
}

export default ShoppingCart