const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");

// Define route for home page
router.get("/", getHomePage);
// Define route for create page
router.get("/create", getCreatePage);
// Define route for Update User page
router.get("/update", getUpdatePage);

// define the about route
router.post("/create-user", postCreateUser);

module.exports = router;
