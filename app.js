const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const Router = require("./routes/weather");

//middleware
app.use(express.static("public"));

//use view engine
app.set("view engine", "ejs");

///middleware route
app.use("/", Router);

app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
