import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import loupe from "../../assets/images/loupe.png";

function SearchBar({ query }) {
  const [searchQuery, setSearchQuery] = useState(query);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movies?title=${searchQuery}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img src={loupe} alt="Search" className="search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;
