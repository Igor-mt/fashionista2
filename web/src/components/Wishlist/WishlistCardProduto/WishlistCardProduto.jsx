import { useContext } from 'react'

import { Link } from 'react-router-dom';
import { WishlistContext } from '../../../context/wishlist';
import './WishlistCardProduto.css'


const WishlistCardProduto = ({ produto }) => {

    const { removeProductsFromWishlist } = useContext(WishlistContext)
    return (

        <div className="wishlist-produto-container">
            <Link to={{ pathname: `/produto/${produto.product_id}` }} className="wishlist-produto-container">
                <div className="product-container">
                    <img className="wishlist-produto-image" src={produto.img_url} alt="" />
                    <div className="wishlist-produto-info">
                        <h1 className="wishlist-produto-title">{produto.name}</h1>
                        {produto.qtd && <div className="wishlist-produto-size">Tamanho: {produto.size}</div>}
                        <div className='wishlist-produto-price'>R${(produto.actual_price).toFixed(2).replace('.', ',')}</div>
                    </div>
                </div>
            </Link>
            <button className="wishlist-produto-remove" onClick={() => removeProductsFromWishlist(produto)}>✖</button>
        </div>
    );
}

export default WishlistCardProduto