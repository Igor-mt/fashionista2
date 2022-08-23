import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-footer">
            <nav>
                <ul className="navbar-items">
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
                    <li className="navbar-item">
                        <a href="/login-cadastro.html">SUPORTE</a>
                    </li>
                </ul>
            </nav>

            <p>&copy;2022 Fashionista.All Right Reserved</p>
        </div>
    )
}

export default Footer