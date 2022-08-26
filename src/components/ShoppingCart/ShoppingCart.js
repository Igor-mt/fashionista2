import React, { useRef } from 'react'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line no-unused-vars
import { Wrapper, CartCount, Icon, SideBar, EmptyCart, SideBarTitle, SideBarTotal, ClearCart } from './styles'
import useOnClickOutside from "../../hooks/useOnClickOutside";
// eslint-disable-next-line no-unused-vars
import CardProduto from './cardProduto/CardProduto'

const ShoppingCart = ({isToggle, setToggle}) => {
    const $sideBarRef = useRef();

    useOnClickOutside($sideBarRef, () => setToggle(false));

    return (
        <>
            <Wrapper onClick={() => setToggle(true)}>
                <Icon icon={faShoppingBag}/>
                <CartCount>0</CartCount>
            </Wrapper>

            <SideBar ref={$sideBarRef} className={isToggle ? 'expand' : 'shrink'}>
                <SideBarTitle>Carrinho de Compras</SideBarTitle>
                <EmptyCart>Carrinho Vazio</EmptyCart>
            </SideBar>
        </>
    )
}

export default ShoppingCart