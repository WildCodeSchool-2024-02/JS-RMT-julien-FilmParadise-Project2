import { Link } from "react-router-dom";

import AddFavory from "../AddFavory/AddFavory";

import "./movie-card.css";

function MovieCard({ movie, classMovieCard }) {
  return (
    <div className={classMovieCard}>
      <div>
        <Link to={`/movies/${movie.title}`}>
          <div>
            <img
              className="img-movie"
              src={movie.poster_path}
              alt={movie.title}
              title={movie.genre_ids}
            />
            <p>{movie.title}</p>
          </div>
        </Link>
        <AddFavory
          classButtonFavory="favory-button-movie-card background"
          movie={movie}
        />
      </div>
    </div>
  );
}

export default MovieCard;
