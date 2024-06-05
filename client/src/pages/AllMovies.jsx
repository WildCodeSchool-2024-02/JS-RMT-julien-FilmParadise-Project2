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
      ? movies.filter((movie) => movie.genre_ids === selectedGenre)
      : movies;

  return (
    <>
      <Header />
      <section className="movie-list">
        {selectedGenre === "" ? (
          <h2>All movies :</h2>
        ) : (
          <h2>{selectedGenre} :</h2>
        )}
        <FilterMovies
          handleGenreChange={handleGenreChange}
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
