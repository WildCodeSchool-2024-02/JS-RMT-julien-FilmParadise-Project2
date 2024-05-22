const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const movies = require("../database/data");

// Route to get a list of items
router.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// Route to get a specific item by ID
router.get("/movies/:id", (req, res) => {
  const wantedId = parseInt(req.params.id, 10);
  const movie = movies.find((element) => element.id === wantedId);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

// Route to add a new item
// router.post("/items", movies.add);

/* ************************************************************************* */

module.exports = router;
