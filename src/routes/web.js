const express = require("express");
const router = express.Router();
const { getHomePage, getAboutPage } = require("../controllers/homeController");

// Define route for home page
router.get("/", getHomePage);

// define the about route
router.get("/about", getAboutPage);

module.exports = router;
