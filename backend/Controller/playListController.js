const playList = require("../Model/playList");
const { isAuth } = require("../Util/isAuth");

exports.add = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const playListData = {
    user_id,
    video_id: req.params.video_id,
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