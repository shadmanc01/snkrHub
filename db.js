const {Pool} = require('pg')
const pool = new Pool({
  database: 'sneakerHub3',
  user: "postgres",
  password: "",
})


module.exports = pool;