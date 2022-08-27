import React, { useState } from 'react'
import "./Navbar.css";
import Cart from '../ShoppingCart/ShoppingCart';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../ShoppingCart/styles';
import { Link } from 'react-router-dom';

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
                    <Link to={{ pathname: "/produto/feminino", hash: "" }}>FEMININO</Link>
                    
                    </li>
                    <li className="navbar-item">
                    <Link to={{ pathname: "/produto/masculino", hash: "" }}>MASCULINO</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to={{ pathname: "/produto/infantil", hash: "" }}>INFANTIL</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={{ pathname: "/produto/promocoes", hash: "" }}>PROMOÇÕES</Link>
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
                    <Link to={{pathname:"/login", hash:""}}>LOGIN</Link> 
                </button>
            </div>
        </div>
    )
}

export default Navbar