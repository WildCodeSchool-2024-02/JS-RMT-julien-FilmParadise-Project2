import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import { useCart } from "../../context/MovieContext";
import "./header.css";
import logo from "../../assets/images/Logo.png";
import home from "../../assets/images/home.png";

function Header({ query }) {
  const { cart } = useCart();

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
      <SearchBar query={query} />
      <nav className="action-buttons">
        <Link to="/favorites" className="nav-button">
          Favoris
        </Link>
        <Link
          to="/cart"
          className="nav-button"
          title={`You have ${cart.length} movies in your cart !`}
        >
          Cart{` ( ${cart.length} )`}
        </Link>
        <Link to="/" className="button-home">
          <img className="img-home" src={home} alt="home" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
