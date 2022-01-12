const playList = require("../Model/playList");
const Video = require("../Model/video");
const { isAuth } = require("../Util/isAuth");

exports.add = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const playListData = {
    user_id,
    video_id: req.params.id,
  };
  playList
    .create(playListData)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.remove = (req, res) => {
  isAuth((context = { req }));
  playList
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(async (data) => {
      const { id } = data.dataValues;
      await playList.destroy({ where: { id } });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

exports.index = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  return playList.findAll({ where: { user_id }, include: [{ model: Video, as: "Video" }] })
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