const express = require('express');
const router = express.Router();
const athentificationControllers = require('../controllers/authenticationControllers.js');

// router.post("/login",athentificationControllers)
router.post("/register",athentificationControllers.postRegister)

module.exports = router;
