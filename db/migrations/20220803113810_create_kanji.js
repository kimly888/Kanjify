/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("kanji", function (table) {
    table.increments("id").primary(); 
    table.string("kanji", 20);
    table.string("furigana", 20);
    table.string("romaji", 20);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTableIfExists("kanji");
};
