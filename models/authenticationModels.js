const pool = require("../db.js")


const registerInfo = async (username, password) => {

    const newUser =  await pool.query("INSERT INTO public.users (username, password) VALUES($1, $2) RETURNING *",[username,password]).then(result => result.rows[0])
    return newUser
}


module.exports = {
    registerInfo, 

}


