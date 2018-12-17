const express = require('express');
const router = express.Router();
const auth = require('./auth.service');

router.post('/login', auth.login);

router.post('/logout', auth.logout);

module.exports = router;
