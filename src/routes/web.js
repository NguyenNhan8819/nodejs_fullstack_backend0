const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

// Define route for home page
router.get("/", getHomePage);
// Define route for create page
router.get("/create", getCreatePage);

// define the about route
router.post("/create-user", postCreateUser);

module.exports = router;
