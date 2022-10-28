const pool = require("../db.js")

const registerInfo = ( username, password) => {
    console.log(username, password)
    return pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *",[username,password]).then(result=> {return result.rows})

}

const getUser = async (username) => {
    const user =  await pool.query('SELECT * FROM user WHERE username = $1',[username]).then(result => result.rows[0])
    return user
}
const doso = (value)=> {
    return pool.query("SELECT * FROM public.user_wishlist WHERE user_id = $1",[value]).then(result=> {return result.rows})
}

doso(3)

// registerInfo('farouk','farouk')
module.exports = {
    registerInfo, 
    getUser
}


