const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const movies = require("../database/data");
// Route to get a list of items
router.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// Route to get a specific item by ID

/* ************************************************************************* */

module.exports = router;
