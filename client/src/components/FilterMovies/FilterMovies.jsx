import { useState, useEffect } from "react";
import axios from "axios";

function FilterMovies({ selectedGenre, handleGenreChange }) {
  // Dans le return mettre en place un label avec un select et option basé sur le tableau categories

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/genres`)
      .then((res) => setGenres(res.data))
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
