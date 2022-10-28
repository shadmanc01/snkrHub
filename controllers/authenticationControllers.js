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

const loginUser = async (req, res) => {
  try {
    const {username, password} = req.body
    const user = await athentificationModels.getUser(username)
    const login = await bcrypt.compare(password, user.password)
    if(login){
      res.status(200).send(user)
    } else{
      res.status(400).send('password is wrong')
    }
  } catch (error) {
    res.status(500).send("Server error")
  }
}

module.exports = {
    postRegister,
    loginUser
}