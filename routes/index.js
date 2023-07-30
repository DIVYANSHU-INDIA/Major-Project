const express = require('express');
const home_controller = require('../controller/homecontroller')

const router = express.Router();
console.log('router loaded')

router.get('/',home_controller.home);
router.use('/users',require('./users'))
router.use('/posts',require('./posts'))


module.exports = router;
