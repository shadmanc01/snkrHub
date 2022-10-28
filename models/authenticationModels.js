const pool = require("../db.js")

const registerInfo = ( username, password) => {
    console.log(username, password)
    return pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *",[username,password]).then(result=> {return result.rows[0]})

}

module.exports = {
    registerInfo 
}


