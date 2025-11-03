const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  console.log(">>> check results: ", results);
  res.render("home.ejs", { dataUsers: results });
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  const [results, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );
  res.send("User created successfully.");
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
};
