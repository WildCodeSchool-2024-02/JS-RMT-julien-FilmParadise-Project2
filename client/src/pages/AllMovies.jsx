import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("title");

  useEffect(() => {
    const url = searchQuery ? `?title=${encodeURIComponent(searchQuery)}` : "";
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/movies${url}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setMovies([]);
        console.error("Error fetching movies:", error);
      });
  }, [searchQuery]);

  return (
    <>
      <Header query={searchQuery} />
      <section className="movie-list">
        <h2>{movies.length > 0 ? "All movies" : "No Movies Found"}</h2>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </section>
    </>
  );
}

export default AllMovies;
