import { useCart } from "../../context/MovieContext";
import "./addToCart.css";

function ButtonCart({ movie }) {
  const { addToCart } = useCart();

  return (
    <button
      className="button-cart"
      type="button"
      onClick={() => addToCart(movie)}
    >
      Add to cart
    </button>
  );
}

export default ButtonCart;
