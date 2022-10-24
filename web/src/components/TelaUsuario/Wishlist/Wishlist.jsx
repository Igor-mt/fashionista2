import React from 'react'

import Titulo from '../../Titulo/Titulo'
import WishlistCardProduto from '../../Wishlist/WishlistCardProduto/WishlistCardProduto'

const WishlistComponent = ({wishlist}) => {
    return (
        <>
            <Titulo>Sua lista de desejos</Titulo>
            <div className="wishlist-container">
                {wishlist.map((item) => {
                    return <WishlistCardProduto
                        key={item.id.product_id}
                        produto={item.id}
                    />
                })}
            </div>
        </>
    )
}

export default WishlistComponent