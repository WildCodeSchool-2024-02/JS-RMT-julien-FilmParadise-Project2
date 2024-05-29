import { useLoaderData } from "react-router-dom";

import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";

function AllMovies() {
  const movies = useLoaderData();
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
