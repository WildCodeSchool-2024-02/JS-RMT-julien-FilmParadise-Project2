import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import axios from "axios";

import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";

function AllMovies() {
  const initialMovies = useLoaderData();
  const [movies, setMovies] = useState(initialMovies);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("title");

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/search?title=${encodeURIComponent(searchQuery)}`
        )
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    } else {
      setMovies(initialMovies);
    }
  }, [searchQuery, initialMovies]);
   return (
    <>
      <Header />
      <section className="movie-list">
        <h2>All movies :</h2>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </section>
    </>
  );
}

export default AllMovies;
