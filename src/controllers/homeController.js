const getHomePage = (req, res) => {
  res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>>> check res body", req.body);
  // Logic to create a new user
  res.send("User created successfully.");
};

module.exports = {
  getHomePage,
  postCreateUser,
};
