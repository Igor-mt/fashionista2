import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || '[]')

export default function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productsCart));
    }, [productsCart])

    function addProductToCart(id, size) {
        const copyProductsCart = [...productsCart];
        const item = copyProductsCart.find((product) => product.id === id && product.size === size);

        if (!item) {
            copyProductsCart.push({ id: id, size: size, qtd: 1 });
        } else {
            item.qtd = item.qtd + 1;
        }


        setProductsCart(copyProductsCart);
    }

    function removeProductToCart(id, size) {
        const copyProductsCart = [...productsCart];

        const arrayFiltered = copyProductsCart.filter(
            (product) => product.id !== id && product.size !== size
        );
        setProductsCart(arrayFiltered);
    }

function increaseProductsCart(id, size) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id && product.size === size);

    item.qtd = item.qtd + 1;

    setProductsCart(copyProductsCart);
}

function decreaseProductsCart(id, size) {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product) => product.id === id && product.size === size);

    item.qtd = item.qtd - 1;

    setProductsCart(copyProductsCart);
}

function clearCart() {
    setProductsCart([]);
}

return (
    <CartContext.Provider
        value={{ productsCart, addProductToCart, removeProductToCart, increaseProductsCart, decreaseProductsCart, clearCart }}
    >
        {children}
    </CartContext.Provider>
);
}