import { Link } from "react-router-dom";
import "./footer.css";
import logoFacebook from "../../assets/images/facebook.png";
import logoTwitter from "../../assets/images/twitter.png";
import logoInstagram from "../../assets/images/instagram.png";

function Footer() {
  return (
    <footer className="footer backround">
      <div className="reseaux-sociaux">
        <Link
          to="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoFacebook} alt="Facebook" className="logo-reseaux" />
        </Link>
        <Link
          to="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoTwitter} alt="Twitter" className="logo-reseaux" />
        </Link>
        <Link
          to="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoInstagram} alt="Instagram" className="logo-reseaux" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
