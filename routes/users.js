const express = require('express');

const user_controller = require('../controller/user_controller');

const router = express.Router();

router.get('/users',user_controller.profile);
console.log('router loaded')

module.exports= router;