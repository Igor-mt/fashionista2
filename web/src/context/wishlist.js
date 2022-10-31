import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

const wishlistFromLocalStorage = JSON.parse(localStorage.getItem("wishlist") || '[]')

export default function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(wishlistFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist])

    const addProductToWishlist = (id) => {
        const copyWishlist = [...wishlist];
        const item = copyWishlist.find((product) => product.id === id);

        if (!item) {
            copyWishlist.push({ id: id });
        } else {
            return
        }

        setWishlist(copyWishlist);
    }

    const removeProductsFromWishlist = (id, size) => {
        const copyWishlist = [...wishlist];

        const arrayFiltered = copyWishlist.filter(
            (product) => product.id !== id || product.size !== size
        );


        setWishlist(arrayFiltered);
    }

    const clearWishlist = () => {
        setWishlist([]);
    }

    return (
        <WishlistContext.Provider
            value={{ wishlist, addProductToWishlist, removeProductsFromWishlist, clearWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
}