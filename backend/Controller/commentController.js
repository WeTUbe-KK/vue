const Comment = require("../Model/comment");
const likeComment = require("../Model/likeComment");
const User = require("../Model/user");
const Reply = require("../Model/reply");
const { isAuth } = require("../Util/isAuth");

exports.register = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const video_id = req.params.id;
  const commentData = {
    user_id,
    video_id,
    description: req.body.description,
  };
  Comment.create(commentData)
    .then((comment) => {
      const replyData = {
        video_id,
        comment_id: comment.dataValues.id,
      };
      Reply.create(replyData)
        .then((reply) => console.log(reply))
        .catch((err) => {
          res.send("error : " + err);
        });
      res.status(200).json(comment);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};

exports.reply = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const video_id = req.params.id;
  const comment_id = req.body.comment_id;
  console.log(req.body);
  const commentData = {
    user_id,
    video_id,
    description: req.body.description,
  };
  Comment.create(commentData)
    .then((comment) => {
      const replyData = {
        video_id,
        comment_id,
        response_id: comment.dataValues.id,
      };
      Reply.create(replyData)
        .then((reply) => console.log(reply))
        .catch((err) => {
          res.send("error : " + err);
        });
      res.status(200).json(comment);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};

exports.getById = (req, res) => {
  const comment_id = req.params.id;
  return Reply.findAll({
    where: { comment_id },
    include: [
      {
        model: Comment,
        as: "Comment",
        include: [
          { model: likeComment, as: "likeComment" },
          { model: User, as: "User" },
        ],
      },
      {
        model: Comment,
        as: "Response",
        include: [
          { model: likeComment, as: "likeComment" },
          { model: User, as: "User" },
        ],
      },
    ],
  })
    .then(async (data) => {
      //const { Comment, Response, ...videoData } = data.dataValues;
      console.log(data);
      //let countLikeComment = 0;
      //let countDislikeComment = 0;
      //const result = Comment.reduce((acc, curr) => {
      //const likeComment = curr.dataValues.likeComment.reduce(
      //(acc1, curr1) => {
      //if (curr1.dataValues.status_like) {
      //countLikeComment = countLikeComment + 1;
      //} else {
      //countDislikeComment = countDislikeComment + 1;
      //}
      //return { countLikeComment, countDislikeComment };
      //},
      //[]
      //);
      //curr.dataValues.likeComment = likeComment.countLikeComment || 0;
      //curr.dataValues.dislikeComment = likeComment.countDislikeComment || 0;
      //acc.push(curr.dataValues);
      //countLikeComment = 0;
      //countDislikeComment = 0;
      //return acc;
      //}, []);
      //videoData.comment = result;
      res.status(200).json({ data: videoData });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};
