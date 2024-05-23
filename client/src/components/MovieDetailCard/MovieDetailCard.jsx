import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";

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

  return (
    <div className="MovieDetail-container">
      <div className="MovieDetail-card">
        <img src={movie.poster_path} alt="poster du film" />
      </div>
      <div className="MovieDetail-info">
        <div className="MovieDetail-subcard">
          <h1>{movie.title}</h1>
        </div>
        <div className="MovieDetail-subcard">
          <p>
            <strong>Release Date :</strong> {movie.release_date}
          </p>
        </div>
        <div className="MovieDetail-subcard">
          <p>
            <strong>Synopsis :</strong> {movie.overview}
          </p>
        </div>
        <div className="MovieDetail-subcard">
          <p>
            <strong>Genre :</strong> {movie.genre_ids}
          </p>
        </div>
        <div className="MovieDetail-subcard">
          <p>
            <strong>Price :</strong> {movie.price}€
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailCard;
