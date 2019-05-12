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
      handler: () => {}
    },
    {
      method: "POST",
      path: "/users",
      handler: () => {}
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
