const express = require("express");
const router = express.Router();
const commentController = require("../Controller/commentController");
const likeCommentController = require("../Controller/likeCommentController");

router.post("/:id", commentController.register);
router.put("/like/:id", likeCommentController.like);
router.put("/dislike/:id", likeCommentController.dislike);

module.exports = router;
