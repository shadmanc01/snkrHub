const express = require('express');
const router = express.Router();
const authentificationControllers = require('../controllers/authenticationControllers.js');

// router.post("/login",athentificationControllers)
router.post("/register",authentificationControllers.postRegister)
router.post("/login",authentificationControllers.checkLogin)
module.exports = router;
