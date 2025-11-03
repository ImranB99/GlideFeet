import React, { useEffect, useState } from "react";
import { CartContext } from "../Context/Context";


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Function
  const addToCart = (item) => {
    const existing = cart.find((p) => p.id === item.id);
    let updated;

    if (existing) {
      updated = cart.map((p) =>
        p.id === item.id
          ? { ...p, quantity: p.quantity + item.quantity }
          : p
      );
    } else {
      updated = [...cart, item];
    }

    setCart(updated);
  };

  // Remove item
  const removeFromCart = (id) => {
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
  };

  // Clear all
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
