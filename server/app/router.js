const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const movies = require("../database/data");
const client = require("../database/client");
// Route to get a list of items
router.get("/movies", (req, res) => {
  client
    .query("SELECT * FROM movie")
    .then((movie) => res.status(200).json(movie[0]));
});

router.get("/movies/:title", (req, res) => {
  const wantedTitle = req.params.title;
  const movie = movies.find((element) => element.title === wantedTitle);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(200).json({ title: "Movie not found" });
  }
});

// Route to get a specific item by ID

/* ************************************************************************* */

module.exports = router;
