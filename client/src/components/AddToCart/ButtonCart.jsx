import { useCart } from "../../context/MovieContext";
import "./addToCart.css";

function ButtonCart({ movie }) {
  const { addToCart } = useCart();

  const cartClick = () => {
    addToCart(movie);
  };

  return (
    <button className="button-cart" type="button" onClick={cartClick}>
      Add to cart
    </button>
  );
}

export default ButtonCart;
