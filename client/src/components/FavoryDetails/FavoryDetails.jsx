import { useCart } from "../../context/MovieContext";
import MovieCard from "../MovieCard/MovieCard";

import "./favoryDetails.css";

function FavoryDetails() {
  const { favory } = useCart();
  return (
    <>
      <h2 className="favory-title">Your wishlist :</h2>
      <div className="all-favory">
        {favory.map((movie) => (
          <MovieCard
            key={movie.title}
            classMovieCard="movie-card"
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}

export default FavoryDetails;
