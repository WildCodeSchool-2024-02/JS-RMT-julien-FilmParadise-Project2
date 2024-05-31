import { Link } from "react-router-dom";
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
          <img src={logoFacebook} alt="Facebook" />
        </Link>
        <Link
          to="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoTwitter} alt="Twitter" />
        </Link>
        <Link
          to="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoInstagram} alt="Instagram" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
