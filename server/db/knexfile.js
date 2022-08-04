require("dotenv").config({
  path: "./.env.local",
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "kanjify",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf8'
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    }
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  }
};