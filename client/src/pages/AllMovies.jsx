import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Header from "../components/header/Header";
import MovieCard from "../components/MovieCard/MovieCard";
import FilterMovies from "../components/FilterMovies/FilterMovies";

function AllMovies() {
  const movies = useLoaderData();
  const [selectedGenre, setSelectedGenre] = useState("All Movies");
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies =
    selectedGenre !== "All Movies"
      ? movies.filter((movie) => movie.genre_ids === selectedGenre)
      : movies;

  return (
    <>
      <Header />
      <section className="movie-list">
        <div className="title-filter">
          <h2>{selectedGenre} :</h2>

          <FilterMovies
            handleGenreChange={handleGenreChange}
            selectedGenre={selectedGenre}
          />
        </div>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default AllMovies;
