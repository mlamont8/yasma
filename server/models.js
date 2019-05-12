// models.js

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://ybpgeljp:vd8iA9HCQYrl1xqCQIodjAji0uKdqVhK@isilo.db.elephantsql.com:5432/ybpgeljp"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Successful Connection to database.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  rating: Sequelize.INTEGER
});

const Post = sequelize.define("post", {
  Poster: Sequelize.STRING,
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  rating: Sequelize.INTEGER
});

const Comment = sequelize.define("comment", {
  Commenter: Sequelize.STRING,
  body: Sequelize.TEXT,
  rating: Sequelize.INTEGER
});

User.sync();
Post.sync();
Comment.sync();

module.exports = {
  User,
  Post,
  Comment
};
