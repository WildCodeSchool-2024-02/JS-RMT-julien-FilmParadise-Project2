const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const movies = require("../database/data");
const client = require("../database/client");

// Route to get a list of items
router.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

router.get("/movies/:title", (req, res) => {
  const wantedTitle = req.params.title;
  client
    .query("SELECT * FROM movie WHERE title = ?", [wantedTitle])
    .then((movie) => {
      res.status(200).json(movie[0][0]);
    })
    .catch((error) => console.error(error));
});

// Route to get a specific item by ID

/* ************************************************************************* */

module.exports = router;
