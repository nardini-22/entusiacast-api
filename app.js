const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const EpisodesRoutes = require("./src/routes/index");

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Accept, Authorization, Content-Type"
  );
  ("");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
    return res.status(200).send({});
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send({
    message: "Bem-vindo",
  });
});

app.use("/v1", EpisodesRoutes);

app.use((req, res, next) => {
  const erro = new Error("Rota não encontrada!");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      message: error.message,
    },
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
