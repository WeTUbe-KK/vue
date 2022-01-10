const Video = require("../Model/video");
const { isAuth } = require("../Util/isAuth");
const cloudinary = require("cloudinary").v2;
const likeComment = require("../Model/likeComment");

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
      cloudinary.api.delete_resources(
        temp,
        { resource_type: "video" },
        (error, result) => {
          res.status(200).json({ success: true, error, data: path });
        }
      );
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
      const video = await Video.findOne({ id: req.params.id });
      console.log(video.dataValues);
      res.status(200).json({ data: video.dataValues });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
