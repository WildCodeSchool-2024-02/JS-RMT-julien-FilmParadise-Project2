import { Link } from "react-router-dom";
import "./movie-card.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card box">
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
