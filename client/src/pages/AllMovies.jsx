import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";
import FilterMovies from "../components/FilterMovies/FilterMovies";

function AllMovies() {
  const movies = useLoaderData();
  const [selectedGenre, setSelectedGenre] = useState("");
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies =
    selectedGenre !== ""
      ? movies.filter((movie) => movie.genre === selectedGenre)
      : movies;

  return (
    <>
      <Header />
      <section className="movie-list">
        <h2>All movies :</h2>
        <FilterMovies
          handleGenreChange={handleGenreChange}
          filteredMovies={filteredMovies}
          selectedGenre={selectedGenre}
        />
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default AllMovies;
