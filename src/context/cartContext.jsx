import React, { useState, createContext, useContext } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productItems, setProductItems] = useState([]);

    const addToCart = (product) => {
        setProductItems((prev) => {
            // Check if product already exists in cart
            const existingItem = prev.find(item => item.id === product.id);
            
            if (existingItem) {
                // If product exists, increase quantity
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If product doesn't exist, add it with quantity 1
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setProductItems((prev) => prev.filter((item) => id !== item.id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        
        setProductItems((prev) =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const getTotalPrice = () => {
        return productItems.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
    };

    const getTotalItems = () => {
        return productItems.reduce((total, item) => total + item.quantity, 0);
    };

    const clearCart = () => {
        setProductItems([]);
    };

    const contextValue = {
        addToCart, 
        removeFromCart, 
        updateQuantity,
        productItems, 
        setProductItems,
        getTotalPrice,
        getTotalItems,
        clearCart
    };

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};