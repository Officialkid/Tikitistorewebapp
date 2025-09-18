import { createContext, useContext, useState } from 'react';

const CartContext = createContext({
    cart: [],
    addToCart: (event) => { },
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (event) => {
        setCart((prev) => [...prev, event]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);