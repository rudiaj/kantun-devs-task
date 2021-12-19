import knex from "knex";
import config from "../knexfile.js";

const environment = process.env.NODE_ENV || "development";
const environmentConfig = config[environment];

const connection = knex(environmentConfig);

export default connection;
