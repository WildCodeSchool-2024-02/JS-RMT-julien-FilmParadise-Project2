import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const deleteToCart = (movie) => {
    if (cart.some((item) => item.id === movie.id)) {
      setCart((prev) => prev.filter((item) => item.id !== movie.id));
    }
  };
  const addToCart = (movie) => {
    if (!cart.some((item) => item.id === movie.id)) {
      setCart((prev) => [...prev, movie]);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
