const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send({
    message: "Bem-vindo",
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
