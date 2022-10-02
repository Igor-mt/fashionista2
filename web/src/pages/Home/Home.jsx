import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Produto from "../../components/MainHome/CardProduto/CardProduto";

import './Home.css'

const Home = () => {
  const [newProducts, setNewProducts] = useState([])
  const [saleProducts, setSaleProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5450/promocao/produtos/')
      .then(res => setSaleProducts(res.data))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5450/novidades/produtos/')
      .then(res => setNewProducts(res.data))
  }, [])

  return (
    <div className="main-container">
      <div className="container-banner">
        <div className="container-banner-text">
          <h1>
            Encontre o <br />
            melhor da <br />moda
          </h1>
          <p className="banner">
            Aqui você encontra roupas femininas, moda <br />
            infantil, moda masculina e muito mais. Confira <br />
            as promoções e aproveite!
          </p>
          <a href="/catalogo/Promocoes">Melhores Ofertas</a>
        </div>

        <div className="container-banner-image">
          <img src='/assets/img/banner.jpg' alt="imagem produto feminino" />
        </div>
      </div>
      <div className="container-categorias">
        <div className="container-categorias-text">
          <h1 className="categorias-title">Categorias</h1>
          <p className="categorias-text">
            Moda feminina, masculina e infantil! Confira nossas promoções e
            aproveite!
          </p>
        </div>

        <div className="categorias">
          <div className="categoria">

            <Link to="catalogo/Feminino">
              <img src="/assets/img/feminino/14.jpg" alt="" />
              <span className="categoria-name">MODA FEMININA</span>
            </Link>

          </div>

          <div className="categoria">

            <Link to="catalogo/Masculino">
              <img
                src="/assets/img/masculino/05.jpg"
                alt=""
              />
              <span className="categoria-name"> MODA MASCULINA </span>
            </Link>

          </div>

          <div className="categoria">

            <Link to="catalogo/Infantil">
              <img
                src="/assets/img/infantil/07.jpg"
                alt=""
              />
              <span className="categoria-name"> MODA INFANTIL </span>
            </Link>
          </div>
        </div>
      </div>
      <div id="novidades">
        <div className="container-novidades">
          <div className="container-novidades-text">
            <h1 className="novidades-title">Novidades</h1>
            <p className="novidades-text">
              As melhores novidades no mundo <br />
              da moda!
            </p>
            <a
              href='#melhoresOfertas'
              className="btn-branco btn-aproveite"
              aria-label="Aproveite as novidades"
            >
              APROVEITE
            </a>
          </div>

          <div className="container-produto">

            {newProducts.slice(0, 2).map((produto) => (
              <Produto
                key={produto.product_id}
                product_id={produto.product_id}
                img_url={produto.img_url}
                name={produto.name}
                regular_price={produto.regular_price}
                actual_price={produto.actual_price}
              />
            ))}

          </div>
        </div>
      </div>
      <div className="melhoresOfertas" id="melhoresOfertas">
        <div className="container-titulo-descricao">
          <h1 className="ofertas-title">Melhores Ofertas</h1>
          <p className="container-ofertas-text">Confira nossas ofertas e promoções, aproveite!</p>
        </div>

        <div className="container-melhoresOfertas">
          {saleProducts.slice(0, 8).map((produto) => (
            <Produto
              key={produto.product_id}
              product_id={produto.product_id}
              img_url={produto.img_url}
              name={produto.name}
              regular_price={produto.regular_price}
              actual_price={produto.actual_price}
            />
          ))}
        </div>
      </div>    </div>
  );
};

export default Home