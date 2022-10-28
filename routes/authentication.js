const express = require('express');
const router = express.Router();
const authentificationControllers = require('../controllers/authenticationControllers.js');

// router.post("/login",athentificationControllers)

router.post("/register",athentificationControllers.postRegister)
router.post('/login', athentificationControllers.loginUser)

module.exports = router;
