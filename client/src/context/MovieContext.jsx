import { createContext, useState, useContext } from "react";

const CartContext = createContext();
const initialState = [
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
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
    genre_ids: "Thriller",
    id: 916605,
    original_language: "en",
    original_title: "The Infernal Machine",
    overview:
      "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
    popularity: 4145.222,
    poster_path:
      "https://image.tmdb.org/t/p/w500/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
    release_date: "2022-09-23",
    title: "The Infernal Machine",
    video: false,
    vote_average: 6.8,
    vote_count: 57,
    price: 11,
    year: "2022",
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
    genre_ids: "Action",
    id: 960704,
    original_language: "ja",
    original_title: "鋼の錬金術師 完結編 最後の錬成",
    overview:
      "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
    popularity: 3068.271,
    poster_path:
      "https://image.tmdb.org/t/p/w500/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
    release_date: "2022-06-24",
    title: "Fullmetal Alchemist: The Final Alchemy",
    video: false,
    vote_average: 6.9,
    vote_count: 36,
    price: 8,
    year: "2022",
  },
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);
  const [classMovieCard, setClassMovieCard] = useState("");
  const addToCart = (movie) => {
    if (!cart.some((item) => item.id === movie.id)) {
      setCart((prev) => [...prev, movie]);
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, classMovieCard, setClassMovieCard }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
