import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";
import Details from "./Details";

function MovieDetailCard() {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/movies/${title}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the movie details!", error);
      });
  }, [title]);

  if (!movie) {
    return <div>Loading...</div>;
  }

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
