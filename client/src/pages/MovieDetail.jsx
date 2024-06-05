import { useLoaderData } from "react-router-dom";

import Header from "../components/header/Header";
import MovieDetailCard from "../components/MovieDetailCard/MovieDetailCard";
import Footer from "../components/Footer/Footer";

function MovieDetail() {
  const movie = useLoaderData();

  return (
    <div className="container">
      <Header />
      <MovieDetailCard movie={movie} />;
      <Footer />
    </div>
  );
}

export default MovieDetail;
