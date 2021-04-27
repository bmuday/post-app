const mongoose = require("mongoose");

// Schema
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  date_created: {
    type: String,
    default: Date.now(),
  },
});

// Model
module.exports = mongoose.model("Post", postSchema);
