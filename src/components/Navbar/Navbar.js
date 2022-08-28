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
            <Link to={{ pathname: "/", hash: ""}}>
                <img
                    src="/assets/img/logo-fashionista.png"
                    className="logo"
                    alt="logo fashionista"
                />
            </Link>

            <nav>
                <ul className="navbar-items menu">
                    <li className="navbar-item">
                    <Link to={{ pathname: "/catalogo/Feminino", hash: "" }}>FEMININO</Link>
                    
                    </li>
                    <li className="navbar-item">
                    <Link to={{ pathname: "/catalogo/Masculino", hash: "" }}>MASCULINO</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to={{ pathname: "/catalogo/Infantil", hash: "" }}>INFANTIL</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={{ pathname: "/catalogo/Promocoes", hash: "" }}>PROMOÇÕES</Link>
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