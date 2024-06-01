import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

import { useCart } from "../context/MovieContext";
import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";

function AllMovies() {
  const movies = useLoaderData();
  const { setClassMovieCard } = useCart();
  useEffect(() => {
    setClassMovieCard("movie-card box");
  });
  return (
    <>
      <Header />
      <section className="movie-list">
        <h2>All movies :</h2>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default AllMovies;
