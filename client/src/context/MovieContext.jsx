import { createContext, useState, useContext } from "react";

const CartContext = createContext();
const initialState = [
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
    genre_ids: "Thriller",
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
    popularity: 5456.118,
    poster_path:
      "https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.4,
    vote_count: 1300,
    price: 11,
    year: "2022",
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
    genre_ids: "Drama",
    id: 852046,
    original_language: "fr",
    original_title: "Athena",
    overview:
      "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
    popularity: 4089.775,
    poster_path:
      "https://image.tmdb.org/t/p/w500/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
    release_date: "2022-09-09",
    title: "Athena",
    video: false,
    vote_average: 6.6,
    vote_count: 223,
    price: 7,
    year: "2022",
  },
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);

  const addToCart = (movie) => {
    if (!cart.some((item) => item.id === movie.id)) {
      setCart((prev) => [...prev, movie]);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
