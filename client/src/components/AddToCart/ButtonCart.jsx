import { useCart } from "../../context/MovieContext";
import "./addToCart.css";

function ButtonCart({ movie }) {
  const { handleCart, isNotInCart } = useCart();
  return (
    <button
      className={isNotInCart(movie) ? "button-cart" : "already-button-cart"}
      type="button"
      onClick={isNotInCart(movie) ? () => handleCart(movie) : null}
    >
      {isNotInCart(movie) ? "Add to cart" : "Already in cart"}
    </button>
  );
}

export default ButtonCart;
