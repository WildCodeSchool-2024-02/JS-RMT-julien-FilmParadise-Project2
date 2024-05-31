import MovieCard from "../MovieCard/MovieCard";

import "./CartDetails.css";

function CartDetails() {
  const movieTest = [
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
      genre_ids: "Thriller",
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      popularity: 5456.118,
      poster_path:
        "https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 1300,
      price: 11,
      year: "2022",
    },
  ];
  return (
    <article className="cart-details">
      <MovieCard className="card-cart" movie={movieTest[0]} />
      <div className="cart-information">
        <h3>{movieTest[0].title}</h3>
        <h3>{movieTest[0].price} €</h3>
      </div>
    </article>
  );
}

export default CartDetails;
