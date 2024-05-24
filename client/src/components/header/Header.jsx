import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/Logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="title-section">
          <h1 className="title">Film Paradise</h1>
          <p className="subtitle">"Le ciné dans ton canapé"</p>
        </div>
      </div>
      <div className="action-buttons">
        <Link to="/favorites" className="favorites-button">Favoris</Link>
        <Link to="/cart" className="cart-button">Panier</Link>
      </div>
    </header>
  );
}

export default Header;
