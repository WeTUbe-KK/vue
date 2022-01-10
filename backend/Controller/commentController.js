const Comment = require("../Model/comment");
const { isAuth } = require("../Util/isAuth");

exports.register = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  console.log(req.body);
  const commentData = {
    user_id,
    video_id: req.params.id,
    description: req.body.description,
  };

  Comment.create(commentData)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
};
