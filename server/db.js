const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  database: 'todo',
});

module.exports = pool;
