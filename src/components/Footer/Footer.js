import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-footer">
            <nav>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <Link to="catalogo/Feminino">FEMININO</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="catalogo/Masculino">MASCULINO</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="catalogo/Infantil">INFANTIL</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="catalogo/Promocoes">PROMOÇÕES</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/">SUPORTE</Link>
                    </li>
                </ul>
            </nav>

            <p>&copy;2022 Fashionista.All Right Reserved</p>
        </div>
    )
}

export default Footer