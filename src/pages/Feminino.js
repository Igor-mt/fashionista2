import React, { useState } from "react";
import { useParams } from "react-router"
import Navbar from "../components/Navbar/Navbar";
import Produto from "../components/Produto/Produto";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Footer from "../components/Footer/Footer";
import productsFem from "../Products/productsFem.json"

const Feminino = () => {
  const [isToggle, setToggle] = useState(false);
  const params = useParams()

  let prod = productsFem.filter((produto) => { return produto.id === Number(params.id) })
  console.log(prod)
  return (
    <div>
      <Navbar>
      <ShoppingCart isToggle={isToggle} setToggle={setToggle}></ShoppingCart>
      </Navbar>
<<<<<<< HEAD
      <Produto
      img="/assets/img/feminino/03.jpg"
      name="Blusa Branca Feminina"
      price="120,00"
      ></Produto>
      <Footer></Footer>
    </div>
  );
};
=======
      {prod.map((produto) => {
        return <Produto
          key={produto.id}
          link="#"
          img={produto.img}
          name={produto.name}
          price={produto.price}
          installment={(Number(produto.price) / 3).toFixed(2)}
        />
      })}
      <Footer />
    </>
  )
}
>>>>>>> origin/alteracoes-lucas-santana

export default Feminino;
