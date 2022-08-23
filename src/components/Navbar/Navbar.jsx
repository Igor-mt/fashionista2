import React, { useState } from 'react'
import "./Navbar.css";
import Cart from '../ShoppingCart/ShoppingCart'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../ShoppingCart/styles'

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);

    return (
        <div className="navbar-container">
            <a href="/index.html"
            ><img
                    src="/assets/img/logo-fashionista.png"
                    className="logo"
                    alt="logo fashionista"
                /></a>

            <nav>
                <ul className="navbar-items menu">
                    <li className="navbar-item">
                        <a href="/pages/catalogo/feminino.html">FEMININO</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/pages/catalogo/masculino.html">MASCULINO</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/pages/catalogo/infantil.html">INFANTIL</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/pages/catalogo/promocoes.html">PROMOÇÕES</a>
                    </li>
                </ul>
            </nav>

            <div className="container-button">
                <button className="btn-imagem" id="btn-pesquisa">
                    <Icon icon={faMagnifyingGlass} />
                </button>

                <Cart
                    isToggle={isToggle} setToggle={setToggle}
                />

                <button
                    className="btn-branco btn-login"
                    id="btn-login"
                >
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default Navbar