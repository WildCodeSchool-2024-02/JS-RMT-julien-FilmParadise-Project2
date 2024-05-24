const express = require("express");

const router = express.Router();

const movies = require("../database/data");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/movies", (req, res) => {
  res.send("hello world");
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
