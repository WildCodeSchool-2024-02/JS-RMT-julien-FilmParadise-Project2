import "./movie-card.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <a href="http://localhost:3000/movies/:title">
        <img src={movie.poster_path} alt={movie.original_title} />
      </a>
    </div>
  );
}

export default MovieCard;
