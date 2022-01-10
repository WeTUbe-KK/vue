const Sequelize = require("sequelize");
const db = require("../Database/db");
const Comment = require("./comment");
const History = require("./history");
const watchLater = require("./watchLater");
const playList = require("./playList");
const likeComment = require("./likeComment");
const likeVideo = require("./likeVideo");

const Video = db.sequelize.define("video", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  path: {
    type: Sequelize.STRING,
  },
  view: {
    type: Sequelize.INTEGER,
  },
});

// Comment
Video.hasMany(Comment, { as: "Comment", foreignKey: "video_id" });
Comment.belongsTo(Video, { as: "Video", foreignKey: "video_id" });

// History
Video.hasMany(History, { as: "History", foreignKey: "video_id" });
History.belongsTo(Video, { as: "Video", foreignKey: "video_id" });

// Playlist
Video.hasMany(playList, { as: "playList", foreignKey: "video_id" });
playList.belongsTo(Video, { as: "Video", foreignKey: "video_id" });

// Watch Later
Video.hasMany(watchLater, { as: "watchLater", foreignKey: "video_id" });
watchLater.belongsTo(Video, { as: "Video", foreignKey: "video_id" });

// Like Comment
Video.hasOne(likeComment, { as: "likeComment", foreignKey: "video_id" });
likeComment.belongsTo(Video, { as: "Video", foreignKey: "video_id" });

// Like Video
Video.hasOne(likeVideo, { as: "likeVideo", foreignKey: "video_id" });
likeVideo.belongsTo(Video, { as: "Video", foreignKey: "video_id" });

module.exports = Video;
