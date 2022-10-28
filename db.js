const {Pool} = require('pg')


const pool = new Pool({
  database: 'sneakerHub4',
  user: "postgres",
  password: "",
})

module.exports = pool;