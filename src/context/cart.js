import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || '[]')

export default function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productsCart));
    }, [productsCart])

    function addProducToCart(id) {
        const copyProductsCart = [...productsCart];
        console.log(copyProductsCart)
        const item = copyProductsCart.find((product) => product.id === id);

        if (!item) {
            copyProductsCart.push({ id: id, qtd: 1 });
        } else {
            item.qtd = item.qtd + 1;
        }


        setProductsCart(copyProductsCart);
    }

    function removeProductToCart(id) {
        const copyProductsCart = [...productsCart];

        const item = copyProductsCart.find((product) => product.id === id);

        if (item && item.qtd > 1) {
            item.qtd = item.qtd - 1;
            setProductsCart(copyProductsCart);
        } else {
            const arrayFiltered = copyProductsCart.filter(
                (product) => product.id !== id
            );
            setProductsCart(arrayFiltered);
        }
    }

    function clearCart() {
        setProductsCart([]);
    }

    return (
        <CartContext.Provider
            value={{ productsCart, addProducToCart, removeProductToCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}