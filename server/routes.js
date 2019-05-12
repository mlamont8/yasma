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
      handler: async (request, h) => {
        try {
          const user = await User.create(request.payload);
          return user;
        } catch {
          return h.response(error).code(500);
        }
      },
      options: {
        validate: {
          payload: {
            username: Joi.string()
              .min(3)
              .required(),

            password: Joi.string()
              .min(3)
              .required(),

            email: Joi.string()
              .email({ minDomainSegments: 2 })
              .required(),
            rating: Joi.number()
          },
          failAction: (request, h, error) => {
            return error.isJoi
              ? h.response(error.details[0]).takeover()
              : h.response(error).takeover();
          }
        }
      }
    },
    {
      method: ["PUT", "PATCH"],
      path: "/users/{id}",
      handler: async request => {
        const user = await User.findByPk(request.params.id);
        user.update(request.payload);

        return user.save();
      }
    },
    {
      method: "DELETE",
      path: "/users/{id}",
      handler: async request => {
        const user = await User.findByPk(request.params.id);
        return user.destroy();
      }
    }
  ]);
};
