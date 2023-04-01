const { Pool } = require("pg");
// const { db } = require("./config");

const pool = new Pool({
  user: 'postgres',
  password: 'trabajandoando',
  host: 'localhost',
  port: 5432,
  database: 'user',
});

module.exports = pool;