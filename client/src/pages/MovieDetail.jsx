import { useLoaderData } from "react-router-dom";

import Header from "../components/header/Header";
import MovieDetailCard from "../components/MovieDetailCard/MovieDetailCard";
import Footer from "../components/Footer/Footer";

function MovieDetail() {
  const movie = useLoaderData();

  return (
    <>
      <Header />
      <MovieDetailCard movie={movie} />;
      <Footer />
    </>
  );
}

export default MovieDetail;
