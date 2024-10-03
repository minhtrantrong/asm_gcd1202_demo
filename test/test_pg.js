const { Pool, Client } = require('pg')
 
const pool = new Pool({
  user: 'postgres',
  password: '123qwe',
  host: '127.0.0.1',
  port: 5432,
  database: 'postgres',
})

async function view_table() {
    result = await pool.query('SELECT * FROM users');
    console.log(result);
}

view_table();