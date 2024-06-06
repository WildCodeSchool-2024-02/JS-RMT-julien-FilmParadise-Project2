import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favory, setFavory] = useState([]);

  const isNotInCart = (movie) => !cart.some((item) => item.id === movie.id);
  const isNotInfavory = (movie) => !favory.some((item) => item.id === movie.id);

  const handleCart = (movie) => {
    if (isNotInCart(movie)) {
      setCart((prev) => [...prev, movie]);
    } else {
      setCart((prev) => prev.filter((item) => item.id !== movie.id));
    }
  };

  const handleFavory = (movie) => {
    if (isNotInfavory(movie)) {
      setFavory((prev) => [...prev, movie]);
    } else {
      setFavory((prev) => prev.filter((item) => item.id !== movie.id));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCart,
        favory,
        handleFavory,
        isNotInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
