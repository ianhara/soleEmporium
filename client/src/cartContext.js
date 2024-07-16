// cartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    // Logic to add item to cart
  };

  const removeItemFromCart = (itemId) => {
    // Logic to remove item from cart
  };

  const clearCart = () => {
    // Logic to clear cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
