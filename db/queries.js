import knex from "./knex";

export const getAll = async () => await knex("movies");

export const getOne = async (id) =>
  await knex("movies").where("id", id).first();

export const create = async (movie) => await knex("movies").insert(movie, "*");

export const update = async (id, movie) =>
  await knex("movies").where("id", id).update(movie, "*");

export const deleteOne = async (id) =>
  await knex("movies").where("id", id).del();
