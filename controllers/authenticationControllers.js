const bcrypt = require("bcrypt");
const authentificationModels = require("../models/authenticationModels.js")
const pool = require("../db.js");

const postRegister = async (req,res) => {
 const {username,password} = req.body


   try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const register = await authentificationModels.registerInfo(username,hashedPassword)
        res.json(register);
   } catch {
    res.send();
   }
}

const checkLogin = async (req,res) => {
    const {username, password} = req.body;
    console.log(username, password)
    const nameExist = await pool.query("SELECT * FROM public.users WHERE username = $1",[username]).then(result=> {return result.rows});
    if (nameExist.length < 1) res.status(400).json({message: "Cannot find User"});
    else {
        const user = nameExist[0];
        const passCheck = await bcrypt.compare(password, user.password);
        console.log(passCheck)
        if(!passCheck) res.status(400).json({message:"Password is incorrect"});
        else res.status(200).json({id: user.id})
    } 

    // try {
    //     if (await bcrypt.compare(password,nameExist.password)){
    //         const wishlist = await  pool.query("SELECT * FROM public.user_wishlist WHERE user_id = $1",[nameExist.id])
    //         const collection =  await pool.query("SELECT * FROM public.collections WHERE user_id = $1",[nameExist.id])
    //         const wishlistData = wishlist.rows
    //         const collectionData = collection.rows
    //         res.send({wishlistData,collectionData,userid: nameExist.id})
    //     }else {

    //     }
    // }catch {
    //     res.status(500).send()
    // }
}

module.exports = {
    postRegister,
    checkLogin,
}
