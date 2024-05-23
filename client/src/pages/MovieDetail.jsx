import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetail() {
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
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
