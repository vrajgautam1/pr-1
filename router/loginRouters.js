const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController.js');

router.get('/register', loginController.openRegistrationPage);
router.post('/register', loginController.registration);

router.get("/login", loginController.openLoginPage);
router.post("/login", loginController.login);


module.exports = router