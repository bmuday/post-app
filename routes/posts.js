const router = require("express").Router();
const Post = require("../models/Post");

// ROUTES
router.get("/", (req, res) => {
  Post.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
});

router.post("/save", (req, res) => {
  //console.log(`Body: ${req.body}`);
  const data = req.body;
  const newPost = new Post(data);

  newPost.save((err) => {
    if (err) {
      res.status(500).json({
        msg: "Sorry, your data has not been saved due to an internal server error.",
      });
      return;
    }
    return res.json({
      msg: "We received your data!",
    }); // by default, .status(200) = success
  });
});

module.exports = router;
