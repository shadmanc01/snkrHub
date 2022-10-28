const {Pool} = require('pg')
const pool = new Pool({
  database: 'sneakerHub3',
  user: "crislp",
  password:"kyloren1234",
})


module.exports = pool;