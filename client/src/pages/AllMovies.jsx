import { useLoaderData } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";

function AllMovies() {
  const movies = useLoaderData();
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default AllMovies;
