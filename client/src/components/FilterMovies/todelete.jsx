// import React, { useState, useEffect } from "react";
// import Header from "./components/Header/Header";
// import AllMovies from "./pages/AllMovies";
// import Cart from "./pages/Cart";
// import FilterMovies from "../..components/FilterMovies";
// import { CartProvider } from "../../context/MovieContext";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/api/movies")
//       .then((response) => response.json())
//       .then((data) => setMovies(data))
//       .catch((error) => console.error("Error fetching movies:", error));
//   }, []);

//   const handleGenreChange = (event) => {
//     setSelectedGenre(event.target.value);
//   };

//   const filteredMovies = selectedGenre
//     ? movies.filter((movie) => movie.genre === selectedGenre)
//     : movies;

//   return (
//     <CartProvider>
//       <>
//         <Header />
//         <div className="App">
//           <h1>Movie List</h1>
//           <FilterMovies
//             selectedGenre={selectedGenre}
//             handleGenreChange={handleGenreChange}
//           />
//           <AllMovies movies={filteredMovies} />
//           <Cart />
//         </div>
//       </>
//     </CartProvider>
//   );
// }

// export default App;
