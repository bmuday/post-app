const mongoose = require("mongoose");

// Schema
const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = mongoose.model("Post", postSchema);
