const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config/db");
const routes = require("./routes/router.index");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//if you are using local mongoDB use below code line
//mongoose.connect(`mongodb://${config.db.host}:${config.db.port}${config.db.dbName}`, { useNewUrlParser: true });
//if you are using cloud mongoDB use below code line
mongoose.connect(
  `mongodb+srv://${config.credentials.userName}:${config.credentials.password}@unifoods-qg6ef.mongodb.net/UniFoods?retryWrites=true&w=majority`
);
mongoose.Promise = global.Promise;
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/health", (req, res) => {
  res.status(200).send("server is healthy!");
});

app.use("/api/v1", routes);

const port = process.env.PORT || config.serverPort;
app.listen(port, () => console.log("Listening on port " + port));
