import "./movie-card.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`http://localhost:3000/movies/${movie.title}`}>
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
