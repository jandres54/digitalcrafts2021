const POOL = require("pg").POOL;
const pool = new Pool({
    user: "postgres",
    password: "Aequelina66",
    host: "localhost",
    port: 5432,
    database: "todolist",
  });  
module.express = pool;