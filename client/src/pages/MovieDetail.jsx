import { useLoaderData } from "react-router-dom";

import Header from "../components/header/Header";
import MovieDetailCard from "../components/MovieDetailCard/MovieDetailCard";

function MovieDetail() {
  const movie = useLoaderData();

  return (
    <>
      <Header />
      <MovieDetailCard movie={movie} />;
    </>
  );
}

export default MovieDetail;
