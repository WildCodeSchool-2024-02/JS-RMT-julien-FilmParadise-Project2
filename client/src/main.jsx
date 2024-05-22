import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import MovieDetail from "./pages/MovieDetail";
import AllMovies from "./pages/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: <AllMovies />,
    loader: () =>
      axios.get("http://localhost:3310/api/movies").then((res) => res.data),
  },
  {
    path: "/movies/:title",
    element: <MovieDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
