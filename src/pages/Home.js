import React from 'react'
import Banner from '../components/MainHome/Banner/Banner'
import Categorias from '../components/MainHome/Categorias/Categorias'
import Novidades from '../components/MainHome/Novidades/Novidades'
import Ofertas from '../components/MainHome/Ofertas/Ofertas'

export const Home = () => {
    return (
        <>
            <Banner />
            <Categorias />
            <Novidades />
            <Ofertas />
        </>
    )
}
