import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from './router/Router'

import './GlobalStyles.css'

import SearchProvider from './context/search'
import CartProvider from "./context/cart";
import WishlistContext from "./context/wishlist";

import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <SearchProvider>
      <CartProvider>
        <WishlistContext>
          <BrowserRouter>
            <Navbar />
            <Router/>
            <Footer />
          </BrowserRouter>
        </WishlistContext>
      </CartProvider>
    </SearchProvider>
  );
};

export default App;
