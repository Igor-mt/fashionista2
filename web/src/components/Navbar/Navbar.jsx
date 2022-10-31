import React, { useState, useRef } from 'react'
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import SearchBar from '../SearchBar/SearchBar'
import Cart from '../ShoppingCart/ShoppingCart';
import { Icon } from '../ShoppingCart/styles';

import "./Navbar.css";

const Navbar = (onRemove, cartItems) => {
    const [isToggle, setToggle] = useState(false);

    const navRef = useRef();

    const isLoggedIn = Cookies.get('authToken')

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-navbar")
    }

    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
        return (
            <div className="navbar-container">
                <Link to={{ pathname: "/" }}>
                    <img
                        src="/assets/img/logo-fashionista.png"
                        className="logo"
                        alt="logo fashionista"
                    />
                </Link>
                <Cart
                    isToggle={isToggle} setToggle={setToggle} cartItems={cartItems}
                />
                <nav className="menu" ref={navRef}>
                    <ul className="navbar-items">
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Feminino" }}>FEMININO</Link>

                        </li>
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Masculino" }}>MASCULINO</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Infantil" }}>INFANTIL</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Promocoes" }}>PROMOÇÕES</Link>
                        </li>
                    </ul>
                    <div className="container-button">
                        <SearchBar />
                        {isLoggedIn ?
                            <Link to={{ pathname: "/usuario" }}>
                                <Icon icon={faUser} />
                            </Link> :
                            <button className="btn-branco btn-login" id="btn-login">
                                <Link to={{ pathname: "/login" }}>
                                    LOGIN
                                </Link>
                            </button>}
                    </div>
                    <button className="btn-menu nav-close-btn" onClick={showNavbar}>
                        <Icon icon={faTimes} />
                    </button>
                </nav>
                <button className="btn-menu" onClick={showNavbar}>
                    <Icon icon={faBars} />
                </button>
            </div>
        )
    } else {
        return (
            <div className="navbar-container">
                <Link to={{ pathname: "/" }}>
                    <img
                        src="/assets/img/logo-fashionista.png"
                        className="logo"
                        alt="logo fashionista"
                    />
                </Link>

                <nav className="menu" ref={navRef}>
                    <ul className="navbar-items">
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Feminino" }}>FEMININO</Link>

                        </li>
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Masculino" }}>MASCULINO</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Infantil" }}>INFANTIL</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={{ pathname: "/catalogo/Promocoes" }}>PROMOÇÕES</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container-button">
                    <SearchBar />
                    <Cart
                        isToggle={isToggle} setToggle={setToggle} cartItems={cartItems}
                    />
                    {isLoggedIn ?
                        <Link to={{ pathname: "/usuario" }}>
                            <Icon icon={faUser} />
                        </Link> :
                        <Link to={{ pathname: "/login" }}>
                            <button
                                className="btn-branco btn-login"
                                id="btn-login"
                            >
                                LOGIN
                            </button>
                        </Link>}
                </div>
                <button className="btn-menu nav-close-btn" onClick={showNavbar}>
                    <Icon icon={faTimes} />
                </button>
                <button className="btn-menu" onClick={showNavbar}>
                    <Icon icon={faBars} />
                </button>
            </div>
        )
    }

}

export default Navbar