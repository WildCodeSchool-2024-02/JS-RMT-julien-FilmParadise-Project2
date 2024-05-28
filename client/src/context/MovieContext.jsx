import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movie, setMovie] = useState();

  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovie = () => useContext(MovieContext);
