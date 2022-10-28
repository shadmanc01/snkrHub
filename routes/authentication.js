const express = require('express');
const router = express.Router();
const athentificationControllers = require('../controllers/authenticationControllers.js');

// router.post("/login",athentificationControllers)
router.post("/register",athentificationControllers.postRegister)
router.post('/login', athentificationControllers.loginUser)

module.exports = router;
