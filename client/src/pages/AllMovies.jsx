import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";
import Footer from "../components/Footer/Footer";
import FilterMovies from "../components/FilterMovies/FilterMovies";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("title");
  const [query, setSearchQuery] = useState(searchQuery);
  const selectedGenre = searchParams.get("genre") || "All Movies";

  const seperateFilter = () => {
    if (searchQuery) {
      return `?title=${encodeURIComponent(searchQuery)}`;
    }
    return "";
  };

  useEffect(() => {
    const url = seperateFilter();
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/movies${url}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setMovies([]);
        console.error("Error fetching movies:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const filteredMovies =
    selectedGenre !== "All Movies"
      ? movies.filter((movie) => movie.genre_ids === selectedGenre)
      : movies;

  const renderMovies = () => {
    if (query === "" || !searchQuery) {
      return <h2>{selectedGenre} :</h2>;
    }
    if (searchQuery && movies.length > 0) {
      return <h2>Résults for "{searchQuery}"</h2>;
    }
    if (searchQuery) {
      return <h2>No movies</h2>;
    }
    return null;
  };
  return (
    <div className="container">
      <Header searchQuery={query} setSearchQuery={setSearchQuery} />
      <main className="movie-list">
        <div className="title-filter">
          {renderMovies()}

          <FilterMovies selectedGenre={selectedGenre} />
        </div>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} classMovieCard="movie-card" />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default AllMovies;
