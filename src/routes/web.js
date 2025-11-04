const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

// Define route for home page
router.get("/", getHomePage);
// Define route for create page
router.get("/create", getCreatePage);
// Define route for Update User page
router.get("/update/:id", getUpdatePage);

// define the create-user route
router.post("/create-user", postCreateUser);

// define the update-user route
router.post("/update-user", postUpdateUser);

module.exports = router;
