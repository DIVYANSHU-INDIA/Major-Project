const express = require('express');
const home_controller = require('../controller/homecontroller')
const router = express.Router();
console.log('router loaded')

router.get('/home',home_controller.home);
router.get('/profile',home_controller.profile);

module.exports = router;
