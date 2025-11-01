const connection = require("../config/database");
const getHomePage = (req, res) => {
  res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  let { email, name, city } = req.body;
  connection.query("INSERT INTO Users (email, name, city) VALUES (?, ?, ?)", [
    email,
    name,
    city,
  ]);
  res.send("User created successfully.");
};

module.exports = {
  getHomePage,
  postCreateUser,
};
