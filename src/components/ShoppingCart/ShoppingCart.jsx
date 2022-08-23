import React from 'react'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Wrapper, CartCount, Icon, SideBar, SideBarTitle, SideBarTotal, ClearCart} from './styles'
import CardProduto from './cardProduto/CardProduto'

const ShoppingCart = (isToggle, setToggle) => {
    return (
        <>
            <Wrapper>
                <Icon icon={faShoppingBag} />
                <CartCount>0</CartCount>
            </Wrapper>

            {/* <SideBar className={isToggle ? 'expand' : 'shrink'}>
                <SideBarTitle>Carrinho de Compras</SideBarTitle>
                <CardProduto
                img="/assets/img/feminino/05.jpg"
                name="Roupa Feminina"
                quantity="1"
                price="200"
                />
                <CardProduto
                img="/assets/img/masculino/05.jpg"
                name="Roupa Masculina"
                quantity="1"
                price="300"
                />
                <CardProduto
                img="/assets/img/masculino/08.jpg"
                name="Roupa Masculina"
                quantity="1"
                price="300"
                />
                <CardProduto
                img="/assets/img/masculino/03.jpg"
                name="Roupa Masculina"
                quantity="1"
                price="300"
                />
                <ClearCart>Limpar Carrinho</ClearCart>
                <SideBarTotal>Total: R$500</SideBarTotal>
            </SideBar> */}
        </>
    )
}

export default ShoppingCart