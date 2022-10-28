const bcrypt = require("bcrypt");
const athentificationModels = require("../models/authenticationModels.js")

const postRegister = async (req,res) => {
 const {username,password} = req.body;
   try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newRegisteredUser = await athentificationModels.registerInfo(username,hashedPassword);
        res.status(201).json(newRegisteredUser);
   } catch {
    res.send();
   }
}

module.exports = {
    postRegister,

}