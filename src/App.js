import React, { useState } from 'react'
import { Home } from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Footer from './components/Footer/Footer'
import { Overlay } from './GlobalStyles'

const App = () => {
  const [isToggle, setToggle] = useState(false)
  
  return (
    <>
      <Navbar>
        <ShoppingCart
          isToggle={isToggle}
          setToggle={setToggle}
        />
      </Navbar>
      <Home>{isToggle && <Overlay/>}</Home>
      <Footer />
    </>
  )
}

export default App
