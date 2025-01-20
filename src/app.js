const express = require("express");
const app = express();
const path = require("path");
const indexRoutes = require("./routes/index.routes");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", indexRoutes);

module.exports = app;
