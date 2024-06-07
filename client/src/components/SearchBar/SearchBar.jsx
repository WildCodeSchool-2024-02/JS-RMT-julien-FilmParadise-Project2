import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./SearchBar.css";
import loupe from "../../assets/images/loupe.png";

function SearchBar() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [searchByTitle, setSearchByTitle] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchByTitle.trim()) {
      navigate(`/movies?title=${searchByTitle}`);
    } else {
      navigate(`/movies`);
    }
  };

  useEffect(() => {
    const title = searchParams.get("title");
    if (title) {
      setSearchByTitle(searchParams.get("title"));
    } else {
      setSearchByTitle("");
    }
  }, [location]);

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchByTitle}
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img src={loupe} alt="Search" className="search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;
