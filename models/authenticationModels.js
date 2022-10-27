const {pool} = require("../db.js")


const registerInfo = ( username, password) => {
    return pool.query("INSERT INTO user(username, password) VALUES($1, $2) RETURNING *",[username,password]).then(result => { result})
}


module.exports = {
    registerInfo 
}