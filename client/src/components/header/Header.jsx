import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/Logo.png";

function Header() {
  return (
    <header className="header">
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
      <nav className="action-buttons">
        <Link to="/favorites" className="favorites-button">
          Favoris
        </Link>
        <Link to="/cart" className="cart-button">
          Panier
        </Link>
      </nav>
    </header>
  );
}

export default Header;
