const Hapi = require("@hapi/hapi");
const { configureRoutes } = require("./routes");
const server = Hapi.Server({
  host: "localhost",
  port: 4000
});

const main = async () => {
  await configureRoutes(server);
  await server.start();

  return server;
};

main()
  .then(server => {
    console.log("Server running at:", server.info.uri);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
