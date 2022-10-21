/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router"
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import { GrPrevious, GrNext } from "react-icons/gr";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Produto.css'

import { CartContext } from '../../context/cart'
import { WishlistContext } from '../../context/wishlist'
import ProdutoComponent from "../../components/Produto/Produto";
import CarouselCard from "../../components/Carousel/CarouselCard";
import Titulo from '../../components/Titulo/Titulo'

const Produto = () => {
  const params = useParams()
  const [product, setProduct] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([])

  const {
    addProductToCart,
  } = useContext(CartContext);

  const {
    addProductToWishlist,
  } = useContext(WishlistContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5450/produtos/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        return res.data
      })
      .then(async (product) => {
        await axios.get(`http://localhost:5450/categoria/${product[0].category_id}`)
          .then(res => setRelatedProducts(res.data))
      })
  }, [])

  const filteredRelatedProducts = relatedProducts.filter(product => product.product_id !== params.id)

  const isMobile = window.innerWidth <= 1024

  return (
    <div className="main-container">
      {product.map(produto => <ProdutoComponent
        key={produto.product_id}
        item={produto}
        onAddToCart={addProductToCart}
        onAddToWishList={addProductToWishlist}
      />
      )}
      <Titulo>Produtos Relacionados:</Titulo>
      <div className="carousel-container">
        {!isMobile && <GrPrevious className="carousel-btn-prev" />}
        <Swiper
          effect={"keyboard"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={!isMobile ? 4 : 1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className="carousel"
          initialSlide={!isMobile ? 3 : 1}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={!isMobile && {
            prevEl: ".carousel-btn-prev",
            nextEl: ".carousel-btn-next",
          }}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {filteredRelatedProducts.slice(0, 10).map((product) => {
            return <SwiperSlide style={{ width: "20%" }}>
              <CarouselCard
                key={product.product_id}
                product={product}
              />
            </SwiperSlide>
          }
          )}
        </Swiper>
      </div>
      {!isMobile && <GrNext className="carousel-btn-next" />}
    </div >
  )
}

export default Produto;
