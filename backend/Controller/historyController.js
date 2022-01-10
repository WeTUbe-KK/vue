const history = require("../Model/history");
const { isAuth } = require("../Util/isAuth");

exports.add = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const historyData = {
    user_id,
    video_id: req.params.video_id,
  };
  history
    .create(historyData)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.remove = (req, res) => {
  isAuth((context = { req }));
  history
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(async (data) => {
      const { id } = data.dataValues;
      await history.destroy({ where: { id } });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
