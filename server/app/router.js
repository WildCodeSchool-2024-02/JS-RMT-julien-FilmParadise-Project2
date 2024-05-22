const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations

// Route to get a list of items
router.get("/movies", (req, res) => {
  res.send("hello world");
});

// Route to get a specific item by ID

/* ************************************************************************* */

module.exports = router;
