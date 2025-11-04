const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  console.log(">>> check results: ", results);
  res.render("home.ejs", { dataUsers: results });
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  console.log(">>> check user: ", user);
  res.render("edit.ejs", { userInfo: user });
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
  getUpdatePage,
};
