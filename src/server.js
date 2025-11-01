require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8001;
const hostName = process.env.HOST_NAME;
const connection = require("./config/database");

// config template engine
configViewEngine(app);

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));

// declare routes
app.use("/", webRoutes);

// A simple SELECT query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
