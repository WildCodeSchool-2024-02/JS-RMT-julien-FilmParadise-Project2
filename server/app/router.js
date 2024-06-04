const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const client = require("../database/client");
// Route to get a list of items
router.get("/movies", (req, res) => {
  client
    .query("SELECT * FROM movie")
    .then((movie) => res.status(200).json(movie[0]));
});

router.get("/movies/:title", (req, res) => {
  const wantedTitle = req.params.title;
  client
    .query("SELECT * FROM movie WHERE title = ?", [wantedTitle])
    .then((movie) => {
      if (movie[0].length > 0) {
        res.status(200).json(movie[0][0]);
      } else {
        res.status(404).json({ title: "Movie not found" });
      }
    })
    .catch((error) => console.error(error));
});

// Route to search for movies by title

router.get("/search", (req, res) => {
  const searchQuery = req.query.title;
  if (!searchQuery) {
    return res.status(400).json({ message: "Title query parameter is required" });
  }

  return client
    .query("SELECT * FROM movie WHERE title LIKE ?", [`%${searchQuery}%`])
    .then((movies) => {
       if (movies[0].length > 0) {
        res.status(200).json(movies[0]);
       } else {
         res.status(404).json({ message: "No movies found matching the search criteria" });
       }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "An error occurred while searching for movies", error });
    });
});

module.exports = router;
