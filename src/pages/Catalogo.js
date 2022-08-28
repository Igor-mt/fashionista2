import React, { useState } from 'react'
import { useParams } from "react-router"

import "../components/Catalogo/Catalogo.css"
import "../components/Catalogo/Mobile-catalogo.css"

import Filtro from "../components/Catalogo/Filtro/Filtro";
import ProdutoCatalogo from "../components/Catalogo/ProdutoCatalogo/ProdutoCatalogo"
import products from "../Products/products.json"
import Footer from '../components/Footer/Footer';
import Navbar from "../components/Navbar/Navbar";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const Catalogo = () => {

    const [isToggle, setToggle] = useState(false);

    const params = useParams()

    let categoria = products.filter((categoria) => (categoria.category === params.category))

    console.log(categoria)

    return ( 

        <>
         <Navbar>
            <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
        </Navbar>

        <main>
            <Filtro />
            <div className='produtos'>

                {categoria.map((categoria) => {
                    return <ProdutoCatalogo
                        key={categoria.id}
                        link="#"
                        img={categoria.img}
                        name={categoria.name}
                        oldPrice="R$220"
                        actualPrice={categoria.price}
                    />
                })}

            </div>
        </main>

        <Footer />

        </>
    );
}
 
export default Catalogo;



