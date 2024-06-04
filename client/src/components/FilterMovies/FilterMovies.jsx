import { useState, useEffect } from "react";

function FilterMovies({ selectedGenre, handleGenreChange }) {
  // Dans le return mettre en place un label avec un select et option basé sur le tableau categories

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/genres")
      .then((response) => response.json())
      .then((data) => setGenres(data))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  return (
    <div className="filter-movies">
      <label htmlFor="genre">
        Select Genre:
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterMovies;
