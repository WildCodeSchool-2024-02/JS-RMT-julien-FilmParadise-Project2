import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./FilterMovies.css";

function FilterMovies({ selectedGenre }) {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const handleGenreChange = (e) => {
    e.preventDefault();
    if (e.target.value !== "All Movies") {
      navigate(`/movies?genre=${e.target.value}`);
    } else {
      navigate(`/movies`);
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/genres`)
      .then((res) => setGenres(res.data))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  return (
    <label className="filter-movies" htmlFor="genre">
      {`Category `}
      <select
        className="scrolling-menu"
        id="genre"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option className="scrolling-menu-option" value="All Movies">
          All Movies
        </option>
        {genres.map((genre) => (
          <option className="scrolling-menu-option" key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterMovies;
