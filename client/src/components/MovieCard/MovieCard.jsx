import "./movie-card.css";

function MovieCard({ movie }) {
  return (
    <article>
      <a href="http://localhost:3000/movies/:title">
        <img src={movie.poster_path} alt={movie.original_title} />
      </a>
    </article>
  );
}

export default MovieCard;
