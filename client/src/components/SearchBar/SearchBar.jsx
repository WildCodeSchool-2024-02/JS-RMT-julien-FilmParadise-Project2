import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import loupe from "../../assets/images/loupe.png";

function SearchBar({ setSearchQuery, searchQuery }) {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movies?title=${searchQuery}`);
    } else {
      navigate(`/movies`);
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
