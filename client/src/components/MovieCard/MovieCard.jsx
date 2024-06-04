import { Link } from "react-router-dom";

import AddFavory from "../AddFavory/AddFavory";

import "./movie-card.css";

function MovieCard({ movie, classMovieCard }) {
  return (
    <div className={classMovieCard}>
      {/* <div> */}
      <Link to={`/movies/${movie.title}`}>
        <div className="movie-content">
          <img
            className="img-movie box"
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
      {/* </div> */}
    </div>
  );
}

export default MovieCard;
