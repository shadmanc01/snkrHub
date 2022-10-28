const bcrypt = require("bcrypt");
const authentificationModels = require("../models/authenticationModels.js")
const pool = require("../db.js");

const postRegister = async (req,res) => {
 const {username,password} = req.body;
   try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newRegisteredUser = await authentificationModels.registerInfo(username,hashedPassword);
        res.status(201).json(newRegisteredUser);
   } catch {
    res.send();
   }
}

const checkLogin = async (req,res) => {
    const {username,password} = req.body;
    const nameExist = await pool.query("SELECT * FROM users WHERE username = $1",[username]).then(result=> {return result.rows[0]});
    if (!nameExist){
        res.status(400).send("cannot find user")
    }
    try {
        if (await bcrypt.compare(password,nameExist.password)){
            const wishlist = await  pool.query("SELECT * FROM user_wishlist WHERE user_id = $1",[nameExist.id])
            const collection =  await pool.query("SELECT * FROM collections WHERE user_id = $1",[nameExist.id])
            const wishlistData = wishlist.rows
            const collectionData = collection.rows
            res.send({wishlistData,collectionData,userid: nameExist.id})
        }else {

        }
    }catch {
        res.status(500).send()
    }
}

module.exports = {
    postRegister,
    checkLogin,
}