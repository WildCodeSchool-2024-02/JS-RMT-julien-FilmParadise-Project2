import { useEffect, useState, useMemo } from "react";

import CartDetails from "../components/CartDetails/CartDetails";
import Header from "../components/header/Header";

function Cart() {
  const movieTest = useMemo(
    () => [
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
      {
        adult: false,
        backdrop_path:
          "https://image.tmdb.org/t/p/w500/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
        genre_ids: "Drama",
        id: 852046,
        original_language: "fr",
        original_title: "Athena",
        overview:
          "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
        popularity: 4089.775,
        poster_path:
          "https://image.tmdb.org/t/p/w500/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
        release_date: "2022-09-09",
        title: "Athena",
        video: false,
        vote_average: 6.6,
        vote_count: 223,
        price: 7,
        year: "2022",
      },
      {
        adult: false,
        backdrop_path:
          "https://image.tmdb.org/t/p/w500/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
        genre_ids: "Thriller",
        id: 916605,
        original_language: "en",
        original_title: "The Infernal Machine",
        overview:
          "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
        popularity: 4145.222,
        poster_path:
          "https://image.tmdb.org/t/p/w500/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
        release_date: "2022-09-23",
        title: "The Infernal Machine",
        video: false,
        vote_average: 6.8,
        vote_count: 57,
        price: 11,
        year: "2022",
      },
    ],
    []
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = movieTest.reduce((acc, movie) => acc + movie.price, 0);
    setTotalPrice(sum);
  }, [movieTest]);
  return (
    <>
      <Header />
      <h2 className="title-cart">Your cart :</h2>
      {movieTest.map((movie) => (
        <CartDetails movie={movie} key={movie.title} />
      ))}
      <h2 className="total-price">Total : {totalPrice} €</h2>
    </>
  );
}

export default Cart;
