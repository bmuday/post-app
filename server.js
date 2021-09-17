// Import npm packages
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./db");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

// Middlewares

// Data parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP Request Logger
app.use(logger("combined"));

// Routes middlewares
const postRoutes = require("./routes/post");
app.use("/posts", postRoutes);

// For deployment

// process.env.PORT
// process.env.NODE_ENV => production or undefined
if (process.env.NODE_ENV === "production") {
  // serve static content
  // npm run build
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
