import React, { useRef, useContext } from 'react'
import { faShoppingBag , faFaceSadCry } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { Wrapper, CartCount, Icon, SideBar, EmptyCart, SideBarTitle, SideBarTotal, ClearCartBtn } from './styles'
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CardProduto from '../CardProduto/CardProduto'

import './ShoppingCart.css'

import { CartContext } from '../../context/cart'

const ShoppingCart = ({ isToggle, setToggle }) => {
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
                {productsCart.length === 0 ? <EmptyCart>Carrinho Vazio <Icon icon={faFaceSadCry} style={{color: "rgb(46, 46, 46)"}} /></EmptyCart> :
                
                    productsCart.map((produto, size) => {
                        totalPrice += produto.id.actual_price * produto.qtd
                        return (
                            <CardProduto
                                key={produto.id + size}
                                produto={produto}
                                onRemove={removeProductToCart}
                            />
                        )
                    })
                
                }
                {productsCart.length !== 0 && <ClearCartBtn onClick={clearCart}>Limpar Carrinho</ClearCartBtn>}
                {productsCart.length !== 0 && <SideBarTotal>Total: R${(totalPrice.toFixed(2)).replace('.', ',')}</SideBarTotal>}
                {productsCart.length !== 0 && <Link to="/checkout" className='cart-btn'>Comprar</Link>}
            </SideBar>
        </>
    )
}

export default ShoppingCart