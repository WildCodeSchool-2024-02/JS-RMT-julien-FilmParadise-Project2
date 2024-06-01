import { useEffect } from "react";
import { useCart } from "../../context/MovieContext";

import MovieCard from "../MovieCard/MovieCard";

import "./CartDetails.css";

function CartDetails({ movie }) {
  const { setClassMovieCard } = useCart();
  useEffect(() => {
    setClassMovieCard("cart-card box");
  });
  return (
    <article className="cart-details box">
      <MovieCard movie={movie} />
      <div className="cart-information">
        <h3>{movie.title}</h3>
        <h3 className="cart-price">{movie.price} €</h3>
      </div>
    </article>
  );
}

export default CartDetails;
