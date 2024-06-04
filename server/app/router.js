const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const client = require("../database/client");
// Route to get a list of items
router.get("/movies", (req, res) => {
  if (req.query.title) {
    client
      .query("SELECT * FROM movie WHERE title LIKE ?", [`%${req.query.title}%`])
      .then((movies) => {
        res.status(200).json(movies[0]);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "An error occurred while searching for movies", error });
    });
  } else {
    client
      .query("SELECT * FROM movie")
      .then((movie) => res.status(200).json(movie[0]));
  }
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


module.exports = router;
