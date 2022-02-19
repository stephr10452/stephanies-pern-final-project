// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const candles = require("./controllers/candleControllers");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Candle Shop!");
});

const candleControllers = require("./controllers/candleControllers")

app.use("/candles",candleControllers);

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
// EXPORT
module.exports = app;
