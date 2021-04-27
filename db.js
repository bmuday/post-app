const mongoose = require("mongoose");

// DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/post-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});
