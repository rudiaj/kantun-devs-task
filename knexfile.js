const { loadEnvConfig } = require("@next/env");

const dev = process.env.NODE_ENV !== "production";
const { PG_URI } = loadEnvConfig("./", dev).combinedEnv;

module.exports = {
  development: {
    client: "pg",
    connection: PG_URI,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
