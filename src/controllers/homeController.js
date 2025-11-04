const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  res.render("home.ejs", { dataUsers: results });
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
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

const postUpdateUser = async (req, res) => {
  let { userID, email, name, city } = req.body;
  await updateUserById(userID, email, name, city);
  res.redirect("/"); // quay về trang chủ sau khi cập nhật thành công
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
