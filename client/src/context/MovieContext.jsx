import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favory, setFavory] = useState([]);
  const addToCart = (movie) => {
    if (!cart.some((item) => item.id === movie.id)) {
      setCart((prev) => [...prev, movie]);
    }
  };

  const addToFavory = (movie) => {
    if (!favory.some((item) => item.id === movie.id)) {
      setFavory((prev) => [...prev, movie]);
    } else {
      setFavory((prev) => prev.filter((item) => item.id !== movie.id));
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, favory, addToFavory }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
