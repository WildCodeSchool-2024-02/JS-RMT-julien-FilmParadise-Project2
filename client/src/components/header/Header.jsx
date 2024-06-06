import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import { useCart } from "../../context/MovieContext";
import "./header.css";
import logo from "../../assets/images/Logo.png";

function Header({ query, setSelectedGenre, setSearchQuery, searchQuery }) {
  const { cart, favory } = useCart();


  return (
    <header className="header background">
      <section className="logo-section">
        <Link to="/movies">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="title-section">
          <Link to="/movies" className="title">
            Film Paradise
          </Link>
          <p className="subtitle">Le ciné dans ton canapé !</p>
        </div>
      </section>
      <SearchBar
        query={query}
        setSelectedGenre={setSelectedGenre}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <nav className="action-buttons">
        <Link to="/favorites" className="favorites-button">
          Wishlist ( {favory.length} )
        </Link>
        <Link
          to="/cart"
          className="cart-button"
          title={`You have ${cart.length} movies in your cart !`}
        >
          Cart{` ( ${cart.length} )`}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
