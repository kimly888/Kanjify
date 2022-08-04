/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("users", function (table) {
    table.increments("id").primary(); 
    table.string("kanji", 64).notNullable();
    table.string("furigana", 64).notNullable();
    table.string("romaji", 64).notNullable(); 
    // TODO: add `definition` column 
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users");
};
