import React from "react";
import { Link } from "react-router-dom";
import "./Categorias.css";

const Categorias = () => {
  return (
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
  );
};

export default Categorias;
