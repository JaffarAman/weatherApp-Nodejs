const express = require("express");
const Router = express();

Router.get("/", (req, res) => {
  res.render("index", { name: "Jafar" });
});

module.exports = Router;
