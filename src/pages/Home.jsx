import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/MainHome/Banner/Banner'
import Categorias from '../components/MainHome/Categorias/Categorias'
import Novidades from '../components/MainHome/Novidades/Novidades'
import Ofertas from '../components/MainHome/Ofertas/Ofertas'
import Footer from '../components/Footer/Footer'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'

export const Home = () => {
    return (
        <>
            <Navbar>
                <ShoppingCart />
            </Navbar>
            <Banner />
            <Categorias />
            <Novidades />
            <Ofertas />
            <Footer />
        </>
    )
}
