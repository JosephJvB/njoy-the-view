module.exports = {

  development: {
    client: 'pg',
    connection: {
      // host: '127.0.0.1', not sure if this is accurate..
      port: '5432', // this from \conninfo
      user: 'postgres',
      password: 'postgres',
      database: 'vue_dev'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
