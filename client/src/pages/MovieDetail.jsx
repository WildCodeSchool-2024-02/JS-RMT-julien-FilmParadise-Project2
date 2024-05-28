import { useLoaderData } from "react-router-dom";

import MovieDetailCard from "../components/MovieDetailCard/MovieDetailCard";

function MovieDetail() {
  const movie = useLoaderData();
  return <MovieDetailCard movie={movie} />;
}

export default MovieDetail;
