/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "kanjify",
      user:   "mutokurumi",
      password: "kanjifydb"
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  }
};
