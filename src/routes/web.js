const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
} = require("../controllers/homeController");

// Define route for home page
router.get("/", getHomePage);

// define the about route
router.post("/create-user", postCreateUser);

module.exports = router;
