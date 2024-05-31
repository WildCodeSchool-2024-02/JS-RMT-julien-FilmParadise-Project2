import MovieCard from "../MovieCard/MovieCard";

import "./CartDetails.css";

function CartDetails({ movie }) {
  return (
    <article className="cart-details box">
      <MovieCard className="card-cart" movie={movie} />
      <div className="cart-information">
        <h3>{movie.title}</h3>
        <h3 className="cart-price">{movie.price} €</h3>
      </div>
    </article>
  );
}

export default CartDetails;
