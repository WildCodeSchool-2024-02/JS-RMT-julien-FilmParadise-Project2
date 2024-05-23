import './header.css';
import logo from "../../assets/images/Logo.png"

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
        <button type='button' className="favorites-button">Favoris</button>
        <button type='button' className="cart-button">Panier</button>
      </div>
    </header>
  );
}

export default Header;
