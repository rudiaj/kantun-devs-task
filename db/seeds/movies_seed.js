exports.seed = (knex) => {
  return knex("movies")
    .del()
    .then(() => {
      return knex("movies").insert({
        name: "The Land Before Time",
        genre: "Action",
        rating: 1,
        explicit: false,
      });
    })
    .then(() => {
      return knex("movies").insert({
        name: "Jurassic Park",
        genre: "Drama",
        rating: 2,
        explicit: true,
      });
    })
    .then(() => {
      return knex("movies").insert({
        name: "Ice Age: Dawn of the Dinosaurs",
        genre: "Thriller",
        rating: 3,
        explicit: false,
      });
    });
};
