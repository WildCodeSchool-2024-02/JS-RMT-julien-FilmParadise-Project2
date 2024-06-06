import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/MovieContext";

import App from "./App";
import MovieDetail from "./pages/MovieDetail";
import AllMovies from "./pages/AllMovies";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: <AllMovies />
  },

  {
    path: "/movies/:title",
    element: <MovieDetail />,
    loader: async ({ params }) => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/movies/${params.title}`
      );

      return response.data;
    },
  },

  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
