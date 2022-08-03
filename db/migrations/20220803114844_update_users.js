/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .alterTable("users", (table) => {
    table.integer("kanji_id").unsigned();
    table.foreign("kanji_id").references("kanji.id");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .alterTable("users", (table) => {
    table.dropColumn('kanji_id')
  });
};
