const getHomePage = (req, res) => {
  res.render("home.ejs");
};
const getAboutPage = (req, res) => {
  res.send("This is the about page.");
};

module.exports = {
  getHomePage,
  getAboutPage,
};
