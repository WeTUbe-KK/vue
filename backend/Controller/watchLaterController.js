const watchLater = require("../Model/watchLater");
const { isAuth } = require("../Util/isAuth");

exports.add = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const watchLaterData = {
    user_id,
    video_id: req.params.id,
  };
  watchLater
    .create(watchLaterData)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.remove = (req, res) => {
  isAuth((context = { req }));
  watchLater
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(async (data) => {
      const { id } = data.dataValues;
      await watchLater.destroy({ where: { id } });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
