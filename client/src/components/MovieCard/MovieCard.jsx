import { Link } from "react-router-dom";
import { useCart } from "../../context/MovieContext";
import "./movie-card.css";

function MovieCard({ movie }) {
  const { classMovieCard } = useCart();
  return (
    <div className={classMovieCard}>
      <Link to={`/movies/${movie.title}`}>
        <div>
          <img
            src={movie.poster_path}
            alt={movie.title}
            title={movie.genre_ids}
          />
          <p>{movie.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
