// Import npm packages
const express = require("express");
const db = require("./db");
const logger = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require("./routes/api");

// Middlewares
// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP Request Logger
app.use(logger("combined"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes middlewares
app.use("/api", routes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
