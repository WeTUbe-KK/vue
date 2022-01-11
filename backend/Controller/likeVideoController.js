const likeVideo = require("../Model/likeVideo");
const { isAuth } = require("../Util/isAuth");
const videoController = require("./videoController");

exports.like = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  likeVideo
    .findOne({ where: { user_id, video_id: req.params.id } })
    .then(async (data) => {
      if (!data) {
        const likeData = {
          user_id,
          video_id: req.params.id,
          status_like: true,
        };
        dataFromDB = await likeVideo.create(likeData);
      } else {
        dataFromDB = await likeVideo.update(
          { status_like: true },
          {
            where: { user_id, video_id: req.params.id },
          }
        );
      }
      const video = await videoController.findOne(req.params.id);
      res.status(200).json(video);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.dislike = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  likeVideo
    .findOne({ where: { user_id, video_id: req.params.id } })
    .then(async (data) => {
      if (!data) {
        const likeData = {
          user_id,
          video_id: req.params.id,
          status_like: false,
        };
        dataFromDB = await likeVideo.create(likeData);
      } else {
        dataFromDB = await likeVideo.update(
          { status_like: false },
          {
            where: { user_id, video_id: req.params.id },
          }
        );
      }
      const video = await videoController.findOne(req.params.id);
      res.status(200).json(video);
    })
    .catch((err) => {
      console.log(err);
    });
};