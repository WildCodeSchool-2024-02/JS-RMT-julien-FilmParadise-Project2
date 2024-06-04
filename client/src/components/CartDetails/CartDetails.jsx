import { useCart } from "../../context/MovieContext";
import MovieCard from "../MovieCard/MovieCard";
import trash from "../../assets/images/trash.png";

import "./CartDetails.css";

function CartDetails({ movie }) {
  const { deleteToCart } = useCart();
  return (
    <article className="cart-details box">
      <MovieCard classMovieCard="cart-card" movie={movie} />
      <div className="cart-information">
        <h3>{movie.title}</h3>
        <h3 className="cart-price">{movie.price} €</h3>
      </div>
      <button
        title={`Remove ${movie.title} from cart.`}
        aria-label="delete"
        className="delete-cart-button background"
        type="button"
        onClick={() => deleteToCart(movie)}
      >
        <img
          className="trash"
          src={trash}
          alt={`Remove ${movie.title} from cart.`}
        />
      </button>
    </article>
  );
}

export default CartDetails;
