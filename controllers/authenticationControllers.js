const bcrypt = require("bcrypt");
const athentificationModels = require("../models/authenticationModels.js")

const postRegister = async (req,res) => {
 const {userId,password} = req.body
   try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const register = await athentificationModels.registerInfo(userId,hashedPassword)
        console.log(register,hashedPassword)
        res.send(register);
   } catch {
    res.send();
   }
}

module.exports = {
    postRegister,

}