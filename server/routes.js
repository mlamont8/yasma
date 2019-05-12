const { Post, Comment, User } = require("./models");
const Joi = require("@hapi/joi");

exports.configureRoutes = server => {
  return server.route([
    //   Posts
    {
      method: "GET",
      path: "/posts",
      handler: () => {}
    },
    {
      method: "POST",
      path: "/posts",
      handler: () => {}
    },
    {
      method: "PUT",
      path: "/posts",
      handler: () => {}
    },
    {
      method: "DELETE",
      path: "/posts",
      handler: () => {}
    },

    // Comments
    {
      method: "GET",
      path: "/comments",
      handler: () => {}
    },
    {
      method: "POST",
      path: "/comments",
      handler: () => {}
    },
    {
      method: "PUT",
      path: "/comments",
      handler: () => {}
    },
    {
      method: "DELETE",
      path: "/comments",
      handler: () => {}
    },

    // Users
    {
      method: "GET",
      path: "/users",
      handler: () => {
        return User.findAll();
      }
    },
    {
      method: "POST",
      path: "/users",
      handler: request => {
        const user = User.create(request.payload.user);
        return user;
      }
      //   config: {
      //     validate: {
      //       payload: {
      //         user: {
      //           username: Joi.string()
      //             .min(3)
      //             .max(10)
      //             .required(),
      //           password: Joi.string()
      //             .min(7)
      //             .required(),
      //           email: Joi.string().required()
      //         }
      //       }
      //     }
      //   }
    },
    {
      method: "PUT",
      path: "/users",
      handler: () => {}
    },
    {
      method: "DELETE",
      path: "/users",
      handler: () => {}
    }
  ]);
};
