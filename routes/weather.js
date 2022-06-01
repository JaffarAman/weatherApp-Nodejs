const express = require("express");
const Router = express();
const fetch = require("node-fetch");

Router.get("/", (req, res) => {
  res.render("index", {
    city: null,
    des: null,
    icon: null,
    temp: null,
  });
});

Router.post("/", async (req, res) => {
  console.log(req.body);
  const city = req.body.city;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric`;
  try {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "city not found") {
          res.render("index", {
            city: data.message,
            des: null,
            icon: null,
            temp: null,
          });
        } else {
          var city = data.name;
          var des = data.weather[0].description;
          var icon = data.weather[0].icon;
          var temp = data.main.temp;
          res.render("index", {
            city,
            des,
            icon,
            temp,
          });
        }
      })
      .catch((err) => console.log(err));
  } catch (error) {
    res.render("index", {
      city: "something get wrong",
      des: null,
      icon: null,
      temp: null,
    });
  }
});

module.exports = Router;
