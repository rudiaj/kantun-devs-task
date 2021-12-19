exports.up = (knex) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id");
    table.string("name").notNullable().unique();
    table.string("genre").notNullable();
    table.integer("rating").notNullable();
    table.boolean("explicit").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("movies");
};
