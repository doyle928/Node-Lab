var pg = require("pg");
var pool = new pg.Pool({
  user: "postgres",
  password: "s0ccer01",
  host: "localhost",
  port: 5432,
  database: "todoDB",
  ssl: false
});

module.exports = pool;
