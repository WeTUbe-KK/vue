const Sequelize = require("sequelize");
const db = require("../Database/db");
const likeComment = require("./likeComment");

const Comment = db.sequelize.define("comment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  video_id: {
    type: Sequelize.INTEGER,
  },
});

// Like Comment
Comment.hasMany(likeComment, { as: "likeComment", foreignKey: "comment_id" });
likeComment.belongsTo(Comment, { as: "Comment", foreignKey: "comment_id" });

module.exports = Comment;
