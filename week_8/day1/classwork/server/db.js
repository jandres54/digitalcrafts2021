const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Aequelina66",
  host: "localhost",
  port: 5432,
  database: "groceries",
});

module.exports = pool;