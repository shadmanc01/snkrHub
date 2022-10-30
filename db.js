const {Pool} = require('pg')


const pool = new Pool({
  database: 'sneakerhub',
  user: "crislp",
  password: "kyloren1234",
})

module.exports = pool;