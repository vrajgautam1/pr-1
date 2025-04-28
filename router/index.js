const express = require('express');
const router = express.Router();
const loginRouter = require('./loginRouters.js');
const clientRouter = require('./clientRouter.js');

router.use(loginRouter);
router.use(clientRouter);

module.exports = router;