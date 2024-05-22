import "./movie-card.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`http://localhost:3000/movies/${movie.id}`}>
        <img
          src={movie.poster_path}
          alt={movie.original_title}
          title={movie.original_title}
        />
      </Link>
    </div>
  );
}

export default MovieCard;
