import Details from "./Details";
import ButtonCart from "../AddToCart/ButtonCart";
import AddFavory from "../AddFavory/AddFavory";

import "./MovieDetail.css";

function MovieDetailCard({ movie }) {
  const dataDetails = [
    `${movie.release_date.split("T")[0]}`,
    `${movie.overview}`,
    `${movie.genre_ids}`,
    `${movie.price}€`,
    `${movie.vote_average}/10 ( reviews : ${movie.vote_count} ) `,
  ];

  return (
    <section className="movie-detail-container">
      {movie.title === "Movie not found" ? (
        <p>This movie doesn't exist</p>
      ) : (
        <>
          <img
            className="movie-detail-card"
            src={movie.poster_path}
            alt="poster du film"
          />

          <div className="movie-detail-info">
            <h1 className="movie-detail-subcard">{movie.title}</h1>

            {dataDetails.map((detail) => (
              <Details detail={detail} key={detail} />
            ))}
            <div className="movie-detail-button">
              <ButtonCart movie={movie} />
              <AddFavory
                movie={movie}
                classButtonFavory="favory-button-detail-movie"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default MovieDetailCard;
