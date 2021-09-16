const router = require("express").Router();
const { getPosts, newPost } = require("../controllers/post");

// ROUTES
router.get("/", getPosts);

router.post("/save", newPost);

module.exports = router;
