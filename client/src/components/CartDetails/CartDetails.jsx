import MovieCard from "../MovieCard/MovieCard";

import "./CartDetails.css";

function CartDetails({ movie }) {
  return (
    <article className="cart-details box">
      <MovieCard className="card-cart" movie={movie} />
      <div className="cart-information">
        <h3> Title : {movie.title}</h3>
        <h3>Price : {movie.price} €</h3>
      </div>
    </article>
  );
}

export default CartDetails;
