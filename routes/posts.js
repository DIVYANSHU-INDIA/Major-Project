const express = require('express');
const post_controller = require('../controller/post_controller')
const router = express.Router();

router.get('/',post_controller.post);

module.exports= router;