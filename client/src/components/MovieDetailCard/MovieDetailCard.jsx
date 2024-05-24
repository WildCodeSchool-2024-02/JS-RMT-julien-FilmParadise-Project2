import { useLoaderData } from "react-router-dom";
import "./MovieDetail.css";
import Details from "./Details";

function MovieDetailCard() {
  const movie = useLoaderData();

  const dataDetails = [
    `Release Date : ${movie.release_date}`,
    `Synopsis : ${movie.overview}`,
    `Genre : ${movie.genre_ids}`,
    `Price : ${movie.price}€`,
  ];

  return (
    <section className="MovieDetail-container">
      <img
        className="MovieDetail-card"
        src={movie.poster_path}
        alt="poster du film"
      />

      <div className="MovieDetail-info">
        <h1 className="MovieDetail-subcard">{movie.title}</h1>

        {dataDetails.map((detail) => (
          <Details detail={detail} key={detail} />
        ))}
      </div>
    </section>
  );
}

export default MovieDetailCard;
