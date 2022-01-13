const Video = require("../Model/video");
const { isAuth } = require("../Util/isAuth");
const cloudinary = require("cloudinary").v2;
const likeComment = require("../Model/likeComment");
const Comment = require("../Model/comment");
const likeVideo = require("../Model/likeVideo");
const User = require("../Model/User");

exports.upload = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const file = req.file;
  if (!file) {
    res.status(400).json({ error: "File kosong" });
  }
  const videoData = {
    user_id,
    name: req.body.name,
    description: req.body.description,
    path: file.path,
  };
  Video.create(videoData)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.remove = (req, res) => {
  isAuth((context = { req }));
  Video.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(async (data) => {
      const { path, id } = data.dataValues;
      await Video.destroy({ where: { id } });
      const split = path.split("/");
      const temp = "Asset/" + split[split.length - 1].split(".")[0];
      cloudinary.api.delete_resources(temp, { resource_type: "video" }, (error, result) => {
        res.status(200).json({ success: true, error, data: path });
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

exports.findOne = (id) => {
  return Video.findOne({
    where: { id },
    include: [{ model: likeComment, as: "likeComment" }],
  })
    .then(async (data) => {
      const { likeComment, ...video } = data.dataValues;
      return { likeComment: likeComment.dataValues, video: video };
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.view = (req, res) => {
  isAuth((context = { req }));
  Video.increment({ view: +1 }, { where: { id: req.params.id } })
    .then(async () => {
      const video = await Video.findOne({ where: { id: req.params.id } });
      res.status(200).json({ data: video.dataValues });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

exports.index = (req, res) => {
  return Video.findAll({ include: [{ model: User, as: "User" }] })
    .then((data) => {
      const result = data.reduce((acc, curr) => {
        acc.push(curr.dataValues);
        return acc;
      }, []);
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  return Video.findOne({
    where: { id },
    include: [
      {
        model: Comment,
        as: "Comment",
        include: [{ model: likeComment, as: "likeComment" }],
      },
      { model: likeVideo, as: "likeVideo" },
    ],
  })
    .then(async (data) => {
      const { likeVideo, Comment, ...videoData } = data.dataValues;
      const result = Comment.reduce((acc, curr) => {
        const likeComment = curr.dataValues.likeComment.reduce((acc1, curr1) => {
          let countLike = 0;
          let countDislike = 0;
          if (curr1.dataValues.status_like) {
            countLike = countLike + 1;
          } else {
            countDislike = countDislike + 1;
          }
          return { countLike, countDislike };
        }, []);
        curr.dataValues.likeComment = likeComment.countLike;
        curr.dataValues.dislikeComment = likeComment.countDislike;
        acc.push(curr.dataValues);
        return acc;
      }, []);
      const likeVideoCount = likeVideo.reduce((acc, curr) => {
        let countLike = 0;
        let countDislike = 0;
        if (curr.dataValues.status_like) {
          countLike = countLike + 1;
        } else {
          countDislike = countDislike + 1;
        }
        return { countLike, countDislike };
      }, []);
      videoData.comment = result;
      videoData.likeVideo = likeVideoCount.countLike;
      videoData.dislikeVideo = likeVideoCount.countDislike;
      res.status(200).json({ data: videoData });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
