const history = require("../Model/history");
const { isAuth } = require("../Util/isAuth");

exports.add = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  const historyData = {
    user_id,
    video_id: req.params.id,
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

exports.index = (req, res) => {
  const { user_id } = isAuth((context = { req }));
  return history.findAll({ where: { user_id }, include: [{ model: Video, as: "Video" }] })
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