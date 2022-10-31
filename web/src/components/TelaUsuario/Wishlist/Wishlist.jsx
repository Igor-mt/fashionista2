import React from 'react'

import Titulo from '../../Titulo/Titulo'
import WishlistCardProduto from '../../CardProduto/CardProduto'

const WishlistComponent = ({wishlist}) => {
    return (
        <>
            <Titulo>Sua lista de desejos</Titulo>
            <div className="wishlist-container">
                {wishlist.map((item) => {
                    return <WishlistCardProduto
                        key={item.id.product_id}
                        produto={item.id}
                        wishList
                    />
                })}
            </div>
        </>
    )
}

export default WishlistComponent